import Image from 'next/image';
import { ReactNode } from 'react';
import styles from '../styles/components/CardSection.module.css';

interface CardSectionProps {
    ready: boolean;
    icon: string;
    title: string;
    count?: number;
    descriptor?: string;
    children: ReactNode;
    message?: string;
    controls?: JSX.Element | undefined;
}

export function CardSection(props: CardSectionProps) {
    const message = (<div className={`txt-base-S ${styles.cardMessage}`}>{props.message}</div>);
    const count = <span className={styles.count}> · {props.count}</span>;

    return (
        <div className={`${styles.container} ${props.ready ? styles.ready : null}`}>
            <div className={styles.row1}>
                <div className={styles.left}>
                    <div>
                        <Image src={props.icon} alt={props.title}/>
                    </div>
                    <h2 className={`txt-base-L bold`}>{props.title}{props.count !== undefined ? count : ''}</h2>
                </div>
                <div className={`txt-base-L bold ${styles.right}`}>{props.descriptor}</div>
            </div>
            <div>{props.children}</div>
            {props.controls || message}
        </div>
    );
}