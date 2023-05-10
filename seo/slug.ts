import { Seo } from "@/models/seo";

const seo = ({
  page,
  $config,
  $i18n,
}: {
  page: { description: string; title: string; slug: string };
  $config: { BASE_URL: string };
  $i18n: { locale: string };
}): Seo[] => [
  {
    hid: "description",
    name: "description",
    content: page.description,
  },
  {
    hid: "og:description",
    name: "og:description",
    content: page.description,
  },
  {
    hid: "twitter:description",
    name: "twitter:description",
    content: page.description,
  },
  {
    hid: "og:title",
    name: "og:title",
    content: page.title,
  },
  {
    hid: "og:image",
    name: "og:image",
    content: `${$config.BASE_URL}/og/${$i18n.locale}/${page.slug}.png`,
  },
  {
    hid: "og:url",
    name: "og:url",
    content: `${$config.BASE_URL}/blog/${page.slug}`,
  },
  {
    hid: "twitter:title",
    name: "twitter:title",
    content: page.title,
  },
  {
    hid: "twitter:image",
    name: "twitter:image",
    content: `${$config.BASE_URL}/og/${$i18n.locale}/${page.slug}.png`,
  },
];

export default seo;
