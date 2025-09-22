// split and join is very important for performing different data manipulation

const sentence = "My name is Prayash"

// if we want to split the above sentence into words splitted by whitespace then

// Reversing the whole sentence using join and split


/*
1.split into multiple words based on whitebase


*/
function reverseSentence(sentence) {
    return sentence.split(" ").map((word) => word.split("").reverse().join("")).reverse()
}


console.log(reverseSentence(sentence));
