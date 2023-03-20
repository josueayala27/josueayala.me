import { getHighlighter } from "shiki";

export default {
  markdown: {
    async highlighter() {
      const highlighter = await getHighlighter({
        theme: "dracula",
      });
      return (code: any, lang: any) => highlighter.codeToHtml(code, lang);
    },
  },
};
