const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*const titleCased = () => {
  const upperCasedTutorials = tutorials.map(sentence => sentence.split(" ").map(word => word[0].toUpperCase()+word.slice(1)))

  const combinedArrayOfWords = upperCasedTutorials.map(array => array.join(" "))
  
  return combinedArrayOfWords
}*/


const titleCased = () => {
  const newTutorial = tutorials.map(function(sentence){
    const splitSentence = sentence.split(" ")
    const capWordandJoin = splitSentence.map(function(word){
      const newWord =  word[0].toUpperCase()+word.slice(1)
      return newWord
    })
    const combined = capWordandJoin.join(" ")
    return combined
  })
  return newTutorial;
}