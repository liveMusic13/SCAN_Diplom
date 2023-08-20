import cn from 'clsx';
import React, { FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

const Button: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <button className={cn(styles['button-header'])}>{children}</button>;
};

export default Button;
