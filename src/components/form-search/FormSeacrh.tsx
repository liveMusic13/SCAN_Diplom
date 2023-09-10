import cn from 'clsx';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { $axios } from '../../api';
import Checkbox from '../ui/checkbox/Checkbox';
import Input from '../ui/input/Input';
import styles from './FormSeacrh.module.scss';

interface IStateResultData {
	setResultData: Dispatch<SetStateAction<object>>;
	setIsViewSearch: Dispatch<SetStateAction<boolean>>;
}

//7710137066 INN

const FormSeacrh: FC<IStateResultData> = ({
	setIsViewSearch,
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

	const onSubmit = async () => {
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

		try {
			const response = await $axios.post(
				'/v1/objectsearch/histograms',
				updateDate
			);

			setResultData(response);
			setIsViewSearch(false);

			const testing = async () => {
				try {
					const response = await $axios.post('/v1/objectsearch', updateDate);
					console.log(response);
				} catch (error) {
					console.log(error);
				}
			};
			testing();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form
			className={cn(styles['search__form'], styles.form)}
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className={styles['form__block-input']}>
				<Input inn={true} register={register}>
					ИНН компании *
				</Input>
				{errors.inn && (
					<div style={{ color: 'red', fontSize: '10px' }}>
						{errors.inn.message}
					</div>
				)}
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
				<Input inn={false} register={register}>
					Количество документов в выдаче *
				</Input>
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
					<Checkbox id={'max'}>Признак максимальной полноты</Checkbox>
					<Checkbox id={'context'}>Упоминания в бизнес-контексте</Checkbox>
					<Checkbox id={'public'}>Главная роль в публикации</Checkbox>
					<Checkbox id={'factors'}>Публикации только с риск-факторами</Checkbox>
					<Checkbox id={'news'}>Включать технические новости рынков</Checkbox>
					<Checkbox id={'calendar'}>Включать анонсы и календари</Checkbox>
					<Checkbox id={'onNews'}>Включать сводки новостей</Checkbox>
				</div>
				<button type='submit' className={styles['button-search']}>
					Поиск
				</button>
				<p className={styles['form__help']}>* Обязательные к заполнению поля</p>
			</div>
		</form>
	);
};

export default FormSeacrh;
