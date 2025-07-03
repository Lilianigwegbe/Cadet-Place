import { useState, useEffect } from 'react';
import { MessageData } from '../components/Message';

export const useMessages = () => {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const initialMessages: MessageData[] = [
    {
      id: '1',
      type: 'text',
      content: 'Welcome to Cadet Place! 🎯 I\'m your personal learning coach. Ready to level up your skills?',
      sender: 'coach',
      timestamp: '10:00 AM',
    },
    {
      id: '2',
      type: 'lesson',
      content: 'Let\'s start with the fundamentals. This lesson covers the basics you need to know.',
      sender: 'coach',
      timestamp: '10:01 AM',
      lessonData: {
        title: 'Introduction to Leadership',
        duration: '5 min read',
        progress: 0,
      },
    },
  ];

  useEffect(() => {
    // Simulate initial messages loading
    const timer = setTimeout(() => {
      setMessages(initialMessages);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const addMessage = (message: MessageData) => {
    setMessages(prev => [...prev, message]);
  };

  const simulateCoachResponse = (userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      
      const responses = [
        "Great question! Let me help you with that.",
        "I can see you're making progress. Keep it up! 💪",
        "That's an interesting perspective. Let's explore this further.",
        "Perfect! You're really getting the hang of this.",
        "Let's try a different approach to this concept.",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const coachMessage: MessageData = {
        id: Date.now().toString(),
        type: 'text',
        content: randomResponse,
        sender: 'coach',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      
      addMessage(coachMessage);
      
      // Sometimes add a quiz or achievement
      if (Math.random() > 0.7) {
        setTimeout(() => {
          const quizMessage: MessageData = {
            id: (Date.now() + 1).toString(),
            type: 'quiz',
            content: '',
            sender: 'coach',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            quizData: {
              question: 'What is the most important quality of a good leader?',
              options: [
                'Communication skills',
                'Decision-making ability',
                'Empathy and emotional intelligence',
                'Technical expertise'
              ],
              correct: 2,
            },
          };
          addMessage(quizMessage);
        }, 2000);
      }
    }, 1500);
  };

  const sendUserMessage = (content: string) => {
    const userMessage: MessageData = {
      id: Date.now().toString(),
      type: 'text',
      content,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent',
    };
    
    addMessage(userMessage);
    
    // Update message status
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === userMessage.id ? { ...msg, status: 'delivered' } : msg
      ));
    }, 1000);
    
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === userMessage.id ? { ...msg, status: 'read' } : msg
      ));
    }, 2000);
    
    simulateCoachResponse(content);
  };

  const handleQuizAnswer = (messageId: string, answer: number) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId && msg.quizData 
        ? { ...msg, quizData: { ...msg.quizData, userAnswer: answer } }
        : msg
    ));
    
    // Add achievement if correct
    const message = messages.find(m => m.id === messageId);
    if (message?.quizData?.correct === answer) {
      setTimeout(() => {
        const achievementMessage: MessageData = {
          id: Date.now().toString(),
          type: 'achievement',
          content: '',
          sender: 'coach',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          achievementData: {
            title: 'Quick Learner!',
            description: 'You got that question right on the first try!',
            icon: '🎯',
          },
        };
        addMessage(achievementMessage);
      }, 1000);
    }
  };

  const handleLessonStart = (messageId: string) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId && msg.lessonData
        ? { ...msg, lessonData: { ...msg.lessonData, progress: 100 } }
        : msg
    ));
    
    setTimeout(() => {
      const completionMessage: MessageData = {
        id: Date.now().toString(),
        type: 'text',
        content: 'Excellent work! You\'ve completed the lesson. Ready for the next challenge?',
        sender: 'coach',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      addMessage(completionMessage);
    }, 2000);
  };

  return {
    messages,
    isTyping,
    sendUserMessage,
    handleQuizAnswer,
    handleLessonStart,
  };
};