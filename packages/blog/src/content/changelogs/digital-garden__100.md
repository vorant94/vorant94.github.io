---
publishedAt: 2024-02-07
project: digital-garden
version: 1.0.0
---

## New Section: Projects

The main part of this update is a new Projects section. When I started the blog the main source for post ideas was my job, but since then I came up with a couple of ideas for my own pet-projects. At the moment I have 3 of those including the blog itself. I discover a lot of cool stuff while coding them, but most times I don't want to write a whole post about it. But from the other side I also don't want to leave the blog without content for too long.

So I came up to a conclusion to combine pet-project coding and blogging: I'll showcase the projects I work on and share my findings in the form of changelogs. Those changelogs aren't meant to be just formal list of changes since the last publications, but rather a stories of what, how and why I did in the scope of the project. So they should be as interesting to read as a regular post.

The current Posts section I'll use for less technical topics, I assume. Something like the [Divide and conquer](https://www.vorant94.io/posts/divide-and-conquer-right-concerns-to-separate) post I wrote recently, which is less of "how-to" guide with concrete 1-2-3 steps, but more like abstract thoughts on some question trying to start a discussion. Also this section is meant to be used for writings that totally not related to programming.

Also I'm not sure how properly integrate changelogs into RSS feed and how exactly show the most recent ones on the home page without introducing too much noice there.

## Mobile navigation

Since the number of navigation items in the header grows, I needed to come up with at least some sort of adaptive navigation for mobile. I stopped at classic burger-button and full-screen overlay with some small animations. And now I get it why back-end devs consider front-end ones not a real programmers...

#### Animations with CSS

Up until now I didn't have a lot of experience with animations. At the job it either wasn't prioritized or we simply used 3-rd party libraries with built-in animations. It changed when I started playing with Flutter and now when I needed to animate mobile navigation for the blog.

## utterances to giscus migration

My blog is SSG one, which means there is no backend behind it. Which means that from one side I don't have to pay money for a such, but from another - I needed to find a way to achieve some data persistence. The posts are `.md` files that are stored alongside the source code of the repo. But what about the comments?

Up until recently I used [utterances](https://utteranc.es/), a light-weight app, that can use GitHub issues as a comments platform. And while it did its job well, I found its twin-brother, [giscus](https://giscus.app/), and instantly migrated without hesitation.

Both services follow the same workflow:

- There is a component that needs to be properly configured and added to the page
- This component sends API requests to its respective server, which is hosted by app authors
- The server uses its GitHub app to add comments in configured GitHub repo (repo owner needs to authorize the app separately)

The main difference is that while utterances is based upon GitHub issues, giscus is based upon GitHub discussions. This gives a good separation between permanent threads (e.g. comments that are stored as discussions) and the ones that are meant to be closed (e.g. bugs/features/refactors that are stored as issues) without need for a separate repo. The UI of discussions is a little bit different, but it supports comment threads which is not the case with issues.

Also giscus supports reactions based upon the same GitHub discussions, which is really nice to have. And as a bonus point giscus has official adapters for most popular front-end frameworks and a couple more little features.
