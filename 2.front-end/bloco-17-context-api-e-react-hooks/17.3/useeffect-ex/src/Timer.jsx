import React, { useEffect, useState } from 'react'

export default function Timer() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [update, setUpdate] = useState(1);
  const [isHit, setIsHit] = useState(false);

  const TEN_SECONDS = 2000;
  const FOUR_SECONDS = 1000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUpdate(update + 1);
    }, TEN_SECONDS);

    return () => {
      clearInterval(intervalId);
    }
  }, [update]);

  useEffect(() => {
    setRandomNumber(generateRandomNumber());
  }, [update]);

  useEffect(() => setHit());

  const generateRandomNumber = () => (Math.floor((Math.random() * 1) * 101));

  function setHit() {
    const isMultiple = randomNumber % 3 === 0 && randomNumber % 5 === 0;

    if (isMultiple) {
      setIsHit(true);
      setTimeout(() => {
        setIsHit(false);
      }, FOUR_SECONDS);
    } else {
      setIsHit(false);
    }
  }

  return (
    <div>
      <h1>{randomNumber}</h1>
      {isHit ? <h3>Acerto</h3> : ''}
    </div>
  )
}
