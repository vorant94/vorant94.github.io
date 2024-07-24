import { describe, expect, it } from "vitest";
import type { PostModel } from "../models/post.model.js";
import { getUniqueTags } from "./get-unique-tags.js";

describe("getUniqueTags", () => {
	it("should return all unique tags", () => {
		const input: Array<PostModel> = [
			{
				id: "divide-and-conquer-right-concerns-to-separate",
				path: "posts/divide-and-conquer-right-concerns-to-separate",
				readingTime: {
					text: "13 min read",
					minutes: 12.535,
					time: 752100,
					words: 2507,
				},
				matter: {
					title: "Divide and conquer: right concerns to separate",
					description:
						"One of the shared programming principles is separation of concerns. It guides programmers to separate applications into smaller units with distinct boundaries. My view on it went over a couple of iterations and I'd like to share with you what it means for me now",
					tags: ["design-patterns", "separation-of-concerns", "programming"],
					publishedAt: new Date("2024-03-10T00:00:00.000Z"),
					isPinned: false,
					coverImage: "./cover.webp",
					coverAlt: "Julius Caesar statue",
				},
			},
			{
				id: "typescript-monorepos-are-a-mess",
				path: "posts/typescript-monorepos-are-a-mess",
				readingTime: {
					text: "15 min read",
					minutes: 14.105,
					time: 846300,
					words: 2821,
				},
				matter: {
					title: "TypeScript Monorepos are a mess",
					description:
						'You know how they say "once you go black, you never go back"? I went through it with two things: TypeScript and Monopepos, but to set them up both simultaneously was... interesting to say the least. As a result I learned a lot about JS ecosystem and I\'d like to share it with you',
					tags: ["typescript", "node", "infra"],
					publishedAt: new Date("2024-01-03T00:00:00.000Z"),
					related: null,
					isPinned: null,
					codeUrl: "https://github.com/vorant94/typescript-monorepo",
					coverImage: "./cover.webp",
					coverAlt:
						"Logos of Yarn, Git and TypeScript arranged like a bento box",
					darkCoverImage: "./cover-dark.webp",
				},
			},
			{
				id: "whats-in-my-pi-bitwarden",
				path: "posts/whats-in-my-pi-bitwarden",
				readingTime: {
					text: "7 min read",
					minutes: 6.925,
					time: 415500,
					words: 1385,
				},
				matter: {
					title: "[What’s in my Pi?]: Bitwarden",
					description:
						"A couple of years ago I bought myself a Raspberry Pi and using it as a home server hosting there a bunch of different apps. The whole setup went through several iterations and is still evolving. I'd like to share with you what I have there and how it is helping me in my day-to-day life. There will be several posts in order to make it more readable, so keep in touch",
					tags: ["self-hosted", "tech", "raspberry-pi"],
					publishedAt: new Date("2023-12-05T00:00:00.000Z"),
					related: ["whats-in-my-pi-pi-hole", "whats-in-my-pi-freshrss"],
					isPinned: null,
					coverImage: "./cover.webp",
					coverAlt: "Bitwarden logo",
				},
			},
			{
				id: "dart-through-the-eyes-of-a-js-ts-dev",
				path: "posts/dart-through-the-eyes-of-a-js-ts-dev",
				readingTime: {
					text: "12 min read",
					minutes: 11.99,
					time: 719400,
					words: 2398,
				},
				matter: {
					title: "Dart through the eyes of a JS/TS dev",
					description:
						"Earlier this year I had an app idea (hopefully I'll write about it too), which led me out from my programmers \"homeland\", front-end web dev, to another direction. Since the idea was an app, I needed to learn mobile dev a little bit. I decided to go cross-platform with Dart & Flutter. It is my first experience of somewhat serious programming not in JS/TS and I'd like to share with you what I learned so far",
					tags: ["programming", "dart", "typescript"],
					publishedAt: new Date("2023-11-27T00:00:00.000Z"),
					related: null,
					isPinned: null,
					coverImage: "./cover.webp",
					coverAlt: "Dart logo on blue background with some small icons",
				},
			},
			{
				id: "whats-in-my-pi-freshrss",
				path: "posts/whats-in-my-pi-freshrss",
				readingTime: {
					text: "6 min read",
					minutes: 5.685,
					time: 341100,
					words: 1137,
				},
				matter: {
					title: "[What’s in my Pi?]: FreshRSS",
					description:
						"A couple of years ago I bought myself a Raspberry Pi and using it as a home server hosting there a bunch of different apps. The whole setup went through several iterations and is still evolving. I'd like to share with you what I have there and how it is helping me in my day-to-day life. There will be several posts in order to make it more readable, so keep in touch",
					tags: ["self-hosted", "tech", "raspberry-pi"],
					publishedAt: new Date("2023-10-24T00:00:00.000Z"),
					related: ["whats-in-my-pi-freshrss", "whats-in-my-pi-bitwarden"],
					isPinned: null,
					coverImage: "./cover.webp",
					coverAlt: "FreshRSS logo",
				},
			},
			{
				id: "war-in-israel",
				path: "posts/war-in-israel",
				readingTime: {
					text: "6 min read",
					minutes: 5.91,
					time: 354600,
					words: 1182,
				},
				matter: {
					title: "War in Israel",
					description:
						"I planned to post second part of what I have in my Pi yesterday, but last Saturday Hamas launched literally a barbaric raid on Israel villages and cities taking hostages, raping women and murdering innocent civilians including children and elderly. Israel declared a war and bombing Hamas infrastructure in the Gaza Strip already for a week in order to destroy Hamas. Here are a couple of thoughts that were new to me during this week",
					tags: ["psychology", "war", "self-reflection"],
					publishedAt: new Date("2023-10-14T00:00:00.000Z"),
					related: null,
					isPinned: true,
					coverImage: "./cover.webp",
					coverAlt: "Waving Israel flag on the cloud sky background",
				},
			},
			{
				id: "whats-in-my-pi-pi-hole",
				path: "posts/whats-in-my-pi-pi-hole",
				readingTime: {
					text: "6 min read",
					minutes: 5.56,
					time: 333600,
					words: 1112,
				},
				matter: {
					title: "[What’s in my Pi?]: Pi-hole",
					description:
						"A couple of years ago I bought myself a Raspberry Pi and using it as a home server hosting there a bunch of different apps. The whole setup went through several iterations and is still evolving. I'd like to share with you what I have there and how it is helping me in my day-to-day life. There will be several posts in order to make it more readable, so keep in touch",
					tags: ["self-hosted", "tech", "raspberry-pi"],
					publishedAt: new Date("2023-10-06T00:00:00.000Z"),
					related: ["whats-in-my-pi-pi-hole", "whats-in-my-pi-bitwarden"],
					isPinned: null,
					coverImage: "./cover.webp",
					coverAlt: "Pi-hole logo",
				},
			},
			{
				id: "aws-amplify-functions-on-steroids",
				path: "posts/aws-amplify-functions-on-steroids",
				readingTime: {
					text: "10 min read",
					minutes: 9.005,
					time: 540300,
					words: 1801,
				},
				matter: {
					title: "AWS Amplify Functions on steroids",
					description:
						"My journey to AWS Amplify continues and it lead me to explore possibilities of AWS Amplify Functions, a wrapper API of Amplify to easily integrate AWS Lambdas into your project. As an example project we will build a small to-do list app",
					tags: ["amplify", "serverless", "lambda"],
					publishedAt: new Date("2023-07-05T00:00:00.000Z"),
					related: ["pitfalls-of-aws-amplify-serverless-containers"],
					isPinned: null,
					codeUrl: "https://github.com/vorant94/amplify-functions-on-steroids",
					coverImage: "./cover.webp",
					coverAlt: "Amplify and TypeScript logos on the blue background",
				},
			},
			{
				id: "browser-tour-google-chrome",
				path: "posts/browser-tour-google-chrome",
				readingTime: {
					text: "6 min read",
					minutes: 5.16,
					time: 309600,
					words: 1032,
				},
				matter: {
					title: "[Browser tour]: Google Chrome",
					description:
						"This year I noticed that a long-established traditional set of browsers (Chrome, Firefox, Safari, Opera) started to be supplemented by a new generation of alternatives. Personally, for the last few years, I've been switching back and forth between Chrome and Safari (peeking at Firefox from a long distance), but the drums of Brave, Vivaldi, Edge, Arc, and SigmaOS are getting stronger and stronger. So to add some variety to the day-to-day routine I decided to try something new and share it with you.",
					tags: ["tech", "software"],
					publishedAt: new Date("2023-03-14T00:00:00.000Z"),
					related: ["browser-tour-safari"],
					isPinned: false,
				},
			},
			{
				id: "browser-tour-safari",
				path: "posts/browser-tour-safari",
				readingTime: {
					text: "10 min read",
					minutes: 9.645,
					time: 578700,
					words: 1929,
				},
				matter: {
					title: "[Browser tour]: Safari",
					description:
						"This year I noticed that a long-established traditional set of browsers (Chrome, Firefox, Safari, Opera) started to be supplemented by a new generation of alternatives. Personally, for the last few years, I've been switching back and forth between Chrome and Safari (peeking at Firefox from a long distance), but the drums of Brave, Vivaldi, Edge, Arc, and SigmaOS are getting stronger and stronger. So to add some variety to the day-to-day routine I decided to try something new and share it with you.",
					tags: ["tech", "software"],
					publishedAt: new Date("2023-03-07T00:00:00.000Z"),
					related: ["browser-tour-google-chrome"],
					isPinned: false,
				},
			},
			{
				id: "pitfalls-of-aws-amplify-serverless-containers",
				path: "posts/pitfalls-of-aws-amplify-serverless-containers",
				readingTime: {
					text: "4 min read",
					minutes: 3.64,
					time: 218400,
					words: 728,
				},
				matter: {
					title: "Pitfalls of AWS Amplify Serverless containers",
					description:
						"Recently I've got a task that led me to exploring AWS Amplify Serverless Containers and I would like to share with you the experience I earned from it. I built a small Angular app that allows to convert Word files into PDF",
					tags: ["amplify", "serverless", "docker"],
					publishedAt: new Date("2023-01-31T00:00:00.000Z"),
					related: ["aws-amplify-functions-on-steroids"],
					isPinned: null,
					codeUrl: "https://github.com/vorant94/amplify-serverless-containers",
				},
			},
			{
				id: "branding-an-angular-app-with-docker-volumes-and-css3-variables",
				path: "posts/branding-an-angular-app-with-docker-volumes-and-css3-variables",
				readingTime: {
					text: "6 min read",
					minutes: 5.355,
					time: 321300,
					words: 1071,
				},
				matter: {
					title:
						"Branding an Angular app with Docker volumes and CSS3 variables",
					description:
						"Hi, there! My name is Mordechai and it is my first post here. I thought what to write about and came up with an idea of sharing small tips and tricks which made my life as a developer a little bit easier, so here am I",
					tags: ["programming", "docker", "angular"],
					publishedAt: new Date("2021-01-26T00:00:00.000Z"),
					related: null,
					isPinned: null,
				},
			},
			{
				id: "why-brave-new-world-is-actually-a-utopia",
				path: "posts/why-brave-new-world-is-actually-a-utopia",
				readingTime: {
					text: "8 min read",
					minutes: 7.26,
					time: 435600,
					words: 1452,
				},
				matter: {
					title: 'Why "Brave New World" is actually a utopia',
					description:
						'Some time ago, I read Aldous Huxley\'s "Brave New World." The book made a strong impression on me even though I had already read Ray Bradbury\'s "Fahrenheit 451" and George Orwell\'s "1984." I noticed a particular difference between this dystopian novel and the other two, but I couldn\'t put it into words for some reason. Eventually, on my recommendation, one of my friends also read this book, and we had a relatively long conversation about it. In the end, we concluded that "Brave New World" is more of a utopia than a dystopia. So, here are my thoughts on the matter.',
					tags: ["books"],
					publishedAt: new Date("2020-05-02T00:00:00.000Z"),
					isPinned: false,
					coverImage: "./cover.jpg",
					coverAlt: "Brave New World book cover",
				},
			},
		];
		const expected = [
			"design-patterns",
			"separation-of-concerns",
			"programming",
			"typescript",
			"node",
			"infra",
			"self-hosted",
			"tech",
			"raspberry-pi",
			"dart",
			"psychology",
			"war",
			"self-reflection",
			"amplify",
			"serverless",
			"lambda",
			"software",
			"docker",
			"angular",
			"books",
		];

		const actual = getUniqueTags(input);

		expect(actual).toEqual(expected);
	});
});
