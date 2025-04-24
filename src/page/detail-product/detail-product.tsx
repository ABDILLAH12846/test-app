import { useLocation, useNavigate } from 'react-router-dom';
import { addToCart, Product } from '../../redux/product';
import { useEffect } from 'react';
import styles from './detail-product.module.css';
import { useDispatch } from 'react-redux';
import CartSVG from '../../assets/icon/cart-svg';
import { Button } from '../../element/button/button';

export default function DetailProduct() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { product } = state as { product: Product };

    useEffect(() => {
        if (!product) {
            // Redirect kalau state-nya gak ada (misal di-refresh)
            navigate('/');
        }
    }, [product, navigate]);

    if (!product) return <p>Product not found</p>;

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.imageContainer}>
                    <img src={product.image} className={styles.image} />
                </div>
                <div className={styles.contentBox}>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <Button onClick={() => dispatch(addToCart(product))} label="Add To Cart" icon={<CartSVG size={18} color="#fff" />} />
                </div>
            </div>
        </div>
    );
}
