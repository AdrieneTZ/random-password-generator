function generatePassword (options) {
  // define characters, numbers, and symbols combined in a password
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // create a collection to store what user picked up
  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }


  // remove things user don't want in the password
  if (options.excludeCharacters) {
    collection = collection.filter(
      character => !options.excludeCharacters.includes(character)
    )
  }

  // return error message if collection is empty
  if (collection.length === 0) {
    return 'There is no valid character in your selection.'
  }

  // generate a password
  // remember to turn the data type of option.length into number
  let password = ''
  for (let i = 1; i <= Number(options.length); i++) {
    password += randomSample(collection)
  }

  // return the generated password
  return password
}

// pick a random character from the array(will be passed collection)
function randomSample (array) {
  let randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

// export generatePassword function for other files to use
module.exports = generatePassword