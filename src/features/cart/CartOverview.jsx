import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { getTotalCartQty, getTotalPrice } from "./cartSlice";
import { useSelector } from "react-redux";
function CartOverview() {
  const totalCartQty = useSelector(getTotalCartQty);
  const totalPrice = useSelector(getTotalPrice);
  if (!totalCartQty) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-stone-200 sm:px-6">
      <p className="space-x-4 text-sm font-semibold uppercase sm:space-x-6 md:text-base">
        <span>{totalCartQty} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}
export default CartOverview;
