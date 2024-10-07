export interface Seat {
  id: string;
  status: 'available' | 'selected' | 'occupied';
}