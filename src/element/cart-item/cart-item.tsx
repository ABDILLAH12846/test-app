import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, type CartItem } from "../../redux/product"
import styles from './cart-item.module.css'

interface Props {
  data: CartItem;
}

export default function CartItem(props: Props) {
  const { data } = props;
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addToCart(data))
  }
  const handleDelete = () => {
    dispatch(removeFromCart(data?.id))
  }
  console.log({ data })
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={data?.image} className={styles.image} />
      </div>
      <div className={styles.contentBox}>
        <div>
          <h2>{data?.title}</h2>
          <span>${data?.price}</span>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.button} onClick={handleDelete}>-</div>
          <span>{data?.quantity}</span>
          <div className={styles.button} onClick={handleAdd}>+</div>
        </div>
      </div>
    </div>
  )
}
