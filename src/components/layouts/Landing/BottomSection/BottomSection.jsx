import '../../../../assets/css/layouts/Landing/BottomSection/BottomSection.css';
import Offers from '../../BottomSection/Offers/Offers';
import OnBordered from '../../BottomSection/OnBordered/OnBordered';
import Payments from '../../BottomSection/Payments/Payments';
import RecentPayments from '../../BottomSection/RecentPayments/RecentPayments';
import RecentTransactions from '../../BottomSection/RecentTransactions/RecentTransactions';

const BottomSection = () => {

	return (
		<div className='bottom-section'>

			<Payments/>
			<Offers/>
			<RecentPayments/>
			<RecentTransactions/>
			<OnBordered/>

		</div>
	);
};

export default BottomSection;