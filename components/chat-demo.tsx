'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChatBubble } from './chat-bubble';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis } from 'recharts';
import { Button } from './ui/button';
import { PulseButton } from './ui/button-pulse';
import { WhatsappIcon } from './whatsapp-icon';

// Definição das interfaces
interface SpendingData {
  day: string;
  amount: number;
}

interface CategoryData {
  name: string;
  value: number;
  percentage: string;
}

interface Message {
  type: 'user' | 'bot';
  content: string | React.ReactNode;
}

// Constantes
const COLORS = ['#38bdf8', '#34d399', '#a78bfa', '#fb923c', '#f87171'];

const spendingData: SpendingData[] = [
  { day: 'Seg', amount: 72 },
  { day: 'Ter', amount: 155 },
  { day: 'Qua', amount: 105 },
  { day: 'Qui', amount: 53 },
  { day: 'Sex', amount: 64 },
  { day: 'Sáb', amount: 131 },
  { day: 'Dom', amount: 52 }
];

const categoryData: CategoryData[] = [
  { name: 'Alimentação', value: 229, percentage: '36%' },
  { name: 'Transporte', value: 146, percentage: '23%' },
  { name: 'Lazer', value: 87, percentage: '14%' },
  { name: 'Contas Fixas', value: 103, percentage: '16%' },
  { name: 'Outros', value: 67, percentage: '11%' }
];

// Componente StatisticsView
const StatisticsView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Últimos 7 dias</h3>
        <p className="text-sm text-gray-500 mb-4">R$ 632,00 - 29/04 a 05/05</p>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={spendingData}>
            <XAxis dataKey="day" />
            <Bar dataKey="amount" fill="#34d399" />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-sm text-orange-600 mt-2">
          Seus gastos aumentaram em 20% essa semana
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Divisão de gastos</h3>
        <p className="text-sm text-gray-500 mb-4">29/04 a 05/05</p>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {categoryData.map((category, index) => (
            <div key={index} className="flex items-center text-sm">
              <div 
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span>{category.name} ({category.percentage})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Componente ChatDemo principal
export const ChatDemo: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [expenses, setExpenses] = useState<string[]>([]);
  const [showStats, setShowStats] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: 'Olá! Sou seu assistente financeiro. Adicione alguns gastos para ver como funciona!'
    }
  ]);
  
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const [item, amount] = inputValue.split(' ');
    
    setMessages(prev => [...prev, {
      type: 'user',
      content: inputValue
    }]);

    setExpenses(prev => [...prev, inputValue]);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: (
          <div>
            <div className="font-bold">Gasto adicionado</div>
            <div className="font-bold">{item.toUpperCase()}</div>
            <div className="font-bold">R$ {amount},00</div>
            <div className="text-sm text-gray-600">05/05/2025</div>
          </div>
        )
      }]);
    }, 1000);

    setInputValue('');
  };

  const handleShowStats = () => {
    setShowStats(true);
    setMessages(prev => [...prev, {
      type: 'bot',
      content: <StatisticsView />
    }]);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-[#efeae2] rounded-lg shadow-md overflow-hidden">
        <div className="bg-[#128C7E] text-white p-3 flex items-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
            <img 
              src="https://i.imgur.com/AI4c7em.png" 
              alt="AssisZapp Bot" 
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div>
            <div className="font-semibold">AssisZapp Assistente</div>
            <div className="text-xs opacity-80">online</div>
          </div>
        </div>
        
        <div ref={chatContainerRef} className="p-4 h-[600px] overflow-y-auto">
          {messages.map((message, index) => (
            <ChatBubble
              key={index}
              content={message.content}
              sender={message.type}
              timestamp="13:53"
            />
          ))}
        </div>
        
        <div className="p-2 bg-[#f0f2f5] border-t">
          {!showStats && expenses.length > 0 && (
            <div className="px-2 pb-2">
              <Button 
                onClick={handleShowStats}
                className="w-full bg-orange-500 hover:bg-orange-600"
              >
                Ver Estatísticas
              </Button>
            </div>
          )}
          {showStats ? (
            <a 
              href="https://pay.kirvano.com/079465dd-9e3e-4933-b0f0-8b1de9951cc9"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <PulseButton className="w-full flex items-center justify-center gap-2">
                <WhatsappIcon className="w-4 h-4" />
                Adquirir Sistema
              </PulseButton>
            </a>
          ) : (
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Digite o item e valor (ex: cinema 45)"
              />
              <button 
                type="submit"
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center"
              >
                <Send size={20} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};