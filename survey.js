const readline = require('readline');

let answers = []

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\s your name? Nicknames are also acceptable :)  ', (answer) => {
  answers.push(answer)
  rl.question('What\s an activity you like doing? \n', (answer) => {
    answers.push(answer)
    rl.question('What do you listen to while doing that? \n', (answer) => {
      answers.push(answer)
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) \n', (answer) => {
        answers.push(answer)
        rl.question('What\s your favourite thing to eat for that meal? \n', (answer) => {
          answers.push(answer)
          rl.question('Which sport is your absolute favourite? \n', (answer) => {
            answers.push(answer)
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! \n', (answer) => {
              answers.push(answer)
    
    
    
    
    
    
    
    console.log(`Hello, my name is ${answers[0]}. I enjoy ${answers[1]} and love listenning to ${answers[2]}.
    I love having ${answers[3]} and my favorite meal is ${answers[4]}. My favorite sport is ${answers[5]} and my awesome
    superpower is ${answers[6]}.`);
    rl.close();
 })})})})})})
  

  
});


