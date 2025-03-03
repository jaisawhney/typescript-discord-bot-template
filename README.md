# Installing the Bot

Make sure that you have [NodeJS](https://nodejs.org/en/download/) v16.11 or higher installed!

1) Clone this repo using `git clone https://github.com/jaisawhney/discord-bot-template.git your_folder_name`
2) Run `npm install` to install the packages
3) Rename `example.env` to `.env` and fill out the details with your id and token from the [Getting your Client ID and Token](#getting-your-client-id-and-token) section
4) Run using `npm run dev` or `npm run start` after building with `npm run buid`

### Using Drizzle

[Drizzle docs](https://orm.drizzle.team/docs/overview)
`npx drizzle-kit migrate`

### Deploying Slash Commands
To deploy the slash commands set `DEPLOY_SLASH_COMMANDS` in `.env` to `true` and restart the bot

## Getting your Client ID and Token

**Do not share your token with others!**
- While logged in to your account, head to the [Discord Developer Portal](https://discordapp.com/developers/applications/)
- Click the `New Application` button to name and create your application
- Write down or copy the `Application ID`. This is your client id!
- Next, click the `bot` tab on the lefthand sidebar. Here you can change your bot's username and profile image
- Under `Build-A-Bot` press `Reset Token` to get the token for your bot
- Lastly, update your `.env` file with the client and and token from the above steps