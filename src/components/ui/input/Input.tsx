import React, { FC, PropsWithChildren } from 'react';
import styles from './Input.module.scss';

interface IInputProps {
	placeholder: string;
	id: string;
}

const Input: FC<PropsWithChildren<IInputProps>> = ({
	children,
	placeholder,
	id,
}) => {
	// const { register } = useForm();

	return (
		<div className={styles.wrapper_input}>
			<label htmlFor={id} className={styles.label}>
				{children}
			</label>
			<input
				id={id}
				className={styles.input}
				type='text'
				placeholder={placeholder}
				// {...register(`${id}`, {
				// 	required: 'Введите корректные данные',
				// })}
			/>
		</div>
	);
};

export default Input;
