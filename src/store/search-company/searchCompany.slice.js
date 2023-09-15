import { createSlice } from '@reduxjs/toolkit';

export const searchCompany = createSlice({
	name: 'searchCompany',
	initialState: {
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
	reducers: {
		addInfoAboutCompany: (state, { payload }) => {
			state = {
				...state,
				payload,
			};
		},
	},
});

export const { actions, reducer } = searchCompany;
