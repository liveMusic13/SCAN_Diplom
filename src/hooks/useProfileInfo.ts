import { useEffect, useMemo, useState } from 'react';
import { $axios } from '../api';

export const useProfileInfo = () => {
	const [companyLimit, setCompanyLimit] = useState(null);
	const [usedCompanyCount, setUsedCompanyCount] = useState(null);

	useEffect(() => {
		$axios
			.get('/v1/account/info')
			.then(response => {
				setCompanyLimit(response.data.eventFiltersInfo.companyLimit);
				setUsedCompanyCount(response.data.eventFiltersInfo.usedCompanyCount);
			})
			.catch(error => {
				console.error(error);
			});
	}, [companyLimit, usedCompanyCount]);

	return useMemo(() => {
		return {
			companyLimit,
			setCompanyLimit,
			usedCompanyCount,
			setUsedCompanyCount,
		};
	}, [companyLimit, usedCompanyCount]);
};
