import type { HttpCodes } from 'fastify/types/utils.js';

/**
 * @description the value of this enum is to use meaningful names instead of numbers
 */
export const statusCode = {
  ok: 200,
  notFound: 404,
} as const satisfies Record<string, HttpCodes>;
export type StatusCodeModel = (typeof statusCode)[keyof typeof statusCode];
