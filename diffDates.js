import { DateTime } from './luxon.js'
// import {Howl, Howler} from 'howler';

export function diffDates(firstDate, secondDate) {
   firstDate = DateTime.fromISO(firstDate);
   secondDate = DateTime.fromISO(secondDate);

   if (firstDate > secondDate)
      [firstDate, secondDate] = [secondDate, firstDate];

   return secondDate.diff(firstDate, ['year', 'month', 'day']).toObject();
}

export const diffToHTML = diff => `
   <span style="color: green;">
      Лет: ${diff.years}
      Месяцев: ${diff.months}
      Дней: ${diff.days}
   </span>
`