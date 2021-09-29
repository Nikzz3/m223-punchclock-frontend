import Vue from 'vue';
import APIService from '../../services/APIService';

export default Vue.extend({
  name: 'Navbar',
  data() {
    return {
      isAdmin: true
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem('auth_token');
      location.reload();
    }
  },
  async mounted(): Promise<void> {
    const response = await APIService.checkIsAdmin();
    if (response.status !== 200) {
      this.isAdmin = false;
    }
  }
});
