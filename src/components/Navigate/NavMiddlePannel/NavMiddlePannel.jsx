import '../../../assets/css/components/Navigate/NavMiddlePannel/NavMiddlePannel.css';

const NavMiddlePannel = () => {
	return (
		<div className='nav-middle-pannel'>
			<button className='nav-btn'>home</button>
			<button className='nav-btn'>dashboard</button>
			<button className='nav-btn'>wallet</button>
			<button className='nav-btn'>transfers</button>
			<button className='nav-btn'>billpay</button>
		</div>
	);
};

export default NavMiddlePannel;