import type { WaitlistFormValues } from "@/lib/waitlist/schema";

export type WaitlistApiErrorCode =
  | "validation"
  | "duplicate"
  | "server"
  | "network"
  | "timeout"
  | "unknown";

const ERROR_MESSAGES: Record<WaitlistApiErrorCode, string> = {
  validation: "Please check the highlighted fields and try again.",
  duplicate: "This email is already on the waitlist.",
  server: "Something went wrong on our end. Please try again shortly.",
  network: "We couldn't reach the server. Check your connection and try again.",
  timeout: "That took too long. Please try again.",
  unknown: "Something unexpected happened. Please try again.",
};

export class WaitlistApiError extends Error {
  code: WaitlistApiErrorCode;

  constructor(code: WaitlistApiErrorCode, message?: string) {
    super(message ?? ERROR_MESSAGES[code]);
    this.name = "WaitlistApiError";
    this.code = code;
  }
}

const REQUEST_TIMEOUT_MS = 10_000;

/** Reusable API client for the waitlist endpoint. Keeps fetch/error-mapping
 * logic out of components — swap the implementation here if the waitlist
 * ever moves behind a different service (e.g. the liqo-platform API). */
export async function submitToWaitlist(values: WaitlistFormValues): Promise<void> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  let response: Response;
  try {
    response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
      signal: controller.signal,
    });
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      throw new WaitlistApiError("timeout");
    }
    throw new WaitlistApiError("network");
  } finally {
    clearTimeout(timeout);
  }

  if (response.ok) return;

  if (response.status === 409) throw new WaitlistApiError("duplicate");
  if (response.status === 400) throw new WaitlistApiError("validation");
  if (response.status >= 500) throw new WaitlistApiError("server");
  throw new WaitlistApiError("unknown");
}
