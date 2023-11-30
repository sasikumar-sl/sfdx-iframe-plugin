// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment/moment';

export function formatToLocal(date: Date | string) {
  const fomattedDate = moment.utc(date);
  return moment.utc(fomattedDate).local();
}

export function formatDate(
  date: Date | string,
  { skipTodayWord = false } = {},
) {
  const today = moment(new Date()).startOf('day');
  const yesterday = moment(new Date()).add(-1, 'days').startOf('day');
  const targetDate = formatToLocal(date) ?? moment(new Date(date));

  if (targetDate.isAfter(today)) {
    return `${skipTodayWord ? '' : 'Today, '}${targetDate.format('h:mm A')}`;
  }

  if (targetDate.isAfter(yesterday)) {
    return `Yesterday, ${targetDate.format('h:mm A')}`;
  }

  if (targetDate.isBefore(today, 'year')) {
    return targetDate.format('D MMM YYYY, h:mm A');
  }

  return targetDate.format('D MMM, h:mm A');
}

export function toDateString(date: Date | string) {
  // we're using it as a replacement for Date.toDateString
  // because it doesn't work correctly with timeshift
  return moment(date).format('ddd MMM D YYYY');
}

export function formatDay(date: Date | string) {
  const today = moment(new Date()).startOf('day');
  const yesterday = moment(new Date()).add(-1, 'days').startOf('day');
  const targetDate = moment(new Date(date));

  if (targetDate.isSameOrAfter(today)) {
    return 'Today';
  }

  if (targetDate.isSameOrAfter(yesterday)) {
    return 'Yesterday';
  }

  if (targetDate.isBefore(today, 'year')) {
    return targetDate.format('D MMM YYYY');
  }

  return targetDate.format('D MMM');
}
