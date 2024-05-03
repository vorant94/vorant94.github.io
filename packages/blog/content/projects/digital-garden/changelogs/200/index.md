---
publishedAt: 2024-04-20
project: digital-garden
version: 2.0.0
---

## Same look, new everything

![Static to SSR](./static-to-ssr.webp)

This one is **HUGE**: I fully rewrote the blog twice to get it to the point that I'm happy with - simple old-school webserver, that returns some HTML upon incoming request.

Prior to that it was written with Astro. Long story short I don't like file-based routing (`/routes` folder) and having yet another new file extension that is just JS with flavors (`.astro`). File-based routing breaks DDD and each new file extension requires to have a dedicated language server for the IDE. I may write a post on it at some point when I'm sure it would not be just a whining.

#### First rewrite: NuxtJS

First I looked on NuxtJS. It sadly also has file-based routing, but the app can be split into domain-specific "sub-apps" with Nuxt Layers. Just like Astro it has module for working with Markdown files as a CMS, called Nuxt Content. It can be built with SSG or SSR-mode and has a mature ecosystem of all sorts of integrations.

Everything looked perfect from the outside, but when I glued everything together it started to feel like serious overkill for a simple blog website and even worse than that I started to face issues that are only there because it is indeed overkill:

- while Astro Content allows to store post images alongside with post file itself in the same directory, Nuxt Content requires you to put all images in `public` directory outside of `content` one, which breaks DDD I wanted to achieve in the first place. There is a community-driven module that fixes it, but it makes Nuxt Codegen to hang indefinitely (Nuxt strongly rely on codegen, which is overkill to begin with)
- when I retrieve post slug from route params and then query for the post by it, it returns `Post | null` type. It is totally valid for SSR-mode, when request params can be whatever user inputs, but in case of SSG I have finite known-in-advance list of such, so there is no possible case when `null` can appear. But dev server runs only in SSR-mode, SSG-mode is achieved by just crawling all the app pages during build process.
- Vue as every SPA starts with a attaching the app to a specific element inside document body (`<div id="root"></div>` for example), so the only way to interact with document head is to use `useHead` composable or some similar solution. I'm not writing highly dynamic SPA, that forces me to use framework API's, I write a simple static blog and I want to interact with document head like I would interact writing just plain HTML: write directly what I need to write instead of update the head on route change via API

At this point of time I got really depressed about the project, because I didn't want to reinvent the wheel by creating yet another JS framework, but all the available solutions on the market didn't fit my needs. I took a break and after it still decided to remove meta-framework level of abstraction and write static site generator by myself, but with one note.

![Fine, I'll do it myself](./fine-ill-do-it-myself.png)

#### Second rewrite: Fastify

I realised there is a difference between reinventing the wheel (building yet another site generator or framework) and starting from a scratch (building generator of one very specific site). After I started to spin up a generator I noticed I was technically extremely close to just regular NodeJS webserver. Since I anyway planned to introduce server at some point of time, I decided to do it now. Astro is dead, long live Fastify!

The only thing I was worried about is template engine choice. There are a lot of such that are alive since the era of MVC: `ejs`, `pug`, `handlebars`, `mustache` etc. But I got used to how templates work in modern front-end frameworks: re-usage with components, scoped styles, build-time type-safety. It happens that all of this modern out-of-the-box features not so out-of-the-box in case of prev-gen technologies. Template engines I mentioned above have some kind of partials support (e.g. components), layouts, but the developer experience is way clankier.

And here I got my second truly insight moment in the past year or two: `JSX` is **the** template engine and there is nothing prevents me to use it on server-side only, render the result to string and return it as response! (The first one was about wrapping the whole NodeJS server to a single AWS Lambda to develop server locally as usual, but got lower serverless prices for production).

Reusable components, type-safety, language server support and all of it without sending a bit of JS to the client, but what to do when there is need for interactivity? I found `AlpineJS`, a minimalistic JS framework exactly for this case. You can't write highly-interactive app with it because you will face the same developer experience issues like with template engines, but for my needs it is more than enough. When I would need to interact with the server besides full-page request/response cycles, I'll just go for `HTMX`.

The there is no solution for scoped styles as of now, but since I use `TailwindCSS` 99% of styles are global anyway. For the 1% left I'm using BEM-naming convention and bundling everything together with `Vite`.

The server is `Fastify` instead of default go-to `Express` simply because I think the former is better. Common, guys, `Express` still has no built-in support for async route handlers. It should be available in the next major update, that how much already in the development? 5 years? More?

Also since I now have a "custom" Node app that is not built on top of a meta-framework I needed to move away from Vercel. I found `Fly.io` that can deploy anything that can be dockerized. I tried to spin up a small DigitalOcean droplet and run Docker there, but the performance was awful. The reason was that dockerized app is limited by how much memory was allocated by host machine to a Docker in hte whole. I could run server without Docker, but it felt dirty. So I stayed with SaaS, just switched from less flexible Vercel to Fly.io

#### Less deps - less headache

Along the way with this rewrite I decreased the number of external dependencies as much as I could. I don't use third-party TS transpilers like `ts-node` or `tsx`. I started to use built-in `NodeJS` test runner instead of `Vitest`, built-in `--env-file` file support instead of `dotenv`, built-in `--watch` mode instead of `nodemon` or something. I don't use TS path aliases, since `tsc` by itself can't map those aliases back after the compilation and requires third-party solution. I moved back to `npm` from `yarn`.

All of it makes my developer experience a little bit worse, but I bet it will pay off in the long run. I have limited amount of time I can spend coding the website that almost nobody reads (as of now). I need to fill it with content first, not features. So I want the stablest project I can possibly get. Most of the dependencies I used up until now have regular releases at least once in month. There was not a single time I upgraded my deps and felt like everything should be ok. Each time I was required to check stuff manually and often times file issues on GitHub. I don't want it anymore, I want to code other pet-projects and only write about them here.

## Outro

At last I feel like I have a good foundation that I can start from. Now that I took everything in my hands I have a lot of stuff I can do and learn by myself:

- add Websockets for live-reload browser on files changed alongside the server
- add cache control headers to decrease the load on the server
- optimize content files parser to avoid parsing the whole file, when only Frontmatter is needed
- dive deep to server-side caching with something like Redis
- add `lastModifiedAt` for content and make caches rely on it
- replace `giscus` with my own database and comments API

But I won't do it next, I will do it eventually when I feel like to. Now I want to code and tell about something else, stay tuned!
