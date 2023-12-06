import '../../../../assets/css/layouts/BottomSection/Payments/PaymentsList.css';

const RecentPaymentsList = ({name}) => {
    return (
        <div className="payment__item">
            <h2 className="payment__name">{name}</h2>
        </div>
    );
};
export default RecentPaymentsList;