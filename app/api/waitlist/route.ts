import { NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/waitlist/schema";

// In-memory dedupe store. Resets on every deploy/cold start and isn't
// shared across serverless instances — it's here so the duplicate-email
// path is real, not faked, while this is being built out. Before launch,
// swap this for actual persistence (Postgres/Supabase, or straight into
// an ESP like Resend Audiences / ConvertKit) behind the same shape below.
const seenEmails = new Set<string>();

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, code: "validation", message: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = waitlistSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        code: "validation",
        message: "Please check the submitted fields.",
        issues: parsed.error.issues,
      },
      { status: 400 }
    );
  }

  const email = parsed.data.workEmail.toLowerCase();

  try {
    if (seenEmails.has(email)) {
      return NextResponse.json(
        { ok: false, code: "duplicate", message: "This email is already on the waitlist." },
        { status: 409 }
      );
    }

    seenEmails.add(email);

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { ok: false, code: "server", message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
