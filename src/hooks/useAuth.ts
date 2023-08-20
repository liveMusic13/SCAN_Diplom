type TypeAuthReturn = {
	isAuth: boolean;
};

export const useAuth = (): TypeAuthReturn => {
	return {
		isAuth: false,
	};
};
