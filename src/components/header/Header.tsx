import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/button/Button';
import styles from './Header.module.scss';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<img src='./images/scan_logo.svg' alt='logo' />
			<nav>
				<ul className={styles.menu}>
					<li>
						<Link to={'/'}>Главная</Link>
					</li>
					<li>
						<Link to={'/'}>Тарифы</Link>
					</li>
					<li>
						<Link to={'/'}>FAQ</Link>
					</li>
				</ul>
			</nav>
			<div className={styles['header__block-auth' as const]}>
				<button className={styles.noneButton}>Зарегистрироваться</button>
				<div></div>
				<Button>Войти</Button>
			</div>
		</header>
	);
};

export default Header;
