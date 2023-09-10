import { Dispatch, SetStateAction, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

type TypeAuthReturn = {
	isAuth: boolean;
	setIsAuth: Dispatch<SetStateAction<boolean>>;
};

export const useAuth = (): TypeAuthReturn => useContext(AuthContext);
