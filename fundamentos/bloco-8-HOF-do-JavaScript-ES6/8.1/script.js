const wakeUp = () => 'Acordando!!';
const breakFast = () => 'Bora tomar café!!';
const sleepTime = () => 'Partiu dormir!!';

const doingThings = (func) => {
  console.log(func());
};

doingThings(wakeUp);
doingThings(breakFast);
doingThings(sleepTime);