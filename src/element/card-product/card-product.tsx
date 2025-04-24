import { useDispatch } from "react-redux";
import CartSVG from "../../assets/icon/cart-svg";
import { addToCart, Product } from "../../redux/product"
import { Button } from "../button/button";
import styles from './card-product.module.css'
import { useNavigate } from "react-router";

interface Props {
    data: Product;
}
export default function CardProduct(props: Props) {
    const { data } = props;
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/detail-product`, { state: { product: data } });
      };
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={data?.image} className={styles.image} />
            </div>
            <span className={styles.price}>${data?.price}</span>
            <span onClick={handleNavigate} className={styles.title}>{data?.title}</span>
            <Button onClick={() => dispatch(addToCart(data))} label="Add To Cart" icon={<CartSVG size={18} color="#fff" />} />
        </div>
    )
}
