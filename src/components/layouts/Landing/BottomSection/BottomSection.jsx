import '../../../../assets/css/layouts/Landing/BottomSection/BottomSection.css';
import Offers from '../../BottomSection/Offers/Offers';
import OnBordered from '../../BottomSection/OnBordered/OnBordered';
import Payments from '../../BottomSection/Payments/Payments';
import RecentPayments from '../../BottomSection/RecentPayments/RecentPayments';
import RecentTransactions from '../../BottomSection/RecentTransactions/RecentTransactions';
import useFetch from '../../../../hooks/useFetch';

const BottomSection = () => {
	
	const {value: payments} = useFetch('http://localhost:5000/api/v1/payments', {}, []);
	const {value: offers} = useFetch('http://localhost:5000/api/v1/offers',{},[]);
	const {value: transactions} = useFetch('http://localhost:5000/api/v1/transact',{},[]);
	const {value: fillings} = useFetch('http://localhost:5000/api/v1/user-personal/fillings/14',{},[]);

	return (
		<div className='bottom-section'>

			<Payments payments={payments}/>
			<Offers offers={offers}/>
			<RecentPayments payments={payments}/>
			<RecentTransactions transactions={transactions}/>
			<OnBordered fillings={fillings}/>

		</div>
	);
};

export default BottomSection;