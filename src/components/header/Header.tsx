import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useBurger } from '../BurgerContext';
import styles from './Header.module.scss';

const Header: FC = () => {
	const navigate = useNavigate();
	const { setIsViewBurger } = useBurger();

	return (
		<header className={styles.header}>
			<img src='./images/scan_logo.svg' alt='logo' />
			<div onClick={() => setIsViewBurger(true)} className={styles.burger_menu}>
				<span></span>
			</div>
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
				{/* <Button styleForButton={'button-header'}>Войти</Button> */}
				<button
					onClick={() => navigate('/auth')}
					className={styles.button_header}
				>
					Войти
				</button>
			</div>
		</header>
	);
};

export default Header;
