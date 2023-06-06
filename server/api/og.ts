import satori, { SatoriOptions } from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event);
  const query = getQuery(event);

  const markup = html(`
    <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
      <span style="font-size: 2rem; text-align: center; padding: 1rem;">
        ${
          query.title === "josueayala"
            ? `<img style="width: 25rem;" src="${url.origin}/logo-joscode.svg" />`
            : query.title
        }
      </span>
    </div>
  `);

  const fontBuffer = await fetch(`${url.origin}/fonts/Inter-Bold.ttf`);

  const svg = await satori(markup, {
    height: 400,
    width: 600,
    fonts: [
      {
        name: "Inter",
        data: await fontBuffer.arrayBuffer(),
      },
    ],
  } as SatoriOptions);

  const resvg = new Resvg(svg, {
    background: "rgba(255, 255, 255)",
  });

  const pngData = resvg.render();

  return pngData.asPng();
});
