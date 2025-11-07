import { EducationPageContent } from './forex-basics.content';

export const brokerSelectionContent = {
  zh: {
    title: '数字货币交易所选择完整指南 - CEX与DEX对比分析 | BiKiller',
    description: '全面对比中心化交易所(Binance、OKX、Coinbase)与去中心化交易所(Uniswap、PancakeSwap)。掌握交易所选择标准：安全性、流动性、手续费、监管合规，找到最适合你的交易平台。',
    keywords: '数字货币交易所, 加密货币交易所选择, Binance, OKX, Coinbase, Uniswap, CEX vs DEX, 交易所对比',

    heroTitle: '数字货币交易所选择指南',
    heroDescription: '学会选择安全可靠、成本低廉的加密货币交易平台',
    readingTime: '20分钟',
    difficulty: '初级',
    lastUpdated: '2024-01-15',

    tocTitle: '本文目录',
    tableOfContents: [
      { id: 'cex-vs-dex', title: 'CEX与DEX：核心区别' },
      { id: 'major-cex', title: '主流中心化交易所对比' },
      { id: 'major-dex', title: '主流去中心化交易所对比' },
      { id: 'selection-criteria', title: '交易所选择标准' },
      { id: 'security', title: '安全性评估' },
      { id: 'fees-comparison', title: '手续费对比' },
      { id: 'faq', title: '常见问题解答' },
    ],

    faqTitle: '常见问题解答',
    faqs: [
      {
        question: 'Q1: 中心化交易所(CEX)和去中心化交易所(DEX)哪个更好？',
        answer: 'CEX适合新手和高频交易者：界面友好、流动性高、交易速度快、支持法币出入金。但需要信任交易所，存在被黑客攻击或跑路风险。DEX适合有经验的用户：资产完全自主掌控、更隐私、抗审查，但流动性较低、Gas费高、操作门槛高。建议：新手从CEX开始，掌握后再尝试DEX。'
      },
      {
        question: 'Q2: Binance、OKX、Coinbase怎么选？',
        answer: 'Binance：全球最大交易所，流动性最好，币种最全，手续费低，但部分地区受监管限制。OKX：综合实力强，衍生品丰富，手续费低，适合合约交易。Coinbase：美国合规第一，安全性最高，但手续费较高，币种较少，适合注重合规的用户。建议：看你的需求和所在地区选择。'
      },
      {
        question: 'Q3: 如何判断交易所是否安全？',
        answer: '关键指标：1)是否持有监管牌照(如美国MSB、香港VASP)；2)是否有准备金证明(Proof of Reserves)；3)历史是否有安全事故；4)是否支持冷钱包存储；5)是否有保险基金；6)是否公开透明财务状况。避免使用：无牌照、创立不久、团队不透明、承诺高收益的交易所。'
      },
      {
        question: 'Q4: 交易所手续费怎么算？',
        answer: 'CEX手续费通常分为：现货交易费(0.1%-0.2%)、合约交易费(0.02%-0.05%)、提币费(固定或按币种)。VIP等级越高费用越低。DEX手续费包括：交易手续费(0.25%-0.3%归LP)、Gas费(网络拥堵时可能很高)。建议：对比实际交易成本，而非只看费率。'
      },
      {
        question: 'Q5: 资金放在交易所安全吗？',
        answer: '永远记住："Not your keys, not your coins"(私钥不在手，币不属于你)。CEX托管你的资产，存在交易所被黑、倒闭、冻结账户的风险。建议：只在交易所放交易所需的资金，大额资产转到硬件钱包(如Ledger、Trezor)。使用DEX时，确保妥善保管助记词。'
      }
    ],

    relatedTitle: '相关学习资源',
    relatedResources: [
      {
        href: '/education/forex-basics',
        icon: '📚',
        title: '数字货币交易基础',
        description: '了解加密货币市场基本概念'
      },
      {
        href: '/education/risk-management',
        icon: '🛡️',
        title: '风险管理课程',
        description: '学习如何保护你的加密资产'
      },
      {
        href: '/partners/brokers',
        icon: '🤝',
        title: 'BiKiller合作交易所',
        description: '查看我们审核认证的安全交易所'
      }
    ],

    ctaTitle: '准备开始数字货币交易？',
    ctaDescription: '选择合适的交易所，加入 BiKiller 培训计划',
    ctaPrimaryButton: '了解培训计划',
    ctaSecondaryButton: '免费心理测评',

    footerPrevText: '← 杠杆与保证金',
    footerNextText: '交易对完整解析 →',
    footerPrevHref: '/education/leverage-and-margin',
    footerNextHref: '/education/currency-pairs-guide',
  } as EducationPageContent,

  en: {
    title: 'Complete Cryptocurrency Exchange Selection Guide - CEX vs DEX Comparison | BiKiller',
    description: 'Comprehensive comparison of centralized exchanges (Binance, OKX, Coinbase) and decentralized exchanges (Uniswap, PancakeSwap). Master selection criteria: security, liquidity, fees, regulation.',
    keywords: 'cryptocurrency exchange, crypto exchange selection, Binance, OKX, Coinbase, Uniswap, CEX vs DEX, exchange comparison',

    heroTitle: 'Cryptocurrency Exchange Selection Guide',
    heroDescription: 'Learn to choose secure, reliable, and cost-effective crypto trading platforms',
    readingTime: '20 min',
    difficulty: 'Beginner',
    lastUpdated: 'Jan 15, 2024',

    tocTitle: 'Table of Contents',
    tableOfContents: [
      { id: 'cex-vs-dex', title: 'CEX vs DEX: Core Differences' },
      { id: 'major-cex', title: 'Major Centralized Exchanges Comparison' },
      { id: 'major-dex', title: 'Major Decentralized Exchanges Comparison' },
      { id: 'selection-criteria', title: 'Exchange Selection Criteria' },
      { id: 'security', title: 'Security Assessment' },
      { id: 'fees-comparison', title: 'Fee Comparison' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Q1: Which is better: CEX or DEX?',
        answer: 'CEX suits beginners and high-frequency traders: user-friendly interface, high liquidity, fast trading, fiat on/off-ramps. But requires trusting the exchange, with risks of hacks or insolvency. DEX suits experienced users: full asset control, more privacy, censorship-resistant, but lower liquidity, high gas fees, steeper learning curve. Recommendation: Start with CEX, explore DEX after gaining experience.'
      },
      {
        question: 'Q2: How to choose between Binance, OKX, and Coinbase?',
        answer: 'Binance: World\'s largest exchange, best liquidity, most coin pairs, low fees, but restricted in some regions. OKX: Strong overall, rich derivatives, low fees, great for futures trading. Coinbase: Most compliant in US, highest security, but higher fees, fewer coins, suitable for compliance-focused users. Choose based on your needs and location.'
      },
      {
        question: 'Q3: How to judge if an exchange is safe?',
        answer: 'Key indicators: 1) Holds regulatory licenses (US MSB, HK VASP); 2) Has Proof of Reserves; 3) No major security incidents; 4) Supports cold wallet storage; 5) Has insurance fund; 6) Transparent financials. Avoid: unlicensed, newly established, opaque team, promises high returns.'
      },
      {
        question: 'Q4: How are exchange fees calculated?',
        answer: 'CEX fees typically include: spot trading fees (0.1%-0.2%), futures fees (0.02%-0.05%), withdrawal fees (fixed or by coin). Higher VIP levels get lower fees. DEX fees include: trading fees (0.25%-0.3% to LPs), gas fees (can be high during congestion). Compare total trading costs, not just rates.'
      },
      {
        question: 'Q5: Is it safe to keep funds on exchanges?',
        answer: 'Always remember: "Not your keys, not your coins." CEX custodies your assets, with risks of hacks, insolvency, account freezing. Recommendation: Only keep trading capital on exchanges, transfer large amounts to hardware wallets (Ledger, Trezor). When using DEX, safely store your seed phrase.'
      }
    ],

    relatedTitle: 'Related Learning Resources',
    relatedResources: [
      {
        href: '/education/forex-basics',
        icon: '📚',
        title: 'Crypto Trading Basics',
        description: 'Understand cryptocurrency market fundamentals'
      },
      {
        href: '/education/risk-management',
        icon: '🛡️',
        title: 'Risk Management',
        description: 'Learn to protect your crypto assets'
      },
      {
        href: '/partners/brokers',
        icon: '🤝',
        title: 'BiKiller Partner Exchanges',
        description: 'View our vetted and certified secure exchanges'
      }
    ],

    ctaTitle: 'Ready to Start Crypto Trading?',
    ctaDescription: 'Choose the right exchange and join BiKiller training program',
    ctaPrimaryButton: 'Learn About Training',
    ctaSecondaryButton: 'Free Psychology Test',

    footerPrevText: '← Leverage & Margin',
    footerNextText: 'Trading Pair Guide →',
    footerPrevHref: '/education/leverage-and-margin',
    footerNextHref: '/education/currency-pairs-guide',
  } as EducationPageContent,
};
