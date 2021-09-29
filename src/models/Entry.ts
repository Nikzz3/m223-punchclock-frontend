import { Category } from './Category';

export interface Entry {
  id: string;
  checkIn: string;
  checkOut: string;
  category: Category;
}
