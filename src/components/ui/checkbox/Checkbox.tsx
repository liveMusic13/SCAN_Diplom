import cn from 'clsx';
import React, { FC, PropsWithChildren, useState } from 'react';
import styles from './Checkbox.module.scss';

interface ICheckboxProps {
	id: string;
}

const Checkbox: FC<PropsWithChildren<ICheckboxProps>> = ({ children, id }) => {
	const [checkOn, setCheckOn] = useState(false);

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
					checked={checkOn}
					onChange={handleChange}
					name='checkbox'
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
