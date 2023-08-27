import React, { FC, PropsWithChildren } from 'react';
import styles from './Input.module.scss';

interface IInputProps {
	placeholder: string;
}

const Input: FC<PropsWithChildren<IInputProps>> = ({
	children,
	placeholder,
}) => {
	return (
		<div className={styles.wrapper_input}>
			<label htmlFor='1' className={styles.label}>
				{children}
			</label>
			<input
				id='1'
				className={styles.input}
				type='text'
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
