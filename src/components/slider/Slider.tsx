import React, { FC, useState } from 'react';
import styles from './Slider.module.scss';
import { data } from './data.slider';

const Slider: FC = () => {
	// const [currentIndex, setCurrentIndex] = useState(0);
	const [viewData, setViewData] = useState([0, 1, 2]);

	const prevSlide = () => {
		setViewData(prevState => {
			const newState = prevState.map(elem => {
				if (elem > 0) {
					console.log(elem);
					return elem - 1;
				} else {
					console.log(elem);
					return (elem = data.length - 1);
				}
			});
			return newState;
		});
	};

	const nextSlide = () => {
		setViewData(prevState => {
			const newState = prevState.map(elem => {
				if (elem < data.length - 1) {
					console.log(elem);
					return elem + 1;
				} else {
					console.log(elem);
					return (elem = 0);
				}
			});
			return newState;
		});
	};

	return (
		<div className={styles.wrapper}>
			<button onClick={prevSlide}>
				{/* <button> */}
				<img src='/images/icon/arrows/arrow_left.svg' alt='arrow' />
			</button>

			<div className={styles['block-advantages']}>
				{/* {data.slice(currentIndex, currentIndex + 3).map(advant => {
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
				})} */}
				{data.map((advant, index) => {
					if (
						index === viewData[0] ||
						index === viewData[1] ||
						index === viewData[2]
					)
						return (
							<div
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
				{/* <button> */}
				<img src='/images/icon/arrows/arrow_right.svg' alt='arrow' />
			</button>
		</div>
	);
};

export default Slider;
