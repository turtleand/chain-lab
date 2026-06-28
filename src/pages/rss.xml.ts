import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

const SITE = 'https://chain.turtleand.com';
const feedUrl = new URL('/rss.xml', SITE).href;

export async function GET() {
  const topics = (await getCollection('topics')).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'Turtleand Chain Lab',
    description: 'Blockchain systems literacy, protocol trade-offs, custody, security, and digital agency from Turtleand.',
    site: SITE,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
      dc: 'http://purl.org/dc/elements/1.1/',
    },
    customData: [
      '<language>en</language>',
      topics[0] ? `<lastBuildDate>${topics[0].data.date.toUTCString()}</lastBuildDate>` : '',
      `<atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />`,
    ].join(''),
    items: topics.map((topic) => ({
      title: topic.data.title,
      description: topic.data.description,
      link: `topics/${topic.id}/`,
      pubDate: topic.data.date,
      categories: topic.data.tags ?? [],
      customData: `<dc:creator>${topic.data.author}</dc:creator>`,
    })),
  });
}
