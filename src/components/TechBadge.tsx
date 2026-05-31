interface TechBadgeProps {
  tech: string;
  index?: number;
}

export const TechBadge = ({ tech }: TechBadgeProps) => {
  return (
    <span
      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/8
                 text-gray-400 hover:text-gray-200 hover:border-white/15 transition-colors duration-150 cursor-default"
    >
      {tech}
    </span>
  );
};
