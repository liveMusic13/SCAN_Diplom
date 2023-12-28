import cn from 'clsx';
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { useAuthPage } from '../../../hooks/useAuthPage';
import FormSeacrh from '../../form-search/FormSeacrh';
import Slider from '../../slider/Slider';
import Button from '../../ui/button/Button';
import styles from './Section.module.scss';
import tariffData from './data.tariff';

interface ISectionProps {
	section?: string;
}

const Section: FC<ISectionProps> = ({ section }) => {
	const { isAuth } = useAuth();
	const navigate = useNavigate();
	const { onSubmit, register, handleSubmit, errors } = useAuthPage();

	const [viewDocuments, setViewDocuments] = useState<never[]>([]);
	const [resultData, setResultData] = useState({});
	const [isViewSearch, setIsViewSearch] = useState<boolean>(true);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const [numberOfPublication, setNumberOfPublication] = useState(10);

	const checkMobilePlatform = window.innerWidth <= 767.98;
	const checkMiddleScreenResolution = window.innerWidth <= 1200;

	const prevSlide = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	const nextSlide = () => {
		if (
			currentIndex <
			(checkMobilePlatform
				? resultData.data.data[0].data.length - 1
				: resultData.data.data[0].data.length - 3)
		) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const visibleItems =
		resultData.data &&
		resultData.data.data &&
		resultData.data.data[0] &&
		resultData.data.data[0].data
			? resultData.data.data[0].data.slice(
					currentIndex,
					checkMobilePlatform
						? currentIndex + 1
						: currentIndex + (checkMiddleScreenResolution ? 3 : 8)
			  )
			: [];
	const visibleItemsRisk =
		resultData.data &&
		resultData.data.data &&
		resultData.data.data[1] &&
		resultData.data.data[1].data
			? resultData.data.data[1].data.slice(
					currentIndex,
					checkMobilePlatform
						? currentIndex + 1
						: currentIndex + (checkMiddleScreenResolution ? 3 : 8)
			  )
			: [];

	function removeHtmlTags(text: string) {
		return text.replace(/<[^>]*>/g, '');
	}

	function formatDate(inputDate: string) {
		const parts = inputDate.split('T');

		const datePart = parts[0];
		const [year, month, day] = datePart.split('-');

		const formattedDate = `${day}.${month}.${year}`;

		return formattedDate;
	}

	return (
		<>
			{
				// HELP: HOME_ONE
				section === 'home-one' && (
					<section className={cn(styles[section])}>
						<div className={styles['home-one__block-content']}>
							<h1 className={styles['home-one__title']}>
								сервис по поиску <br /> публикаций <br /> о компании <br /> по
								его ИНН
							</h1>
							<p className={styles['home-one__paragraph']}>
								Комплексный анализ публикаций, получение данных в формате PDF на
								электронную почту.
							</p>
							{isAuth && (
								<button onClick={() => navigate('/search')}>
									Запросить данные
								</button>
							)}
						</div>
						<img
							className={styles['home-one__image']}
							src='/images/background-images/home/sectionOne.png'
							alt='image'
						/>
					</section>
				)
			}
			{
				// HELP: HOME_TWO
				section === 'home-two' && (
					<section className={cn(styles[section])}>
						<div className={styles['home-two__block-content']}>
							<h2 className={styles['home-two__title']}>Почему именно мы</h2>
							<Slider />
						</div>
						<img
							className={styles['home-two__image']}
							src={
								window.innerWidth <= 991.98
									? '/images/background-images/home/sectionTwo_mobile.png'
									: '/images/background-images/home/sectionTwo.png'
							}
							alt='image'
						/>
					</section>
				)
			}
			{
				// HELP: THREE
				section === 'home-three' && (
					<section className={cn(styles[section])}>
						<h2>наши тарифы</h2>
						<div
							className={cn(
								styles['home-three__block-tariff'],
								styles['block-tariff']
							)}
						>
							{tariffData.map(tariff => {
								return (
									<div
										key={tariff.id}
										className={cn(styles['block-tariff__tariff'])}
									>
										<div
											className={cn(styles['block-tariff__title-block'])}
											style={{
												backgroundColor: tariff.color,
												color: tariff.color === '#000000' ? 'white' : 'black',
											}}
										>
											<div>
												<h3>{tariff.title[0]}</h3>
												<p>{tariff.title[1]}</p>
											</div>
											<img
												src={tariff.img}
												alt='image'
												style={{
													height:
														tariff.img === '/images/icon/target.svg'
															? '110px'
															: '83px',
													position:
														tariff.img === '/images/icon/target.svg'
															? 'absolute'
															: 'static',
												}}
											/>
										</div>
										{isAuth && tariff.title[0] === 'Business' ? (
											<p className={styles['block-tariff__active-tariff']}>
												Текущий тариф
											</p>
										) : (
											<></>
										)}

										<div className={cn(styles['block-tariff__price-block'])}>
											<p>{tariff.discount}</p>
											<p className={styles['block-tariff__main-price']}>
												{tariff.price}
											</p>
										</div>
										<p className={cn(styles['block-tariff__price-form-month'])}>
											{tariff.priceForMonth}
										</p>
										<div className={cn(styles['block-tariff__bonus-block'])}>
											<p>В тариф входит:</p>
											<ul>
												{tariff.bonus.map(elem => {
													return (
														<li key={Math.random() + Math.random()}>
															<img src='/images/icon/check.svg' alt='img' />
															{elem}
														</li>
													);
												})}
											</ul>
										</div>
										{isAuth && tariff.title[0] === 'Business' ? (
											<a
												className={
													styles['block-tariff__link-to-personal-area_active']
												}
												href='#'
											>
												Перейти в личный кабинет
											</a>
										) : (
											<a
												className={
													styles[
														'block-tariff__link-to-personal-area_no-active'
													]
												}
												href='#'
											>
												Подробнее
											</a>
										)}
									</div>
								);
							})}
						</div>
					</section>
				)
			}
			{
				// HELP: AUTH
				section === 'auth' && (
					<section className={cn(styles[section])}>
						<div className={styles['auth__title-block']}>
							<h2>
								Для оформления подписки на тариф, необходимо авторизоваться.
							</h2>

							{window.innerWidth <= 767.98 ? (
								<div className={styles['auth__block-auth_mobile']}>
									<img
										className={styles.auth__lock}
										src='/images/icon/lock.svg'
										alt='img'
									/>
									<div className={styles['auth__block-state-auth']}>
										<p className={styles['auth__enter']}>Войти</p>
										<p className={styles['auth__registration']}>
											Зарегистрироваться
										</p>
									</div>
									<form onSubmit={handleSubmit(onSubmit)}>
										<label htmlFor='login'>Логин или номер телефона:</label>
										<input
											type='text'
											id='login'
											{...register('login', {
												required: 'Введите корректные данные',
											})}
										/>

										{errors.login && (
											<div style={{ color: 'red', fontSize: '10px' }}>
												{errors.login.message}
											</div>
										)}
										<label htmlFor='password'>Пароль:</label>
										<input
											type='password'
											id='password'
											{...register('password', {
												required: 'Неправильный пароль',
											})}
										/>
										{errors.password && (
											<div style={{ color: 'red', fontSize: '10px' }}>
												{errors.password.message}
											</div>
										)}

										<Button styleForButton={'button-auth'}>Войти</Button>
									</form>
									<a href='#'>Восстановить пароль</a>
									<p className={styles['auth__title-company']}>Войти через:</p>
									<div className={styles['auth__block-company']}>
										<img src='/images/icon/google.svg' alt='img' />
										<img src='/images/icon/facebook.svg' alt='img' />
										<img src='/images/icon/yandex.svg' alt='img' />
									</div>
								</div>
							) : (
								<></>
							)}

							<img
								src='/images/background-images/auth/characters.png'
								alt='img'
							/>
						</div>

						{window.innerWidth >= 767.98 ? (
							<div className={styles['auth__block-auth']}>
								<img
									className={styles.auth__lock}
									src='/images/icon/lock.svg'
									alt='img'
								/>
								<div className={styles['auth__block-state-auth']}>
									<p className={styles['auth__enter']}>Войти</p>
									<p className={styles['auth__registration']}>
										Зарегистрироваться
									</p>
								</div>
								<form onSubmit={handleSubmit(onSubmit)}>
									<label htmlFor='login'>Логин или номер телефона:</label>
									<input
										type='text'
										id='login'
										{...register('login', {
											required: 'Введите корректные данные',
										})}
									/>

									{errors.login && (
										<div style={{ color: 'red', fontSize: '10px' }}>
											{errors.login.message}
										</div>
									)}
									<label htmlFor='password'>Пароль:</label>
									<input
										type='password'
										id='password'
										{...register('password', {
											required: 'Неправильный пароль',
										})}
									/>
									{errors.password && (
										<div style={{ color: 'red', fontSize: '10px' }}>
											{errors.password.message}
										</div>
									)}

									<Button styleForButton={'button-auth'}>Войти</Button>
								</form>
								<a href='#'>Восстановить пароль</a>
								<p className={styles['auth__title-company']}>Войти через:</p>
								<div className={styles['auth__block-company']}>
									<img src='/images/icon/google.svg' alt='img' />
									<img src='/images/icon/facebook.svg' alt='img' />
									<img src='/images/icon/yandex.svg' alt='img' />
								</div>
							</div>
						) : (
							<></>
						)}
					</section>
				)
			}
			{
				// HELP: SEARCH
				section === 'search' && (
					<section className={cn(styles[section])}>
						{isViewSearch ? (
							<div className={styles.ofAConditionWithoutAMentor}>
								<div className={styles['search__block-content']}>
									<h2 className={styles['search__title']}>
										Найдите необходимые данные в пару кликов.
									</h2>
									<p className={styles['search__paragraph']}>
										Задайте параметры поиска. Чем больше заполните, тем точнее
										поиск
									</p>
									<FormSeacrh
										setIsViewSearch={setIsViewSearch}
										setResultData={setResultData}
										setViewDocuments={setViewDocuments}
									/>
								</div>
								<div
									className={cn(
										styles['search__block-images'],
										styles['images-block']
									)}
								>
									<img
										className={styles['images-block__document']}
										src='/images/icon/document.svg'
										alt='img'
									/>
									<img
										className={styles['images-block__folders']}
										src='/images/icon/folders.svg'
										alt='img'
									/>
									<img
										className={styles['images-block__people']}
										src='/images/background-images/search/people.png'
										alt='img'
									/>
								</div>
							</div>
						) : (
							<div className={styles.ofAConditionWithoutAMentor__result}>
								<section className={cn(styles['result-one'])}>
									<div className={styles['result__block-content']}>
										<h2 className={styles['result-one__title']}>
											Ищем. Скоро будут результаты
										</h2>
										<p className={styles['result-one__paragraph']}>
											Поиск может занять некоторое время, просим сохранять
											терпение.
										</p>
									</div>
									<img
										src='/images/background-images/result/woman-target.png'
										alt='img'
									/>
								</section>
								<section className={cn(styles['result-two'])}>
									<h2 className={styles['result-two__title']}>Общая сводка</h2>
									<p className={styles['result-two__paragraph']}>
										Найдено 4 221 вариантов
									</p>
									<div className={styles['result-two__wrapper-result']}>
										{checkMobilePlatform || checkMiddleScreenResolution ? (
											<button onClick={prevSlide}>
												<img
													src='/images/icon/arrows/arrow_left.svg'
													alt='img'
												/>
											</button>
										) : (
											<button
												onClick={
													resultData.data.data[0].data.length > 9
														? prevSlide
														: undefined
												}
											>
												<img
													src='/images/icon/arrows/arrow_left.svg'
													alt='img'
												/>
											</button>
										)}

										<div className={styles['result-two__block-result_mobile']}>
											<div className={styles['result-block__name_mobile']}>
												<p>Период</p>
												<p>Всего</p>
												<p>Риски</p>
											</div>
											{resultData.data ? (
												visibleItems.map((item, index) => {
													const itemRisk = visibleItemsRisk[index];

													return (
														<div
															key={Math.random()}
															className={styles['result-block__result_mobile']}
														>
															<p>{formatDate(item.date)}</p>
															<p>{item.value}</p>
															<p>{itemRisk.value}</p>
														</div>
													);
												})
											) : (
												<></>
											)}
										</div>
										<div
											className={cn(
												styles['result-two__block-result'],
												styles['result-block']
											)}
										>
											<div className={styles['result-block__name']}>
												<p>Период</p>
												<p>Всего</p>
												<p>Риски</p>
											</div>
											{resultData.data ? (
												visibleItems.map((item, index) => {
													const itemRisk = visibleItemsRisk[index];

													return (
														<div
															key={Math.random()}
															className={styles['result-block__result']}
														>
															<p>{formatDate(item.date)}</p>
															<p>{item.value}</p>
															<p>{itemRisk.value}</p>
														</div>
													);
												})
											) : (
												<></>
											)}
										</div>

										{checkMobilePlatform || checkMiddleScreenResolution ? (
											<button onClick={nextSlide}>
												<img
													src='/images/icon/arrows/arrow_right.svg'
													alt='img'
												/>
											</button>
										) : (
											<button
												onClick={
													resultData.data.data[0].data.length > 9
														? nextSlide
														: undefined
												}
											>
												<img
													src='/images/icon/arrows/arrow_right.svg'
													alt='img'
												/>
											</button>
										)}
									</div>
								</section>
								<section className={cn(styles['result-three'])}>
									<h2 className={styles['result-three__title']}>
										Список документов
									</h2>
									<div className={styles['result-three__wrapper-document']}>
										{viewDocuments.map((document, index) => {
											const xmlString = document.ok.content.markup;
											const parser = new DOMParser();
											const xmlDoc = parser.parseFromString(
												xmlString,
												'text/xml'
											);
											const xmlText = xmlDoc.documentElement.textContent;
											if (index < numberOfPublication) {
												return (
													<div
														key={document.ok.id}
														className={styles['result-three__block-document']}
													>
														<div className={styles['result-three__block-date']}>
															<p>{formatDate(document.ok.issueDate)}</p>
															<p>{document.ok.source.name}</p>
														</div>
														<h2>{document.ok.title.text}</h2>
														<p>
															{document.ok.attributes.isTechNews
																? 'Технические новости'
																: document.ok.attributes.isDigest
																? 'Сводка новостей'
																: document.ok.attributes.isAnnouncement
																? 'Анонс'
																: 'Нейтральная категория'}
														</p>
														<div className={styles['result-three__block-info']}>
															<img src='/images/test.png' alt='test' />
															<p>{removeHtmlTags(xmlText)}</p>
														</div>
														<div className={styles['result-three__title']}>
															<a href={document.ok.url}>Читать в источнике</a>
															<p>{document.ok.attributes.wordCount} слов</p>
														</div>
													</div>
												);
											}
										})}
									</div>

									{numberOfPublication <= viewDocuments.length ? (
										<button
											className={styles['result-three__button-show-more']}
											onClick={() =>
												setNumberOfPublication(prevValue => prevValue + 10)
											}
										>
											Показать больше
										</button>
									) : (
										<></>
									)}
								</section>
							</div>
						)}
					</section>
				)
			}
		</>
	);
};

export default Section;
