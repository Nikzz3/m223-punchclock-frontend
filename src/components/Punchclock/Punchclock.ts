import Vue from 'vue';
import { Entry } from '@/models/Entry';
import APIService from '@/services/APIService';
import { BIconTrash, BIconPencilSquare } from 'bootstrap-vue';
import UpdatePunchclock from '../UpdatePunchclock/UpdatePunchclock.vue';
import { RawEntry } from '@/models/RawEntry';
import Helpers from '@/services/Helpers';
import { Category } from '../../models/Category';

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
      entryToUpdate: {} as RawEntry,
      categories: [] as Category[],
      selectedCategory: {} as Category
    };
  },
  methods: {
    createEntry(): void {
      if (this.selectedCategory.name === undefined) {
        Vue.notify({ group: 'errors', title: 'Fehler', text: 'Wähle eine Kategorie aus', type: 'error' });
        return;
      }
      const finalEntry = {
        id: '',
        checkIn: Helpers.dateAndTimeToDate(this.checkInDate, this.checkInTime),
        checkOut: Helpers.dateAndTimeToDate(this.checkOutDate, this.checkOutTime),
        category: this.selectedCategory
      };
      APIService.createEntry(finalEntry)
        .then((res) => {
          this.entries.push(res);
          this.reset();
        })
        .catch(() => {
          Vue.notify({ group: 'errors', title: 'Fehler', text: 'Auscheckdatum darf nicht vor Eincheckdatum sein', type: 'error' });
          this.checkOutDate = '';
          this.checkOutTime = '';
        });
    },

    updateEntry(entry: Entry): void {
      this.entryToUpdate = Helpers.revertDateAndTimeToDate(entry.id, entry.checkIn, entry.checkOut, this.selectedCategory);
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
    },

    selectCategory(category: Category): void {
      this.selectedCategory = category;
    }
  },
  async mounted(): Promise<void> {
    this.getEntries();
    this.categories = await APIService.getCategories();
  }
});
