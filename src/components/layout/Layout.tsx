import React, { FC, PropsWithChildren } from 'react';
import { useCheckToken } from '../../hooks/useCheckToken';
import styles from './Layout.module.scss';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	useCheckToken();

	return <div className={styles.wrapper}>{children}</div>;
};

export default Layout;
