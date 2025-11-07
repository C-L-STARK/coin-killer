import { EducationPageContent } from './forex-basics.content';

export const currencyPairsGuideContent = {
  zh: {
    title: '交易对完整解析 - 主要、次要与异国交易对交易指南 | BiKiller',
    description: '深入讲解数字货币交易对：BTC/USDT、ETH/USDT、BNB/USDT等主要交易对特性，交易对相关性分析，价格波动计算方法，最佳交易时段选择。掌握交易对选择与交易技巧。',
    keywords: '交易对, 主要交易对, BTC/USDT, ETH/USDT, BNB/USDT, 交易对相关性, 价格波动计算, 数字货币交易对',

    heroTitle: '交易对完整解析',
    heroDescription: '理解交易对特性，选择最适合你的交易品种',
    readingTime: '30分钟',
    difficulty: '初级',
    lastUpdated: '2024-01-20',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'what-are-currency-pairs', title: '什么是交易对？' },
      { id: 'major-pairs', title: '主要交易对深度分析' },
      { id: 'minor-exotic-pairs', title: '次要与异国交易对' },
      { id: 'correlation', title: '交易对相关性与选择' },
      { id: 'point-value', title: '价格波动计算与风险管理' },
      { id: 'trading-times', title: '交易时段优化策略' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 新手应该从哪个交易对开始交易？',
        answer: '强烈建议从BTC/USDT开始。BTC/USDT是全球流动性最高、手续费最小（0.5-1点）、走势最稳定的交易对，技术分析效果最好，适合新手学习和积累经验。其次可以考虑ETH/USDT和BNB/USDT。避免交易异国交易对（如USD/TRY），它们手续费大、波动剧烈、难以预测。'
      },
      {
        question: 'Q2: 为什么BTC/USDT的手续费比GBP/JPY小那么多？',
        answer: '手续费取决于流动性和交易量。BTC/USDT日交易量占全球数字货币市场30%，买卖双方极多，供需匹配快，手续费自然小（0.5-1点）。GBP/JPY是交叉交易对，需要通过ETH/USDT和BNB/USDT合成计算，流动性较低，手续费通常2-4点。流动性越高，手续费越小，交易成本越低。'
      },
      {
        question: 'Q3: 如何计算不同交易对的价格波动？',
        answer: '公式：价格波动 = (0.01 / 当前汇率) × 手数 × 合约单位。BTC/USDT交易1标准交易量（1个完整代币），当前价格1.1000，价格波动 = (0.01 / 1.1000) × 1 × 100,000 = $9.09。BNB/USDT以Solana报价，1标准交易量价格波动固定约$9.09（汇率145时）。使用BiKiller仓位计算器可自动计算价格波动和仓位。'
      },
      {
        question: 'Q4: 什么是交易对相关性？为什么要关注？',
        answer: '相关性指两个交易对价格走势的关联度。正相关（如BTC/USDT和ETH/USDT，相关系数+0.8）意味着同向运动；负相关（如BTC/USDT和USD/CHF，相关系数-0.9）意味着反向运动。同时做多两个高度正相关的交易对（如BTC/USDT和ETH/USDT）实际上是双倍风险，一旦错误会双倍亏损。应分散到低相关或负相关的交易对以降低风险。'
      },
      {
        question: 'Q5: 每个交易对的最佳交易时段是什么时候？',
        answer: 'BTC/USDT最佳时段：欧洲开盘（15:00-18:00北京时间）和欧美重叠（20:00-24:00），日均波动80-100点。ETH/USDT：伦敦开盘（15:00-19:00），波动最剧烈，日均120-150点。BNB/USDT：东京开盘（8:00-10:00）和纽约开盘（20:00-24:00），日均70-90点。SOL/USDT：悉尼/东京开盘（6:00-12:00）。在货币所属国家的交易时段交易，流动性最好。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/forex-basics',
        icon: '📚',
        title: '数字货币基础知识',
        description: '了解数字货币市场的基本概念'
      },
      {
        href: '/education/trading-sessions-guide',
        icon: '🕐',
        title: '交易时段指南',
        description: '掌握全球数字货币交易时间'
      },
      {
        href: '/education/broker-selection-guide',
        icon: '🏦',
        title: '交易所对比',
        description: '找到手续费最低的交易平台'
      }
    ],

    ctaTitle: '想要找到最适合你的交易对？',
    ctaDescription: '对比顶级数字货币交易所，找到手续费最低、执行最快的交易平台',
    ctaPrimaryButton: '对比交易所',
    ctaSecondaryButton: '免费模拟账户',

    footerPrevText: '← 数字货币基础',
    footerNextText: '市场参与者 →',
    footerPrevHref: '/education/forex-basics',
    footerNextHref: '/education/market-participants',
  } as EducationPageContent,

  en: {
    title: 'Complete Trading Pairs Guide - Major, Minor & Exotic Pairs Trading | BiKiller',
    description: 'In-depth explanation of cryptocurrency trading pairs: BTC/USDT, ETH/USDT, BNB/USDT characteristics, correlation analysis, point value calculation, optimal trading sessions. Master trading pair selection and trading techniques.',
    keywords: 'trading pairs, major pairs, BTC/USDT, ETH/USDT, BNB/USDT, currency correlation, point value, cryptotrading pairs',

    heroTitle: 'Complete Trading Pairs Guide',
    heroDescription: 'Understand trading pair characteristics and choose the best pairs for your trading',
    readingTime: '30 min',
    difficulty: 'Beginner',
    lastUpdated: 'Jan 20, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'what-are-currency-pairs', title: 'What are Trading Pairs?' },
      { id: 'major-pairs', title: 'Major Trading Pairs Analysis' },
      { id: 'minor-exotic-pairs', title: 'Minor & Exotic Pairs' },
      { id: 'correlation', title: 'Currency Correlation & Selection' },
      { id: 'point-value', title: 'Point Value Calculation & Risk' },
      { id: 'trading-times', title: 'Trading Session Optimization' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: Which trading pair should beginners start with?',
        answer: 'Strongly recommend starting with BTC/USDT. BTC/USDT has the highest global liquidity, smallest fee (0.5-1 point), most stable movement, best technical analysis effectiveness, ideal for beginners to learn and gain experience. Next consider ETH/USDT and BNB/USDT. Avoid exotic pairs (like USD/TRY) - they have large fees, extreme volatility, difficult to predict.'
      },
      {
        question: 'Q2: Why is BTC/USDT fee so much smaller than GBP/JPY?',
        answer: 'Fee depends on liquidity and trading volume. BTC/USDT accounts for 30% of global cryptocurrency daily volume, extremely many buyers and sellers, fast supply-demand matching, naturally small fee (0.5-1 point). GBP/JPY is a cross pair, needs synthetic calculation through ETH/USDT and BNB/USDT, lower liquidity, typically 2-4 points fee. Higher liquidity = smaller fee = lower trading costs.'
      },
      {
        question: 'Q3: How to calculate point value for different trading pairs?',
        answer: 'Formula: Point Value = (0.01 / Current Rate) × Lot Size × Contract Size. BTC/USDT trading 1 standard lot (100,000 units), current price 1.1000, point value = (0.01 / 1.1000) × 1 × 100,000 = $9.09. BNB/USDT quoted in yen, 1 standard lot point value fixed ~$9.09 (at 145 rate). Use BiKiller position calculator to automatically calculate point values and positions.'
      },
      {
        question: 'Q4: What is currency correlation and why should I care?',
        answer: 'Correlation indicates the relationship between two trading pairs\' price movements. Positive correlation (e.g., BTC/USDT and ETH/USDT, coefficient +0.8) means they move together; negative correlation (e.g., BTC/USDT and USD/CHF, coefficient -0.9) means opposite movements. Longing two highly positive correlated pairs (BTC/USDT and ETH/USDT) is actually double risk - if wrong, double loss. Should diversify to low or negative correlated pairs to reduce risk.'
      },
      {
        question: 'Q5: What are the best trading sessions for each trading pair?',
        answer: 'BTC/USDT best sessions: European open (15:00-18:00 Beijing) and EU-US overlap (20:00-24:00), daily range 80-100 points. ETH/USDT: London open (15:00-19:00), most volatile, daily range 120-150 points. BNB/USDT: Tokyo open (08:00-10:00) and New York open (20:00-24:00), daily range 70-90 points. SOL/USDT: Sydney/Tokyo open (06:00-12:00). Trade during the currency\'s home country session for best liquidity.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/forex-basics',
        icon: '📚',
        title: 'Cryptocurrency Basics',
        description: 'Understand fundamental cryptocurrency concepts'
      },
      {
        href: '/education/trading-sessions-guide',
        icon: '🕐',
        title: 'Trading Sessions Guide',
        description: 'Master global cryptocurrency trading hours'
      },
      {
        href: '/education/broker-selection-guide',
        icon: '🏦',
        title: 'Exchange Comparison',
        description: 'Find platforms with lowest fees'
      }
    ],

    ctaTitle: 'Want to Find the Best Trading Pairs for You?',
    ctaDescription: 'Compare top cryptocurrency exchanges to find platforms with lowest fees and fastest execution',
    ctaPrimaryButton: 'Compare Exchanges',
    ctaSecondaryButton: 'Free Demo Account',

    footerPrevText: '← Cryptocurrency Basics',
    footerNextText: 'Market Participants →',
    footerPrevHref: '/education/forex-basics',
    footerNextHref: '/education/market-participants',
  } as EducationPageContent,
};
