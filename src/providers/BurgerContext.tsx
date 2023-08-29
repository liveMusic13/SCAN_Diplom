import React, {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useContext,
	useMemo,
	useState,
} from 'react';

interface IContext {
	isViewBurger: boolean;
	setIsViewBurger: Dispatch<SetStateAction<boolean>>;
}

const BurgerContext = createContext<IContext>({} as IContext);

export const BurgerProvider: FC<PropsWithChildren<unknown>> = ({
	children,
}) => {
	const [isViewBurger, setIsViewBurger] = useState(false);

	const value = useMemo(
		() => ({
			isViewBurger,
			setIsViewBurger,
		}),
		[isViewBurger]
	);

	return (
		<BurgerContext.Provider value={value}>{children}</BurgerContext.Provider>
	);
};

export const useBurger = () => useContext(BurgerContext);
