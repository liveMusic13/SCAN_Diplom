import React, {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useMemo,
	useState,
} from 'react';

interface IContext {
	ResultSearch: object;
	setResultSearch: Dispatch<SetStateAction<object>>;
}

const ResultSearchContext = createContext<IContext>({} as IContext);

export const ResultSearchProvider: FC<PropsWithChildren<unknown>> = ({
	children,
}) => {
	const [ResultSearch, setResultSearch] = useState({});

	const value = useMemo(
		() => ({
			ResultSearch,
			setResultSearch,
		}),
		[ResultSearch]
	);

	return (
		<ResultSearchContext.Provider value={value}>
			{children}
		</ResultSearchContext.Provider>
	);
};
