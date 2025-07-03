import React, { useRef, useEffect } from 'react';
import { ChatHeader } from './components/ChatHeader';
import { Message } from './components/Message';
import { MessageInput } from './components/MessageInput';
import { ProgressBar } from './components/ProgressBar';
import { TypingIndicator } from './components/TypingIndicator';
import { useMessages } from './hooks/useMessages';

function App() {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const {
    messages,
    isTyping,
    sendUserMessage,
    handleQuizAnswer,
    handleLessonStart,
  } = useMessages();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Progress Bar */}
      <ProgressBar
        currentLevel={3}
        totalLessons={15}
        completedLessons={8}
        streak={5}
        points={1250}
      />
      
      {/* Chat Header */}
      <ChatHeader
        coachName="Cadet Place Coach"
        coachStatus="Online • Ready to help you learn"
      />
      
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto bg-gradient-to-b from-emerald-50 to-white">
        <div className="px-4 py-6 space-y-4">
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              onQuizAnswer={handleQuizAnswer}
              onLessonStart={handleLessonStart}
            />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Message Input */}
      <MessageInput
        onSendMessage={sendUserMessage}
        disabled={isTyping}
      />
    </div>
  );
}

export default App;