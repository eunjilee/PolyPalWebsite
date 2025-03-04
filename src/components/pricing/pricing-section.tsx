import React from 'react';
import { cn } from "@/lib/utils";
import { PricingCard } from './pricing-card';
import { PricingFaq } from './pricing-faq';

export function PricingSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
      <div className="w-full mx-auto text-center">
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="flex flex-col justify-center space-y-4 max-w-3xl mx-auto">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                합리적인 가격으로 실시간 통역 서비스
              </h1>
              <p className="text-gray-400 md:text-xl max-w-2xl mx-auto mt-4">
                43개 언어와 95개 억양을 지원하는 PolyPal의 경제적인 가격 정책을 확인하세요.
                통역사 비용 없이 글로벌 커뮤니케이션을 시작하세요.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          <PricingCard 
            title="프리미엄 서비스"
            price="US$5"
            unit="/시간"
            features={[
              "윈도우, Mac, iOS, Android 앱 지원",
              "Presentation Event 지원",
              "Meeting Live 서비스",
              "Zoom, Teams, Google Meet 통합",
              "라이브 스트리밍 지원",
              "최대 접속자 수 무제한"
            ]}
            discounts={[
              {hours: 10, price: "US$50", discount: ""},
              {hours: 100, price: "US$450", discount: "10% 할인"},
              {hours: 1000, price: "US$4,000", discount: "20% 할인"}
            ]}
            buttonText="시작하기"
            buttonLink="/try-free"
            featured={true}
          />
          <PricingCard 
            title="텍스트 & 1:1 서비스"
            price="US$2"
            unit="/시간"
            features={[
              "실시간 텍스트 기록 및 전송",
              "AI 요약 서비스",
              "1:1 Meeting Live 서비스",
              "QR 또는 링크 생성",
              "윈도우, Mac 앱 지원",
              "접속자 1인 제한"
            ]}
            discounts={[
              {hours: 10, price: "US$20", discount: ""},
              {hours: 50, price: "US$97", discount: "3% 할인"},
              {hours: 100, price: "US$180", discount: "10% 할인"}
            ]}
            buttonText="시작하기"
            buttonLink="/try-free"
            featured={false}
          />
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">PolyPal의 핵심 장점</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-black/30 border border-white/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">비용 효율성</h3>
              <p className="text-gray-400 text-sm">통역사 인건비 절감 및 복잡한 인터프리터 부스 설치 없이 글로벌 커뮤니케이션</p>
            </div>
            <div className="bg-black/30 border border-white/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">24/7 서비스</h3>
              <p className="text-gray-400 text-sm">언제든지 사용 가능한 실시간 번역 서비스와 다국어 지원</p>
            </div>
            <div className="bg-black/30 border border-white/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">데이터 보안</h3>
              <p className="text-gray-400 text-sm">로컬 파일 저장, 익명 사용 통계 등 프라이버시 우선 정책</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <PricingFaq />
        </div>

        <div className="mt-20 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">문의하기</h2>
          <p className="text-gray-400 mb-6">
            더 자세한 정보나 맞춤 견적이 필요하신가요? 언제든지 연락주세요.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="mailto:contact@polypal.com" className="text-white bg-white/10 px-4 py-2 rounded-md hover:bg-white/20 transition-colors">
              이메일
            </a>
            <a href="tel:+8210-1234-5678" className="text-white bg-white/10 px-4 py-2 rounded-md hover:bg-white/20 transition-colors">
              모바일
            </a>
            <a href="#" className="text-white bg-white/10 px-4 py-2 rounded-md hover:bg-white/20 transition-colors">
              Zoom
            </a>
            <a href="#" className="text-white bg-white/10 px-4 py-2 rounded-md hover:bg-white/20 transition-colors">
              WeChat
            </a>
            <a href="#" className="text-white bg-white/10 px-4 py-2 rounded-md hover:bg-white/20 transition-colors">
              WhatsApp
            </a>
            <a href="#" className="text-white bg-white/10 px-4 py-2 rounded-md hover:bg-white/20 transition-colors">
              LINE
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            새 미디어 컨설턴트: Lee, Kang-hyun
          </p>
        </div>
      </div>
    </section>
  );
}