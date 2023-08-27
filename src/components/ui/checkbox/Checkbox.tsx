import React, { FC, PropsWithChildren } from 'react';
import styles from './Checkbox.module.scss';

const Checkbox: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<button>
				<img src='/images/icon/check.svg' alt='check' />
			</button>
			{/* <input id='2' type='checkbox' /> */}
			<label htmlFor='2' className={styles.label}>
				{children}
			</label>
		</div>
	);
};

export default Checkbox;
