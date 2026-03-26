import { SitemapStream, streamToPromise } from "sitemap";
import { queryCollection } from "@nuxt/content/server";

export default defineEventHandler(async (event) => {
  const docs = await queryCollection(event, "content").all();
  const sitemap = new SitemapStream({
    hostname: "https://josueayala.me",
  });

  sitemap.write({
    url: "/",
    changefreq: "daily",
  });

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: "weekly",
    });
  }

  sitemap.end();

  return streamToPromise(sitemap);
});
