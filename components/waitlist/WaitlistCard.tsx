import { cn } from "@/lib/utils";

interface WaitlistCardProps {
  children: React.ReactNode;
  className?: string;
}

const WaitlistCard = ({ children, className }: WaitlistCardProps) => {
  return (
    <div
      className={cn(
        "w-full rounded-2xl border border-white/10 bg-[#141414] p-6 shadow-[0_24px_70px_-32px_rgba(0,0,0,0.8)] md:p-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export default WaitlistCard;
