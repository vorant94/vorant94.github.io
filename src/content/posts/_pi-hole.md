---
title: Pi Hole
tags:
  - self-hosted
  - tech
  - raspberry-pi
platforms:
  -
publishedAt:
coverImage: ../attachments/whats-in-my-raspberry-pi/pi-hole-logo.png
thread: whats-in-my-raspberry-pi
---

### Ad-blocker

If you have ever searched anything on the Internet, you should be pissed of by the amount of ads modern websites have. It literally can be just a simple cooking recipe page, where after each step there is reserved placeholder for a targeting ad:

```
step 1: cut the onion into small rings...
DO YOU WANT TO GROW BACK LOST HAIR AND HAVE A NEW SIDE-CHICK EVERY WEEK-END?!...
step 2: grate carrots on a fine grater...
5 STEPS TO BECOME INSANELY RICH TODAY, BILL GATES DIDN'T WANT YOU TO KNOW IT!!...
```

Free mobile apps and games also have this decease, after all they need somehow to monetize themselves. If you get some service but do not pay for it with money, you most likely pay with your time or still with money but later. Marketing people do know their stuff well, so those ads are in motion and blinking all the time to attract your attention at any cost.

But for every action there is a reaction, so a long time ago ad-blocking software emerged. It cannot block internal website adds like pre-rolls of YouTube, or ad posts of Facebook, but it can block external ads like the recipe page example. The way this software works is that it intercepts all of the outgoing internet traffic, goes over it with a huge block-list of a known ad platforms and blocks every request if it happens to be directed to one of block-listed addresses. So usual request for example to get recipe steps passes, but the request to retrieve the ad info to show fails hence it is not shown.

One problem with those programs is that they should be running in the background all the time. And while on PC it is probably ok, but on laptops and phones we have batteries, that are drained more and more with each background process. Then you have to install it on each and every of your devices that you'd like to avoid ads. Separate app for laptop, separate app for phone. Most likely those apps are written by different developers, so the quality of the software probably varies. And I'm not even mentioning that stores like Google Play or App Store really don't like those kinda apps, since they decrease their ad income.

So one of the most popular apps that is meant to be used with Raspberry Pi is a [Pi-hole](https://pi-hole.net/), network-wide ad blocker. After you configure it (to be honest it can be tricky) it blocks the ads across the whole home network. It still runs all the time, but it runs on one energy-efficient computer. Obviously the moment you go outside your home, Wi-Fi is lost and ads are back, so each solution has its own trade-offs. Once in a while I install some free games on my iPhone and I got used to Pi-hole so much, that each time I play these games outside home I'm shocked by the amount of ads they have... How people without ad-blocker can even play them, when almost after each restart player has to watch 10-20 seconds of ads, find and click on smallest possible 'x' button to close it and only after all of this he/she is permitted to continue the session? It is mystery for me...

### Custom DNS

Another use for Pi-hole is that it can be used as a custom DNS. DNS stands for Domain Name System. Each and every device that is connected to the network of any size (including Internet) receives an IP address, that it can be accessed by. Majority of the devices consume content like our phones when we watch YouTube, but some of them have to serve the content so it can be consumed (for example one of the YouTube addresses is `208.0.0.65`). But almost nobody actually using real IP addresses to access devices, we are using human-friendly labels like `https://youtube.com`. The system that can map a label to an actual address is called DNS and the company that offers service for registering new records in such a system is called domain register.

Now back to local home network. My apps are hosted on Raspberry-Pi, which is connected to Wi-Fi, so it can be accessed from my laptop or phone. But by default it is accessible only by its IP address (something like `192.168.xx.xx`), which is not perfect. A better solution would be to access app by its name (e.g. something like `https://pi.hole/`). There is no need to spend money on a domain record, since I didn't want to host my Pi outside of home Wi-Fi, so domain register won't help here. It is also possible to update laptop inner records since every device also has its own set of records, but then such list of records should be maintained on each and every device that is going to use Pi, which is a headache... And here comes the Pi-hole. Since it intercepts all the traffic it can also resolve domain names just like domain register, so all of the devices can benefit from apps that are hosted in Pi without need to handle real IP addresses.

### Bonus

I must say that setting up and configuring Pi-hole was one of the hardest things to host since it involves not only deployment of app itself, but adjusting the router and toggling some stuff on devices (to enable secure connection even though is should be optional for inner home network stuff). But in the end it pays for itself: it is one-time time investment, that afterwards passively benefits all of household.

The trade-off having it enabled only in the scope of home network is actually can be somewhat avoided. In my case my Asus RT-AX55 allows in couple of click set up home VPN server. VPN or Virtual Private Network, basically means that while the device is physically connected to some network, it can be configured to behave like it is connected to other network. It is widely adopted technology in modern world mostly to avoid country specific network restrictions. Like access the site that is blocked in your country, you connect to VPN that is located in other country and you can access it like you are outside of your country (unless VPN provider itself doesn't block this site by the order of country governance). So if I want I can block any ads and access my self-hosted apps outside of home just by connecting to VPN.
