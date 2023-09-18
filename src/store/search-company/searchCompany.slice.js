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
	arrayIdsDocuments: [],
};

export const searchCompany = createSlice({
	name: 'searchCompany',
	initialState,
	reducers: {
		addInfoAboutCompany: (state, { payload }) => {
			return {
				riskAndTotalDocuments: {
					...state.riskAndTotalDocuments,
					...payload,
				},
			};
		},
		addIdsDocuments: (state, { payload }) => {
			state.arrayIdsDocuments.push(payload);
		},
	},
});
