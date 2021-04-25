import { DateTime } from './luxon.js'

export function diffTimes(firstTime) {
   firstTime = DateTime.fromISO(firstTime);

   return firstTime.diff(firstTime, ['hours', 'minutes', 'seconds']).toObject();
}

export const diffToHTML = diff => `
   <span style="color: green;">
      часов: ${diff.hours}
      минут: ${diff.minutes}
      секунд: ${diff.seconds}
   </span>
`