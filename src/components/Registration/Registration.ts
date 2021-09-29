import { AxiosResponse } from 'axios';
import Vue from 'vue';
import APIService from '../../services/APIService';

export default Vue.extend({
  name: 'Registration',
  data() {
    return {
      username: '',
      password: '',
      repeatedPassword: ''
    };
  },
  methods: {
    async createLogin(): Promise<void> {
      if (this.password === this.repeatedPassword) {
        // Role will be replaced in the backend
        const response: AxiosResponse = await APIService.signUp({
          // Id will be replaced in the backend
          id: 0,
          username: this.username,
          password: this.password,
          role: { id: 1, name: '' }
        });
        if (response.status === 200) {
          this.$router.push('/login');
        } else {
          this.username = '';
          this.password = '';
          this.repeatedPassword = '';
        }
      } else {
        Vue.notify({ group: 'errors', title: 'Fehler', text: 'Die Passwörter müssen überein stimmen', type: 'error' });
        this.$modal.show('errors');
        this.password = '';
        this.repeatedPassword = '';
      }
    }
  }
});
