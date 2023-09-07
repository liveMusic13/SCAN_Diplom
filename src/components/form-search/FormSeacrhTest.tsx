import cn from 'clsx';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { $axios } from '../../api';
import styles from './FormSeacrh.module.scss';

interface IStateResultData {
	resultData: object;
	setResultData: Dispatch<SetStateAction<object>>;
}

const FormSeacrhTest: FC<IStateResultData> = ({
	resultData,
	setResultData,
}) => {
	const [colorDateStart, setColorDateStart] = useState(0);
	const [colorDateEnd, setColorDateEnd] = useState(0);

	const [dataValue, setDataValue] = useState({
		issueDateInterval: {
			startDate: '',
			endDate: '',
		},
		attributeFilters: {
			excludeTechNews: true,
			excludeAnnouncements: true,
			excludeDigests: true,
		},
		similarMode: 'duplicates',
		sortType: 'sourceInfluence',
		sortDirectionType: 'desc',
		intervalType: 'month',
		histogramTypes: ['totalDocuments', 'riskFactors'],
	});

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	});

	const test = async () => {
		const searchContext = {
			targetSearchEntitiesContext: {
				targetSearchEntities: [
					{
						type: 'company',
						sparkId: null,
						entityId: null,
						inn: Number(getValues('inn')),
						maxFullness: true,
						inBusinessNews: null,
					},
				],
				onlyMainRole: true,
				tonality: getValues('tonality'),
				onlyWithRiskFactors: true,
			},
		};
		const limit = Number(getValues('limit'));
		const issueDateInterval = {
			startDate: getValues('startDate'),
			endDate: getValues('endDate'),
		};

		const updateDate = {
			...dataValue,
			searchContext,
			limit,
			issueDateInterval,
		};
		setDataValue(updateDate);

		console.log(updateDate);

		try {
			const response = await $axios.post(
				'/v1/objectsearch/histograms',
				updateDate
			);

			setResultData(response);

			// navigate('/result');
			// console.log('i am here', resultData);
			// console.log(resultData.data.data[0]);
			// console.log('two: ', resultData.data.data[0].data[5]);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form
			className={cn(styles['search__form'], styles.form)}
			onSubmit={handleSubmit(test)}
		>
			{resultData.data ? (
				resultData.data.data[0].data.map(elem => {
					return (
						<div key={Math.random()} className={styles['result-block__result']}>
							<p>{elem.date}</p>
							<p>{elem.value}</p>
							<p>0</p>
						</div>
					);
				})
			) : (
				<></>
			)}
			<div className={styles['form__block-input']}>
				<input
					{...register('inn', {
						required: 'no',
						pattern: {
							value: /^[\d+]{10}$/,
							message: 'Please',
						},
					})}
					type='text'
					placeholder='10 цифр'
					style={{
						backgroundColor: 'rgba(70, 90, 126, 0)',
					}}
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
						{...register(`tonality`, {
							required: 'Введите корректные данные',
						})}
					>
						<option value='positive'>Позитивная</option>
						<option value='negative'>Негативная</option>
						<option value='any'>Любая</option>
					</select>
				</div>

				<input {...register('limit')} type='text' placeholder='от 1 до 1000' />
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
					/> */}
				</div>
				{/* <Button styleForButton='button-search'>Поиск</Button> */}
				<button type='submit'>go</button>
				<p onClick={() => navigate('/result')} className={styles['form__help']}>
					* Обязательные к заполнению поля
				</p>
			</div>
		</form>
	);
};

export default FormSeacrhTest;
