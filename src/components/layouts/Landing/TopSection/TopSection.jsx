import '../../../../assets/css/layouts/Landing/TopSection/TopSection.css';
import NavigateMenu from '../../TopSection/NavigateMenu/NavigateMenu';
import AccountSummary from '../../TopSection/AccountSummary/AccountSummary';
import TransctTypesDiagram from '../../TopSection/TransctTypesDiagram/TransctTypesDiagram';
import useFetch from '../../../../hooks/useFetch';
const TopSection = () => {

	const {value: totals} = useFetch('http://localhost:5000/api/v1/transact/total/14',{},[]);

	const temp= totals ? totals.map(e=>Object.values(e)): null;

	return (
		<div className='top-section'>
			<NavigateMenu/>
			<AccountSummary/>
			<TransctTypesDiagram temp={temp}/>
		</div>
	);
};

export default TopSection;