import cn from 'clsx';
import React, { FC } from 'react';
import Slider from '../../slider/Slider';
import styles from './Section.module.scss';

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
							{/* <div
								className={cn(
									styles['home-two__block-advantages'],
									styles['block-advantages']
								)}
							>
								<div className={styles['block-advantages__advantage']}>
									<img src='/images/icon/time.svg' alt='time' />
									<p>Высокая и оперативная скорость обработки заявки</p>
								</div>
								<div className={styles['block-advantages__advantage']}>
									<img src='/images/icon/search.svg' alt='search' />
									<p>
										Огромная комплексная база данных, обеспечивающая объективный
										ответ на запрос
									</p>
								</div>
								<div className={styles['block-advantages__advantage']}>
									<img
										src='/images/icon/confidentiality.svg'
										alt='confidentiality'
									/>
									<p>
										Защита конфеденциальных сведений, не подлежащих разглашению
										по федеральному законодательству
									</p>
								</div>
							</div> */}
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
					<section className={cn(styles[section])}>Section</section>
				)
			}
		</>
	);
};

export default Section;
