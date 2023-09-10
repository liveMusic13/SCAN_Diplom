import Cookies from 'js-cookie';
import React, { FC, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { $axios } from '../../api';
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

	const [companyLimit, setCompanyLimit] = useState(null);
	const [usedCompanyCount, setUsedCompanyCount] = useState(null);

	useMemo(() => {
		if (isAuth) {
			const responseFunc = async () => {
				try {
					const response = await $axios.get('/v1/account/info');

					setCompanyLimit(response.data.eventFiltersInfo.companyLimit);
					setUsedCompanyCount(response.data.eventFiltersInfo.usedCompanyCount);
					console.log(companyLimit);
					console.log(usedCompanyCount);
				} catch (error) {
					console.log(error);
				}
			};
			responseFunc();
		}
	}, [companyLimit, usedCompanyCount]);

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
			{isAuth && window.innerWidth >= 767.98 ? ( //TODO: MAKE IS INFO USER
				<>
					<div className={styles.block_company}>
						<div className={styles.block_usedCompany}>
							<p className={styles.used_paragraph}>Использовано компаний</p>
							<p className={styles.used_company}>{usedCompanyCount}</p>
						</div>
						<div className={styles.block_companyLimit}>
							<p className={styles.limit_paragraph}>Лимит по компаниям</p>
							<p className={styles.limit_company}>{companyLimit}</p>
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
