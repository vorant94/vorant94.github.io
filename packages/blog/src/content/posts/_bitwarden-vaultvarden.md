---
title: Bitwarden / Vaultwarden
tags:
  - self-hosted
  - tech
  - raspberry-pi
publishedAt:
coverImage: ../attachments/whats-in-my-pi/bitwarden-logo.svg
thread: whats-in-my-pi
---

There are multiple options to store your passwords nowadays. I suppose that the default option for an average modern user is either to have only one password for everything or to store all of the passwords in a browser since it constantly suggests it. The major problem of having only one password is that not all your internet accounts are equally protected. Most likely you also use the same email address everywhere. A common way of hacking user email account like Gmail, which has strong protection, is to hack some small less-protected buggy site, find there an account with the targeted email address and try to use this password in Gmail. After the hacker has access to your email account it can reset any of your passwords on other sites by using "Forgot password?" functionality. And now all of your internet accounts alongside with credit card information are hacked. The built-in browser password manager is a better choice, but for me it means vendor-lock since I swap browsers from time to time and I want my passwords to be stored independently of currently used browser. Thankfully there are plenty of solutions for it outside of major IT monopolies.

> **Whining minute**: modern browsers IMHO should become way more modular, they should not do all at once, they should allow to integrate all at once. Hence password manager should not be built-in, but there should be option to use external one without need for custom browser plugins

At first many years ago I migrated to [1Password](https://1password.com/) and it was really nice experience. It is standalone subscription-based password manager that exceptionally well integrates itself into both MacOS and iOS. It is even frequently promoted by Apple when they want to demonstrate the amount of apps of their ecosystem. The main problem for me with it was its monetization approach. While subscription is not active the user can't create/update new records or autofill existing ones. He/she still can view already created ones and copy-paste them manually, without those capabilities to be free 1Password would be easy no-go for me, but still... Let's be clear, how many new accounts do you need to create each month? I don't do a much. Payment for autofill is just artificial boundary, so what should I pay for on a monthly basis? For the storing the data on their cloud infrastructure? I doubt it cost what they ask for. I'm suppose if it was one-time payment I would be using this app.

There are a lot of free open-source password managers, but those I saw are usually don't have cross-device sync or poorly integrated with OS. It is a common situation for open source software since it is written by volunteer programmers in their free time.

So once I bought Raspberry Pi I found a good alternative for 1Password, it is called [Bitwarden](https://bitwarden.com/). From the functionality that I personally use they are pretty equal, there is no such a thing that I used in 1Password, but is in lack in Bitwarden. From the design perspective 1Password is indeed prettier, but Bitwarden is free when you self-host it. So instead of paying for storing my passwords in the cloud, I'm running my own instance of Bitwarden and connecting iOS and MacOS clients to it. As with all other my Pi apps there is a trade-off of being unable to connect to server outside the home (without VPN). But thankfully all of the Bitwarden apps I used are offline-first: once they synced their data with server, user can disconnect from it, all the synced records are still accessible within the app.

#### Bonus

Deployment of Bitwarden server itself can be a little bit hard thing to do from what I remember, there are several different things you need to configure and so on. But since the server is open-source, there is already a solution to it. One of the good people out there implemented a lightweight alternative called [Vaultwarden](https://github.com/dani-garcia/vaultwarden) that is fully compatible with official Bitwarden clients, so this is what I use in practice.

One additional thing to mention is that regardless of the size of company, regardless of how much money they spend to be as secure as possible, once the thing is in the cloud you cannot be 100% protected from malicious attacks. Even if data is so protected that even when it leaks hackers can't benefit from it at all, still making attack surface as small as possible is the best security strategy. And what can be more secure than hosting the server inside your local network without access to the Internet? So I'm sure that Bitwarden / Vaultwarden setup is not only cheaper that everything I used before, but also more secure by definition.
