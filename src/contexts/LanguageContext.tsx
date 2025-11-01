"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 翻译字典
const translations: Record<Language, Record<string, string>> = {
  zh: {
    // 导航栏
    'nav.home': '首页',
    'nav.training': '外汇培训',
    'nav.psychology': '心理测评',
    'nav.dashboard': '交易系统',
    'nav.faq': '常见问题',
    'nav.membership': '会员',
    'nav.join': '立即报名',

    // 主题切换
    'theme.light': '日间模式',
    'theme.dark': '夜间模式',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.training': 'FX Training',
    'nav.psychology': 'Psychology Test',
    'nav.dashboard': 'Dashboard',
    'nav.faq': 'FAQ',
    'nav.membership': 'Membership',
    'nav.join': 'Join Now',

    // Theme
    'theme.light': 'Light Mode',
    'theme.dark': 'Dark Mode',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 从localStorage读取语言偏好
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'zh' ? 'en' : 'zh';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
