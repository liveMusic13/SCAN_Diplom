import { SubmitHandler, useForm } from 'react-hook-form';
import { $axios } from '../api';

interface IFormInputSearch {
	login: string;
	password: string;
}

// регулярка для ИНН { pattern: ^[\d+]{10}$ })}

export const useRequestSearch = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInputSearch>({
		mode: 'onChange',
	});

	const onSubmitSearch: SubmitHandler<IFormInputSearch> = data => {
		try {
			const responce = $axios.post('/api/v1/objectsearch/histograms');
		} catch (error) {
			console.log(error);
		}
	};
};
