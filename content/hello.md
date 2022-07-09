---
title: Home
description: Custom events in Vue 3
---

# Custom events in Vue 3

Install Postmark

```txt
yarn add postmark
```

Next add the following environment variables:

```txt
POSTMARK_API_TOKEN=
SMTP_HOST=smtp.postmarkapp.com
SMTP_PORT=25
SMTP_USER=
SMTP_PASSWORD=
SMTP_FROM=name <no-reply@name.com>
```

You can find the values for `POSTMARK_API_TOKEN`, `SMTP_USER` and `SMTP_PASSWORD` by visiting Servers → API Tokens from the Postmark dashboard.

To send next-auth emails using Postmark, update the `NextAuth` callback as follows:

```ts
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { Client } from 'postmark';

const postmarkClient = new Client(process.env.POSTMARK_API_TOKEN);

export default NextAuth({
  providers: [
    Providers.Email({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.SMTP_FROM,
      sendVerificationRequest: async ({ identifier, url, provider }) => {
        const result = await postmarkClient.sendEmailWithTemplate({
          TemplateId: 'TEMPLATE-ID',
          To: identifier,
          From: provider.from,
          TemplateModel: {
            //
          },
        });

        if (result.ErrorCode) {
          throw new Error(result.Message);
        }
      },
    }),
  ],
});
```
