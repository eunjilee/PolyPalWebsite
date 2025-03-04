import Link from "next/link";
import { cn } from "@/lib/utils";

interface DiscountTier {
  hours: number;
  price: string;
  discount: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  unit: string;
  features: string[];
  discounts: DiscountTier[];
  buttonText: string;
  buttonLink: string;
  featured?: boolean;
}

export function PricingCard({
  title,
  price,
  unit,
  features,
  discounts,
  buttonText,
  buttonLink,
  featured = false
}: PricingCardProps) {
  return (
    <div className={cn(
      "flex flex-col p-6 bg-black/30 rounded-xl border shadow-sm relative",
      featured 
        ? "border-white/30 shadow-white/5" 
        : "border-white/10"
    )}>
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-3 py-1 rounded-full text-xs font-medium">
          인기 선택
        </div>
      )}
      
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="mt-4 flex items-baseline justify-center text-center">
          <span className="text-4xl font-extrabold tracking-tight">{price}</span>
          <span className="ml-1 text-xl font-semibold text-gray-400">{unit}</span>
        </div>
      </div>
      
      <ul className="mt-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-6 pt-6 border-t border-white/10">
        <h4 className="text-sm font-semibold mb-4">패키지 할인</h4>
        <ul className="space-y-3">
          {discounts.map((tier, index) => (
            <li 
              key={index} 
              className={cn(
                "flex justify-between items-center text-sm p-2 rounded",
                index === discounts.length - 1 && featured ? "bg-white/10" : ""
              )}
            >
              <span className="text-gray-300">{tier.hours}시간</span>
              <div className="flex items-center">
                <span className={cn(
                  "font-semibold",
                  tier.discount ? "text-green-400" : "text-white"
                )}>
                  {tier.price}
                </span>
                {tier.discount && (
                  <span className="ml-2 text-xs bg-green-400/20 text-green-400 px-2 py-0.5 rounded">
                    {tier.discount}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-8">
        <Link 
          href={buttonLink}
          className={cn(
            "inline-flex h-10 w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            featured 
              ? "bg-white text-black hover:bg-white/90" 
              : "bg-white/10 text-white hover:bg-white/20"
          )}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}