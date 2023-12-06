import '../../../../assets/css/layouts/TopSection/TransctTypesDiagram/TransctTypesDiagram.css';

const TransctTypesDiagram = ({temp}) => {

	const totalTransfer = temp ? temp.reduce((acc,curr)=> acc + parseFloat(curr[0].split('').slice(1).join('')),0) : 0;
	const totalExpensive = temp ? temp.reduce((acc,curr)=> acc + parseFloat(curr[1].split('').slice(1).join('')),0) : 0;
	const totalIncome = temp ? temp.reduce((acc,curr)=> acc + parseFloat(curr[2].split('').slice(1).join('')),0) : 0;
	const totalCredit = temp ? temp.reduce((acc,curr)=> acc + parseFloat(curr[3].split('').slice(1).join('')),0) : 0;

	return (
		<div className="transact-types">
            <div className='left-wrapper'>
				<div className='wrapper__diagramm'></div>
			</div>
			<div className='right-wrapper'>
				<div className='wrapper__transact'>
					<p >TRANSFER</p>
					<p className='transfer'>{totalTransfer}</p>
				</div>
				<div className='wrapper__transact'>
					<p >EXPENSIVE</p>
					<p className='expensive'>{totalExpensive}</p>
				</div>
				<div className='wrapper__transact'>
					<p >INCOME</p>
					<p className='income'>{totalIncome}</p>
				</div>
				<div className='wrapper__transact'>
					<p >LOANS</p>
					<p className='credit'>{totalCredit}</p>
				</div>
			</div>
		</div>
	);
};

export default TransctTypesDiagram;