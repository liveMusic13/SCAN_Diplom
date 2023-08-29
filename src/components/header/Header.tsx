import Cookies from 'js-cookie';
import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TOKEN } from '../../app.constants';
import { useAuth } from '../../hooks/useAuth';
import { useBurger } from '../../providers/BurgerContext';
import styles from './Header.module.scss';

const Header: FC = () => {
	const navigate = useNavigate();
	const { setIsViewBurger } = useBurger();
	const { isAuth, setIsAuth } = useAuth();

	const logoutHandler = () => {
		Cookies.remove(TOKEN);
		setIsAuth(false);
		navigate('/');
	};

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
			{isAuth ? (
				<>
					<div className={styles.block_company}>
						<div className={styles.block_name}>
							<p>Использовано компаний</p>
							<p>Лимит по компаниям</p>
						</div>
						<div className={styles.block_number}>
							<p className={styles.first_num}>34</p>
							<p className={styles.limit_company}>100</p>
						</div>
					</div>
					<div className={styles.block_avatar}>
						<div>
							<p>Алексей А.</p>
							<button onClick={() => logoutHandler()}>Выйти</button>
						</div>
						<img src='/images/test_avatar.png' alt='avatar' />
					</div>
				</>
			) : (
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
			)}
		</header>
	);
};

export default Header;
