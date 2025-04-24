import { Link, useNavigate } from 'react-router'
import styles from './navbar.module.css';
import CartSVG from '../../assets/icon/cart-svg';

export default function Navbar() {
    const navigate = useNavigate();
    const linkList = [
        {
            route: '/product',
            label: "Product",
        },
        {
            route: '/task',
            label: "Task",
        },
    ]
    return (
        <div className={styles.container}>
            <h2 onClick={() => navigate('/')}>DOT</h2>
            <div className={styles.linkContainer}>
                {
                    linkList.map((link, idx) => (
                        <Link className={styles.link} to={link?.route} key={idx}>{link?.label}</Link>
                    ))
                }
                <Link to={'/cart'}>
                    <CartSVG size={24} color='#121212' />
                </Link>
            </div>
        </div>
    )
}
