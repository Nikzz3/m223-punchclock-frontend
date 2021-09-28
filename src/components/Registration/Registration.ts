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
      console.log(this.username, this.password, this.repeatedPassword);
      if (this.password === this.repeatedPassword) {
        const response: AxiosResponse = await APIService.signUp({ username: this.username, password: this.password });
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
