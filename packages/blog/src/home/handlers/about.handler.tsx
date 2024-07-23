import type { FastifyPluginCallback } from "fastify";
import { contentType } from "../../http/types/content-type.js";
import { statusCode } from "../../http/types/status-code.js";
import { DefaultLayout } from "../../ui/layouts/default.layout.js";
import { render } from "../../ui/utils/render.js";
import { Intro } from "../components/intro.js";
import { SocialLinks } from "../components/social-links.js";
import { StayUpToDate } from "../components/stay-up-to-date.js";

export const aboutHandler: FastifyPluginCallback = (app, _, done) => {
	app.get("/about", (_, reply) => {
		return reply
			.status(statusCode.ok)
			.type(contentType.html)
			.send(
				render(
					<DefaultLayout
						title={"About"}
						currentPath={"/about"}
						env={app.env}
					>
						<Intro />

						<StayUpToDate />

						<SocialLinks />
					</DefaultLayout>,
				),
			);
	});

	done();
};
