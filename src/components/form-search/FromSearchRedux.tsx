import cn from 'clsx';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { $axios } from '../../api';
import { actions } from '../../store/search-company/searchCompany.slice.js';
import Checkbox from '../ui/checkbox/Checkbox';
import Input from '../ui/input/Input';
import styles from './FormSeacrh.module.scss';
interface IStateResultData {
	setResultData: Dispatch<SetStateAction<object>>;
	setIsViewSearch: Dispatch<SetStateAction<boolean>>;
	viewDocuments: object;
	setViewDocuments: Dispatch<SetStateAction<any>>;
}const FormSeacrhRedux: FC<IStateResultData> = ({
	setIsViewSearch,
	setResultData,
	viewDocuments,
	setViewDocuments,
}) => {
	const [colorDateStart, setColorDateStart] = useState(0);
	const [colorDateEnd, setColorDateEnd] = useState(0);}
  const riskAndTotalDocuments = useSelector(
		state => state.searchCompany.riskAndTotalDocuments
	);
	// const arrayIdsDocuments = useSelector(
	// 	state => state.searchCompany.arrayIdsDocuments
	// );
	const dispatch = useDispatch();
  const {
		register,	mode: 'onChange',
	};
  const objectSearchForDocuments = async (postObject: object) => {
		try {
			const response = await $axios.post('/v1/objectsearch', postObject);

			// response.data.items.forEach(elem => {
			// 	dispatch(actions.arrayIdsDocuments(elem.encodedId));
			// });

			dispatch(actions.addIdsDocuments(1));
		} catch (error) {
			console.log(error);
		}
	};

	const onSubmit = async () => {
		const searchContext = {
			targetSearchEntitiesContext: {
				targetSearchEntities: [};

          const updateDate = {
            ...riskAndTotalDocuments,
            searchContext,
            limit,
            issueDateInterval,
          };
      
          dispatch(actions.addInfoAboutCompany(updateDate));
          console.log('riskAndTotalDocuments', riskAndTotalDocuments);
          try {
            const response = await $axios.post(
              '/v1/objectsearch/histograms',
              updateDate
            );console.log('response updateDate', response);

            objectSearchForDocuments(updateDate);
          } catch (error) {
            console.log(error);
          }return (
            <form
              className={cn(styles['search__form'], styles.form)}
              onSubmit={handleSubmit(onSubmit)}
            ><div className={styles['form__block-input']}>
            <Input inn={true} register={register}>
              ИНН компании *
            </Input>
            {errors.inn && (			<div style={{ color: 'red', fontSize: '10px' }}>
						{errors.inn.message}
					</div>
				)}
				<div className={styles['form__block-select']}>
					<label className={styles['form__label-select']} htmlFor='select'>
						Тональность			<option value='any'>Любая</option>
					</select>
				</div>
				<Input inn={false} register={register}>
					Количество документов в выдаче *
				</Input>
				<div className={styles['form__block-data-input']}>
					<label>
						Диапазон поиска *</div>
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