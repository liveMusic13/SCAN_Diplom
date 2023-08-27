import cn from 'clsx';
import React, { FC, PropsWithChildren } from 'react';
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

	return (
		<button
			disabled={isFormFalid}
			onClick={
				() => console.log('ok') // TODO: MAKE IS REQUEST TO SERVER
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
