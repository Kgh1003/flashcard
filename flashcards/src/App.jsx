import { useState } from 'react';
import { cards } from './data';
import ProgressBar from './components/ProgressBar';
import Flashcard from './components/Flashcard';

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  function handleNextCard() {
    setCurrentCard((currentCard + 1) % cards.length);
    setShowAnswer(false);
  }

  function handlePreviousCard() {
    setCurrentCard((currentCard - 1 + cards.length) % cards.length);
    setShowAnswer(false);
  }

  function handleToggleAnswer() {
    setShowAnswer(!showAnswer);
  }
  return (
    <main>
      <h1>Flash Cards</h1>
      <div className='cardContainer'>
        <ProgressBar currentCard={currentCard} totalCards={cards.length} />
        <Flashcard
          card={cards[currentCard]}
          showAnswer={showAnswer}
          onPrevious={handlePreviousCard}
          onToggle={handleToggleAnswer}
          onNext={handleNextCard}
        />
      </div>
    </main>
  )
}

export default App
