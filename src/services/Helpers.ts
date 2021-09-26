import { RawEntry } from '@/models/RawEntry';
import { addHours } from 'date-fns';

export default {
  dateAndTimeToDate(dateString: string, timeString: string): string {
    // Add Hours because of time zone
    return addHours(new Date(`${dateString}T${timeString}`), 2).toISOString();
  },

  revertDateAndTimeToDate(id: string, inDate: string, outDate: string): RawEntry {
    const inDateSplit = inDate.split('T');
    const outDateSplit = outDate.split('T');
    return { id: id, checkInDate: inDateSplit[0], checkInTime: inDateSplit[1], checkOutDate: outDateSplit[0], checkOutTime: outDateSplit[1] };
  }
};
