function printQuiz(questioins) {
  console.log('BAD_1');
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
        console.log('Answer: _____');
    }
    console.log('');
  });
}

const questions_bad1 = [
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
];

printQuiz(questions_bad1);
