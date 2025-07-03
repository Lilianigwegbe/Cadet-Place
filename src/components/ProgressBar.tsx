import React from 'react';
import { Trophy, Target, Flame } from 'lucide-react';

interface ProgressBarProps {
  currentLevel: number;
  totalLessons: number;
  completedLessons: number;
  streak: number;
  points: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentLevel,
  totalLessons,
  completedLessons,
  streak,
  points
}) => {
  const progress = (completedLessons / totalLessons) * 100;

  return (
    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Trophy size={20} className="text-yellow-300" />
          <span className="font-semibold">Level {currentLevel}</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Target size={16} className="text-blue-300" />
            <span className="text-sm">{points} XP</span>
          </div>
          <div className="flex items-center space-x-1">
            <Flame size={16} className="text-orange-300" />
            <span className="text-sm">{streak} days</span>
          </div>
        </div>
      </div>
      
      <div className="mb-2">
        <div className="flex justify-between text-sm mb-1">
          <span>Progress</span>
          <span>{completedLessons}/{totalLessons} lessons</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div 
            className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <div className="text-xs text-emerald-100">
        {totalLessons - completedLessons} lessons remaining to level up!
      </div>
    </div>
  );
};