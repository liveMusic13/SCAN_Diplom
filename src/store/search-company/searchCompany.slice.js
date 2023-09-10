import { createSlice } from '@reduxjs/toolkit';

export const searchCompany = createSlice({
	name: 'searchCompany',
	initialState: {
		issueDateInterval: {
			startDate: '',
			endDate: '',
		},
		searchContext: {
			targetSearchEntitiesContext: {
				targetSearchEntities: [
					{
						type: 'company',
						sparkId: null,
						entityId: null,
						inn: 7710137066,
						maxFullness: true,
						inBusinessNews: null,
					},
				],
				onlyMainRole: true,
				tonality: 'any',
				onlyWithRiskFactors: true,
			},
		},
		attributeFilters: {
			excludeTechNews: true,
			excludeAnnouncements: true,
			excludeDigests: true,
		},
		similarMode: 'duplicates',
		limit: 1000,
		sortType: 'sourceInfluence',
		sortDirectionType: 'desc',
		intervalType: 'month',
		histogramTypes: ['totalDocuments', 'riskFactors'],
	},
	reducers: {
		startDateRedux: (state, payload) => {
			state.issueDateInterval.startDate = payload.payload;
		},
		endDateRedux: (state, payload) => {
			state.issueDateInterval.endDate = payload.payload;
		},
		innRedux: (state, payload) => {
			state.searchContext.targetSearchEntitiesContext.targetSearchEntities.inn =
				payload.payload;
		},
		tonalityRedux: (state, payload) => {
			state.searchContext.targetSearchEntitiesContext.tonality =
				payload.payload;
		},
		limitRedux: (state, payload) => {
			state.limit = payload.payload;
		},
	},
});

export const { actions, reducer } = searchCompany;
