import posts from './tulisan/_posts';

const contents = JSON.stringify(posts);

export function get(_, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
