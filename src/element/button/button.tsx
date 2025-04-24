import { ReactNode } from 'react';
import styles from './button.module.css'

interface Props {
    onClick: () => void;
    label: string;
    icon?: ReactNode
}

export function Button(props: Props) {
    const { onClick, label, icon } = props;
    return (
        <button className={styles.container} onClick={onClick}>
            {icon && icon}
            <span>{label}</span>
        </button>
    )
}
