import satori, { SatoriOptions } from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event);
  const query = getQuery(event);

  const markup = html(`
    <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
      <span style="font-size: 2rem; text-align: center; padding: 1rem;">
        ${query.title}
      </span>
    </div>
  `);

  const buffer = await fetch(`${url.origin}/fonts/Inter-Bold.ttf`);

  const svg = await satori(markup, {
    height: 400,
    width: 600,
    fonts: [
      {
        name: "Inter",
        data: await buffer.arrayBuffer(),
      },
    ],
  } as SatoriOptions);

  const resvg = new Resvg(svg, {
    background: "rgba(238, 235, 230, .9)",
  });

  const pngData = resvg.render();

  return pngData.asPng();
});
