import React from "react";

type PropType = {
  children: React.ReactNode;
  className?: string;
  type?: "arrow" | "outline";
};
function Button({ children, className, type }: PropType) {
  if (type === "arrow") {
    return (
      <button
        type="button"
        className={`bg-secondary dark:bg-darkPrimary py-2 px-6 rounded-sm text-primary dark:text-secondary hover:text-secondary dark:hover:text-darkPrimary hover:bg-slate-700 dark:hover:bg-secondary text-xs hover:shadow-lg duration-500 inline-block relative after:block after:h-2 after:w-2 after:bg-secondary after:dark:bg-darkPrimary after:hover:bg-slate-700 after:dark:hover:bg-secondary after:duration-500 after:rotate-45 after:absolute after:-bottom-1 after:left-[46%] ${className}`}
      >
        {children}
      </button>
    );
  }
  if (type === "outline") {
    return (
      <button
        type="button"
        className={`border-2 border-primary py-1 sm:py-2 px-6 rounded-sm text-primary
         hover:bg-slate-700 hover:text-secondary text-xs shadow-md hover:shadow-lg duration-500 inline-block relative dark:border-secondary dark:text-secondary dark:hover:bg-secondary dark:hover:text-primary ${className}`}
      >
        {children}
      </button>
    );
  }
  return (
    <>
      <button
        type="button"
        className={`bg-primary py-2 px-6 rounded-sm text-secondary hover:bg-slate-700 text-xs shadow-md hover:shadow-lg duration-500 inline-block relative ${className}`}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
