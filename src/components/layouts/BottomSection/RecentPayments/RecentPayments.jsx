import '../../../../assets/css/layouts/BottomSection/RecentPayments/RecentPayments.css';
import RecentPaymentsList from './RecentPaymentsList';

const RecentPayments = ({payments}) => {
	return (
		<div className='recent-payments'>
		{!payments ? 'error' : payments.map((item,ind)=> <RecentPaymentsList key={ind} name={item.billsname}/>)}
	</div>
	);
};

export default RecentPayments;