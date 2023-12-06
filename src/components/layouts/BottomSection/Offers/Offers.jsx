import '../../../../assets/css/layouts/BottomSection/Offers/Offers.css';
import OffersList from './OffersList';

const Offers = ({offers}) => {
	return (
	<div className='offers'>
        {!offers ? 'not found' : offers.map((item,ind)=> <OffersList key={ind} name={item.offername}/>)}
	</div>
	);
};

export default Offers;