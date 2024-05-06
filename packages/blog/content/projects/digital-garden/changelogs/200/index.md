---
publishedAt: 2024-04-20
project: digital-garden
version: 2.0.0
---

## Same look, new everything

![Static to SSR](./static-to-ssr.webp)

This one is **HUGE**: I fully rewrote the blog (even twice) to get it to the point that I'm happy with - simple old-school webserver, that generates some HTML upon incoming request.

Prior to that it was written with Astro. Long story short I'm not a fan of the file-based routing (`/routes` folder) and having yet another file extension that is just JS with flavors (`.astro`). File-based routing breaks DDD and each new file extension requires to have a dedicated language server for the IDE (WebStorm Astro plugin is far from being good). I may write a post on it at some point when I'm sure it wouldn't be just whining.

#### First rewrite: NuxtJS

![A huge and complex building standing on a small and fragile foundation](./dependencies.jpg)

First I looked on NuxtJS. It sadly also has file-based routing, but the app can be split into domain-specific "sub-apps" with Nuxt Layers. Underlying Vue still introduces its own file extension (`.vue`), but this one is old enough for IDE to have a good support. Just like Astro it has a plugin for working with Markdown files as a CMS, called Nuxt Content. It can be built with SSG or SSR-mode and has a mature ecosystem of all sorts of integrations.

Everything looked perfect from the outside, but when I glued everything together it started to feel like serious overkill, the mother of all overkills. Even worse than that I faced several issues that are there only because how the framework is build:

- Astro Content allows to store post images alongside with post files in the same directory, but Nuxt Content requires you to put all images in `public` directory outside of `content` one. This just breaks the DDD I wanted to achieve in the first place. There is a community-driven module that fixes it, but it makes Nuxt codegen to hang indefinitely (Nuxt strongly rely on codegen, which is also too magic and overengineering IMHO)
- when I retrieve post's slug from route params and then query for the post by it in the Nuxt Content, it returns `Post | null` type. It is totally valid for SSR-mode, when request params can be whatever user inputs, but in case of SSG I have finite known-in-advance list of slugs, so there is no possible case when `null` can appear. But dev server runs only in SSR-mode, so here it forces me to type gymnastics.
- Vue as every SPA starts by attaching the whole app to a specific element inside document body (`<div id="root"></div>` for example), so the only way to interact with document head is to use `useHead` composable or some similar solution. I'm not writing highly interactive SPA, that can justify usage of framework API's instead of interacting with HTML right away. I write a simple blog and want to have simple dev experience.

At this point of time I got really depressed about the project, because I didn't want to reinvent the wheel by creating yet another JS framework by myself, but all the available solutions on the market felt too fragile as the result of their complexity and too strict as the result of their conventions. I took a break and after it still decided to remove meta-framework level of abstraction and write static site generator by myself, but with an asterisk.

#### Second rewrite: Fastify

![Fine, I'll do it myself](./fine-ill-do-it-myself.png)

I realised there is a difference between reinventing the wheel (building yet another all-purpose site generator) and writing stuff from a scratch (building generator of exactly my site). After I started to spin up a generator I noticed I was _so close_ technically to a regular NodeJS webserver. Since I anyway planned to migrate to SSR at some point of time, I decided to do it now.

> Astro is dead, long live Fastify!

The only thing I was worried about is template engine choice. There are a lot of such that are alive since the era of MVC: [ejs](https://ejs.co/), [pug](https://pugjs.org/), [handlebars](https://handlebarsjs.com/), [mustache](https://mustache.github.io/), you name it. But I got used to how templates work in modern front-end frameworks: re-usage of code with components, scoped styles, build-time type-safety. It happens that all of these modern out-of-the-box features not so out-of-the-box in case of prev-gen technologies. Template engines I mentioned above have some kind of partials support (e.g. components), layouts, but the developer experience is way clankier.

And here I got my second truly insightful moment[^1] in the past year or two: `JSX` is **the** template engine and there is nothing prevents me to use it with SSR site without client hydration. I can just render the result to string and return it as response!.

Reusable components, type-safety, language server support and all of it without sending a bit of JS to the client! Cool, right? But what to do when there is need for interactivity like mobile navigation? I found [AlpineJS](https://alpinejs.dev/), a minimalistic JS framework exactly for this case. You can't write highly-interactive app with it because you will face some developer experience issues, but for my needs it is more than enough. When I would need to interact with the server besides full-page request/response cycles, I'll just go for [HTMX](https://htmx.org/). This way I have simple MPA and can sprinkle some bits of JS whenever I really need it.

There is no solution for scoped styles with my approach as of now, but since I use [TailwindCSS](https://tailwindcss.com/) 99% of styles are global anyway. For the 1% left I'm using [BEM](https://getbem.com/) naming and bundling everything together with [Vite](https://vitejs.dev/).

The server is Fastify instead of default NodeJS go-to Express simply because I think the former is better. Common, guys... Express still has no built-in support for async route handlers. It should be available in the next major update, that is how much already in the development? 5 years? More?

Also since I now have a "custom" Node app that isn't built on top of a meta-framework I needed to move away from Vercel. I found [Fly.io](https://fly.io/) that can deploy anything that can be dockerized. Before that I quickly tried to spin up a small DigitalOcean droplet and run Docker there, but the performance was awful. The reason is that containers are limited by how much memory was allocated by host machine to a Docker in the whole. So the request-response time took several minutes for the home page to load. Furthermore docker build couldn't be run on the smallest available droplet, I needed to build and publish images of server separately. I could also run server without Docker, but it felt dirty. So I stayed with SaaS world, just switched from less flexible Vercel to Fly.io

#### Less deps - less headache

![midwit meme about using all sorts of libraries compared to using just built-in stuff](./just-use-built-in-stuff.jpg)

Along the way with this rewrite I decreased the number of external dependencies as much as I could. I don't use third-party TS transpilers like `ts-node` or `tsx`. I started to use built-in NodeJS test runner instead of `Vitest`, built-in `--env-file` file support instead of `dotenv`, built-in `--watch` mode instead of `nodemon` or something. I don't use TS path aliases, since `tsc` by itself can't map those aliases back after the compilation and requires third-party solution. I moved back to `npm` from `yarn`.

All of it makes my developer experience a little bit worse, but I bet it will pay off in the long run. I have limited amount of time I can spend coding a website that almost nobody reads (as of now). I need to fill it with content first, not features. So I want the stablest project I can possibly get. Most of the dependencies I used up until now have regular releases at least once in a month. There was not a single time I upgraded my deps and felt like everything should be ok. Each time I was required to check stuff manually and often times file issues on GitHub. I don't want it anymore, I want to code other pet-projects and only write about them here.

## Outro

At last I feel like I have a good foundation that I can start from. Now that I took everything in my hands I have a lot of stuff I can do and learn by myself:

- add Websockets for live-reload browser on files changed alongside the server
- add cache control headers to decrease the load on the server
- optimize content files parser to avoid parsing the whole file, when only Frontmatter is needed
- dive deep to server-side caching with something like Redis
- add `lastModifiedAt` for content and make caches rely on it
- replace `giscus` with my own database and comments API

But I won't do it next, I will do it eventually when I feel like to. Now I want to code other stuff and only share it here. So stay tuned, the content will come!

---

[^1]: The first moment was about wrapping the whole NodeJS server to a single AWS Lambda to develop server locally as usual, but got lower serverless prices for production
