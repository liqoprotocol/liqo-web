interface ChipProps {
  text: string;
  onClick?: () => void;
  className?: string;
}
const Chip = ({ text, onClick, className }: ChipProps) => {
  return (
    <div
      className={`     inline-flex
        items-center
        justify-center
        px-4
        py-2
        min-h-8
        rounded-full
        bg-[#272727]
        text-white
        text-sm
        whitespace-nowrap ${className}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Chip;
