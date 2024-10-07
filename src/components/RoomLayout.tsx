import React from 'react';
import { Seat } from '../types';
import SeatGroup from './SeatGroup';

interface RoomLayoutProps {
  seats: Seat[];
  onSeatClick: (seatId: string) => void;
}

const RoomLayout: React.FC<RoomLayoutProps> = ({ seats, onSeatClick }) => {
  const groupA = seats.slice(0, 100);
  const groupB = seats.slice(100, 200);
  const groupC = seats.slice(200, 236);
  const groupD = seats.slice(236, 248);

  return (
    <div className="relative w-full h-[800px] border-4 border-gray-300">
      <div className="absolute top-0 left-0 w-[45%]">
        <SeatGroup seats={groupA} rows={5} cols={5} seatsPerTable={4} onSeatClick={onSeatClick} />
      </div>
      <div className="absolute top-0 right-0 w-[45%]">
        <SeatGroup seats={groupB} rows={5} cols={5} seatsPerTable={4} onSeatClick={onSeatClick} />
      </div>
      <div className="absolute bottom-32 left-0 w-full">
        <SeatGroup seats={groupC} rows={3} cols={12} seatsPerTable={1} onSeatClick={onSeatClick} />
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <SeatGroup seats={groupD} rows={12} cols={1} seatsPerTable={1} onSeatClick={onSeatClick} />
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-300 w-64 h-8 flex items-center justify-center text-sm">
        讲台
      </div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center text-sm">
        空调
      </div>
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center text-sm">
        空调
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-300 w-32 h-8 flex items-center justify-center text-sm">
        门口
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 w-8 h-16 flex items-center justify-center text-sm writing-mode-vertical-rl">
        书架
      </div>
    </div>
  );
};

export default RoomLayout;