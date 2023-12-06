import '../../../assets/css/components/AccountSummary/SummaryCards.css';

const SummaryCards = ({...cardInfo}) => {
	const option = {
		month: 'numeric',
		year: '2-digit'
	};
	const expDate = Intl.DateTimeFormat('en-US', option).format(cardInfo.expDate);
	return (
		<div className="acc-summary__card">
			<div className="card__top">
				<p>{cardInfo.cardName}</p>
				<p>NFC</p>
			</div>
			<div className="card__middle">
				<h2>Elena Suvorko</h2>
				<p>{cardInfo.pin} {cardInfo.pin} {cardInfo.pin} {cardInfo.pin}</p>
			</div>
			<div className="card__bot">
				<p><span>Exp </span>{expDate}</p>
				<p>Pay</p>
			</div>
		</div>
	);
};

export default SummaryCards;