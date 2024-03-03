---
title: Thoughts on modern framework features
description: Many modern JS frameworks are tend towards a couple of common cross-framework features. Even the Angular, that stood aside all the time, is catching up to this unification trend. Some are happy about this Angu-React era, some are not. I'd like to discuss some items from this new framework gentleman's set
tags:
  - node
publishedAt: 2024-03-02
coverImage: ../attachments/thoughts-on-modern-framework-features/cover.webp
coverImageAlt: triple spider man meme featuring React, Vue and Angular
---

### Single File Components (aka SFC)

Single File Components is a feature that allows developers to combine the markup, styles and code of the component in a single file. As a result none of existing file formats like `.html`, `.css` or `.js` can't be used (almost). We can write JS and CSS right inside HTML, but then HTML would have to provide us with a way of splitting the file into reusable chunks as well as all other features that developers expect from programming language.

JSX aims to solve this issue by combining JS and HTML, but it lacks CSS. Hence we have all sorts of CSS-in-JS libraries like [JSS](https://cssinjs.org/?v=v10.10.0), [Styled Components](https://styled-components.com/) and [StyleX](https://stylexjs.com/) or we can utilize [CSS Modules](https://github.com/css-modules/css-modules) if our bundler supports it. This is a common case with React and React-like UI frameworks. Syntax of JSX between different frameworks can differ, but its not that crucial, it's something like SQL with all its dialects. After all for the end-user and for the tooling it can be considered as single file format.

But then we come to non React-based frameworks and what do we have here? `.vue`, `.svelte`, `.astro`... Even inside Angular ecosystem meta-framework Analog [considered](https://github.com/analogjs/analog/discussions/824) `.ng` SFC format. I really have a feeling that it is illegal today to create a new front-end framework without coming up with yet another new file extension. You know how GitHub makes colorful progress bar based on the programming languages used in the repo? Theoretically you can stuck upon the full LGBT progress bar that actually means simply "JavaScript".

Taste aside, I have two issues with it

###### Tooling support

Even though framework authors provide IDE and bundler plugins, they are still only humans. Take as example Astro framework: it has an official VS Code plugin that I suppose has proper syntax highlight and so on, but the WebStorm one isn't that good and have known bugs (this is the reason why I write all the reusable components of this site with React). You simply cannot foresee all the environments, that users will use your framework in. The more you stick to industry standards including file formats more likely end-user even won't need any additional software inside his/her IDE.

If I need to install a separate plugin for each library or framework I want to play with, I'm not happy about it...

###### Combining markup, styles and code you divide code from code

Lets say we have Astro or Vue component, that internally define some reusable type, and we want to use this interface in another place. Can we export something from SFC, that is not component? I haven't found a way to do it yet. Bundler plugins allows us to export component itself from SFC formats and this way we can use the component programmatically, but thats it.

The common Angular example for this case is a component that is meant to be used within Angular Material Dialog. I like to define its `MAT_DATA` type right there alongside the component class, because the component and its `MAT_DATA` interface are meant to be a single unit. SFC gives the developer power to treat `.html`, `.css` and `.js` as single unit, but as a result puts boundaries right in the middle of `.js`. E.g. separate `.ts` file should be created for cases like Angular Material Dialog components to store there other code that isn't internal part of component.

###### Ok, so what's the catch with SFC after all?

### File-based routing

### Reactive primitives
