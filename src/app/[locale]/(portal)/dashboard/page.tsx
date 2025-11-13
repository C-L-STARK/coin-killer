"use client";

import React, { useState, useEffect } from 'react';
import AdminLogin from './components/AdminLogin';
import SidebarMenu from './components/SidebarMenu';
import TiantiPanel from './components/TiantiPanel';
import LivestreamManager from './components/LivestreamManager';
import BlogManager from './components/BlogManager';
import ConfigManager from './components/ConfigManager';
import TopTradersManager from './components/TopTradersManager';
import { useLanguage } from '@/contexts/LanguageContext';
import type { TradingConfig } from '@/lib/trading/types';

// 默认配置 - 回调策略
const defaultConfig: TradingConfig = {
  symbol: 'XAUUSDT',
  interval: '1m',
  strategy: {
    aggressiveness: 3,
    trailingActivation: 1.5,
    trailingDistance: 1.0,
    indicators: {
      keltner: {
        maPeriod: 20,
        atrPeriod: 14,
        atrMultiple: 1.5,
      },
      bollinger: {
        period: 20,
        deviation: 2.0,
      },
      macd: {
        fastPeriod: 12,
        slowPeriod: 26,
        signalPeriod: 9,
      },
      cci: {
        period: 14,
      },
      supertrend: {
        period: 10,
        multiplier: 3.0,
      },
    },
  },
  risk: {
    maxDailyLoss: 90000,
    maxDrawdown: 0.50,
    maxPositions: 1,
    positionSize: 0.01,
    leverage: 20,
    stopLossMultiple: 2.0,
    takeProfitLevels: [3.0, 6.0, 9.0],
  },
};

export default function TradingDashboard() {
  const [tradingConfig, setTradingConfig] = useState<TradingConfig>(defaultConfig);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('strategy');
  const { language, t } = useLanguage();

  // Hide navbar when authenticated, show when logged out
  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      if (isAuthenticated) {
        navbar.style.display = 'none';
      } else {
        navbar.style.display = 'block';
      }
    }

    // Cleanup: show navbar when component unmounts
    return () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.display = 'block';
      }
    };
  }, [isAuthenticated]);

  useEffect(() => {
    const authenticated = localStorage.getItem('dashboard_authenticated');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }

    const savedConfig = localStorage.getItem('trading_config');
    if (savedConfig) {
      try {
        const parsedConfig = JSON.parse(savedConfig);
        setTradingConfig(parsedConfig);
      } catch (error) {
        console.error('Failed to load saved config:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('trading_config', JSON.stringify(tradingConfig));
  }, [tradingConfig]);

  const handleLogout = () => {
    localStorage.removeItem('dashboard_authenticated');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin onAuthenticate={() => setIsAuthenticated(true)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'strategy':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-black text-black dark:text-white mb-6">
              {language === 'zh' ? '天梯趋势' : 'Tianti Trend'}
            </h1>
            <TiantiPanel config={tradingConfig} onConfigChange={setTradingConfig} />
          </div>
        );
      case 'livestream':
        return <LivestreamManager />;
      case 'blog':
        return <BlogManager />;
      case 'top-traders':
        return <TopTradersManager />;
      case 'config':
        return <ConfigManager />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 fixed inset-0 z-50">
      {/* Sidebar */}
      <SidebarMenu activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white dark:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-700 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-black dark:text-white">
                {language === 'zh' ? '汇刃控制台' : 'FX Killer Dashboard'}
              </h2>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {language === 'zh' ? '退出登录' : 'Logout'}
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
