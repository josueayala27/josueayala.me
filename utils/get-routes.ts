const parseURL = (URL: string) => {
  const url = URL.split('/');
  const PREFIX = 'blog';

  if (url[1] === 'en') return `${PREFIX}/${url[2]}`;
  return `/${url[1]}/${PREFIX}/${url[2]}`;
};

export default async () => {
  const { $content } = require('@nuxt/content');
  const files = await $content({ deep: true }).only(['path']).fetch();

  return files.map((file: any) =>
    file.path === '/index' ? '/' : `${parseURL(file.path)}`
  );
};
