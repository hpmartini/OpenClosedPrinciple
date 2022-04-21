class BoolenQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log('1. True');
    console.log('2. false');
  }
}

class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log('Answer: ____________');
  }
}

class RangeQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log('Min: ________');
    console.log('Max: ________');
  }
}

function printQuiz(questions_good1) {
  console.log('GOOD_2');
  questions_good1.forEach(question => {
    console.log(question.description);
    question.printQuestionChoices();
    console.log('');
  })
} 

const questions_good2 = [
  new BoolenQuestion('This video is useful.'),
  new MultipleChoiceQuestion('What is your favorite language?', ['CSS', 'HTML', 'JS', 'Python']),
  new TextQuestion('Describe your favorite JS feature.'),
  new RangeQuestion('What is the speed limit in your city.'),
];

printQuiz(questions_good2);
