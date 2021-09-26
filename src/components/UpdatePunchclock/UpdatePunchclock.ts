import Vue from 'vue';
import { Entry } from '@/models/Entry';
import APIService from '@/services/APIService';
import Helpers from '@/services/Helpers';

export default Vue.extend({
  name: 'UpdatePunchclock',
  props: ['idProp', 'checkInDateProp', 'checkInTimeProp', 'checkOutDateProp', 'checkOutTimeProp'],
  data() {
    return {
      id: this.idProp,
      checkInDate: this.checkInDateProp,
      checkInTime: this.checkInTimeProp,
      checkOutDate: this.checkOutDateProp,
      checkOutTime: this.checkOutTimeProp
    };
  },
  methods: {
    updateEntry(): void {
      const finalEntry: Entry = {
        id: this.id,
        checkIn: Helpers.dateAndTimeToDate(this.checkInDate, this.checkInTime),
        checkOut: Helpers.dateAndTimeToDate(this.checkOutDate, this.checkOutTime)
      };
      APIService.updateEntry(this.id, finalEntry).then(() => {
        this.$modal.hide('updateEntry');
        this.$emit('updated');
      });
    }
  }
});
