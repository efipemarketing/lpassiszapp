'use client';

import React, { useState, useEffect } from 'react';
import { ChatBubble } from './chat-bubble';
import { DEMO_CHAT } from '@/lib/constants';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

interface DemoResponseProps {
  type: 'expense' | 'alert';
  content: {
    icon?: string;
    title?: string;
    amount?: string;
    date?: string;
    text?: string;
  };
}

function DemoResponse({ type, content }: DemoResponseProps) {
  if (type === 'expense') {
    return (
      <div className="flex flex-col">
        <div className="font-bold">Gasto adicionado</div>
        <div className="flex items-center gap-2">
          <span>{content.icon}</span> <span className="font-semibold">{content.title}</span>
        </div>
        <div className="font-bold">{content.amount}</div>
        <div className="text-sm text-gray-600">{content.date}</div>
      </div>
    );
  }
  
  if (type === 'alert') {
    return (
      <div className="font-medium">
        {content.text}
      </div>
    );
  }
  
  return null;
}

export function ChatInteraction() {
  const [inputValue, setInputValue] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(true);
  const [showTyping, setShowTyping] = useState(false);
  const [showResponses, setShowResponses] = useState(false);
  const [showContinueButton, setShowContinueButton] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    setIsInputVisible(false);
    setShowTyping(true);
    
    setTimeout(() => {
      setShowTyping(false);
      setShowResponses(true);
      
      setTimeout(() => {
        setShowContinueButton(true);
      }, 1000);
    }, 1500);
  };
  
  const resetDemo = () => {
    setIsInputVisible(true);
    setInputValue('');
    setShowTyping(false);
    setShowResponses(false);
    setShowContinueButton(false);
  };
  
  // Auto-fill the example after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setInputValue(DEMO_CHAT.input);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#efeae2] rounded-lg shadow-md overflow-hidden w-full max-w-md mx-auto">
      {/* WhatsApp-like header */}
      <div className="bg-[#128C7E] text-white p-3 flex items-center">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
          <span className="text-[#128C7E] text-xl">💰</span>
        </div>
        <div>
          <div className="font-semibold">FinBot Assistente</div>
          <div className="text-xs opacity-80">online</div>
        </div>
      </div>
      
      {/* Chat area */}
      <div className="p-4 h-[300px] overflow-y-auto flex flex-col">
        <ChatBubble
          content={
            <div>
              <p className="font-medium">Olá! Sou seu assistente financeiro.</p>
              <p className="mt-1">Vamos testar? Digite o que comprou e o valor, por exemplo: <strong>ifood 44</strong></p>
            </div>
          }
          timestamp="13:52"
        />
        
        {!isInputVisible && (
          <ChatBubble
            content={DEMO_CHAT.input}
            sender="user"
            timestamp="13:53"
          />
        )}
        
        {showTyping && (
          <ChatBubble
            isTyping={true}
          />
        )}
        
        {showResponses && DEMO_CHAT.response.map((response, index: number) => (
          <ChatBubble
            key={index}
            content={
              <DemoResponse
                type={response.type as 'expense' | 'alert'}
                content={response.content}
              />
            }
            delay={index * 500}
            timestamp="13:53"
          />
        ))}
      </div>
      
      {/* Input area */}
      <div className="p-2 bg-[#f0f2f5] border-t">
        {isInputVisible ? (
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite uma mensagem..."
            />
            <button 
              type="submit"
              className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center"
            >
              <Send size={20} />
            </button>
          </form>
        ) : showContinueButton ? (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full rounded-full px-4 py-2 bg-orange-400 text-white font-medium"
            onClick={resetDemo}
          >
            Continuar
          </motion.button>
        ) : null}
      </div>
    </div>
  );
}