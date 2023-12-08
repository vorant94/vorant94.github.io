---
title: TypeScript Monorepos are a mess
description: 'You know how they they "once you go black, you never go back"? I went through it with two things: TypeScript and Monopepos, but to set up them both simultaneously was... interesting to say the least. As a result in the end I now have a strong foundation for a projects of any size and scale, that I''d like to share with you the stuff I learned'
tags:
  - programming
  - typescript
  - node
publishedAt:
coverImage:
related:
isPinned:
---

### Why TypeScript?

So first things first: why TypeScript? A year ago the answer for me would be obvious. Like how else would you build something bigger than a calculator? Imagine having a function you wrote 3 months ago that accepts 5 arguments aaand... thats all you see right from the function signature. You don't know what are the arguments structures, you don't know what the return value structure, you know nothing, John Snow ©️. You have either to document it with JSDoc or pray the God you'll never forget the signature, which is more likely to happen than not. Another issue is refactoring: try to change the field on some data object throughout the whole project and be sure nothing is broken, I'll see you the next day.

But with all that said there was a real [TypeScript drama](https://www.youtube.com/watch?v=Bv3YhGku92w) in Twitter recently, a couple of huge NodeJS ecosystem projects dropped TypeScript because of trade-offs it comes with. The trade-offs can be summarized in the following two points:

- redundant type gymnastics
- compilation step boilerplate

And while for me personally the type gymnastics is not an issue since I didn't worked in serious library projects only in apps, the compilation step does feel strange: we write interpolated scripts although the code still needs to be compiled for some reason... In reality we can benefit from TypeScript without writing any of it at all. TypeScript language service can understand JSDoc annotations, so the IDE can highlight code that would throw error during build if it is annotated properly.

In reality this is how [Astro](https://astro.build), that this blog is written with, works: it doesn't compile TypeScript, it just drops off all of it during build. As a result it even decreases build time (build is still needed to bundle all sorts of assets and so on). But this approach has two drawbacks:

- you can't use any of TypeScript specific features like decorators
- you don't have a single entry point for errors

And once again while the first point is not really a problem for me since I would anyway prefer to avoid using TypeScript-only stuff, the second point - is painful. Lets say you change a field name, but the IDE didn't refactored it properly (Webstorm Astro plugin is far from being ideal). The code errored on home page you have opened in browser, but you won't see it fails in any other page until you run them one by one. It is really convenient to have a build step, that will "run" all your pages for you.

In conclusion I think the pain of build boilerplate pays off by avoiding pain of running though code manually, so the TypeScript it is.

### Why Monorepo?

### Monorepo options

npm workspaces vs yarn workspaces

- yarn focus
- workspace versioning
- traversal run

### Usual Polyrepo with TypeScript

- prod with node
- build with tsc
- watch with nodemon & ts-node

### Monorepo with TypeScript

workspace deps in package.json -> +prod
workspace reference in tsconfig.json -> +build  
watch?

### TypeScript tooling ecosystem

ts-node (tsc) esm problem, ts-node (tsc) references problem
tsx (esbuild) references problem, tsx (esbuild) decorators problem
tsx for unit tests
nodemon (with tsc as 2nd process) problem

### Keep it simple, stupid

built-in watch mode (with tsc as 2nd process) sulution

### What's next

client-side mess (webpack, rollup, esbuild)

### P.S.

yarn pnp problem with tsc
