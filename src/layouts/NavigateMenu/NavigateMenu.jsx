import '../../assets/css/layouts/NavigateMenu/NavigateMenu.css';
import Logo from '../../components/Navigate/Logo/Logo';
import NavLeftPannel from '../../components/Navigate/NavLeftPannel/NavLeftPannel';
import NavMiddlePannel from '../../components/Navigate/NavMiddlePannel/NavMiddlePannel';


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