import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import advancedFormat from "dayjs/plugin/advancedFormat";

import("dayjs/locale/en");

dayjs.extend(relativeTime);
dayjs.extend(advancedFormat);

export default defineNuxtPlugin(() => {
  return {
    provide: {
      dayjs,
    },
  };
});
