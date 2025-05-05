import React from 'react';
import { HERO_TITLE, HERO_SUBTITLE } from '@/lib/constants';

export function HeroSection() {
  return (
    <div className="text-left max-w-xl">
      <p className="text-sm md:text-base text-gray-600 mb-2">
        A mesma tecnologia usada por gerentes de investimentos.
      </p>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
        <span className="text-gray-800">{HERO_TITLE.start} </span>
        <span className="text-orange-500 relative">
          {HERO_TITLE.highlight}
          <svg className="absolute bottom-0 left-0 w-full h-3 text-orange-200 -z-10" viewBox="0 0 200 9">
            <path d="M0,9 C50,0 150,18 200,9 L200,0 L0,0 Z" fill="currentColor"></path>
          </svg>
        </span>
        <span className="text-gray-800"> {HERO_TITLE.end}</span>
      </h1>
      
      <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-gray-700">
        <span className="block md:inline">{HERO_SUBTITLE.first}</span>{' '}
        <span className="block md:inline">{HERO_SUBTITLE.second}</span>
      </h2>
      
      <p className="text-base md:text-lg text-gray-600">
        Não é app, nem planilha, nem Notion,{' '}
        <span className="font-semibold">é inteligência artificial de ponta.</span>
      </p>
    </div>
  );
}