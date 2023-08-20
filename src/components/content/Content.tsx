import React, { FC } from 'react';
import styles from './Content.module.scss';
import Section from './section/Section';

const Content: FC = () => {
	return (
		<main className={styles.wrapper}>
			<Section section={'home-one'} />
			<Section section={'home-two'} />
			<Section section={'home-three'} />
			<Section />
		</main>
	);
};

export default Content;
