import '../../../../assets/css/layouts/TopSection/NavigateMenu/NavigateMenu.css';
import Logo from '../../../Navigate/Logo/Logo';
import NavLeftPannel from '../../../Navigate/NavLeftPannel/NavLeftPannel';
import NavMiddlePannel from '../../../Navigate/NavMiddlePannel/NavMiddlePannel';


const NavigateMenu = () => {

	return (
		<div className='nav-menu'>
			<Logo/>
			<NavMiddlePannel/>
			<NavLeftPannel/>
		</div>
	);
};

export default NavigateMenu;