import fs from 'fs';
import frontMatter from 'front-matter';

const postPath = './src/pages/article';
const hasExtention = /\.[^/.]+$/;

const posts = fs
  .readdirSync(postPath)
  .filter(file => {
    if (!hasExtention.test(file)) {
      return `${file}/index.svx`;
    }
  })
  .map(fileName => {
    const postContent = fs.readFileSync(`${postPath}/${fileName}/index.svx`, { encoding: 'utf8' });
    const { attributes } = frontMatter(postContent);

    return {
      ...attributes,
      slug: fileName.replace(hasExtention, '')
    };
  })
  .filter(post => process.env.NODE_ENV === 'development' || !post.draft)
  .sort((a, b) => b.date.getTime() - a.date.getTime());

export default posts;
