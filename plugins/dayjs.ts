import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export default (_: any, inject: any) => {
  dayjs.extend(relativeTime);
  inject('dayjs', dayjs);
};
