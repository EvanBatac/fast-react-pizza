/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "rounded-full text-sm bg-yellow-500 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-150 hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    primary: base + "px-3 py-3 md:px-6 md:py-4",
    small: base + "px-4 py-2 text-xs md:px-5 md:py-2.5",
    round: base + "px-2.5 py-1 text-sm md:px-3.5 md:py-2",
    secondary:
      "rounded-full text-sm border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-150 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:bg-stone-400 focus:text-stone-800 focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-2 py-2 md:px-5 md:py-3 ",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={styles[type]}
      >
        {children}
      </button>
    );
  return (
    <button type="submit" disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
