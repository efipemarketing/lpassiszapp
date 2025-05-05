import React from 'react';
import { APP_NAME } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-xl mr-2">
                💰
              </div>
              <span className="font-bold text-xl text-white">
                {APP_NAME}
              </span>
            </div>
            <p className="text-sm">
              Seu assistente financeiro no WhatsApp, disponível 24h por dia, 7 dias por semana.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Como funciona</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Perguntas frequentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dicas financeiras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutoriais</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Termos de uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {currentYear} {APP_NAME}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}