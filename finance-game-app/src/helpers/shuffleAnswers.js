const shuffleAnswers = (arr) => {
	arr.map(item => item.answers.sort((a,b) => Math.random() < .5 ? 1 : -1);
  return arr;
};

export default shuffleAnswers;