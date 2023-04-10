
"use strict";

window.onload = () => {
  // Total questions
  let questionTotal = 28;

  // Question Counter (which question are we on)
  let questionCounter = 0;

  // Test logic:
  let solicitation = `Please` ;
  let questionArray = [
    `${solicitation} your name`,
    `${solicitation} fill in the gap "--- comes but once"`,
    `${solicitation} enter the word for activity that a person do regularly to earn income`,
    `${solicitation} enter the word for specific plan or design (eg Scheme)`,
    `${solicitation} fil in the gap "Information ----"`,
    `${solicitation} enter the word for (male/female person-pronoun)`,
    `${solicitation} enter the first and third person singular past of "be"`,
    `${solicitation} enter a word of excitement`,
    `${solicitation} enter a word that denote creative in thinking (eg idea, new method)`,
    `${solicitation} enter a word used as conjuction of two word or sentence`,
    `${solicitation} enter the past tense of dive`,
    `${solicitation} fill in the gap 7days makes a ?`,
    `${solicitation} enter the past simple form of "go"`,
    `${solicitation} enter a word that denotes an instruction for computer (eg. Program)`,
    `${solicitation} enter a word for male/female person-adjective`,
    `${solicitation} enter a word for two or more people working together`,
    `${solicitation} enter word for a structure for house, office, etc`,
    `${solicitation} enter a word of romantic or passionate attachment (e.g Friendships)`,
    `${solicitation} enter a word for an associate or coworker`,
    `${solicitation} enter a word for an account of incident or event (noun)`,
    `${solicitation} enter what is made after Investment`,
    `${solicitation} enter the past subjunctive of BE`,
    `${solicitation} enter the complete word (for God so love the "----")`,
    `${solicitation} enter a word for the quality or state of being complete`,
    `${solicitation} enter a word for place were work is done`,
    `${solicitation} enter a word for something that one hopes or intends to accomplish`,
    `${solicitation} enter the past tense of KNOW`,
    `${solicitation} enter the past tense and past participle of MAKE`,
  ];
  let userInputs = [];
  for (let i = questionTotal; i >= 0; i--) {
    // console.log(`The "i" of our "for" loop `);
    // console.log("What question (of questionArray) is accessed (using questionCounter):");
    console.log(
      questionArray[questionCounter] + `... (${questionTotal} questions left)`
    );
    userInputs.push(
      prompt(
        questionArray[questionCounter] + `... (${questionTotal} questions left)`
      )
    );
    console.log(userInputs);
    questionCounter++;
    // console.log(`This is the current "questionCounter" variable (it should go up):`);
    questionTotal--;
    // questionsLeft = `; (${questions} questions left)`;
 
  }
let originalStory = `<h2>One day, ${userInputs[0]} received an exciting ${userInputs[1]} to ${userInputs[2]} on a new 
${userInputs[3]} that involved developing cutting-edge ${userInputs[4]}. ${userInputs[5]} ${userInputs[6]}
${userInputs[7]} to be a part of such an ${userInputs[8]} ${userInputs[3]} ${userInputs[9]} eagerly 
${userInputs[10]} into the ${userInputs[2]}.</h2>

<h2>As the ${userInputs[11]}s ${userInputs[12]} by, ${userInputs[0]} found himself working long hours, poring over lines of
${userInputs[13]}, ${userInputs[9]} collaborating with ${userInputs[14]} ${userInputs[15]} to ensure the 
${userInputs[3]}'s success. But the more ${userInputs[5]} worked, the more ${userInputs[5]} realized that 
${userInputs[5]} wasn't just ${userInputs[16]} ${userInputs[4]}, ${userInputs[5]} ${userInputs[6]} also ${userInputs[16]} ${userInputs[17]}.</h2>

<h2>${userInputs[5]} got to know ${userInputs[14]} ${userInputs[18]} on a personal level, sharing 
${userInputs[19]} about their lives ${userInputs[9]}and ${userInputs[20]} outside of ${userInputs[2]}work. ${userInputs[5]} discovered that they 
${userInputs[21]} all passionate about using ${userInputs[4]} to make a positive impact on the ${userInputs[23]}.</h2>

<h2>${userInputs[9]} as the ${userInputs[3]} neared ${userInputs[24]}, ${userInputs[0]} realized that the ${userInputs[25]} wasn't just a place to 
${userInputs[2]}), but a community of like-minded individuals striving towards a common ${userInputs[26]}. 
${userInputs[5]} felt grateful to be a part of it all ${userInputs[9]}and(a word for two or more people working together) 
${userInputs[25]} that the friendships ${userInputs[9]} connections ${userInputs[5]} ${userInputs[28]} would last a lifetime.</h2>`;
console.log(originalStory);

  // End of User Inputs
  alert(
    "All done! Ready for your totally-accurate, not-at-all confusing history of tech??"
  );

  // Output
  console.log(originalStory);
  document.write(originalStory);
};


// For De-Bugging:
/* let userInputs = [
	 "Alex",
	 "opportunity",
	 "work",
	 "project",
	 "technology",
	 "He",
	 "was",
	 "thrilled",
	 "innovative",
	 "and",
	 "dove",
	 "week",
	 "went",
	 "code",
	 "his",
	 "team",
	 "building",
	 "relationships",
	 "colleagues",
	 "stories",
	 "interests",
	 "were",
	 "world",
	 "completion",
	 "workplace",
	 "goal",
	 "knew",
	 "made",
]; */