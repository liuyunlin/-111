import React, { useState } from 'react';
import RoomLayout from './components/RoomLayout';
import Legend from './components/Legend';
import { Seat } from './types';

const createSeats = (count: number, prefix: string): Seat[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `${prefix}${i + 1}`,
    status: 'available'
  }));

const initialSeats: Seat[] = [
  ...createSeats(100, 'A'), // 左上方 5x5 的区域，每个方框 4 个座位
  ...createSeats(100, 'B'), // 右上方 5x5 的区域，每个方框 4 个座位
  ...createSeats(36, 'C'),  // 中间 3 排，每排 12 个座位
  ...createSeats(12, 'D'),  // 右侧一列 12 个座位
];

function App() {
  const [seats, setSeats] = useState<Seat[]>(initialSeats);

  const handleSeatClick = (seatId: string) => {
    setSeats(prevSeats =>
      prevSeats.map(seat =>
        seat.id === seatId
          ? { ...seat, status: seat.status === 'available' ? 'selected' : 'available' }
          : seat
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">自习室座位预约系统</h1>
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <RoomLayout seats={seats} onSeatClick={handleSeatClick} />
        <Legend />
      </div>
    </div>
  );
}

export default App;