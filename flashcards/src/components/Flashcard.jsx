function Flashcard({card, showAnswer, onPrevious, onToggle, onNext}) {
    return (
        <>
            <p>{showAnswer ? card.answer : card.question}</p>
            <div className='buttonContainer'>
                <button onClick={onPrevious}>Previous</button>
                <button onClick={onToggle}>{showAnswer ? "Hide Answer" : "Show Answer"}</button>
                <button onClick={onNext}>Next</button>
            </div>
        </>
    );
}

export default Flashcard;