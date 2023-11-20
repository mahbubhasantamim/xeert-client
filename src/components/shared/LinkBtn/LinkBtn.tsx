import { Link } from "react-router-dom";

type PropType = {
  to: string;
  children: React.ReactNode;
  className?: string;
  color: "light" | "dark";
};

function LinkBtn({ to, children, className, color }: PropType) {
  if (color === "light") {
    return (
      <>
        <Link
          to={to}
          className={`bg-slate-300 dark:bg-darkPrimary py-1 md:py-2 px-6 rounded-sm text-primary dark:text-secondary hover:text-secondary dark:hover:text-darkPrimary hover:bg-darkPrimary dark:hover:bg-secondary text-xs shadow-md hover:shadow-lg duration-500 inline-block border ${className}`}
        >
          {children}
        </Link>
      </>
    );
  }

  return (
    <>
      <Link
        to={to}
        className={`bg-darkPrimary py-2 px-6 rounded-sm text-secondary hover:bg-slate-500 text-xs shadow-md hover:shadow-lg duration-500 inline-block  ${className}`}
      >
        {children}
      </Link>
    </>
  );
}

export default LinkBtn;
