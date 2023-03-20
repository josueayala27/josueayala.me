import dayjs, { extend } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import advancedFormat from "dayjs/plugin/advancedFormat";

import("dayjs/locale/es");
import("dayjs/locale/en");

extend(relativeTime);
extend(advancedFormat);

export default (_: any, inject: any) => {
  inject("dayjs", dayjs);
};
