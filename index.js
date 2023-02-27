// Handle of author
// content,
// An image link posted by the author of the post
// Number of views,
// Number of likes,

// QUESTION 1

const instagramPost = new Object();
instagramPost.handleOfAuthor = "Genevieve Njoku";
instagramPost.content = "About my birthday";
instagramPost.imageLink = "https://www.instagram.com";
instagramPost.numberOfViews = 2009;
(instagramPost.numberOfLikes = 1), 200;
instagramPost.displayInstagramPost = function () {
  return this.instagramPost;
};
console.log(instagramPost);

const myInstagramPost = new Object();
myInstagramPost.handleOfAuthor = "Joan Doe";
myInstagramPost.content = "About my wedding";
myInstagramPost.imageLink = "https://www.instagram.com/";
myInstagramPost.numberOfViews = 909;
myInstagramPost.numberOfLikes = 2900;
myInstagramPost.displayNumberOfLikes = function () {
  return this.numberOfLikes;
};
console.log(myInstagramPost);

// QUESTION 2

const person = {
  name: "Musa Dawodu",
  age: 19,
  location: "Lekki, Lagos state",
}
 person.jambScores=  {
    ENG: 70,
    GOVT: 85,
    LIT: 82,
    CRK: 94,
  }

  console.log(person);

// QUESTION 4

// There are two different ways to clone an Object, Namely;

// 1. Using Object.assign() example;

const myInfo = {
  name: 'Genevieve Njoku',
  level: 'Graduate',
  state: 'Imo State'
}
console.log(myInfo)
// I WILL USE THE ASSIGN METHOD TO UPDATE MY INFO AFTER BECOMING A GRADUATE

const updatedInfo = Object.assign({}, myInfo)
updatedInfo.level = 'NYSC Corper';
console.log(updatedInfo);


// 2. Using the Spread Syntax (...)  example,

const anotherInfo = {...myInfo}
anotherInfo.state = 'Lagos State'
console.log(anotherInfo)



// QUESTION 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 };
 
// enumeration Method - For..in

for (const party in presidentialCandidates){

  console.log('${presidentialCandidates[party]} is the presidential candidate of ${party}')
}

// Obect.keys

// enumeration Method -FOR..of

for (let [party,candidate] of Object.entries(presidentialCandidates)){

  console.log('${candidate} is the presidential candidate of ${party}')
}