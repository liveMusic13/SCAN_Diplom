import cn from 'clsx';
import React, { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import styles from './Button.module.scss';

interface IPropsStyle {
	styleForButton: string;
}

const Button: FC<PropsWithChildren<IPropsStyle>> = ({
	children,
	styleForButton,
}) => {
	const navigate = useNavigate();

	const { isAuth } = useAuth();

	return (
		<button
			onClick={() => (isAuth ? navigate('/') : '')}
			className={cn(styles[styleForButton], styles.active, {
				[styles.activeMobile]: styleForButton === 'mobile-burger',
			})}
		>
			{children}
		</button>
	);
};

export default Button;
