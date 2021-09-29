import Vue from 'vue';
import { Category } from '../../models/Category';
import { Entry } from '../../models/Entry';
import { User } from '../../models/User';
import APIService from '../../services/APIService';

export default Vue.extend({
  name: 'Admin',
  data() {
    return {
      entries: [] as Entry[],
      categories: [] as Category[],
      users: [] as User[],
      userToUpdate: {} as User,
      updatedUsername: ''
    };
  },
  methods: {
    async toggleRole(user: User): Promise<void> {
      await APIService.updateUser(user);
    },
    async deleteUser(id: number): Promise<void> {
      await APIService.deleteUser(id);
      this.users = await APIService.getUsers();
    },
    updateUser(user: User): void {
      this.userToUpdate = user;
      this.updatedUsername = user.username;
      this.$modal.show('updateUser');
    },
    async updateUserSubmit(): Promise<void> {
      this.$modal.hide('updateUser');
      const users = await APIService.getUsers();
      const user = users.find((user) => user.id === this.userToUpdate.id) as User;
      user.username = this.updatedUsername;
      await APIService.updateUser(user);
    }
  },
  async mounted(): Promise<void> {
    const response = await APIService.checkIsAdmin();
    if (response.status !== 200) {
      this.$router.push('/');
    }
    this.entries = await APIService.getEntries();
    this.categories = await APIService.getCategories();
    this.users = await APIService.getUsers();
  }
});
