import { Link } from "react-router-dom";

type PropType = {
  to: string;
  children: React.ReactNode;
  className: string;
  type: "primary" | "secondary";
};

function LinkBtn({ to, children, className, type }: PropType) {
  if (type === "secondary") {
    return (
      <>
        <Link
          to={to}
          className={`bg-slate-300 py-2 px-6 rounded-sm text-primary hover:text-secondary hover:bg-slate-700 text-xs shadow-md hover:shadow-lg duration-500 inline-block ${className}`}
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
        className={`bg-primary py-2 px-6 rounded-sm text-secondary hover:bg-slate-700 text-xs shadow-md hover:shadow-lg duration-500 inline-block ${className}`}
      >
        {children}
      </Link>
    </>
  );
}

export default LinkBtn;
