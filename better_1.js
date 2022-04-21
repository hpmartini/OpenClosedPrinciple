function question(description, options, print) {
    console.log(description);
    options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });
    print();
}

function printQuiz(questions_good1) {
    console.log('GOOD_1');
    questions_good1.forEach(question => {
        console.log('');
    })
}

const questions_good2 = [
    question('test', ['t1', 't2'], () => console.log('test test')),
];

printQuiz(questions_good2);
