import { useEffect, useState } from 'react';

const useTypeWriterEffect = (words) => {
  const [typedValue, setTypedValue] = useState(words[0]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isBackspacing, setIsBackspacing] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let shouldBackspace = isBackspacing;
      let wordIndex = currentWordIndex;
      if (typedValue === '') {
        shouldBackspace = false;
        wordIndex = currentWordIndex === words.length - 1 ? 0 : currentWordIndex + 1;
      } else if (typedValue === words[currentWordIndex]) {
        shouldBackspace = true;
      }
      setIsBackspacing(shouldBackspace);
      setCurrentWordIndex(wordIndex);

      if (shouldBackspace) {
        setTypedValue(typedValue.substring(0, typedValue.length - 1));
      } else {
        setTypedValue(words[wordIndex].substring(0, typedValue.length + 1));
      }
    }, isBackspacing ? 200 : 500);

    return () => { clearInterval(intervalId); };
  }, [typedValue, currentWordIndex, isBackspacing]);

  return `${typedValue}|`;
};

export default useTypeWriterEffect;
