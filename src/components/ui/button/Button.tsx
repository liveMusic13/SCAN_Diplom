import cn from 'clsx';
import React, { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import styles from './Button.module.scss';

interface IPropsStyle {
	styleForButton: string;
	formValue?: {
		login: string;
		password: string;
	};
}

const Button: FC<PropsWithChildren<IPropsStyle>> = ({
	children,
	styleForButton,
	formValue,
}) => {
	const isFormFalid = !formValue?.login || !formValue?.password;

	const navigate = useNavigate();

	const { isAuth } = useAuth();

	return (
		<button
			// disabled={isFormFalid}
			onClick={
				() => (isAuth ? navigate('/') : '') // TODO: MAKE IS REQUEST TO SERVER
			}
			className={cn(
				styles[styleForButton],
				{
					[styles.active]: !isFormFalid,
					[styles['no-active']]: isFormFalid,
				},
				{ [styles.activeMobile]: styleForButton === 'mobile-burger' }
			)}
		>
			{children}
		</button>
	);
};

export default Button;
