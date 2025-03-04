import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-6 md:py-0 bg-black text-white">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
          © {new Date().getFullYear()} PolyPal. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <Link href="/privacy" className="hover:underline underline-offset-4 hover:text-white">
            개인정보처리방침
          </Link>
          <Link href="/terms" className="hover:underline underline-offset-4 hover:text-white">
            이용약관
          </Link>
          <Link href="/contact" className="hover:underline underline-offset-4 hover:text-white">
            문의하기
          </Link>
        </div>
      </div>
    </footer>
  );
}