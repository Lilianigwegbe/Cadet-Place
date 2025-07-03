import React from 'react';
import { Check, CheckCheck, Clock, Award, BookOpen } from 'lucide-react';

export interface MessageData {
  id: string;
  type: 'text' | 'lesson' | 'quiz' | 'achievement';
  content: string;
  sender: 'coach' | 'user';
  timestamp: string;
  status?: 'sent' | 'delivered' | 'read';
  lessonData?: {
    title: string;
    duration: string;
    progress: number;
  };
  quizData?: {
    question: string;
    options: string[];
    correct?: number;
    userAnswer?: number;
  };
  achievementData?: {
    title: string;
    description: string;
    icon: string;
  };
}

interface MessageProps {
  message: MessageData;
  onQuizAnswer?: (messageId: string, answer: number) => void;
  onLessonStart?: (messageId: string) => void;
}

export const Message: React.FC<MessageProps> = ({
  message,
  onQuizAnswer,
  onLessonStart
}) => {
  const isCoach = message.sender === 'coach';
  
  const StatusIcon = () => {
    if (message.sender === 'user') {
      switch (message.status) {
        case 'sent': return <Clock size={16} className="text-gray-400" />;
        case 'delivered': return <Check size={16} className="text-gray-400" />;
        case 'read': return <CheckCheck size={16} className="text-blue-500" />;
        default: return null;
      }
    }
    return null;
  };

  const renderContent = () => {
    switch (message.type) {
      case 'lesson':
        return (
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <BookOpen size={20} className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{message.lessonData?.title}</h4>
                <p className="text-sm text-gray-600">{message.lessonData?.duration}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3">{message.content}</p>
            <div className="flex items-center justify-between">
              <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${message.lessonData?.progress || 0}%` }}
                ></div>
              </div>
              <button
                onClick={() => onLessonStart?.(message.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
              >
                Start Lesson
              </button>
            </div>
          </div>
        );
      
      case 'quiz':
        return (
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">{message.quizData?.question}</h4>
            <div className="space-y-2">
              {message.quizData?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => onQuizAnswer?.(message.id, index)}
                  className={`w-full text-left p-3 rounded-lg border transition-all ${
                    message.quizData?.userAnswer === index
                      ? message.quizData?.correct === index
                        ? 'bg-green-50 border-green-500 text-green-700'
                        : 'bg-red-50 border-red-500 text-red-700'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 'achievement':
        return (
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-4 text-white">
            <div className="flex items-center space-x-3 mb-2">
              <Award size={24} className="text-yellow-200" />
              <h4 className="font-bold text-lg">{message.achievementData?.title}</h4>
            </div>
            <p className="text-yellow-100">{message.achievementData?.description}</p>
          </div>
        );
      
      default:
        return <p className="text-gray-800">{message.content}</p>;
    }
  };

  return (
    <div className={`mb-4 flex ${isCoach ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-xs lg:max-w-md ${isCoach ? 'mr-12' : 'ml-12'}`}>
        <div
          className={`px-4 py-3 rounded-2xl ${
            isCoach
              ? 'bg-white shadow-md border border-gray-200'
              : 'bg-emerald-500 text-white shadow-md'
          } ${
            message.type === 'lesson' || message.type === 'quiz' || message.type === 'achievement'
              ? 'p-0 bg-transparent shadow-none border-none'
              : ''
          }`}
        >
          {renderContent()}
        </div>
        <div className={`flex items-center space-x-1 mt-1 ${isCoach ? 'justify-start' : 'justify-end'}`}>
          <span className="text-xs text-gray-500">{message.timestamp}</span>
          <StatusIcon />
        </div>
      </div>
    </div>
  );
};