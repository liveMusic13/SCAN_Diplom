import cn from 'clsx';
import React, { FC, useState } from 'react';
import Slider from '../../slider/Slider';
import Button from '../../ui/button/Button';
import Checkbox from '../../ui/checkbox/Checkbox';
import Input from '../../ui/input/Input';
import styles from './Section.module.scss';
import tariffData from './data.tariff';

interface ISectionProps {
	section?: string;
}

const Section: FC<ISectionProps> = ({ section }) => {
	const [formValue, setFormValue] = useState({
		login: '',
		password: '',
	});

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
							{/* <button>Запросить данные</button> */}
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
							// src='/images/background-images/home/sectionTwo.png'
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
										<a href='#'>Подробнее</a>
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
								<form>
									<label htmlFor='login'>Логин или номер телефона:</label>
									<input
										type='text'
										id='login'
										value={formValue.login}
										onChange={event =>
											setFormValue(prevFormValue => ({
												...prevFormValue,
												login: event.target.value,
											}))
										}
									/>
									<label htmlFor='password'>Пароль:</label>
									<input
										type='password'
										id='password'
										value={formValue.password}
										onChange={event =>
											setFormValue(prevFormValue => ({
												...prevFormValue,
												password: event.target.value,
											}))
										}
									/>

									<Button formValue={formValue} styleForButton={'button-auth'}>
										Войти
									</Button>
								</form>
								<a href='#'>Восстановить пароль</a>
								<p className={styles['auth__title-company']}>Войти через:</p>
								<div className={styles['auth__block-company']}>
									<img src='/images/icon/google.svg' alt='img' />
									<img src='/images/icon/facebook.svg' alt='img' />
									<img src='/images/icon/yandex.svg' alt='img' />
								</div>
							</div>
							<img
								src='/images/background-images/auth/characters.png'
								alt='img'
							/>
						</div>
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
							<form>
								<label htmlFor='login'>Логин или номер телефона:</label>
								<input
									type='text'
									id='login'
									value={formValue.login}
									onChange={event =>
										setFormValue(prevFormValue => ({
											...prevFormValue,
											login: event.target.value,
										}))
									}
								/>
								<label htmlFor='password'>Пароль:</label>
								<input
									type='password'
									id='password'
									value={formValue.password}
									onChange={event =>
										setFormValue(prevFormValue => ({
											...prevFormValue,
											password: event.target.value,
										}))
									}
								/>

								<Button formValue={formValue} styleForButton={'button-auth'}>
									Войти
								</Button>
							</form>
							<a href='#'>Восстановить пароль</a>
							<p className={styles['auth__title-company']}>Войти через:</p>
							<div className={styles['auth__block-company']}>
								<img src='/images/icon/google.svg' alt='img' />
								<img src='/images/icon/facebook.svg' alt='img' />
								<img src='/images/icon/yandex.svg' alt='img' />
							</div>
						</div>
					</section>
				)
			}
			{
				// HELP: SEARCH
				section === 'search' && (
					<section className={cn(styles[section])}>
						<div className={styles['search__block-content']}>
							<h2 className={styles['search__title']}>
								Найдите необходимые данные в пару кликов.
							</h2>
							<p className={styles['search__paragraph']}>
								Задайте параметры поиска. Чем больше заполните, тем точнее поиск
							</p>
							<form className={cn(styles['search__form'], styles.form)}>
								<div className={styles['form__block-input']}>
									<Input placeholder='10 цифр'>ИНН компании *</Input>
									<div className={styles['form__block-select']}>
										<label htmlFor='select'>Тональность</label>
										<select defaultValue='Любая' id='select'>
											<option value='Позитивная'>Позитивная</option>
											<option value='Негативная'>Негативная</option>
											<option value='Любая'>Любая</option>
										</select>
									</div>

									<Input placeholder='от 1 до 1000'>
										Количество документов в выдаче *
									</Input>
									<div className={styles['form__block-data-input']}>
										<label>
											Диапазон поиска *
											<input className={styles.start_data} type='date' />
										</label>
										<label>
											<input
												className={styles.end_data}
												type='date'
												max={Date.now()}
											/>
										</label>
									</div>
								</div>
								<div className={styles['form__block-checkbox']}>
									<div>
										<Checkbox>Признак максимальной полноты</Checkbox>
										<Checkbox>Упоминания в бизнес-контексте</Checkbox>
										<Checkbox>Главная роль в публикации</Checkbox>
										<Checkbox>Публикации только с риск-факторами</Checkbox>
										<Checkbox>Включать технические новости рынков</Checkbox>
										<Checkbox>Включать анонсы и календари</Checkbox>
										<Checkbox>Включать сводки новостей</Checkbox>
									</div>
									<button>Поиск</button>
								</div>
							</form>
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
					</section>
				)
			}
		</>
	);
};

export default Section;
