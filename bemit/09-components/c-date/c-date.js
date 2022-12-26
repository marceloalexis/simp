import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time className={'o-font-text-quote'} dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}