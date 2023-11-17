import '../../../assets/css/layouts/Landing/TopSection/TopSection.css';
import NavigateMenu from '../../NavigateMenu/NavigateMenu';
import AccountSummary from '../../AccountSummary/AccountSummary';
import TransctTypesDiagram from '../../TransctTypesDiagram/TransctTypesDiagram';
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