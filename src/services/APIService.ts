import { Entry } from '@/models/Entry';
import { AxiosResponse } from 'axios';
import HTTPService from './HTTPService';

export default {
  async getEntries(): Promise<Entry[]> {
    const response: AxiosResponse<Entry[]> = await HTTPService.get('entries');
    return response.data;
  },

  async createEntry(entry: Entry): Promise<Entry> {
    const response: AxiosResponse<Entry> = await HTTPService.post('entries', entry);
    return response.data;
  },

  async updateEntry(id: string, entry: Entry): Promise<Entry> {
    const response: AxiosResponse<Entry> = await HTTPService.put(`entries/${id}`, entry);
    return response.data;
  },

  async deleteEntry(id: string): Promise<Entry> {
    const response: AxiosResponse<Entry> = await HTTPService.delete(`entries/${id}`);
    return response.data;
  }
};
