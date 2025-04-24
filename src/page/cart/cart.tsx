import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import CartItem from '../../element/cart-item/cart-item';
import styles from './cart.module.css';

export default function Cart() {
    const { cart } = useSelector((state: RootState) => state.products);
  return (
    <div className={styles.container}>
        {
            cart.length > 0 
            ? (
                cart.map((item, idx) => (
                    <CartItem data={item} key={idx} />
                ))
            )
            : <p>No Data in Cart</p>
        }
    </div>
  )
}
