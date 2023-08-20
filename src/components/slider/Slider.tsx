import React, { FC, useState } from 'react';
import styles from './Slider.module.scss';
import { data } from './data.slider';

const Slider: FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === 0 ? data.length - 1 : prevIndex - 1
		);
		console.log(currentIndex);
	};

	const nextSlide = () => {
		setCurrentIndex(prevIndex => {
			return prevIndex === data.length - 1 ? 0 : prevIndex + 1;
		});
		console.log(currentIndex);
	};

	return (
		<div className={styles.wrapper}>
			<button onClick={prevSlide}>
				<img src='/images/icon/arrows/arrow_left.svg' alt='arrow' />
			</button>

			<div className={styles['block-advantages']}>
				{data.slice(currentIndex, currentIndex + 3).map(advant => {
					return (
						<div
							// data-index={index}
							key={advant.id}
							className={styles['block-advantages__advantage']}
						>
							<img src={advant.img} alt='time' />
							<p>{advant.description}</p>
						</div>
					);
				})}
			</div>
			<button onClick={nextSlide}>
				<img src='/images/icon/arrows/arrow_right.svg' alt='arrow' />
			</button>
		</div>
	);
};

export default Slider;
