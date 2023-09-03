import cn from 'clsx';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './FormSeacrh.module.scss';

const FormSeacrhTest: FC = () => {
	const [colorDateStart, setColorDateStart] = useState(0);
	const [colorDateEnd, setColorDateEnd] = useState(0);

	const [isChecked, setIsChecked] = useState({
		one: false,
		two: false,
		three: false,
	});

	const checkedCheckbox = (idChecbox: string) => {
		const elem = document.getElementById(idChecbox);
		if (elem.value === 'on') {
			elem.checked = true;
		}
	};

	// test
	// const onSubmitSearch = data => {
	// 	try {
	// 		const responce = $axios.post('/v1/objectsearch/histograms', {
	// 			issueDateInterval: {
	// 				startDate: '',
	// 				endDate: '',
	// 			},
	// 			searchContext: {
	// 				targetSearchEntitiesContext: {
	// 					targetSearchEntities: [
	// 						{
	// 							inn: 7710137066,
	// 						},
	// 					],
	// 					tonality: '',
	// 				},
	// 			},
	// 			intervalType: 'month',
	// 			limit: 1000,
	// 		});
	// 		console.log(responce);
	// 		console.log('data:', data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	// test

	const { register, handleSubmit } = useForm({
		// defaultValues: {
		// 	firstName: '',
		// 	lastName: '',
		// 	category: '',
		// 	checkbox: ``,
		// 	checkbox1: ``,
		// 	checkbox2: ``,
		// },
		defaultValues: {
			issueDateInterval: {
				startDate: '',
				endDate: '',
			},
			inn: 7710137066,
			tonality: '',
			limit: 1000,
			intervalType: 'month',
		},
	});

	return (
		<form
			className={cn(styles['search__form'], styles.form)}
			onSubmit={handleSubmit(console.log)}
		>
			<div className={styles['form__block-input']}>
				{/* <Input id={'INN'} placeholder='10 цифр'>
					ИНН компании *
				</Input> */}
				<input
					{...register('inn')}
					type='text'
					placeholder='10 цифр'
					value={7710137066}
				/>
				<div className={styles['form__block-select']}>
					<label className={styles['form__label-select']} htmlFor='select'>
						Тональность
					</label>
					<select
						defaultValue='any'
						id='select'
						{...register(`tonality`, {
							required: 'Введите корректные данные',
						})}
					>
						<option value='positive'>Позитивная</option>
						<option value='negative'>Негативная</option>
						<option value='any'>Любая</option>
					</select>
				</div>
				{/* <Input id={'docs'} placeholder='от 1 до 1000'>
					Количество документов в выдаче *
				</Input> */}
				<input
					{...register('lastName')}
					type='text'
					placeholder='от 1 до 1000'
				/>
				<div className={styles['form__block-data-input']}>
					<label>
						Диапазон поиска *
						<input
							className={cn({
								[styles.start_data]: colorDateStart === 0,
								[styles.start_data_noBefore]: colorDateStart === 1,
							})}
							type='date'
							onClick={() => setColorDateStart(1)}
							style={{
								color: `rgba(0, 0, 0, ${colorDateStart})`,
							}}
							{...register(`startDate`, {
								required: 'Введите корректные данные',
							})}
						/>
					</label>
					<label>
						<input
							className={cn({
								[styles.end_data]: colorDateEnd === 0,
								[styles.end_data_noBefore]: colorDateEnd === 1,
							})}
							type='date'
							max={Date.now()}
							onClick={() => setColorDateEnd(1)}
							style={{
								color: `rgba(0, 0, 0, ${colorDateEnd})`,
							}}
							{...register(`endDate`, {
								required: 'Введите корректные данные',
							})}
						/>
					</label>
				</div>
			</div>
			<div className={styles['form__block-checkbox']}>
				<div>
					{/* <Checkbox id={'max'}>Признак максимальной полноты</Checkbox> */}
					{/* <Checkbox id={'context'}>Упоминания в бизнес-контексте</Checkbox>
					<Checkbox id={'public'}>Главная роль в публикации</Checkbox>
					<Checkbox id={'factors'}>Публикации только с риск-факторами</Checkbox>
					<Checkbox id={'news'}>Включать технические новости рынков</Checkbox>
					<Checkbox id={'calendar'}>Включать анонсы и календари</Checkbox>
					<Checkbox id={'onNews'}>Включать сводки новостей</Checkbox> */}
					{/* <input
						{...register('checkbox')}
						id='1'
						type='checkbox'
						onClick={() => {
							if (isChecked) {
								setIsChecked({ ...isChecked, one: false });
							} else {
								setIsChecked({ ...isChecked, one: true });
								checkedCheckbox('1');
							}
						}}
					/>
					<input
						{...register('checkbox1')}
						id='2'
						type='checkbox'
						onClick={() => {
							if (isChecked) {
								setIsChecked({ ...isChecked, one: false });
							} else {
								setIsChecked({ ...isChecked, one: true });
								checkedCheckbox('2');
							}
						}}
					/>
					<input
						{...register('checkbox2')}
						id='3'
						type='checkbox'
						onClick={() => {
							if (isChecked) {
								setIsChecked({ ...isChecked, one: false });
							} else {
								setIsChecked({ ...isChecked, one: true });
								checkedCheckbox('3');
							}
						}}
						
					/>
					<input
						{...register('checkbox2')}
						id='4'
						type='checkbox'
						onClick={() => {
							if (isChecked) {
								setIsChecked({ ...isChecked, one: false });
							} else {
								setIsChecked({ ...isChecked, one: true });
								checkedCheckbox('3');
							}
						}}
						
					/>
					<input
						{...register('checkbox2')}
						id='5'
						type='checkbox'
						onClick={() => {
							if (isChecked) {
								setIsChecked({ ...isChecked, one: false });
							} else {
								setIsChecked({ ...isChecked, one: true });
								checkedCheckbox('3');
							}
						}}
						
					/>
					<input
						{...register('checkbox2')}
						id='6'
						type='checkbox'
						onClick={() => {
							if (isChecked) {
								setIsChecked({ ...isChecked, one: false });
							} else {
								setIsChecked({ ...isChecked, one: true });
								checkedCheckbox('3');
							}
						}}
						
					/>
					<input
						{...register('checkbox2')}
						id='7'
						type='checkbox'
						onClick={() => {
							if (isChecked) {
								setIsChecked({ ...isChecked, one: false });
							} else {
								setIsChecked({ ...isChecked, one: true });
								checkedCheckbox('3');
							}
						}}
						
					/> */}
				</div>
				{/* <Button styleForButton='button-search'>Поиск</Button> */}
				<button type='submit'>go</button>
				<p className={styles['form__help']}>* Обязательные к заполнению поля</p>
			</div>
		</form>
	);
};

export default FormSeacrhTest;
