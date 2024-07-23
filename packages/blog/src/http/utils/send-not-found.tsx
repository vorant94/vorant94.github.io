import type { FastifyReply } from "fastify";
import { CenteredLayout } from "../../ui/layouts/centered.layout.js";
import { render } from "../../ui/utils/render.js";
import { NotFound } from "../components/not-found.js";
import { contentType } from "../types/content-type.js";
import { statusCode } from "../types/status-code.js";

export function sendNotFound(reply: FastifyReply): FastifyReply {
	return reply
		.code(statusCode.notFound)
		.type(contentType.html)
		.send(
			render(
				<CenteredLayout title={"404 Not found"}>
					<NotFound />
				</CenteredLayout>,
			),
		);
}
