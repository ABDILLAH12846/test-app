import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { fetchProducts } from '../../redux/product';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CardProduct from '../../element/card-product/card-product';
import styles from './product.module.css';

export default function Product() {
    const dispach = useDispatch()
    const { products, loading, cart } = useSelector((state: RootState) => state.products);
    useEffect(() => {
        const fetching = () => {
            dispach(fetchProducts())
        }
        fetching()
    }, [dispach])
    console.log({ products, loading, cart });
  return (
    <div className={styles.container}>
      {products.length > 0 ? (
        products.map((product) => (
          <CardProduct data={product} />
        ))
      ) : (
        <p>No products loaded</p>
      )}
    </div>
  );
}
