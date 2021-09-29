import { Entry } from './Entry';

export interface Category {
  id: number;
  description: string;
  name: string;
  entries: Entry[];
}
