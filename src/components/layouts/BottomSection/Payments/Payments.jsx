import '../../../../assets/css/layouts/BottomSection/Payments/Payments.css';
import PaymentsList from './PaymentsList';
const Payments = ({payments}) => {
	return (
		<div className='payments'>
			{!payments ? 'error' : payments.map((item,ind)=> <PaymentsList key={ind} name={item.billsname}/>)}
		</div>
	);
};

export default Payments;