import type { APIContext } from 'astro';
import { makeHandler } from '@keystatic/astro/api';
import config from "../../../../keystatic.config";

export const prerender = false;

export const all = (context: APIContext) => {
  return makeHandler({
    config,
    secret: context?.env?.KEYSTATIC_SECRET ?? import.meta.env.KEYSTATIC_SECRET,
    clientId: context?.env?.KEYSTATIC_GITHUB_CLIENT_ID ?? import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID,
    clientSecret: context?.env?.KEYSTATIC_GITHUB_CLIENT_SECRET ?? import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
  })(context);
}
