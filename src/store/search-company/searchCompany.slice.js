import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	riskAndTotalDocuments: {
		issueDateInterval: {
			startDate: '',
			endDate: '',
		},
		attributeFilters: {
			excludeTechNews: true,
			excludeAnnouncements: true,
			excludeDigests: true,
		},
		similarMode: 'duplicates',
		sortType: 'sourceInfluence',
		sortDirectionType: 'desc',
		intervalType: 'month',
		histogramTypes: ['totalDocuments', 'riskFactors'],
	},
	searchResultData: {},
	arrayViewDocuments: [],
};

export const searchCompany = createSlice({
	name: 'searchCompany',
	initialState,
	reducers: {
		addInfoAboutCompany: (state, { payload }) => {
			return {
				...state,
				riskAndTotalDocuments: {
					...state.riskAndTotalDocuments,
					...payload,
				},
			};
		},
		addSearchResultData: (state, { payload }) => {
			return {
				...state,
				searchResultData: payload,
			};
		},
		viewDocuments: (state, { payload }) => {
			return {
				...state,
				arrayViewDocuments: payload,
			};
		},
	},
});

export const { actions, reducer } = searchCompany;
