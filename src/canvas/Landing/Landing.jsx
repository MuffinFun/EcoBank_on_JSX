import '../../assets/css/canvas/Landing/Landing.css';
import BottomSection from '../../layouts/Landing/BottomSection/BottomSection';
import TopSection from '../../layouts/Landing/TopSection/TopSection';

const Landing = () => {

	return (
		<div className='main-window'>
			<TopSection></TopSection>
			<BottomSection></BottomSection>
		</div>
	);
};

export default Landing;