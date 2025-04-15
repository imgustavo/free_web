# Obfuscating Bot Token and Chat ID

To run this application, you need to set the `BOT_TOKEN` and `CHAT_ID` environment variables.

## Setting Environment Variables

You can set these variables in your terminal before running the application:

```bash
export BOT_TOKEN="YOUR_BOT_TOKEN"
export CHAT_ID="YOUR_CHAT_ID"
```

Replace `YOUR_BOT_TOKEN` and `YOUR_CHAT_ID` with your actual bot token and chat ID.

Alternatively, you can create a `.env` file in the project root with the following content:

```
BOT_TOKEN=YOUR_BOT_TOKEN
CHAT_ID=YOUR_CHAT_ID
```

Then, use a library like `dotenv` to load these variables into your application.
