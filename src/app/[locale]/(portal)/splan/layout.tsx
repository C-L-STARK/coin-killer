import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BiKiller - 数字货币交易员培训",
  description: "BiKiller - 专业数字货币交易员培训平台，提供系统化课程、实战训练和专业指导。",
};

export default function SplanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
