import React from 'react';
import { Seat } from '../types';

interface SeatGroupProps {
  seats: Seat[];
  rows: number;
  cols: number;
  seatsPerTable: number;
  onSeatClick: (seatId: string) => void;
}

const SeatGroup: React.FC<SeatGroupProps> = ({ seats, rows, cols, seatsPerTable, onSeatClick }) => {
  return (
    <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {Array.from({ length: rows * cols }).map((_, tableIndex) => (
        <div key={tableIndex} className="bg-gray-200 p-0.5 rounded-sm">
          <div className={`grid ${seatsPerTable === 4 ? 'grid-cols-2 grid-rows-2' : 'grid-cols-1'} gap-0.5`}>
            {Array.from({ length: seatsPerTable }).map((_, seatIndex) => {
              const seatNumber = tableIndex * seatsPerTable + seatIndex;
              const seat = seats[seatNumber];
              return (
                <button
                  key={seat.id}
                  className={`w-full h-6 flex items-center justify-center text-xs font-semibold ${
                    seat.status === 'available'
                      ? 'bg-green-200 hover:bg-green-300'
                      : seat.status === 'selected'
                      ? 'bg-blue-500 text-white'
                      : 'bg-red-200 cursor-not-allowed'
                  }`}
                  onClick={() => onSeatClick(seat.id)}
                  disabled={seat.status === 'occupied'}
                >
                  {seat.id}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeatGroup;