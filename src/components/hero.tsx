import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="w-full py-10 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
      <div className="w-full mx-auto text-center px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 md:gap-10">
          <div className="flex flex-col justify-center space-y-6 max-w-3xl mx-auto">
            <div className="space-y-5">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none text-white leading-tight">
                팀과 개인을 위한<br className="sm:hidden" /> 실시간 번역
              </h1>
              <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
                43개 언어로 실시간 번역 및 자막 제공 – 가상 및 대면 회의, 라이브 스트리밍 등에 24시간 이용 가능합니다.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/try-free"
                className={cn(
                  "inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-base font-medium text-black ring-offset-background transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm"
                )}
              >
                무료로 시작하기
              </Link>
              <Link
                href="/learn-more"
                className={cn(
                  "inline-flex h-12 items-center justify-center rounded-md border border-white/20 bg-transparent px-8 text-base font-medium text-white ring-offset-background transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                )}
              >
                더 알아보기
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4 md:mt-8 w-full md:max-w-4xl lg:max-w-5xl">
            <div className="relative overflow-hidden rounded-lg border border-white/20 shadow-xl w-full">
              <Image
                src="/web_en_home_banner01-DeWNENUQ.png"
                alt="PolyPal 데모 이미지"
                width={800}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}