# DarkDashboard
DarkDashboard free theme.
This is still a huge work in progress.

# Install

```
npm i dbd-dark-dashboard
```

# Docs

https://assistants.ga/dbd-docs/#/?id=capriham

# Look

![image1](https://imgur.com/1UvQHM5.png)
![image2](https://imgur.com/42Zo7es.png)
![image3](https://i.imgur.com/Whcy5pN.png)
![image4](https://imgur.com/AEUfVr6.png)


# Usage

[discord-dashboard](https://github.com/breftejk/Discord.js-Web-Dashboard) config:

```js
const DBD = require('discord-dashboard');
const DarkDashboard = require('dbd-dark-dashboard');

const Dashboard = new DBD.Dashboard({
...
        theme: DarkDashboard({
        information: {
            createdBy: "iMidnight",
            websiteTitle: "iMidnight",
            websiteName: "iMidnight",
            websiteUrl: "https:/www.imidnight.ml/",
            supporteMail: "support@imidnight.ml",
            imageFavicon: "https://www.imidnight.ml/assets/img/logo-circular.png",
            iconURL: 'https://www.imidnight.ml/assets/img/logo-circular.png',
        },
        invite: {
            redirectUri: 'http://localhost:3000/discord/callback',
            permissions: '8',
        },
        index: {
            card: {
                category: "iMidnight's Panel - The center of everything",
                title: `Welcome to the iMidnight discord where you can control the core features to the bot.`,
                image: "https://i.imgur.com/axnP93g.png",
                footer: "Footer"
            },
            information: {
                category: "Category",
                title: "Information",
                description: `This bot and panel is currently a work in progress so contact me if you find any issues on discord.`,
                footer: "Footer"
            },
            feeds: {
                category: "Category",
                title: "Information",
                description: `This bot and panel is currently a work in progress so contact me if you find any issues on discord.`,
                footer: "Footer"
            }
        },
        guilds: {
            cardTitle: "Guilds",
            cardDescription: "Here are all the guilds you currenly have permissions for:",
        },
        guildSettings: {
            cardTitle: "Guilds",
            cardDescription: "Here you can manage all the settings for your guild:",
        },
        commands: {
            categoryOne: {
                category: `Fun Commands`,
                subTitle: `All Fun commands`,
                list: [{
                    commandName: "Test command",
                    commandUsage: "prefix.test <arg> [op]",
                    commandDescription: "Lorem ipsum dolor sth",
                    commandAlias: "Alias"
                },
                {
                    commandName: "2nd command",
                    commandUsage: "oto.nd <arg> <arg2> [op]",
                    commandDescription: "Lorem ipsum dolor sth, arg sth arg2 stuff",
                    commandAlias: "Alias"
                },
                {
                    commandName: "Test command",
                    commandUsage: "prefix.test <arg> [op]",
                    commandDescription: "Lorem ipsum dolor sth",
                    commandAlias: "Alias"
                }
                ],
            },
            categoryTwo: {
                enabled: "true",
                category: `Moderation Commands`,
                subTitle: `All Moderation commands`,
                list: [{
                    commandName: "Test command",
                    commandUsage: "prefix.test <arg> [op]",
                    commandDescription: "Lorem ipsum dolor sth",
                    commandAlias: "Alias"
                },
                {
                    commandName: "2nd command",
                    commandUsage: "oto.nd <arg> <arg2> [op]",
                    commandDescription: "Lorem ipsum dolor sth, arg sth arg2 stuff",
                    commandAlias: "Alias"
                },
                {
                    commandName: "Test command",
                    commandUsage: "prefix.test <arg> [op]",
                    commandDescription: "Lorem ipsum dolor sth",
                    commandAlias: "Alias"
                }
                ],
            },
            categoryThree: {
                enabled: "true",
                category: `Miscellaneous Commands`,
                subTitle: `All Miscellaneous commands`,
                list: [{
                    commandName: "Test command",
                    commandUsage: "prefix.test <arg> [op]",
                    commandDescription: "Lorem ipsum dolor sth",
                    commandAlias: "Alias"
                },
                {
                    commandName: "2nd command",
                    commandUsage: "oto.nd <arg> <arg2> [op]",
                    commandDescription: "Lorem ipsum dolor sth, arg sth arg2 stuff",
                    commandAlias: "Alias"
                },
                {
                    commandName: "Test command",
                    commandUsage: "prefix.test <arg> [op]",
                    commandDescription: "Lorem ipsum dolor sth",
                    commandAlias: "Alias"
                }
                ],
            },
            categoryFour: {
                enabled: "false",
                category: `List`,
                subTitle: `All commands`,
                list: [],
            },
            categoryFive: {
                enabled: "false",
                category: `List`,
                subTitle: `All commands`,
                list: [],
            }
        }
    }),
...
});

Dashboard.init();
```
