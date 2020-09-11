import config from '../site.config';

const { siteUrl, blogPath } = config;

const feedItem = item => `
    <item>
      <title>${item.title}</title>
      <description><![CDATA[${item.description}]]></description>
      <link>${siteUrl}/${blogPath}/${item.slug}</link>
      <guid isPermaLink="false">${siteUrl}/${blogPath}/${item.slug}</guid>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
    </item>
`;

const renderXmlRssFeed = items => `<?xml version="1.0" encoding="UTF-8" ?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title><![CDATA[iamyuu.dev]]></title>
    <description><![CDATA[Personal website by Yusuf (@iamyuu)]]></description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <generator>Sapper</generator>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items.map(feedItem).join('\n')}
  </channel>
</rss>`;

export function get(_, res) {
  res.writeHead(200, {
    'Cache-Control': `max-age=0, s-max-age=${600}`, // 10 minutes
    'Content-Type': 'application/rss+xml'
  });

  const feed = renderXmlRssFeed(__POSTS__);
  res.end(feed);
}
