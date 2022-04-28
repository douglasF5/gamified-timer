import Image from 'next/image';
import styles from '../styles/components/Button.module.css';

interface ButtonProps {
    icon?: string;
    children: string;
    type: 'default' | 'neutral' | 'positive' | 'negative' | 'twitter';
    handleClick?: () => void;
}

export function Button(props: ButtonProps) {
    const icon = <Image src={props.icon} alt={props.children} />;

    return (
        <button
            className={`${styles.button} ${styles[props.type]} txt-base-S bold onelnr`}
            onClick={props.handleClick}
        >
            {props.icon && icon}
            {props.children}
        </button>
    );
}