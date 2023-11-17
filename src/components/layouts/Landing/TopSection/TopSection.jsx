import '../../../../assets/css/layouts/Landing/TopSection/TopSection.css';
import NavigateMenu from '../../TopSection/NavigateMenu/NavigateMenu';
import AccountSummary from '../../TopSection/AccountSummary/AccountSummary';
import TransctTypesDiagram from '../../TopSection/TransctTypesDiagram/TransctTypesDiagram';
const TopSection = () => {

	return (
		<div className='top-section'>
			<NavigateMenu/>
			<AccountSummary/>
			<TransctTypesDiagram/>
		</div>
	);
};

export default TopSection;