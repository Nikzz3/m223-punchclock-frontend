import { Category } from './Category';

export interface RawEntry {
  id: string;
  checkInTime: string;
  checkInDate: string;
  checkOutTime: string;
  checkOutDate: string;
  category: Category;
}
