interface ITariff {
	id: number;
	title: string[];
	img: string;
	color: string;
	price: string;
	discount: string;
	priceForMonth: string;
	bonus: string[];
}

const tariffData: ITariff[] = [
	{
		id: 1,
		title: ['Beginner', 'Для небольшого исследования'],
		img: '/images/icon/lightBulb.svg',
		color: 'rgba(255, 182, 79, 1)',
		price: '1 200 ₽',
		discount: '799 ₽',
		priceForMonth: 'или 150 ₽/мес. при рассрочке на 24 мес.',
		bonus: [
			'Безлимитная история запросов',
			'Безопасная сделка',
			'Поддержка 24/7',
		],
	},
	{
		id: 2,
		title: ['Pro', 'Для HR и фрилансеров'],
		img: '/images/icon/target.svg',
		color: 'rgba(124, 227, 225, 1)',
		price: '2 600 ₽',
		discount: '1 299 ₽',
		priceForMonth: 'или 279 ₽/мес. при рассрочке на 24 мес.',
		bonus: [
			'Все пункты тарифа Beginner',
			'Экспорт истории',
			'Рекомендации по приоритетам',
		],
	},
	{
		id: 3,
		title: ['Business', 'Для корпоративных клиентов'],
		img: '/images/icon/computer.svg',
		color: '#000000',
		price: '3 700 ₽',
		discount: '2 379 ₽',
		priceForMonth: '',
		bonus: [
			'Все пункты тарифа Pro',
			'Безлимитное количество запросов',
			'Приоритетная поддержка',
		],
	},
];

export default tariffData;
