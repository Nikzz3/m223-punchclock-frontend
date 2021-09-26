import Vue from 'vue';
import { Entry } from '@/models/Entry';
import APIService from '@/services/APIService';
import { BIconTrash, BIconPencilSquare } from 'bootstrap-vue';
import UpdatePunchclock from '../UpdatePunchclock/UpdatePunchclock.vue';
import { RawEntry } from '@/models/RawEntry';
import Helpers from '@/services/Helpers';

export default Vue.extend({
  name: 'Punchclock',
  components: { UpdatePunchclock, BIconTrash, BIconPencilSquare },
  data() {
    return {
      checkInTime: '',
      checkInDate: '',
      checkOutTime: '',
      checkOutDate: '',
      entries: [] as Entry[],
      entryToUpdate: {} as RawEntry
    };
  },
  methods: {
    createEntry(): void {
      const finalEntry = {
        id: '',
        checkIn: Helpers.dateAndTimeToDate(this.checkInDate, this.checkInTime),
        checkOut: Helpers.dateAndTimeToDate(this.checkOutDate, this.checkOutTime)
      };
      APIService.createEntry(finalEntry)
        .then((res) => {
          this.entries.push(res);
          this.reset();
        })
        .catch(() => {
          Vue.notify({ group: 'createError', title: 'Error', text: 'CheckOut cannot be before CheckIn', type: 'error' });
          this.checkOutDate = '';
          this.checkOutTime = '';
        });
    },

    updateEntry(entry: Entry): void {
      this.entryToUpdate = Helpers.revertDateAndTimeToDate(entry.id, entry.checkIn, entry.checkOut);
      this.$modal.show('updateEntry');
    },

    async deleteEntry(id: string): Promise<void> {
      await APIService.deleteEntry(id);
      this.getEntries();
    },

    reset(): void {
      this.checkInTime = '';
      this.checkInDate = '';
      this.checkOutTime = '';
      this.checkOutDate = '';
    },

    async getEntries(): Promise<void> {
      this.entries = await APIService.getEntries();
    }
  },
  async mounted(): Promise<void> {
    this.getEntries();
  }
});
