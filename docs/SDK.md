# SDK — `@liqo/sdk`

The `@liqo/sdk` is the official TypeScript/JavaScript client for the Liqo API. It provides a typed, ergonomic surface for quotes, conversions, checkout, transactions, and **webhook verification**.

> The SDK is maintained in the [`liqo-sdk`](https://github.com/liqoprotocol/liqo-sdk) repository. This page is an integration overview; see the SDK repo's README for the complete, versioned reference.

## Installation

```bash
npm install @liqo/sdk
# or
pnpm add @liqo/sdk
```

## Initialization

```ts
import { Liqo } from "@liqo/sdk";

const liqo = new Liqo({
  apiKey: process.env.LIQO_API_KEY!,
  environment: "sandbox", // or "production"
});
```

Options include the environment, base URLs, request timeout, retry attempts, polling defaults, and an optional webhook secret.

## Quote

```ts
const quote = await liqo.quote({ from: "NGN", to: "XLM", amount: 50000 });
// → { estimatedOutput, fee, routingPath, expiresAt, ... }
```

## Convert / Pay

```ts
const result = await liqo.pay({
  from: "NGN",
  to: "XLM",
  amount: 50000,
  recipient: "G...WALLET",
});
// → { transactionId, status, estimatedOutput, fee }
```

## Checkout Sessions

```ts
const session = await liqo.checkout.sessions.create({
  amount: 50000,
  currency: "NGN",
  destinationAsset: "XLM",
  successUrl: "https://yourapp.com/success",
  cancelUrl: "https://yourapp.com/cancel",
});

const existing = await liqo.checkout.sessions.retrieve(token);
```

## Transactions

```ts
const tx = await liqo.transactions.retrieve("tx_84392");
```

## Webhook Verification

Always verify webhook signatures before trusting a payload:

```ts
import { Liqo } from "@liqo/sdk";

const event = liqo.verifyWebhook({
  payload: rawRequestBody,      // raw string
  signature: req.headers["liqo-signature"],
  secret: process.env.LIQO_WEBHOOK_SECRET!,
});
// event is a typed, verified webhook event
```

## Events & Observability

The client emits `request`, `response`, and `error` events you can subscribe to for logging and metrics, and exposes helpers such as `isTerminalStatus` for polling logic.

## Type Safety

Every parameter and response is typed. Import types directly:

```ts
import type { QuoteParams, QuoteResponse, PayParams, TransactionResponse } from "@liqo/sdk";
```

## Error Handling

```ts
import { LiqoApiError, LiqoSdkError } from "@liqo/sdk";

try {
  await liqo.pay({ /* … */ });
} catch (err) {
  if (err instanceof LiqoApiError) {
    // API returned an error: err.code, err.message, err.status
  } else if (err instanceof LiqoSdkError) {
    // client-side error (validation, network, timeout)
  }
}
```

## Related

- [API Overview](./API_OVERVIEW.md) · [Checkout](./CHECKOUT.md) · [Payment Flow](./PAYMENT_FLOW.md)
