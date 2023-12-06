import '../../../../assets/css/layouts/BottomSection/RecentTransactions/RecentTransactions.css';
import RecentTransactionsList from './RecentTransactionsList';

const RecentTransactions = ({transactions}) => {
	return (
	<div className='recent-transct'>
        <h2 className='transact__title'>TRANSACTIONS</h2>
		<div className='transact__transact-list'>
			{!transactions ? 'not found' : transactions.map((item,ind)=><RecentTransactionsList key={ind} ind={ind} desc={item.transactiondescription} date={item.transactiondate} summ={item.transactionsum}/>)}
		</div>
	</div>
	);
};

export default RecentTransactions;