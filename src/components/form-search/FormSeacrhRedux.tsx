import cn from 'clsx';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Checkbox from '../ui/checkbox/Checkbox';
import Input from '../ui/input/Input';
import styles from './FormSeacrh.module.scss';

interface IStateResultData {
	setResultData: Dispatch<SetStateAction<object>>;
	setIsViewSearch: Dispatch<SetStateAction<boolean>>;
	viewDocuments: object;
	setViewDocuments: Dispatch<SetStateAction<any>>;
}

//7710137066 INN

const FormSeacrhRedux: FC<IStateResultData> = ({
	setIsViewSearch,
	setResultData,
	viewDocuments,
	setViewDocuments,
}) => {
	const [colorDateStart, setColorDateStart] = useState(0);
	const [colorDateEnd, setColorDateEnd] = useState(0);

	const { searchCompany } = useSelector(state => state);
	console.log(searchCompany);

	let test = {
		ids: [],
	};

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	});

	return (
		<form
			className={cn(styles['search__form'], styles.form)}
			onSubmit={handleSubmit(console.log)}
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
					<Checkbox id={'max'} register={register}>
						Признак максимальной полноты
					</Checkbox>
					<Checkbox id={'context'} register={register}>
						Упоминания в бизнес-контексте
					</Checkbox>
					<Checkbox id={'public'} register={register}>
						Главная роль в публикации
					</Checkbox>
					<Checkbox id={'factors'} register={register}>
						Публикации только с риск-факторами
					</Checkbox>
					<Checkbox id={'news'} register={register}>
						Включать технические новости рынков
					</Checkbox>
					<Checkbox id={'calendar'} register={register}>
						Включать анонсы и календари
					</Checkbox>
					<Checkbox id={'onNews'} register={register}>
						Включать сводки новостей
					</Checkbox>
				</div>
				<button type='submit' className={styles['button-search']}>
					Поиск
				</button>
				<p className={styles['form__help']}>* Обязательные к заполнению поля</p>
			</div>
		</form>
	);
};

export default FormSeacrhRedux;
