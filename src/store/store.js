import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as searchCompany } from './search-company/searchCompany.slice';

const reducers = combineReducers({ searchCompany: searchCompany });

export const store = configureStore({
	reducer: reducers,
});
