import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-14 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex">
          <Link href="/" className="flex items-center">
            <Image 
              src="/nav_icon_logo-C6BzojWv.png" 
              alt="PolyPal Logo" 
              width={100} 
              height={32} 
              className="h-6 w-auto"
            />
          </Link>
        </div>
        <nav className="flex items-center">
          <div className="hidden sm:flex mr-4">
            <NavigationMenu />
          </div>
          <div className="flex items-center">
            <Link 
              href="/try-free" 
              className={cn(
                "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              )}
            >
              무료로 시작하기
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavigationMenu() {
  return (
    <nav className="flex items-center gap-6 text-sm">
      <Link
        href="/features"
        className="text-gray-400 transition-colors hover:text-white"
      >
        기능
      </Link>
      <Link
        href="/pricing"
        className="text-gray-400 transition-colors hover:text-white"
      >
        가격
      </Link>
      <Link
        href="/about"
        className="text-gray-400 transition-colors hover:text-white"
      >
        소개
      </Link>
    </nav>
  );
}