"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import EmailContactModal from '@/components/custom/EmailContactModal';

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState(0);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  // 计算捐赠金额：从2025年10月1日开始，每天增加$5
  useEffect(() => {
    const startDate = new Date('2025-10-01T00:00:00');
    const today = new Date();
    const daysPassed = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    const currentAmount = 999 + (daysPassed * 5);
    setDonationAmount(Math.max(999, currentAmount)); // 最低999
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section - 增强版 */}
      <div className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black border-b-2 border-gray-800">
        {/* 装饰性背景 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-block px-6 py-2 bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <span className="text-sm font-semibold tracking-wider text-white">GLOBAL TRIAL MEMBERSHIP</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
              全球试用会员<br />
              <span className="text-4xl md:text-5xl font-normal text-gray-300">招募计划</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              自2025年10月1日起全球范围接受捐赠成为90天试用会员
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="px-4 py-2 bg-white/5 border border-white/20 backdrop-blur-sm text-white">
                <span className="font-bold">90天</span> 试用期
              </div>
              <div className="px-4 py-2 bg-white/5 border border-white/20 backdrop-blur-sm text-white">
                <span className="font-bold">21天</span> 教练陪跑
              </div>
              <div className="px-4 py-2 bg-white/5 border border-white/20 backdrop-blur-sm text-white">
                <span className="font-bold">终身</span> 晋级机会
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {/* Donation Amount Card - 重新设计 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* 背景光效 */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-2xl"></div>

          <div className="relative bg-gradient-to-br from-black to-gray-900 dark:from-white dark:to-gray-100 p-12 border-2 border-black dark:border-white shadow-2xl">
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 backdrop-blur-sm mb-6">
                <p className="text-sm font-semibold text-white dark:text-black">CURRENT DONATION AMOUNT</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-3 mb-3">
                  <span className="text-7xl md:text-8xl font-black text-white dark:text-black">
                    ${donationAmount}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="px-3 py-1 bg-white/20 dark:bg-black/20 text-white dark:text-black text-sm font-bold">USDT</span>
                  <span className="text-white/60 dark:text-black/60">/</span>
                  <span className="px-3 py-1 bg-white/20 dark:bg-black/20 text-white dark:text-black text-sm font-bold">USDC</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500/20 border border-yellow-500/30 backdrop-blur-sm">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="text-yellow-500 font-bold text-sm">金额每日自动增加 $5</span>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 dark:bg-black/5 backdrop-blur-sm p-4 border border-white/10 dark:border-black/10">
                  <p className="text-xs text-gray-400 dark:text-gray-600 mb-1">起始金额</p>
                  <p className="text-2xl font-bold text-white dark:text-black">$999</p>
                </div>
                <div className="bg-white/5 dark:bg-black/5 backdrop-blur-sm p-4 border border-white/10 dark:border-black/10">
                  <p className="text-xs text-gray-400 dark:text-gray-600 mb-1">每日增长</p>
                  <p className="text-2xl font-bold text-white dark:text-black">+$5</p>
                </div>
                <div className="bg-white/5 dark:bg-black/5 backdrop-blur-sm p-4 border border-white/10 dark:border-black/10">
                  <p className="text-xs text-gray-400 dark:text-gray-600 mb-1">支付方式</p>
                  <p className="text-sm font-bold text-white dark:text-black">仅加密货币</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Section - 重新设计 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center gap-4 justify-center mb-4">
              <div className="h-1 w-12 bg-black dark:bg-white"></div>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white">试用会员权益</h2>
              <div className="h-1 w-12 bg-black dark:bg-white"></div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              90天专业培训，开启职业交易员之路
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white transition-all hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-black dark:bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl text-white dark:text-black font-black">A</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                顶尖交易员集训
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                参与会员社区的顶尖交易员集训课程，学习专业交易技术和策略，掌握市场核心规律
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white transition-all hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-black dark:bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl text-white dark:text-black font-black">B</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                21天教练陪跑
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                专业教练一对一指导，21天密集训练，快速提升交易能力，避免常见错误
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white transition-all hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-black dark:bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl text-white dark:text-black font-black">C</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                挑战晋级机会
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                成绩优异可自愿参与挑战，挑战成功获得终身进阶受训资格及实盘操作权
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Challenge Success Reward - 重新设计 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <div className="flex items-center gap-4 justify-center mb-4">
              <div className="h-1 w-12 bg-black dark:bg-white"></div>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white">挑战成功奖励</h2>
              <div className="h-1 w-12 bg-black dark:bg-white"></div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              证明自己的实力，获得终身职业发展机会
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-gray-900/5 dark:from-white/5 dark:to-gray-100/5 blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-white dark:bg-gray-800 p-10 border-2 border-black dark:border-white hover:shadow-2xl transition-all">
                <div className="w-20 h-20 bg-black dark:bg-white flex items-center justify-center mb-6">
                  <span className="text-4xl text-white dark:text-black font-black">A</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  终身进阶受训
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  获得终身进阶培训资格，持续提升交易技能，成为顶尖交易员，享受持续的专业指导
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-black dark:bg-white p-10 border-2 border-black dark:border-white hover:shadow-2xl transition-all">
                <div className="w-20 h-20 bg-white dark:bg-black flex items-center justify-center mb-6">
                  <span className="text-4xl text-black dark:text-white font-black">B</span>
                </div>
                <h3 className="text-3xl font-bold text-white dark:text-black mb-4">
                  1-20万$ MOM操作权
                </h3>
                <p className="text-lg text-gray-300 dark:text-gray-700 leading-relaxed">
                  获得 1万到20万美元的资金管理权限，在顶尖矩阵俱乐部进行实盘操作，实现财富增长
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How to Donate Section - 重新设计 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center gap-4 justify-center mb-4">
              <div className="h-1 w-12 bg-black dark:bg-white"></div>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white">如何进行捐赠</h2>
              <div className="h-1 w-12 bg-black dark:bg-white"></div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              完成心理测评后，通过邮件联系我们获取捐赠地址
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 p-10">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              捐赠流程
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  num: "1",
                  title: "完成心理测评",
                  desc: "首先完成心理测评，确保您具备成为职业交易员的心理素质"
                },
                {
                  num: "2",
                  title: "发送邮件申请",
                  desc: "邮件至 x.stark.dylan@gmail.com，说明您的意向"
                },
                {
                  num: "3",
                  title: "获取捐赠地址",
                  desc: "我们将通过邮件回复您具体的 USDT/USDC 捐赠地址"
                },
                {
                  num: "4",
                  title: "完成捐赠并开始培训",
                  desc: "按照提供的地址完成捐赠后，即可开始90天试用会员培训"
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4 bg-white dark:bg-gray-900 p-6 border-2 border-gray-200 dark:border-gray-700">
                  <div className="w-14 h-14 bg-black dark:bg-white flex items-center justify-center flex-shrink-0">
                    <span className="text-white dark:text-black font-black text-2xl">{step.num}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/splan/psychology-test"
                className="px-10 py-5 bg-black dark:bg-white text-white dark:text-black font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all border-2 border-black dark:border-white text-center hover:shadow-lg"
              >
                立即完成心理测评
              </a>
              <button
                onClick={() => setIsEmailModalOpen(true)}
                className="px-10 py-5 bg-white dark:bg-black text-black dark:text-white font-bold text-lg border-2 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-all text-center hover:shadow-lg animate-shake"
              >
                发送邮件申请
              </button>
            </div>
          </div>
        </motion.div>

        {/* Important Notice - 重新设计 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-yellow-500/10 to-red-500/10 blur-2xl"></div>

          <div className="relative bg-gradient-to-br from-black via-gray-900 to-black dark:from-white dark:via-gray-100 dark:to-white p-10 border-2 border-black dark:border-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-yellow-500 flex items-center justify-center">
                <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                </svg>
              </div>
              <h2 className="text-3xl font-black text-white dark:text-black">
                重要说明
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "捐赠将默认为私人自愿行为，无任何商业承诺和约束力",
                "试用会员期限：90天",
                "参与条件：需完成心理测评并通过初步筛选",
                "挑战机会：成绩优异者可自愿参与，非强制要求"
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/5 dark:bg-black/5 backdrop-blur-sm p-4 border border-white/10 dark:border-black/10">
                  <svg className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white dark:text-black text-sm leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Email Contact Modal */}
      <EmailContactModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        title="申请成为会员"
      />
    </div>
  );
}
