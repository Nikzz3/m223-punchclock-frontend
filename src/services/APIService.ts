import { Entry } from '@/models/Entry';
import { AxiosResponse } from 'axios';
import { Category } from '../models/Category';
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

  async getUsers(): Promise<User[]> {
    const response: AxiosResponse<User[]> = await HTTPService.get('users', getConfig());
    return response.data;
  },

  async toggleUser(user: User): Promise<User | undefined> {
    const adminRole: AxiosResponse<Role> = await HTTPService.get('roles/1', getConfig());
    if (adminRole.data) {
      user.role = adminRole.data;
      const response: AxiosResponse<User> = await HTTPService.put('users', user, getConfig());
      return response.data;
    }
  },

  async createEntry(entry: Entry): Promise<Entry> {
    const response: AxiosResponse<Entry> = await HTTPService.post('entries', entry, getConfig());
    return response.data;
  },

  async updateEntry(id: string, entry: Entry): Promise<Entry> {
    const response: AxiosResponse<Entry> = await HTTPService.put(`entries/${id}`, entry, getConfig());
    return response.data;
  },

  async updateUser(user: User): Promise<User> {
    const response: AxiosResponse<User> = await HTTPService.put(`users/${user.id}`, user, getConfig());
    return response.data;
  },

  async deleteEntry(id: string): Promise<Entry> {
    const response: AxiosResponse<Entry> = await HTTPService.delete(`entries/${id}`, getConfig());
    return response.data;
  },

  async deleteUser(id: number): Promise<AxiosResponse<User>> {
    return await HTTPService.delete(`users/${id}`, getConfig());
  },

  async signUp(user: User): Promise<AxiosResponse> {
    return await HTTPService.post('users/sign-up', user).catch((err) => err);
  },

  async checkIsAdmin(): Promise<AxiosResponse> {
    return await HTTPService.get('users/admin', getConfig()).catch((err) => err);
  },

  async login(username: string, password: string): Promise<AxiosResponse<Role>> {
    return await HTTPService.post('login', { username, password }).catch((err) => err);
  },

  async getRoles(): Promise<AxiosResponse<Role[]>> {
    return await HTTPService.get('roles', getConfig());
  },

  async getCategories(): Promise<Category[]> {
    const response: AxiosResponse<Category[]> = await HTTPService.get('category', getConfig());
    return response.data;
  }
};
