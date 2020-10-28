// Exercise 1:
// Way 1:

const createArrayRepeat = (string, num) => {
  const newArr = new Array(num)
  for (let i = 0; i < num; i++) {
    newArr[i] = string
  }
  return newArr
}

// Way 2:

const createArrayRepeat2 =(string, num) => {
  const arr = []
  for (let i = 0; i < num; i++) {
    arr.push(string)
  }
  return arr
}

// Exercise 2:
//Way 1:

const reverseArr = arr => {
  const newArr = []
  for (let i = arr.length - 1; i > -1; i--) {
    newArr.push(arr[i])
  }
  return newArr
}

// Way 2:

const reverseArr2 = arr => {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i])
  }
  return newArr
}

// Exercise 3:

const deleteDataFalse = arr => arr.filter(item => item)

// Exercise 4:

const createObject = arr => {
  const newObject = {}
  arr.forEach(element => {
    newObject[element[0]] = element[1]
  })
  return newObject
}

// Exercise 5:

const sortNum = num => {
  return num.sort()
}

// Exercise 6:

const checkInputData = data => {
  if (data.constructor === Object) {
    return true
  } else {
    return false
  }
}

// Exercise 7:

const removeObjByKey = (obj, arr) => {
  arr.forEach(item => {
    for (let key in obj)
      if (key === item) {
        delete(obj[key])
      }
  })
  return obj
}

// Exercise 8:

const removeItem2And3 = (array = []) => {
  if (array.length < 6) return 'Nhập mảng nhiều hơn 5 phần tử'
  array.splice(1,2)
  return array
}

// Exercise 9:

const checkPassAndFalseStudent = students => {
  const studentsPassAndFalse = []
  students.forEach(student => {
    if (student.score > 5 && student.name.indexOf('Duy') === -1) {
      studentsPassAndFalse.push('Pass')
    } else {
      studentsPassAndFalse.push('Fail')
    }
  })
  return studentsPassAndFalse
}

// Exercise 10:

const findStudentByScore = students => {
  const newStudent = []
  students.forEach(student => {
    let beforeTheDecimalPoint = parseInt(student.score)
    let afterTheDecimalPoint = (student.score - beforeTheDecimalPoint) * 10
    let sumBeforeAndAfterDecimal = beforeTheDecimalPoint + afterTheDecimalPoint
    if (sumBeforeAndAfterDecimal % 10 > 5) {
      newStudent.push(student)
    }
  })
  return newStudent
}
