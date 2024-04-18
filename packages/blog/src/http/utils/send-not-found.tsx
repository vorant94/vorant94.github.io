import type { FastifyReply } from 'fastify';
import { contentType } from '../../http/index.js';
import { CenteredLayout, render } from '../../ui/index.js';
import { NotFound } from '../components/NotFound.js';
import { statusCode } from '../models/status-code.model.js';

export function sendNotFound(reply: FastifyReply): FastifyReply {
  return reply
    .code(statusCode.notFound)
    .type(contentType.html)
    .send(
      render(
        <CenteredLayout title={`404 Not found`}>
          <NotFound />
        </CenteredLayout>,
      ),
    );
}
