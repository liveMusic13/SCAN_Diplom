import cn from 'clsx';
import React, { FC, PropsWithChildren, useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './Checkbox.module.scss';

interface ICheckboxProps {
	id: string;
	register: UseFormRegister<FieldValues>;
}

const Checkbox: FC<PropsWithChildren<ICheckboxProps>> = ({
	children,
	id,
	register,
}) => {
	const [checkOn, setCheckOn] = useState<boolean>(false);

	const handleChange = () => {
		setCheckOn(!checkOn);
	};

	return (
		<div className={styles.wrapper}>
			<button
				className={cn({
					[styles.button]: !checkOn,
					[styles.button_active]: checkOn,
				})}
				onClick={e => {
					e.preventDefault();
					setCheckOn(!checkOn);
				}}
			>
				{checkOn && <img src='/images/icon/check.svg' alt='check' />}
				<input
					id={id}
					type='checkbox'
					{...register(`${id}`)}
					checked={checkOn}
					onChange={handleChange}
				/>
			</button>

			<label
				htmlFor={id}
				className={cn({
					[styles.label]: !checkOn,
					[styles.label_active]: checkOn,
				})}
			>
				{children}
			</label>
		</div>
	);
};

export default Checkbox;
