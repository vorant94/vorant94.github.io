---
title: What’s in my Raspberry Pi?
description: A couple of years ago I bought myself a Raspberry Pi, a small, energy-efficient, fully-functional computer that is often used for studying or hobbies. I am using it as a home server self-hosting some websites locally to have more control and flexibility over data and functionality of them. My Pi setup went through several iterations and is still evolving. I'd like to share with you the current state of it and future plans that I'm having. I think it really interesting in modern Everything-as-a-Service world to realize how many things we can still do by ourselves.
tags:
  - self-hosted
  - tech
  - raspberry-pi
platforms:
publishedAt:
coverImage: ../attachments/what's-in-my-raspberry-pi/cover.jpeg
---

### Pi-hole

![Pi-Hole Logo](../attachments/what's-in-my-raspberry-pi/pi-hole-logo.png)

###### Ad-blocker

If you have ever searched anything on the Internet, you should be pissed of by the amount of ads modern websites have. It literally can be just a simple cooking recipe page, where after each step there is reserved placeholder for a targeting ad:

> step 1: cut the onion into small rings...
> DO YOU WANT TO GROW BACK LOST HAIR AND HAVE A NEW SIDE-CHICK EVERY WEEK-END?!...
> step 2: grate carrots on a fine grater...
> 5 STEPS TO BECOME INSANELY RICH TODAY, BILL GATES DIDN'T WANT YOU TO KNOW IT!!...

Free mobile apps and games also have this decease, after all they need somehow to monetize themselves. If you get some service but do not pay for it with money, you most likely pay with your time or still with money but later. Marketing people do know their stuff well, so those ads are in motion and blinking all the time to attract your attention at any cost.

But for every action there is a reaction, so a long time ago ad-blocking software emerged. It cannot block internal website adds like pre-rolls of YouTube, or ad posts of Facebook, but it can block external ads like the recipe page example. The way this software works is that it intercepts all of the outgoing internet traffic, goes over it with a huge block-list of a known ad platforms and blocks every request if it happens to be directed to one of block-listed addresses. So usual request for example to get recipe steps passes, but the request to retrieve the ad info to show fails hence it is not shown.

One problem with those programs is that they should be running in the background all the time. And while on PC it is probably ok, but on laptops and phones we have batteries, that are drained more and more with each background process. Then you have to install it on each and every of your devices that you'd like to avoid ads. Separate app for laptop, separate app for phone. Most likely those apps are written by different developers, so the quality of the software probably varies. And I'm not even mentioning that stores like Google Play or App Store really don't like those kinda apps, since they decrease their ad income.

So one of the most popular apps that is meant to be used with Raspberry Pi is a [Pi-hole](https://pi-hole.net/), network-wide ad blocker. After you configure it (to be honest it can be tricky) it blocks the ads across the whole home network. It still runs all the time, but it runs on one energy-efficient computer. Obviously the moment you go outside your home, Wi-Fi is lost and ads are back, so each solution has its own trade-offs. Once in a while I install some free games on my iPhone and I got used to Pi-hole so much, that each time I play these games outside home I'm shocked by the amount of ads they have... How people without ad-blocker can even play them, when almost after each restart player has to watch 10-20 seconds of ads, find and click on smallest possible 'x' button to close it and only after all of this he/she is permitted to continue the session? It is mystery for me...

###### Custom DNS

Another use for Pi-hole is that it can be used as a custom DNS. DNS stands for Domain Name System. Each and every device that is connected to the network of any size (including Internet) receives an IP address, that it can be accessed by. Majority of the devices consume content like our phones when we watch YouTube, but some of them have to serve the content so it can be consumed (for example one of the YouTube addresses is `208.0.0.65`). But almost nobody actually using real IP addresses to access devices, we are using human-friendly labels like `https://youtube.com`. The system that can map a label to an actual address is called DNS and the company that offers service for registering new records in such a system is called domain register.

Now back to local home network. My apps are hosted on Raspberry-Pi, which is connected to Wi-Fi, so it can be accessed from my laptop or phone. But by default it is accessible only by its IP address (something like `192.168.xx.xx`), which is not perfect. A better solution would be to access app by its name (e.g. something like `https://pi.hole/`). There is no need to spend money on a domain record, since I didn't want to host my Pi outside of home Wi-Fi, so domain register won't help here. It is also possible to update laptop inner records since every device also has its own set of records, but then such list of records should be maintained on each and every device that is going to use Pi, which is a headache... And here comes the Pi-hole. Since it intercepts all the traffic it can also resolve domain names just like domain register, so all of the devices can benefit from apps that are hosted in Pi without need to handle real IP addresses.

###### Bonus

I must say that setting up and configuring Pi-hole was one of the hardest things to host since it involves not only deployment of app itself, but adjusting the router and toggling some stuff on devices (to enable secure connection even though is should be optional for inner home network stuff). But in the end it pays for itself: it is one-time time investment, that afterwards passively benefits all of household.

The trade-off having it enabled only in the scope of home network is actually can be somewhat avoided. In my case my Asus RT-AX55 allows in couple of click set up home VPN server. VPN or Virtual Private Network, basically means that while the device is physically connected to some network, it can be configured to behave like it is connected to other network. It is widely adopted technology in modern world mostly to avoid country specific network restrictions. Like access the site that is blocked in your country, you connect to VPN that is located in other country and you can access it like you are outside of your country (unless VPN provider itself doesn't block this site by the order of country governance). So if I want I can block any ads and access my self-hosted apps outside of home just by connecting to VPN.

### FreshRSS + RSSHub + Reeder 5

![FreshRSS Logo](../attachments/what's-in-my-raspberry-pi/freshrss-logo.svg)

Back in the old days when there were no social networks if you wanted to have blog, you had to have one, not just to create a profile in some platform, but to maintain a fully-featured website (like the one you are reading right now). From the author perspective entry level for blogging in such environment was a much higher, but he/she had total freedom and more important ownership of his/her content. From the reader perspective entry point also was a little bit tricky: in order to build nice and convenient post feed with updates from all of your subscriptions you had to come up with something, nobody wanted to manually go over a list of sites on a regular basis. So people invented [RSS protocol](https://en.wikipedia.org/wiki/RSS).

RSS protocol is sort of standard contract between tools that blog authors use to distribute their content and apps that readers use to consume this content. For example this blog also has RSS feed: you can navigate to [https://vorant94.io/](https://vorant94.io) and see human-friendly list of recent posts, but you also can navigate to [https://vorant94.io/rss.xml](https://vorant94.io/rss.xml) to get the same list of posts that can be easily passed to one of many RSS aggregators. Combine and render together dozens of such robot-friendly blogs in a single timeline and you'll get RSS feed. App that you would use to read such a feed is a RSS reader. [FreshRSS](https://freshrss.org/index.html) is exactly all of the above, it is RSS aggregator, reader and feed combined in one.

> **Side note**: any podcast you are listening from time to time to is just an RSS-feed wrapped by a pretty app with an interface adapted for consuming audio content. So RSS is not just about text content

With all that being said FreshRSS was one of the first apps that I self-hosted and it went through a lot of iterations on how exactly I'm using it. For a couple of times I tried to centralise there all of the content I consume online since this way I could avoid annoying algorithmic recommendation feeds. I wanted "one feed to rule them all" ©. But not all of the content platforms provide built-in RSS feed. YouTube does, Medium does, but Telegram, Twitter and Facebook don't. So I googled what can be a solution and found [RSSHub](https://docs.rsshub.app/), which basically a self-hosted web scrapper that can generate RSS feed pretty much from everything. So in case a platform supports RSS I could just add it to FreshRSS as is, and it case the platform doesn't support it, I could add it by adding RSSHub, that points to the platform.

This setup gave me one unified feed with all of my subscriptions: small personal website blogs, Medium profiles, YouTube channels, Twitter accounts and Telegram channels. I didn't succeeded on generating the feed from Facebook stuff, since its security policies required additional configuration for RSSHub, which I didn't want to dive into. Getting the feed from Facebook user accounts (not just public pages) is impossible at all from what I understood, so I just skipped it.

FreshRSS by itself provides web interface to read / manage your feed. They even support UI theme customization, but I wanter more native experience. So I found [Reeder 5](https://reederapp.com/), exceptionally well designed RSS feed reader specifically for iOS/MacOS. It supports wide range of RSS aggregators to read feed from there, which also included self-hosted FreshRSS instance

> **Side note**: recently I read a good [article](https://borism.medium.com/the-death-of-three-apps-72f3c0e802ab) about a couple of third-party clients for Twitter, Wikipedia and Reddit. All of them are now dead because of changes in the terms of usage of their respective services. And it is really sad because they showed what the UI can be if it is done separately from the main service. Twitter, Wikipedia or Reddit don't make money directly from their official apps, so their UI is about good enough quality. But paid third-party apps must give something above and beyond compared to official free apps, so they are forced to come up with a better solution. It shows how sometimes segregation of some system components (like service itself and app for it) can lead to overall better outcome for an end user

...

### Bitwarden / Vaultwarden

![Bitwarden Logo](../attachments/what's-in-my-raspberry-pi/bitwarden-logo.svg)

There are multiple options to store your passwords nowadays. I suppose that the default option for an average modern user is either to have only one password for everything or to store all of the passwords in a browser since it constantly suggests it. The major problem of having only one password is that not all your internet accounts are equally protected. Most likely you also use the same email address everywhere. A common way of hacking user email account like Gmail, which has strong protection, is to hack some small less-protected buggy site, find there an account with the targeted email address and try to use this password in Gmail. After the hacker has access to your email account it can reset any of your passwords on other sites by using "Forgot password?" functionality. And now all of your internet accounts alongside with credit card information are hacked. The built-in browser password manager is a better choice, but for me it means vendor-lock since I swap browsers from time to time and I want my passwords to be stored independently of currently used browser. Thankfully there are plenty of solutions for it outside of major IT monopolies.

> **Whining minute**: modern browsers IMHO should become way more modular, they should not do all at once, they should allow to integrate all at once. Hence password manager should not be built-in, but there should be option to use external one without need for custom browser plugins

At first many years ago I migrated to [1Password](https://1password.com/) and it was really nice experience. It is standalone subscription-based password manager that exceptionally well integrates itself into both MacOS and iOS. It is even frequently promoted by Apple when they want to demonstrate the amount of apps of their ecosystem. The main problem for me with it was its monetization approach. While subscription is not active the user can't create/update new records or autofill existing ones. He/she still can view already created ones and copy-paste them manually, without those capabilities to be free 1Password would be easy no-go for me, but still... Let's be clear, how many new accounts do you need to create each month? I don't do a much. Payment for autofill is just artificial boundary, so what should I pay for on a monthly basis? For the storing the data on their cloud infrastructure? I doubt it cost what they ask for. I'm suppose if it was one-time payment I would be using this app.

There are a lot of free open-source password managers, but those I saw are usually don't have cross-device sync or poorly integrated with OS. It is a common situation for open source software since it is written by volunteer programmers in their free time.

So once I bought Raspberry Pi I found a good alternative for 1Password, it is called [Bitwarden](https://bitwarden.com/). From the functionality that I personally use they are pretty equal, there is no such a thing that I used in 1Password, but is in lack in Bitwarden. From the design perspective 1Password is indeed prettier, but Bitwarden is free when you self-host it. So instead of paying for storing my passwords in the cloud, I'm running my own instance of Bitwarden and connecting iOS and MacOS clients to it. As with all other my Pi apps there is a trade-off of being unable to connect to server outside the home (without VPN). But thankfully all of the Bitwarden apps I used are offline-first: once they synced their data with server, user can disconnect from it, all the synced records are still accessible within the app.

###### Bonus

Deployment of Bitwarden server itself can be a little bit hard thing to do from what I remember, there are several different things you need to configure and so on. But since the server is open-source, there is already a solution to it. One of the good people out there implemented a lightweight alternative called [Vaultwarden](https://github.com/dani-garcia/vaultwarden) that is fully compatible with official Bitwarden clients, so this is what I use in practice.

One additional thing to mention is that regardless of the size of company, regardless of how much money they spend to be as secure as possible, once the thing is in the cloud you cannot be 100% protected from malicious attacks. Even if data is so protected that even when it leaks hackers can't benefit from it at all, still making attack surface as small as possible is the best security strategy. And what can be more secure than hosting the server inside your local network without access to the Internet? So I'm sure that Bitwarden / Vaultwarden setup is not only cheaper that everything I used before, but also more secure by definition.

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
