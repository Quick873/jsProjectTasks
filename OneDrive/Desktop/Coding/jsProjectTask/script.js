console.log("Hello, Everyone!")

const greeting = ["Hello!", "Greetings!", "Hey!", "Welcome!"];

const verse = ["John 3:16: For God so loved the world, that He gave His only begotten Son, that who believes in Him shall not perish but have everlasting life.",
"2 Corinthians 5:21: God made Him who had no sin to be sin for us, so that in Him we might become the righteousness of God.",
"Romans 12:10: Be devoted to one another in love. Honor one another above yourselves.",
"Matthew 5:14: You are the light of the world. A town built on a hill cannot be hidden."];

const blessing = ["God bless.", "With love", "Amen", "Make more and better disciples."];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max -min)) + min;
}

var random = getRandom(0, 3);

var theGreeting = greeting[random];
var theVerse = verse[random];
var theBlessing = blessing[random];

console.log(theGreeting)
console.log(theVerse)
console.log(theBlessing)