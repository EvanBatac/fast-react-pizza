/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { increaseItemQty, decreaseItemQty } from "./cartSlice";

export default function UpdateItemQty({ pizzaId, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        onClick={() => dispatch(decreaseItemQty(pizzaId))}
        type="round"
        pizzaId={pizzaId}
      >
        -
      </Button>
      <span className="w-5 text-center text-sm font-medium">{quantity}</span>
      <Button
        onClick={() => dispatch(increaseItemQty(pizzaId))}
        type="round"
        pizzaId={pizzaId}
      >
        +
      </Button>
    </div>
  );
}
