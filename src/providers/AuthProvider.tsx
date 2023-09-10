import Cookies from 'js-cookie';
import React, {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useState,
} from 'react';
import { TOKEN } from '../app.constants';

interface IContext {
	isAuth: boolean;
	setIsAuth: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IContext>({} as IContext);

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN));

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
