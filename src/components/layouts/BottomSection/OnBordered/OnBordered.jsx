import '../../../../assets/css/layouts/BottomSection/OnBordered/OnBordered.css';
import OnBorderedList from './OnBoarderedList';

const OnBordered = ({fillings}) => {
	return (
	<div className='on-bord'>
		{!fillings ? 'not found' : fillings.map((item, ind)=><OnBorderedList key={ind} name={item.goalname} percent={item.fillpercent}/>)}
	</div>
	);
};

export default OnBordered;