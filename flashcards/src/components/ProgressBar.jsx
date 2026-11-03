function ProgressBar({ currentCard, totalCards }) {
const progress = ((currentCard + 1) / totalCards) * 100;
    
    return (
        <>  
            <progress value={currentCard + 1} max={totalCards}></progress>
            <span>{Math.round(progress)}%</span>
            <span>{currentCard + 1} of {totalCards}</span>
        </>
    );
}

export default ProgressBar;    
