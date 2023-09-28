---
title: What’s in my Raspberry Pi?
description: A couple of years ago I bought myself a Raspberry Pi, a small, energy-efficient, fully-functional computer that is often used for studying or hobbies. I am using it as a home server self-hosting some websites locally to have more control and flexibility over data and functionality of them. My Pi setup went through several iterations and is still evolving. I'd like to share with you the current state of it and future plans that I'm having. I think it really interesting in modern Everything-as-a-Service world to realize how many things we can still do by ourselves.
tags:
  - self-hosted
platforms:
publishedAt:
coverImage:
---

### Pi-hole

![Pi-Hole Logo](../attachments/what's-in-my-raspberry-pi/pi-hole-logo.png)

If you have ever searched anything on the Internet, you should be pissed of by the amount of ads modern websites have. It can literally be just a simple cooking recipe page, where after each step there is reserved space for a targeting ad

> step 1: cut the onion into small rings...
> do you want to grow back lost hair and have a new side-chick every week-end?!...
> step 2: grate carrots on a fine grater...
> 5 steps to become insanely rich today, Bill Gates didn't want you to know it!!...

Free mobile apps and games also have this decease, after all they have to somehow monetize themselves. If you get some service but do not pay with money, you most likely pay with your time or also with money but a little bit later. Marketing people do know their stuff well, so those ads are in motion and blinking all the time to attract your attention at any cost.

But for every action there is a reaction, so a long time ago ad-blocking software emerged. It cannot block internal website adds like pre-rolls of YouTube, or ad posts of Facebook, but it can block external ads like the examples from above. The way this software works is that it intercepts all of device outgoing internet traffic, goes over it with a huge block-list of known ad platforms and blocks every request if it happens to be directed to one of block-listed addresses. So usual request for example to get recipe steps passes, but the request to retrieve the ad info to show fails hence it is not shown.

One problem with those programs is that they should be running in the background all the time. And while on PC it is probably ok, but on laptops and phones we have batteries, that are drained more and more with each background process. Then you have install it on each and every of your devices that you'd like to avoid ads. Separate app for laptop, separate app for phone. Most likely those apps are written by different developers, so the quality of the software probably varies. And I'm not even mention that stores like Google Play or App Store really don't like those kinda apps, since they decrease their ad income.

So one of the most popular apps that is meant to be used with Raspberry Pi is a [Pi-hole](https://pi-hole.net/), network-wide ad blocker. After you configure it (which is not so trivial unfortunately), it still runs all the time, but it runs on energy-efficient computer, and it can intercept all the traffic your whole Wi-Fi network, so you don't have to do anything with other devices. But obviously the moment you go outside your home, Wi-Fi is lost and ads are back, so each solution has its own trade-offs.

...

### FreshRSS + RSSHub

![FreshRSS Logo](../attachments/what's-in-my-raspberry-pi/freshrss-logo.svg)

Back in the old days when there were no social networks if you wanted to have blog, you had to have one, not just to create a profile in some platform, but to maintain a fully-featured website (like the one you are reading right now). From the author perspective entry level for blogging in such environment was a much higher than what we have right now, but he/she had total freedom and ownership of his/her content. From the reader perspective entry point also was a little bit tricky: in order to build nice and convenient post feed with updates from all of your subscriptions you had to come up with something, nobody wanted manually go over a list of sites on a regular basis. So people invented RSS protocol.

RSS protocol is sort of standard contract between tools that blog authors use to build their blog and apps that readers can use to consume content. For example my blog also has RSS feed: you can navigate to [https://vorant94.io/](https://vorant94.io) and see human-friendly list of recent posts, but you also can navigate to [https://vorant94.io/rss.xml](https://vorant94.io/rss.xml) to get the same list of posts that can be easily passed to one of many RSS aggregators. Combine and render together dozens of such robot-friendly blogs in a timeline manner and you'll get RSS feed. App that you would use to read such a feed is a RSS reader. FreshRSS is exactly all of the above, it is RSS aggregator, reader and feed combined in one

...

### Bitwarden / Vaultwarden

![Bitwarden Logo](../attachments/what's-in-my-raspberry-pi/bitwarden-logo.svg)

There are multiple options to store your passwords nowadays. I suppose that the default option for an average modern user is either to have only one password for everything or to store all of the passwords in a browser. The major problem of having only one password is that not all your internet accounts are equally protected, but most likely you use the same email address everywhere. A common way of hacking user email account like Gmail, which has strong protection, is to hack some small less-protected buggy site, find there an account with the targeted email address and try to use this password in Gmail, so it's simply not safe. The built-in browsers password manager for me means vendor-lock since I swap browsers from time to time. Thankfully there are plenty of solutions for it outside of major IT monopolies.

> **Whining minute**: modern browsers IMHO should become way more modular, they should not do all at once, they should allow to integrate all at once.

At first many years ago I migrated to 1Password and it was really nice experience. It is standalone subscription-based password manager that exceptionally well integrates itself into both MacOS and iOS. It is even frequently promoted by Apple when they want to demonstrate the amount of apps of their ecosystem. The main problem for me with it was it's monetization approach. While subscription is not active the user can't create new passwords or autofill existing ones. He/she still can view already created passwords and copy-paste them manually, without those capabilities 1Password would be easy no-go for me, but still... Let's be clear, how many new accounts do you need to create each month? I don't do a much. Payment for autofill is just artificial boundary, so what should I pay for on a monthly basis? For the storing the data on their cloud infrastructure? I doubt it cost what they ask for.

So once I bought Raspberry Pi I found a good alternative for 1Password, it is called Bitwarden. From the functionality that I personally use they are pretty equal, there is no such a thing that I used in 1Password, but is in lack in Bitwarden. From the design perspective 1Password is indeed prettier, but Bitwarden is free when you self-host it. So instead of paying for storing my passwords in the cloud, I'm running my own instance and connecting iOS app and MacOS browser extensions to it. As with all other my Pi apps there is a trade-off of being unable to connect to server outside the home. But thankfully all of the Bitwarden clients I used are offline-first: once they synced their data with server, user can disconnect from it, all the synced data is still accessible within the client app.

Only one additional thing to mention is that deployment of Bitwarden server itself can be a little bit hard thing to do from what I remember, there are several different things you need to configure and so on. But since the server is open-source, there is already a solution to it. One of the good people out there implemented a lightweight alternative called Vaultwarden that is fully compatible with official Bitwarden clients, so this is what I use in practice.

One additional bonus to this solution that is worth mentioning is security. The thing is that regardless of the size of company, regardless of how much money they spend to be as secure as possible, once the thing is in the cloud you cannot be 100% protected from malicious attacks. Even if data protected in such a manner that even leaked dataset actually don't benefit hackers at all, still making attack surface as small as possible is the best security strategy. And what can be more secure than hosting the server inside your local network without any access to the Internet? So I suppose Bitwarden / Vaultwarden setup is not only cheaper that everything I used before, but also more secure by definition.

### Firefly III

### Nextcloud

### ArchiveBox

### Jellyfin

### Heimdall

### Tech setup

I have a [Raspberry Pi 4 Model B](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/) with 8 Gb of RAM. It is wired connected to [Asus RT-AX55](https://www.asus.com/networking-iot-servers/wifi-routers/all-series/rt-ax55/) Wi-Fi router, which among other things allows to configure your own custom DNS-server

> Domain Name System (DNS) in short words is service that provides configuration between computer real physical addresses in the network (like 8.8.8.8) and human-readable names that we all using (like google.com)

As of now I have there [Manjaro Linux OS](https://manjaro.org/)

docker compose with nginx reverse proxy
