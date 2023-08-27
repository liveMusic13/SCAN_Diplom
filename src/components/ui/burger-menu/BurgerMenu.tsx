import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useBurger } from '../../BurgerContext';
import styles from './BurgerMenu.module.scss';

const BurgerMenu: FC = () => {
	const navigate = useNavigate();

	const { setIsViewBurger } = useBurger();

	return (
		<div className={styles.wrapper}>
			<div>
				<img
					className={styles.logo}
					src='/images/scan_logo_white.svg'
					alt='logo'
				/>
				<button onClick={() => setIsViewBurger(false)}>
					<img className={styles.exit} src='/images/icon/exit.svg' alt='exit' />
				</button>
			</div>
			<nav>
				<ul className={styles.menu}>
					<li onClick={() => setIsViewBurger(false)}>
						<Link to={'/'}>Главная</Link>
					</li>
					<li onClick={() => setIsViewBurger(false)}>
						<Link to={'/'}>Тарифы</Link>
					</li>
					<li onClick={() => setIsViewBurger(false)}>
						<Link to={'/'}>FAQ</Link>
					</li>
				</ul>
			</nav>

			<button className={styles.noneButton}>Зарегистрироваться</button>
			<button
				onClick={() => {
					navigate('/auth');
					setIsViewBurger(false);
				}}
				className={styles.mobile_burger}
			>
				Войти
			</button>
		</div>
	);
};

export default BurgerMenu;
