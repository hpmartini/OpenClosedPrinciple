function printQuiz(questioins) {
  console.log('BAD_2');
  questioins.forEach((question) => {
    console.log(question.type);
    switch (question.type) {
      case 'boolean':
        console.log('1. True');
        console.log('2. False');
        break;
      case 'multipleChoice':
        question.options.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        });
        break;
      case 'text':
        console.log('Answer: ____________');
        break;
      case 'range':
        console.log('Min: ________');
        console.log('Max: ________');
    }
    console.log('');
  });
}

const questions_bad2 = [
  {
    type: 'boolean',
    description: 'This is useful.',
  },
  {
    type: 'multipleChoice',
    description: 'What is your favorite language?',
    options: ['CSS', 'HTML', 'JS', 'Python'],
  },
  {
    type: 'boolean',
    description: '',
  },
  {
    type: 'text',
    description: 'Describe your favorite JS feature',
  },
  {
    type: 'range',
    description: 'What is the speed limit in your city?',
  },
];

printQuiz(questions_bad2);
