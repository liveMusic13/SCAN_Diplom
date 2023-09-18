import Cookies from 'js-cookie';
import React, { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { $axios } from '../../../api';
import { TOKEN } from '../../../app.constants';
import { useAuth } from '../../../hooks/useAuth';
import { useBurger } from '../../../providers/BurgerContext';
import styles from './BurgerMenu.module.scss';

const BurgerMenu: FC = () => {
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

	if (isAuth) {
		const responseFunc = async () => {
			try {
				const response = await $axios.get('/v1/account/info');

				setCompanyLimit(response.data.eventFiltersInfo.companyLimit);
				setUsedCompanyCount(response.data.eventFiltersInfo.usedCompanyCount);
			} catch (error) {
				console.log(error);
			}
		};
		responseFunc();
	}

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

			{isAuth && window.innerWidth <= 767.98 ? (
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
				<>
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
				</>
			)}
		</div>
	);
};

export default BurgerMenu;
