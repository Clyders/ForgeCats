# ForgeCats

> ForgeCats, the best way to meow with your ForgeScript bot.

## Example (JavaScript)
```ts
const { ForgeCats } = require("@tryfroge/forge.cats");
const { ForgeClient } = require("@tryforge/forgescript");

const client = new ForgeClient({
    intents: [
        "Guilds",
        "MessageContent",
        "GuildMessages",
    ],
    events: [],
    mobile: true,
    useInviteSystem: true,
    prefixes: ["!", "<@$botID>"],
    extensions: [
        new ForgeCats()
    ],
})

client.login("bot token")
```