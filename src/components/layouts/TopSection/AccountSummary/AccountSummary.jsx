import '../../../../assets/css/layouts/TopSection/AccountSummary/AccountSummary.css';
import SummaryCards from '../../../AccountSummary/SummaryCards/SummaryCards';

import useFetch from '../../../../hooks/useFetch';

const AccountSummary = () => {
	
	const {value: cards} = useFetch('http://localhost:5000/api/v1/user-cards/14',{},[]);

	return (
		<div className='acc-summary'>
			{!cards ? 'dont have cards' : cards.map((item,ind) =><SummaryCards key={ind} cardName={item.cardtypename} expDate={item.epireson} pin={item.pincode}/>)}
		</div>
	);
};

export default AccountSummary;