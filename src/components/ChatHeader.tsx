import React from 'react';
import { Phone, Video, MoreVertical, ArrowLeft } from 'lucide-react';

interface ChatHeaderProps {
  coachName: string;
  coachStatus: string;
  onBack?: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  coachName,
  coachStatus,
  onBack
}) => {
  return (
    <div className="bg-emerald-600 text-white px-4 py-3 flex items-center justify-between shadow-lg">
      <div className="flex items-center space-x-3">
        {onBack && (
          <button
            onClick={onBack}
            className="p-2 -ml-2 rounded-full hover:bg-emerald-700 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
        )}
        <div className="relative">
          <div className="w-10 h-10 bg-emerald-400 rounded-full flex items-center justify-center font-bold text-emerald-900">
            CP
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-emerald-600"></div>
        </div>
        <div>
          <h2 className="font-semibold text-lg">{coachName}</h2>
          <p className="text-emerald-100 text-sm">{coachStatus}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="p-2 rounded-full hover:bg-emerald-700 transition-colors">
          <Video size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-emerald-700 transition-colors">
          <Phone size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-emerald-700 transition-colors">
          <MoreVertical size={20} />
        </button>
      </div>
    </div>
  );
};