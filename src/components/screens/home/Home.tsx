import React, { FC } from 'react';
import Content from '../../content/Content';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';

const Home: FC = () => {
	return (
		<Layout>
			<Header />
			<Content />
			<Footer />
		</Layout>
	);
};

export default Home;
