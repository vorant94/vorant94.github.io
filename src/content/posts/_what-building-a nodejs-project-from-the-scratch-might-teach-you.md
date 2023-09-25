---
title: What building a NodeJS project from the scratch might teach you
description: As of now I've been coding some pet-project for a couple of months. The main difference for me between regular job and a pet-project is a freedom of choice and no deadlines. While the job simply enough must be done, which affects the frameworks we as a developers use, the conventions we follow, the trade-offs we accept, the pet-projects don't limit us at all. We can use an alternative library to what we already know just for the sake of learning on the way, we can dive deep into GitHub issues of some third-party library bug instead of dealing with infinite workarounds and so on. So when I came up with an idea to write a little Telegram bot, I decided to use stuff that I'm aware of, but didn't quite work with it yet and now I want to share with you what I learned
tags:
  - node
  - programming
platforms: 
publishedAt: 
coverImage:
---
### The project overview

The project itself is a result of me getting overwhelmed with a lot of notifications from different local Telegram channels with event announcements (in order to keep my finger on the pulse of interesting things in my city I joined a bunch of those). The problem was that the admins post new events as soon as they receive info about it, but at this moment I don't know yet whether I want to participate or is the date not taken by some other activity. I thought it would be nice to mute all of those channels, collect and store all the events somewhere at the side so after I see that I have a free date and desire to do something I could just ask a question "What is going on in my city next weekend?". The goal can be formulated like this: I wanted to take back control of the way I receive the information without loss of the information itself.

The tech stack includes:
- ExpressJS server connected to Telegram bot, that can answer mentioned question
- PostgreSQL database to store collected events, so they can be easily queried after they are collected
- CommanderJS cli to scrap Telegram channels
- RedisMQ to store scrapped messages and pass them to the server for parsing and storing in the database
- AWS CDK infra to deploy all the stuff to the cloud

Since the project includes at least two standalone apps, e.g. server and cli, that will have a lot of shared code I decided to go with mono-repo architecture. And since it is a pet-project I decided to build stuff from the ground up, e.g. Yarn workspace instead of Nx workspace, ExpressJS instead of NestJS, CommanderJS instead of Oclif.

### Yarn workspace (modern) 

So first things first, the workspace. Previously I worker in the workspaces that were either bootstraped by other co-worker or by one of the many `npm create`-like CLI's. While I think this is the way that newcomers should start coding, at some point everybody needs to dive deeper and understand what and how is done under the hood of those magic commands.

The default package manager for NodeJS happens to be NPM and later I even found that nowadays it also has support for monorepo workspaces, but at the moment I didn't, so I went for Yarn. Yarn for me happened to be more than just a tool to manage several different `package.json`'s while having only one `node_module`, here are the features of the Yarn that I checked out:

- Offline mirror - caching of the installed packages in the source code of the app, so there is no need to go to remote registry to retrieve target packages more than once when you want to add a new package to workspace.
- Plug'n'Play - package installation strategy, which allows to skip generating the whole `node_moules` and load packages from the cache itself. In combination with Offline mirror this feature eliminates the need for running `yarn install` at all even upon switching between different branches.
- Plugins - as simple as that. If there is a lack of some functionality in the core Yarn project, it may be already implemented by somebody else via plugins. To be honest I think any modern development tool should provide support for custom plugins one way or another. As of now I installed only official plugins and here are they: `plugin-version`, `plugin-typescript`, `plugin-workspace-tools`.



### ES modules instead of CommonJS



### Choosing a dream ORM

https://codedamn.com/news/product/dont-use-prisma

https://www.prisma.io/dataguide/database-tools/top-nodejs-orms-query-builders-and-database-libraries

#### Competitors
- [sequelize](https://www.npmjs.com/package/sequelize) (1.2kk)
- [typeorm](https://www.npmjs.com/package/typeorm) (1.2kk)
- [knex](https://www.npmjs.com/package/knex) (1.3kk)
- [prisma](https://www.npmjs.com/package/prisma) (1.2kk)
- [mongoose](https://www.npmjs.com/package/mongoose) (1.8kk)

###### Prisma 

- Advantages
	- powerful codegen
	- multiple database support
	- schema migrations
	- built-in adminer (prisma studio)
- Disadvantages
	- no database subscriptions (https://github.com/prisma/prisma/discussions/2923)
		- prisma pulse early access (https://www.prisma.io/data-platform/pulse)
	- no custom type deserialization (https://github.com/prisma/prisma/issues/5039)
	- no data migrations (only via SQL) (https://github.com/prisma/prisma/discussions/10031)
	- no type-safe joins (only via raw queries) (https://github.com/prisma/prisma/issues/5184)

### Build and pack NodeJS server
