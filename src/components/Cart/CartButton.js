import classes from "./CartButton.module.css";
import { useDispatch ,useSelector} from "react-redux";
import { uiAction } from "../../store/uislice";

const CartButton = (props) => {
  const cartQuantitycontent = useSelector(state=>state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toogleCartHandler = () => {
    dispatch(uiAction.toogle());
  };
  return (
    <button className={classes.button} onClick={toogleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantitycontent}</span>
    </button>
  );
};

export default CartButton;
