import '../../../../assets/css/layouts/BottomSection/Offers/OffersList.css';

const OffersList = ({name}) =>{
    return (
        <div className="offers-list__item">
            <div className="item__content">
                <h2>{name}</h2>
                <p>ВЫГОДНО</p>
            </div>
        </div>
    );
};

export default OffersList;