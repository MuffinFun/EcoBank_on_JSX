import '../../assets/css/canvas/Landing/Landing.css';
import BottomSection from '../../components/layouts/Landing/BottomSection/BottomSection';
import TopSection from '../../components/layouts/Landing/TopSection/TopSection';

const Landing = () => {

	return (
		<div className='main-window'>
			<TopSection></TopSection>
			<BottomSection></BottomSection>
		</div>
	);
};

export default Landing;