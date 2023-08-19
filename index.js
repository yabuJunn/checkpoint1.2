// Planteamiento:
// cree una función de JS que analice un arreglo de números que representa notas de estudiantes 
// y retorne un objeto con informacion basado en el siguiente mapa: 
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F

// Ejemplo:
// const studentGrades = [100, 50, 65, 70, 85, 96, 45]
// const result = computeGrades(studentGrades)
// console.log(result)

// console:
// {
//   parsed: [A, F, D, C, B, A, F],
//   passed: 5,
//   lose: 2,
//  average: 73
// }

function qualification(arrayNumber){
    console.log("Entro al programa")
    console.log(`El arreglo es: ${arrayNumber}`)

    let convertedQualifications = []
    let passed = 0
    let lose = 0
    let sum = 0

    for (let i = 0; i < arrayNumber.length; i++) {
        console.log("Entro al for")
        const grade = arrayNumber[i]
        console.log(grade)
        sum = sum + grade
        console.log("Va a las condiciones")

        if (grade >= 90 && grade <= 100) {
            convertedQualifications.push("A")
            passed = passed + 1
        } else if (grade >= 80 && grade <= 89) {
            convertedQualifications.push("B")
            passed = passed + 1
        } else if (grade >= 70 && grade <= 79) {
            convertedQualifications.push("C")
            passed = passed + 1
        } else if (grade >= 60 && grade <= 69) {
            convertedQualifications.push("D")
            passed = passed + 1
        } else if (grade < 60) {
            convertedQualifications.push("F")
            lose = lose + 1
        }
        
    }

    let average = sum/arrayNumber.length

    return {
          "parsed": convertedQualifications,
          "passed": passed,
          "lose": lose,
          "average": average
        }

    
}

const studentGrades = [100, 50, 65, 70, 85, 96, 45]
const result = qualification(studentGrades)
console.log(result)