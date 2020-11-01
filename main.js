// Exercise 1:
// Way 1:

const isEqual = (arr1, arr2) => {
  return (JSON.stringify(arr1) === JSON.stringify(arr2)) ? true : false
}

// Way 2:

const isEqual2 = (arr1, arr2) => {
  return (arr1.toString().replaceAll(',', '') === arr2.toString().replaceAll(',', '')) ? true : false
}

// Exercise 2:

const flatten = arr => {
  const convertToString = arr.toString().replaceAll(',', '')
  return convertToString.split('')
}

// Exercise 3:

const divideArray = (arr,chunk_size) => {
  const tempArray = []
  for (let i = 0; i < arr.length; i += chunk_size) {
    myChunk = arr.slice(i, i + chunk_size)
    tempArray.push(myChunk);
  }
  return tempArray
}

// Exercise 4:

const findCharacterSameInArray = arr => {
  const intersection = arr.reduce((parameter,current) => parameter.filter(element => current.includes(element)));
  const setIntersection = new Set(intersection)
  return Array.from(setIntersection)
}

// Exercise 5:

date = new Date(2020, 11, 30, 0, 0, 0)
date1 = new Date(2020, 09, 30, 0, 0, 0)
date2 = new Date(2020, 10, 30, 12, 30, 32)
const isEqualDateTime = dateTime => {
  const dateEndSale = new Date(2020, 10, 30, 12, 30, 32)
  return (dateTime.getTime() <= dateEndSale.getTime()) ? 'Van con trong thoi gian sale' : 'Da het thoi gian sale'
}

// Exercise 5:

const checkAccount = (email, userName) => {
  const regexEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g
  const regexUserName = /^([a-z]{1})([a-z0-9]|_(?!_)){1,9}$/g
  if (email.match(regexEmail) !== null && userName.match(regexUserName) !== null) {
    return 'Ban da dang ki dc account'
  } else if (email.match(regexEmail) !== null && userName.match(regexUserName) === null) {
    return 'Ban dang ki sai dinh dang User Name'
  } else if (email.match(regexEmail) === null && userName.match(regexUserName) !== null) {
    return 'Ban dang ki sai dinh dang Email'
  } else {
    return 'Ban dang ki sai dinh dang Email va User Name'
  }
}
