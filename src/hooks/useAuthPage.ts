import { useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthService } from '../services/auth.service';
import { useAuth } from './useAuth';

interface IFormInput {
	login: string;
	password: string;
}

export const useAuthPage = () => {
	const { setIsAuth } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<IFormInput> = async data => {
		AuthService.main(data.login, data.password, setIsAuth);
	};

	return useMemo(() => {
		return {
			onSubmit,
			register,
			handleSubmit,
			errors,
		};
	}, [errors]);
};
