import pkg from 'package.json';
const { version } = pkg;

import app from '$lib/configs/app';

const canonical = process.env.APP_CANONICAL ? new URL(process.env.APP_CANONICAL).origin : '';

const data = {
  version,
  api_version: 1,
  layout: {
    logo: `${canonical}/favicon/tableau/60.png?v=${version}`, //encodeURIComponent()
    color: app.tileColor,
    show_title: true
  }
};

export const prerender = true;

export async function GET() {
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
