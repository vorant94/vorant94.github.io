---
title: TypeScript Monorepos are painful
description: 'You know how they they "once you go black, you never go back"? I went through it with two things: TypeScript and Monopepos, but to set up them both simultaneously was... interesting to say the least. But in the end I now have a strong foundation for a projects of any size and scale, that I''d like to share with you'
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
