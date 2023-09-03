import cn from 'clsx';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { $axios } from '../../api';
import Button from '../ui/button/Button';
import Checkbox from '../ui/checkbox/Checkbox';
import Input from '../ui/input/Input';
import styles from './FormSeacrh.module.scss';

const FormSeacrh: FC = () => {
	const [colorDateStart, setColorDateStart] = useState(0);
	const [colorDateEnd, setColorDateEnd] = useState(0);

	//test
	const onSubmitSearch = data => {
		//inn gazprom 7736050003
		try {
			const responce = $axios.post('/v1/objectsearch/histograms');
			console.log(responce);
			console.log('data:', data);
		} catch (error) {
			console.log(error);
		}
	};
	//test

	const { handleSubmit, register } = useForm();
	return (
		<form
			className={cn(styles['search__form'], styles.form)}
			onSubmit={handleSubmit(onSubmitSearch)}
		>
			<div className={styles['form__block-input']}>
				<Input id={'INN'} placeholder='10 цифр'>
					ИНН компании *
				</Input>
				<div className={styles['form__block-select']}>
					<label className={styles['form__label-select']} htmlFor='select'>
						Тональность
					</label>
					<select
						defaultValue='Любая'
						id='select'
						{...register(`select`, {
							required: 'Введите корректные данные',
						})}
					>
						<option value='Позитивная'>Позитивная</option>
						<option value='Негативная'>Негативная</option>
						<option value='Любая'>Любая</option>
					</select>
				</div>
				<Input id={'docs'} placeholder='от 1 до 1000'>
					Количество документов в выдаче *
				</Input>
				<div className={styles['form__block-data-input']}>
					<label>
						Диапазон поиска *
						<input
							id='dateStart'
							className={cn({
								[styles.start_data]: colorDateStart === 0,
								[styles.start_data_noBefore]: colorDateStart === 1,
							})}
							type='date'
							onClick={() => setColorDateStart(1)}
							style={{
								color: `rgba(0, 0, 0, ${colorDateStart})`,
							}}
							{...register(`dateStart`, {
								required: 'Введите корректные данные',
							})}
						/>
					</label>
					<label>
						<input
							id='dataEnd'
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
							{...register(`dataEnd`, {
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
				<Button styleForButton='button-search'>Поиск</Button>
				<p className={styles['form__help']}>* Обязательные к заполнению поля</p>
			</div>
		</form>
	);
};

export default FormSeacrh;
