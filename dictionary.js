const dictionary = {
    good: "Pleasant, satisfactory, or of high quality",
    bad: "Unpleasant, unsatisfactory, or of low quality",
    big: "Large in size or amount",
    small: "Little in size or amount",
    please: "A polite word used when making a request",
    thankyou: "A polite expression of gratitude",
    sorry: "An expression of regret or apology",
    here: "In or to this place",
    there: "In or to that place",
    hi: "it is a way to greet somewone",
    hello: "it is a way to greet somewone",
    week: "A period of seven days",
    day: "A period of 24 hours",
    go: "To move or travel",  
    Come: "To arrive or approach",
    get: "To obtain or receive",
    give: "To present or hand over",
    have: "To possess or own",
    look: "o direct one's gaze",
    place: "A particular location",
    thing: "An object or a general concept",
    help: "To assist or aid",
    start: "To begin or initiate",
    find: "To discover or locate",
    learn: "To gain knowledge or skill"
}

function displayMeaning(){
    const inputElement = document.getElementById("search-box");
    const word = inputElement.value.toLowerCase();
    const meaning = dictionary[word];
    const displayWord = document.getElementById("display-word");
    displayWord.innerText = word;
    const displayMeaning = document.getElementById("display-meaning");
    displayMeaning.innerText = meaning;
}

