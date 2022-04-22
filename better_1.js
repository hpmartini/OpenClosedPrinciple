function question(description, print) {
    console.log(description);
    print();
    console.log('---------------');
}

function printQuiz(questions_good2) {
    console.log('BETTER');
    questions_good2.forEach(question => {
        console.log('');
    })
}

const questions_good2 = [
    question('How you doing?', () => console.log('Answer: _________')),
    question('This statement is stateless', () => {
        console.log('1. true');
        console.log('2. false');
    }),
    question('Are you crazy?', () => ['yep', 'nope', 'maybe', 'WHAAAAT?!']
        .forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        })),
];

printQuiz(questions_good2);
