import cn from 'clsx';
import React, { FC } from 'react';
import Slider from '../../slider/Slider';
import styles from './Section.module.scss';
import tariffData from './data.tariff';

interface ISectionProps {
	section?: string;
}

const Section: FC<ISectionProps> = ({ section }) => {
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
							src='/images/background-images/home/sectionTwo.png'
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
		</>
	);
};

export default Section;
