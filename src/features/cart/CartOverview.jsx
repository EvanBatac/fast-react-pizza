import { Link } from "react-router-dom";
function CartOverview() {
  return (
    <div className="bg-stone-800 p-4 text-stone-200 sm:px-6 flex justify-between items-center">
      <p className="space-x-4 text-sm font-semibold uppercase sm:space-x-6 md:text-base">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
