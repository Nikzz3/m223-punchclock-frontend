import { Entry } from '@/models/Entry';
import { AxiosResponse } from 'axios';
import { Role } from '../models/Role';
import { User } from '../models/User';
import HTTPService from './HTTPService';

function getConfig() {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('auth_token')}` }
  };
  return config;
}

export default {
  async getEntries(): Promise<Entry[]> {
    const response: AxiosResponse<Entry[]> = await HTTPService.get('entries', getConfig());
    return response.data;
  },

  async createEntry(entry: Entry): Promise<Entry> {
    const response: AxiosResponse<Entry> = await HTTPService.post('entries', entry, getConfig());
    return response.data;
  },

  async updateEntry(id: string, entry: Entry): Promise<Entry> {
    const response: AxiosResponse<Entry> = await HTTPService.put(`entries/${id}`, entry, getConfig());
    return response.data;
  },

  async deleteEntry(id: string): Promise<Entry> {
    const response: AxiosResponse<Entry> = await HTTPService.delete(`entries/${id}`, getConfig());
    return response.data;
  },

  async signUp(user: User): Promise<AxiosResponse> {
    return await HTTPService.post('users/sign-up', user).catch((err) => err);
  },

  async login(user: User): Promise<AxiosResponse<Role>> {
    return await HTTPService.post('login', user).catch((err) => err);
  },

  async getAllRoles(user: User): Promise<AxiosResponse<Role[]>> {
    return await HTTPService.post('roles', user, getConfig());
  }
};
