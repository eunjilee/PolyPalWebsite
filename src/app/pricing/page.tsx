import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PricingSection } from "@/components/pricing/pricing-section";

export const metadata = {
  title: "가격 정책 | PolyPal",
  description: "PolyPal의 합리적인 가격 정책 안내 - 실시간 통역 및 자막 서비스를 경제적으로 이용하세요.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}