import React, { FC, PropsWithChildren } from 'react';
import styles from './Layout.module.scss';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default Layout;
