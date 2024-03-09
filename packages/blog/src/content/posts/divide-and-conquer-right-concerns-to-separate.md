---
title: 'Divide and conquer: right concerns to separate'
description: One of the core programming principles is separation of concerns. It guides programmers to separate applications into smaller units with distinct boundries. My view on it went over a couple of iterations and I'd like to share with you what it means for me now
tags:
  - node
  - design-principles
publishedAt: 2024-03-08
coverImage: ../attachments/divide-and-conquer-right-concerns-to-separate/cover.webp
coverImageAlt: triple spider man meme featuring React, Vue and Angular
---

### Historical reference (in less than 30 mins)

Historically it happened so the UI side of websites is split into 3 technologies: markup - HTML, styling - CSS and code - JS. This separation is one of the first things newcomers to web learn. I remember I was briefly introduced that it is possible to write both CSS and JS right inside HTML, but we quickly concluded it is a bad practice because of **separation of concerns**: markup, styling and code should be kept separate to keep stuff organized.

The first somewhat real code I wrote in the college was Ruby on Rails, which followed MVC architecture. The first job position I landed was front-end developer with Angular as a main framework, Angular follows MVVM architecture. Both MVC and MVVM can be fairly considered a classic examples of separation of concerns: models are separate from views, views are separate from controllers etc... Angular additionally keeps HTML/CSS/JS files of the same component separate by default, which aligns perfectly with what I initially learned.

At some point of time I get acquainted with Atomic Design Methodology, which also splits the components by their technical characteristic: if component is simple - it is "Atom", then based on increasing complexity there can be "Molecules", "Organisms", "Templates" and "Pages". Component with higher complexity can use components with lower complexity, but not otherwise. I concluded that it is the common way to structure modern design systems.

![Mandalorian telling This is The Way](../attachments/divide-and-conquer-right-concerns-to-separate/this-is-the-way.jpg)

From the other side the same Angular I talked earlier introduced me to "Folders-by-feature" principle in its official style-guide. Later I found that it has a little bit nicer name outside Angular ecosystem, it is called "Vertical Slice" (as opposed to "Horizontal Slice", that is followed by MVC and MVVM). According to it project files shouldn't be grouped by a some technical trait like keep all components together and keep all services together. But rather by its feature e.g. domain of use - all dashboard-related stuff should be kept together disregard of whether if it is components or services or whatever else. I really liked this approach and didn't notice the contradiction with what I already learned.

At some point of time I needed to dive deep into Angular Material source code and it was my first time digging into huge design system source code. It didn't follow the Atomic Design Methodology, but instead more or less grouped the files by their respective domain. I still didn't pay enough attention. After all Angular Material itself doesn't follow the official Angular style-guide, so it may branch itself out also from "industry standard" e.g. atomic methodology.

Last year I started to play around with mobile development. Since I have an iPhone and my wife has an Android, I needed to go with cross-platform solution. I chose to learn Flutter and Dart. There is no separate technology within it for markup, styling and actual code there. Everything is code, everything is Flutter. It felt wrong in the beginning, but with time I got a moment when I realize, that having a type-safe markup and styling is a huge boost for both productivity and developer experience[^1].

Recently I watched the [documentary about React](https://youtu.be/8pDqJVdNa44?si=LsjVUCznknGEjI7d). Also I use [Tailwind](https://tailwindcss.com/) for the blog you are reading right now. Both those technologies are accused of violating separation of concerns principle: React merges markup and code by leveraging JSX, Tailwind puts styling back into markup. But this time it didn't feel wrong. I finally succeeded to switch my mindset and understand why it is even better separation of concerns that what I learned initially.

### "Concern" is not technical term, but a logical one

The common way to explain OOP is using real-world analogy, in particular via biological classification of organisms:

IMAGE HERE

You have a most abstract class of `Animal`, which is distinct from `Plant`. Then you have two classes of `Mammal` and `Ave`, which are distinct from each other, but both **inherit** from `Animal`. Then you have a `Dog` class as a most narrow example of `Mammal` and a `Crow` as a most narrow example of `Ave`. This analogy allows developers to structure the code in DRY and well-organized manner. For example a common thing between all animals is that they can move, so the abstract class `Animal` can define abstract method `move`, then `Mammal` can implement this method considering that mammals walk and `Ave` can implement this method considering that birds fly.

Everything is nice and clear until we step out from programming courses and tip our toe into real world software especially frameworks. The entities I see there are: models, views, controllers, directives, components, services... WTF?! My kitten Nami doesn't consist of separate `CatService`, `CatController` and `CatComponent` entities spread thought the entire apartment. At this moment I gave up on the examples from learning courses and went along with entities of real world software. But now I'd like to stick with it, but with an asterisks.

There is a well-known issue with inheritance in OOP: each new bottom-level candidate might introduce a change that leads to a full refactor of the whole inheritance chain. In our example with `Mammal` and `Ave` we concluded that mammals walk, aves fly. But what about bats and penguins? We didn't think about cases where mammal can fly and bird cannot, why would we? The required bottom level classes of `Dog` and `Crow` fit well with our initial hierarchy, but apparently this hierarchy is not scalable or flexible enough to serve us in the future.

Here comes another programming buzzword - **composition**.

IMAGE HERE

Instead of defining the whole chain of different classes we define the bottom-level ones that we need (`Dog`, `Crow`) and set of traits or skills that we can attach to them (`Flyable`, `Walkable`). This way each new bottom level candidate (`Bat`, `Penguin`) can take traits that it needs or introduce a new one (`Swimmable`) without forcing existing stuff to be changed.

Now back to real-world programming and my lovely kitten. This way in the program I can have `Cat` entity as a directory that has some digital characteristics like `CatService`, `CatController` and `CatComponent` as files within this directory just like in real world it has physical characteristics of `Walkable`, `Talkable` and so on.

I consider this way of structuring the code is way more intuitive and easier to understand, but it comes with a very important mental switch under the hood: the concerns we are separating are not `CatComponent` from `CatController`, but `CatComponent` from `DogComponent`. The **tech categorization** comes after and only after **logical categorization**. On a low level it means markup, styling, code are not a concern since they are technical traits, component is a concern. On a high level it means components, directives, services are not a concern because of the same reason, the dashboard, settings, news feed are a concern. You first separate with vertical split, and only after it with horizontal split.

### Benefits of vertical split mindset

---

[^1]: Imagine you have LSP for the CSS shit like [text-overflow: ellipsis;](https://stackoverflow.com/questions/17779293/css-text-overflow-ellipsis-not-working) or [text-decoration: none;](https://stackoverflow.com/questions/1261955/inherited-text-decoration-style), that can instruct you which exact combination of rules you need to use to get what you want. Imagine you have LSP for the full list of only relevant CSS properties on a target HTML element without leaving your IDE. Imagine you don't need to wait for a good [Can I use](https://caniuse.com/) score for CSS3 variables nor go with SCSS to get reusable styling values. This is what you get when markup, styling and code are not separated.
