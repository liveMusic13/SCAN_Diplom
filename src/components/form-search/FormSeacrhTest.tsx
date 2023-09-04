import cn from 'clsx';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { $axios } from '../../api';
import styles from './FormSeacrh.module.scss';

const FormSeacrhTest: FC = () => {
	const [colorDateStart, setColorDateStart] = useState(0);
	const [colorDateEnd, setColorDateEnd] = useState(0);

	const [valueInn, setValueInn] = useState(7710137066);
	const [value, setValue] = useState(5);
	const [valueStart, setValueStart] = useState('');
	const [valueEnd, setValueEnd] = useState('');
	const [valueSelect, setValueSelect] = useState('');

	// const [isChecked, setIsChecked] = useState({
	// 	one: false,
	// 	two: false,
	// 	// three: false,
	// });

	// const checkedCheckbox = (idChecbox: string) => {
	// 	const elem = document.getElementById(idChecbox);
	// 	if (elem.value === 'on') {
	// 		elem.checked = true;
	// 	}
	// };

	// test
	const onSubmitSearch = data => {
		setValue(Number(value));
		setValueInn(Number(valueInn));
		console.log(typeof valueInn);
		try {
			const responce = $axios.post(
				'/v1/objectsearch/histograms',
				JSON.stringify({
					issueDateInterval: {
						startDate: valueStart,
						endDate: valueEnd,
					},
					searchContext: {
						targetSearchEntitiesContext: {
							targetSearchEntities: [
								{
									type: 'company',
									sparkId: null,
									entityId: null,
									inn: valueInn,
									inBusinessNews: null,
								},
							],
							tonality: 'any',
						},
					},

					limit: value,
				})
			);
			console.log(responce);
			console.log('data:', data);
		} catch (error) {
			console.log(error);
		}
	};
	// test

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		// defaultValues: {
		// 	issueDateInterval: {
		// 		startDate: '',
		// 		endDate: '',
		// 	},
		// 	searchContext: {
		// 		targetSearchEntitiesContext: {
		// 			targetSearchEntities: [
		// 				{
		// 					type: 'company',
		// 					sparkId: null,
		// 					entityId: null,
		// 					inn: 7710137066,
		// 					inBusinessNews: null,
		// 				},
		// 			],
		// 			tonality: 'any',
		// 		},
		// 	},

		// 	limit: 1000,

		// 	// checkbox: false,
		// 	// checkbox1: false,
		// },
		mode: 'onChange',
	});

	//
	// {
	//   "issueDateInterval": {
	//     "startDate": "2019-01-01T00:00:00+03:00",
	//     "endDate": "2022-08-31T23:59:59+03:00"
	//   },
	//   "searchContext": {
	//     "targetSearchEntitiesContext": {
	//       "targetSearchEntities": [
	//         {
	//           "inn": 7710137066,
	//         }
	//       ],
	//       "tonality": "any",
	//     },
	//   },
	//   "limit": 1000,
	// }
	//

	return (
		<form
			className={cn(styles['search__form'], styles.form)}
			onSubmit={handleSubmit(onSubmitSearch)}
		>
			<div className={styles['form__block-input']}>
				<input
					{...register(
						'searchContext.targetSearchEntitiesContext.targetSearchEntities[0].inn',
						{
							required: 'no',
							pattern: {
								value: /^[\d+]{10}$/,
								message: 'Please',
							},
						}
					)}
					type='text'
					placeholder='10 цифр'
					style={{
						backgroundColor: 'rgba(70, 90, 126, 0)',
					}}
					// value={valueInn}
					// onChange={event => setValueInn(event?.target.value)}
				/>
				{/* {errors.inn && (
					<div style={{ color: 'red', fontSize: '10px' }}>
						{errors.inn.message}
					</div>
				)} */}
				<div className={styles['form__block-select']}>
					<label className={styles['form__label-select']} htmlFor='select'>
						Тональность
					</label>
					<select
						defaultValue='any'
						id='select'
						{...register(`searchContext.targetSearchEntitiesContext.tonality`, {
							required: 'Введите корректные данные',
						})}
						// value={valueSelect}
						// onChange={event => setValueSelect(event?.target.value)}
					>
						<option value='positive'>Позитивная</option>
						<option value='negative'>Негативная</option>
						<option value='any'>Любая</option>
					</select>
				</div>

				<input
					{...register('limit')}
					type='text'
					placeholder='от 1 до 1000'
					// value={value}
					// onChange={event => setValue(event?.target.value)}
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
							{...register(`issueDateInterval.startDate`, {
								required: 'Введите корректные данные',
							})}
							value={valueStart}
							onChange={event => setValueStart(event?.target.value)}
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
							{...register(`issueDateInterval.endDate`, {
								required: 'Введите корректные данные',
							})}
							value={valueEnd}
							onChange={event => setValueEnd(event?.target.value)}
						/>
					</label>
				</div>
			</div>
			<div className={styles['form__block-checkbox']}>
				<div>
					{/* <input
						{...register('checkbox')}
						id='1'
						type='checkbox'
						// onClick={() => {
						// 	if (isChecked) {
						// 		setIsChecked({ ...isChecked, one: false });
						// 	} else {
						// 		setIsChecked({ ...isChecked, one: true });
						// 		checkedCheckbox('1');
						// 	}
						// }}
					/>
					<input
						{...register('checkbox1')}
						id='2'
						type='checkbox'
						// onClick={() => {
						// 	if (isChecked) {
						// 		setIsChecked({ ...isChecked, one: false });
						// 	} else {
						// 		setIsChecked({ ...isChecked, one: true });
						// 		checkedCheckbox('2');
						// 	}
						// }}
					/> */}
					{/* <input
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
