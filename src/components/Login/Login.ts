import { AxiosResponse } from 'axios';
import Vue from 'vue';
import { Role } from '../../models/Role';
import APIService from '../../services/APIService';

export default Vue.extend({
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login(): Promise<void> {
      const response: AxiosResponse<Role> = await APIService.login({ username: this.username, password: this.password });
      if (response.status === 200) {
        console.log(response.headers.authorization);
        localStorage.setItem('auth_token', response.headers.authorization.split(' ')[1]);
        this.$router.push('/');
      } else {
        Vue.notify({ group: 'errors', title: 'Fehler', text: 'Benutzername oder Passwort ist falsch', type: 'error' });
        this.$modal.show('errors');
      }
    }
  }
});
