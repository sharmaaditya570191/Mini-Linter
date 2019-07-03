const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let over1 = 0,over2 = 0,over3 = 0;
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(" ");

//console.log(storyWords.length);

let betterWords = storyWords.filter(word => (!(unnecessaryWords.includes(word)))); //removes unnecessary words

function cntOverusedWords(word){
  if(word === 'really'){
    over1++;
  }
  else if(word === 'very'){
    over2++;
  }
  else if(word === 'basically'){
    over3++;
  }
}

betterWords.forEach(cntOverusedWords);

let sentences = 0;
storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
  }
});

const logInfo = () => {
    console.log('RESULT');
    console.log('Word count: ' + storyWords.length);
    console.log('Sentence count: ' + sentences);
    console.log('***********OVERUSED WORDS COUNT*************');
    console.log('1.really: ' + over1);
    console.log('2.very: ' + over2);
    console.log('3.basically: ' + over3);
    console.log('********************************************');
  
};

//logInfo();
// removes overused words after first occurence
let removeOverused = betterWords.filter(function(element, index, array){
  if(overusedWords.includes(element)){
    return index === array.indexOf(element);
  }
  else
  return true;
})
// replaces overused words 
let rword;
function replaceOverused(array){
  for(let i=0; i<array.length; i++){
    if(overusedWords.includes(array[i])){
      readline.question('Enter word to replace', (rword) => {
        if(overusedWords.includes(array[i])){
          array[i] = rword;
        }
      readline.close()})
    }
  }
  //console.log(betterWords.join(" "));
}

function mostUsedWord(){
  let tmparray = [];
  tmparray.push(over1, over2, over3);
  tmparray.sort();
  if(tmparray[2] === over1){
    console.log('Most used word: really');
  }
  else if(tmparray[2] === over2){
    console.log('Most used word: very');
  }
  else if(tmparray[2] === over3){
    console.log('Most used word: basically');
  }
}
//console.log(betterWords.join(" "));

//console.log(removeOverused.join(" "));

console.log('******************MENU**********************');
console.log('1.View linter analysis');
console.log('2.Remove unnecessary words');
console.log('3.Remove overused words');
console.log('4.Replace overused words with something else');
console.log('5.Find most used word');

readline.question('Enter choice ', (answer) => {
  switch(answer){
    case '1': logInfo();
    break;
    case '2': console.log(betterWords.join(" "));
    break;
    case '3': console.log(removeOverused.join(" "));
    break;
    case '4': replaceOverused(betterWords);
    break;
    case '5': mostUsedWord();
    break;
  }
  readline.close()
})

//console.log('Processing..............Done.');

//Things done

/*

    1.For the overused words, remove it every other time it appears.

    2.Write a function that finds the word that appears the greatest number of times.

    3.Replaced overused words with something else.(error)
*/ 
