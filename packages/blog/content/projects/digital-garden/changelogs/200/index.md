---
publishedAt: 2024-04-20
project: digital-garden
version: 2.0.0
---

## Same look, new everything

![Static to SSR](./static-to-ssr.webp)

This one is **HUGE**: I fully rewrote the blog twice to get it to the point that I'm happy with - simple old-school webserver, that returns some HTML upon incoming request.

Prior to that it was written with Astro. Long story short I don't like file-based routing (`/routes` folder) and having yet another new file extension that is just JS with flavors (`.astro`). File-based routing breaks DDD and each new file extension requires to have a dedicated language server for the IDE. I may write a post on it at some point when I'm sure it would not be just a nagging.

#### First rewrite: NuxtJS

First I looked on NuxtJS. It sadly also has file-based routing, but the app can be split into domain-specific "sub-apps" with Nuxt Layers. It also has Nuxt Content module for working with Markdown files as a CMS. It can be built with SSG or SSR-mode and has a mature ecosystem of all sorts of integrations.

Everything looked perfect from the outside, but when I glued everything together it started to feel like serious overkill for a simple blog website and even worse than that I started to face issues that are only there because this solution is an overkill in the first place:

- while Astro Content allows to store post images alongside with post file itself in the same directory, Nuxt Content requires you to put all images in `public` directory outside of `content` one, which breaks DDD I wanted to achieve in the first place. There is a community-driven module that fixes it, but it makes Nuxt Codegen to hang indefinitely (Nuxt strongly rely on codegen, which is overkill to begin with)
- when I retrieve post slug from route params and then query for the post by it, it returns `Post | null` type. It is totally valid for SSR-mode, when request params can be whatever user inputs, but in case of SSG I have finite known-in-advance list of such, so there is no possible case when `null` can appear. But dev server runs only in SSR-mode, SSG-mode is achieved by just crawling all the app pages during build process.
- Vue as every SPA starts with a attaching the app to a specific element inside document body (`<div id="root"></div>` for example), so the only way to interact with document head is to use `useHead` composable or some similar solution. I'm not writing highly dynamic SPA, that forces me to use framework API's, I write a simple static blog and I want to interact with document head like I would interact writing just plain HTML: write directly what I need to write instead of update the head on route change via API

At this point of time I got really depressed about the project, because I didn't want to reinvent the wheel by creating yet another JS framework and all the available solutions on the market didn't fit my needs. I took a break and after it still decided to remove meta-framework level of abstraction and write static site generator by myself, but with one note.

![Fine, I'll do it myself](./fine-ill-do-it-myself.png)

#### Second rewrite: Fastify

I realised there is a difference between reinventing the wheel (building yet another site generator or framework) and starting from a scratch (building generator of one very specific site). After I spent started to spin up a generator I noticed I was technically extremely close to just regular NodeJS webserver. Since I anyway planned to introduce server at some point of time, I decided to do it now. Astro is dead, long live Fastify!
