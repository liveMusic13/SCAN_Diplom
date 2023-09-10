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
								required: 'Please fill in the field',
								pattern: {
									value: /^[\d+]{10}$/,
									message: 'Please fill in the field',
								},
							}),
					  }
					: {
							...register('limit', { minLength: 1, maxLength: 4 }),
					  })}
			/>
		</div>
	);
};

export default Input;
