import '../../../../assets/css/layouts/BottomSection/RecentTransactions/RecentTransactionsList.css';

const RecentTransactionsList = ({desc, date, summ, ind}) =>{

    const correctDate = Intl.DateTimeFormat('en-US').format(new Date(date));

    return (
        <div className="transact-list__item">
            <div className="item__left-part">
                <h2 className="item__transact-description">{desc}</h2>
                <p className="item__transact-date">{correctDate}</p>
            </div>
            <div className="item__right-part">
                <h2 className={`item__transact-summ ${ind%2 !== 0 ? 'red' : 'green'}`} >{summ}</h2>
                <p className="item__rate">Rate 2% </p>
            </div>
        </div>
    );
};

export default RecentTransactionsList;