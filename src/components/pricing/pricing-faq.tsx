"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

export function PricingFaq() {
  const faqItems: FaqItem[] = [
    {
      question: "PolyPal은 어떤 언어를 지원하나요?",
      answer: "PolyPal은 총 43개 언어와 95개 억양을 지원합니다. 주요 언어로는 영어, 한국어, 일본어, 중국어, 스페인어, 프랑스어, 독일어, 러시아어 등이 포함됩니다."
    },
    {
      question: "PolyPal 서비스는 어디에서 사용할 수 있나요?",
      answer: "PolyPal은 1:1 회의부터 대규모 이벤트, 온라인 강의, 라이브 스트리밍까지 다양한 환경에서 사용할 수 있습니다. Zoom, Teams, Google Meet와 같은 화상회의 플랫폼과 YouTube, Twitch, Instagram, TikTok 등의 라이브 스트리밍 서비스에 모두 활용 가능합니다."
    },
    {
      question: "서비스 가격은 어떻게 되나요?",
      answer: "PolyPal의 서비스는 용도에 따라 시간당 US$2~US$5의 합리적인 가격으로 제공됩니다. 프리미엄 서비스(US$5/시간)는 다자간 회의와 이벤트에 적합하며, 텍스트 & 1:1 서비스(US$2/시간)는 1:1 회의와 텍스트 번역에 적합합니다. 대량 구매 시 할인 혜택도 제공됩니다."
    },
    {
      question: "시간 크레딧은 어떻게 사용되나요?",
      answer: "구매한 시간 크레딧은 실제 번역 서비스를 사용한 시간만큼만 차감됩니다. 크레딧은 구매일로부터 1년간 유효하며, 사용하지 않은 크레딧은 자동으로 이월됩니다."
    },
    {
      question: "데이터 보안과 프라이버시는 어떻게 보장되나요?",
      answer: "PolyPal은 데이터 보안을 최우선으로 합니다. 모든 번역 데이터는 로컬에 저장되며, 사용자의 동의 없이 외부로 전송되지 않습니다. 또한 익명화된 사용 통계만을 수집하여 서비스 개선에 활용합니다."
    }
  ];

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prevOpenItems) => 
      prevOpenItems.includes(index)
        ? prevOpenItems.filter(item => item !== index)
        : [...prevOpenItems, index]
    );
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-8">자주 묻는 질문</h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className="border border-white/10 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="flex justify-between items-center w-full px-6 py-4 text-left"
            >
              <span className="font-medium">{item.question}</span>
              <svg
                className={cn(
                  "h-5 w-5 transition-transform duration-200",
                  openItems.includes(index) ? "transform rotate-180" : ""
                )}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={cn(
                "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                openItems.includes(index) 
                  ? "max-h-96 py-4 border-t border-white/10" 
                  : "max-h-0 py-0"
              )}
            >
              <p className="text-gray-400 text-sm">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}