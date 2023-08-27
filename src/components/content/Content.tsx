import React, { FC } from 'react';
import styles from './Content.module.scss';
import Section from './section/Section';

interface IContentProps {
	arrSectionProps: string[];
}

const Content: FC<IContentProps> = ({ arrSectionProps }) => {
	return (
		<main className={styles.wrapper}>
			{arrSectionProps.map(section => {
				return <Section key={section} section={section} />;
			})}
		</main>
	);
};

export default Content;
