"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import EmailContactModal from './EmailContactModal';
import ShineButton from './ShineButton';
<<<<<<< HEAD
=======
import { NeuralBackground } from '@/components/ui/neural-background';
>>>>>>> fx-killer/main

export default function InterviewCTA() {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const content = {
    zh: {
      badge: "开始您的交易员之路",
      title: "准备好改变人生了吗？",
      subtitle: "立即预约面试，开启您的职业交易员生涯",
      description: "我们正在寻找有潜力的交易员候选人。完全免费的30天培训，通过考核即可获得资金支持。",
      button: "立即预约面试",
      features: [
        { icon: "✓", text: "完全免费培训" },
        { icon: "✓", text: "30天系统学习" },
        { icon: "✓", text: "通过即获资金" },
        { icon: "✓", text: "60-90%高分成" }
      ],
      note: "注意：每人只有一次机会，请确保符合条件后再申请"
    },
    en: {
      badge: "Start Your Trader Journey",
      title: "Ready to Change Your Life?",
      subtitle: "Book Your Interview Now and Start Your Professional Trading Career",
      description: "We are looking for potential trader candidates. Completely free 30-day training with funding support upon passing.",
      button: "Book Interview Now",
      features: [
        { icon: "✓", text: "Completely Free" },
        { icon: "✓", text: "30-Day Training" },
        { icon: "✓", text: "Get Funding" },
        { icon: "✓", text: "60-90% Share" }
      ],
      note: "Note: Only one opportunity per person. Please ensure you meet requirements before applying"
    }
  };

  const currentContent = language === 'zh' ? content.zh : content.en;

  return (
    <>
<<<<<<< HEAD
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black dark:from-white dark:via-gray-100 dark:to-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
=======
      <section className="relative py-12 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black dark:from-gray-950 dark:via-gray-900 dark:to-black">
        {/* Neural Background - Light mode (白色神经网络) */}
        <div className="dark:hidden">
          <NeuralBackground
            hue={200}
            saturation={0.5}
            chroma={0.4}
            isDark={false}
          />
        </div>

        {/* Neural Background - Dark mode (黑色神经网络) */}
        <div className="hidden dark:block">
          <NeuralBackground
            hue={200}
            saturation={0.5}
            chroma={0.4}
            isDark={true}
          />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-[5]">
>>>>>>> fx-killer/main
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, currentColor 50px, currentColor 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, currentColor 50px, currentColor 51px)',
            color: 'white'
          }} />
        </div>

        {/* Animated Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
<<<<<<< HEAD
          className="absolute top-0 left-0 right-0 h-1 bg-white dark:bg-black origin-left"
=======
          className="absolute top-0 left-0 right-0 h-1 bg-white dark:bg-white origin-left"
>>>>>>> fx-killer/main
        />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
<<<<<<< HEAD
          className="absolute bottom-0 left-0 right-0 h-1 bg-white dark:bg-black origin-right"
=======
          className="absolute bottom-0 left-0 right-0 h-1 bg-white dark:bg-white origin-right"
>>>>>>> fx-killer/main
        />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
<<<<<<< HEAD
            <span className="inline-block px-6 py-2 bg-white dark:bg-black text-black dark:text-white text-sm font-bold tracking-wider border-2 border-white dark:border-black">
=======
            <span className="inline-block px-6 py-2 bg-white dark:bg-gray-800 text-black dark:text-white text-sm font-bold tracking-wider border-2 border-white dark:border-white">
>>>>>>> fx-killer/main
              {currentContent.badge.toUpperCase()}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
<<<<<<< HEAD
            className="text-4xl md:text-6xl font-bold text-center mb-4 text-white dark:text-black"
=======
            className="text-4xl md:text-6xl font-bold text-center mb-4 text-white dark:text-white"
>>>>>>> fx-killer/main
          >
            {currentContent.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
<<<<<<< HEAD
            className="text-xl md:text-2xl text-center mb-6 text-gray-300 dark:text-gray-700"
=======
            className="text-xl md:text-2xl text-center mb-6 text-gray-300 dark:text-gray-300"
>>>>>>> fx-killer/main
          >
            {currentContent.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
<<<<<<< HEAD
            className="text-center mb-12 text-gray-400 dark:text-gray-600 max-w-2xl mx-auto"
=======
            className="text-center mb-12 text-gray-400 dark:text-gray-400 max-w-2xl mx-auto"
>>>>>>> fx-killer/main
          >
            {currentContent.description}
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {currentContent.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
<<<<<<< HEAD
                className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border-2 border-white/20 dark:border-black/20 p-4 text-center hover:bg-white/20 dark:hover:bg-black/20 transition-colors"
              >
                <div className="text-3xl mb-2">{feature.icon}</div>
                <div className="text-sm font-bold text-white dark:text-black">{feature.text}</div>
=======
                className="bg-white/10 dark:bg-white/10 backdrop-blur-sm border-2 border-white/20 dark:border-white/20 p-4 text-center hover:bg-white/20 dark:hover:bg-white/20 transition-colors"
              >
                <div className="text-3xl mb-2 text-white dark:text-white">{feature.icon}</div>
                <div className="text-sm font-bold text-white dark:text-white">{feature.text}</div>
>>>>>>> fx-killer/main
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-8"
          >
            <ShineButton
              onClick={() => setIsModalOpen(true)}
<<<<<<< HEAD
              className="inline-block px-12 py-5 bg-white dark:bg-black text-black dark:text-white text-xl font-bold border-4 border-white dark:border-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-2xl"
=======
              className="inline-block px-12 py-5 bg-white dark:bg-white text-black dark:text-black text-xl font-bold border-4 border-white dark:border-white hover:bg-black hover:text-white dark:hover:bg-gray-800 dark:hover:text-white shadow-2xl"
>>>>>>> fx-killer/main
            >
              {currentContent.button}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block ml-2"
              >
                →
              </motion.span>
            </ShineButton>
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
<<<<<<< HEAD
            className="text-center text-sm text-gray-500 dark:text-gray-500 italic"
=======
            className="text-center text-sm text-gray-500 dark:text-gray-400 italic"
>>>>>>> fx-killer/main
          >
            {currentContent.note}
          </motion.p>
        </div>

        {/* Decorative Elements */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
<<<<<<< HEAD
          className="absolute top-10 left-10 w-20 h-20 border-4 border-white/10 dark:border-black/10"
=======
          className="absolute top-10 left-10 w-20 h-20 border-4 border-white/10 dark:border-white/10"
>>>>>>> fx-killer/main
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
<<<<<<< HEAD
          className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white/10 dark:border-black/10"
=======
          className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white/10 dark:border-white/10"
>>>>>>> fx-killer/main
        />
      </section>

      {/* Email Modal */}
      <EmailContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={language === 'zh' ? '职业交易员面试预约' : 'Professional Trader Interview'}
      />
    </>
  );
}
