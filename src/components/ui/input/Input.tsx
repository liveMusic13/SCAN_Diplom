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
		<>
			<label htmlFor='1' className={styles.label}>
				{children}
			</label>
			<input
				id='1'
				className={styles.input}
				type='text'
				placeholder={placeholder}
			/>
		</>
	);
};

export default Input;
