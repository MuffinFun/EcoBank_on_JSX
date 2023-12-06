import '../../../../assets/css/layouts/BottomSection/OnBordered/OnBoarderedList.css';

const OnBorderedList = ({name, percent})=>{
    return (
        <div className="on-board__item">
            <h2 className="item__title">{name}</h2>
            <p className="item__percents">{percent}% Completed</p>
        </div>
    );
};
export default OnBorderedList;