import { getLanguageFromLocale, generateBilingualMetadata } from '@/lib/getServerLanguage';
import LiveTradingClient from './LiveTradingClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = getLanguageFromLocale(locale);

  return generateBilingualMetadata(
    '实盘直播丨汇刃丨职业交易员培训、外汇交易员培训',
    'Live Trading丨FX Killer丨Professional Trader Training, Forex Trader Training',
    '观看汇刃矩阵成员的实盘交易直播，学习真实的交易决策过程。6位职业交易员同步直播，展示专业的交易技巧和风险管理策略。',
    'Watch FX Killer matrix members\' live trading sessions and learn real trading decision-making processes. 6 professional traders streaming simultaneously, demonstrating expert trading skills and risk management strategies.',
    '实盘直播, 外汇直播, 交易直播, 职业交易员培训, 外汇交易员培训, 日内交易员培训',
    'live trading, forex live, trading stream, professional trader training, forex trader training, day trader training',
    lang,
    {
      url: '/live-trading',
      type: 'website',
      section: 'Live Trading',
      author: 'FX Killer Team',
    }
  );
}

export default function LiveTradingPage() {
  // Get matrix members from environment variable
  // Format: 姓名|交易类型|上次直播时间|youtube直播链接;姓名2|交易类型|上次直播时间|youtube直播链接
  const matrixMembersEnv = process.env.NEXT_PUBLIC_MATRIX_MEMBERS || '';

  // Default member (Alex Chen with live stream)
  const defaultMember = {
    id: 1,
    name: 'Alex Chen',
    isLive: true,
    youtubeId: 'JIKlDnnnqas',
    specialty: '趋势交易 / Trend Trading',
    lastLive: null,
  };

  // Parse environment variable
  const envMembers = matrixMembersEnv
    .split(';')
    .filter(m => m.trim())
    .map((member, index) => {
      const [name, specialty, lastLive, youtubeLink] = member.split('|').map(s => s.trim());

      // Extract YouTube ID from link
      let youtubeId = null;
      if (youtubeLink) {
        const match = youtubeLink.match(/(?:youtube\.com\/live\/|youtu\.be\/|youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)/);
        youtubeId = match ? match[1] : null;
      }

      return {
        id: index + 2,
        name: name || `Member ${index + 2}`,
        isLive: !!youtubeId,
        youtubeId,
        specialty: specialty || 'Trading',
        lastLive: youtubeId ? null : (lastLive || null),
      };
    });

  const matrixMembers = [defaultMember, ...envMembers];

  return <LiveTradingClient members={matrixMembers} />;
}
