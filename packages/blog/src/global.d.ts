import "fastify";
import "react";
import type { EnvModel } from "./config/models/env.model.js";

declare module "react" {
	// biome-ignore lint/style/useNamingConvention: 3-rd party type
	interface CSSProperties {
		[key: `--${string}`]: string | number;
	}

	// biome-ignore lint/style/noNamespace: 3-rd party type
	// biome-ignore lint/style/useNamingConvention: 3-rd party type
	namespace JSX {
		interface IntrinsicElements {
			"lottie-player": unknown;
		}
	}
}

declare module "fastify" {
	interface FastifyInstance {
		env: EnvModel;
	}
}
