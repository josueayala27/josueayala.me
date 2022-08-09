import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import advancedFormat from 'dayjs/plugin/advancedFormat';

require('dayjs/locale/es');
require('dayjs/locale/en');

export default (_: any, inject: any) => {
  dayjs.extend(relativeTime);
  dayjs.extend(advancedFormat);
  inject('dayjs', dayjs);
};
