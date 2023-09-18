import React, { FC, PropsWithChildren } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './Input.module.scss';

interface IInputProps {
	inn?: boolean;
	register: UseFormRegister<FieldValues>;
}

const Input: FC<PropsWithChildren<IInputProps>> = ({
	children,
	register,
	inn,
}) => {
	return (
		<div className={styles.wrapper_input}>
			<label id='1' className={styles.label}>
				{children}
			</label>
			<input
				className={styles.input}
				id='1'
				type='text'
				{...(inn
					? {
							...register('inn', {
								required: 'Введите корректные данные',
								pattern: {
									value: /^[\d+]{10}$/,
									message: 'Введите корректные данные',
								},
							}),
					  }
					: {
							...register('limit', {
								required: 'Обязательное поле',
								minLength: 1,
								maxLength: 4,
								pattern: {
									value: /^[1-9][0-9]{0,2}$|1000$/,
									message: 'Please enter numbers from 1 to 1000',
								},
							}),
					  })}
			/>
		</div>
	);
};

export default Input;
