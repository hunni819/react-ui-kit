import { FC, SVGAttributes } from 'react';

const Arrow: FC<SVGAttributes<SVGSVGElement>> = (props) => {
  const { className, ...svgProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-up h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
      {...svgProps}
    >
      <path d="m18 15-6-6-6 6"></path>
    </svg>
  );
};
export default Arrow;
