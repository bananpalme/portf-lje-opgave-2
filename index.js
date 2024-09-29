console.log('~~~~~~~~~~~~~~~~~ initiated ~~~~~~~~~~~~~~~~~')

//Student Grades Analysis
// 1
const grades = [0, 12, 93, 30, 70, 80, 42, 100]

//2
console.log(`there are ${grades.length} grades`)

//3
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 90) {
        console.log(`${grades[i]}: A`)
    } else if (grades[i] >= 80 ) {
        console.log(`${grades[i]}: B`)
    } else if (grades[i] >= 70 ) {
        console.log(`${grades[i]}: C`)
    } else if (grades[i] >= 60 ) {
        console.log(`${grades[i]}: D`)
    } else {
        console.log(`${grades[i]}: F`)
    }
}

//4
const gradesSum = grades.reduce((accumulator, current) => accumulator + current)

const gradeAverage = gradesSum / grades.length

if (gradeAverage >= 90) {
    console.log(`The class performed excellent`)
} else if (gradeAverage >= 80) {
    console.log(`The class performed good`)
} else if (gradeAverage >= 70) {
    console.log(`The class performance was satisfactory`)
} else {
    console.log(`The class performance needs improvement`)
}

//5
console.log(`Highest grade: ${Math.max(...grades)}`)
console.log(`Lowest grade: ${Math.min(...grades)}`)
console.log(`Average grade: ${gradeAverage}`)

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

//Treasure Hunter

const island = ['-', 'T', '-', 'T', '-'];

//1
console.log(`There are ${island.length} moves on the island`)

//2
for (let i = 0; i < island.length; i++) {
    if (island[i] === 'T') {
        console.log(`Ahoy mateys! treasure at move ${i + 1}!`)
    } else if (island[i] === '-') {
        console.log('Arrr, no treasure here... just me rotten luck again')
    }
}

//3
function getTreasureOccurrence() {
    let count = 0
    for (let i= 0; i < island.length; i++) {
        if (island[i] === 'T') {
            count++
        }
    }
    return count
}

console.log(`There were ${getTreasureOccurrence()} treasures on the island`)

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

//Startup Name Generator

function getStartupName() {
    const firstStartupWords = ['Quick', 'Slimy', 'Quacking', 'Weird', 'Annoying', 'Freshly Baked', 'Round', 'Obtuse', 'Simple', 'Mega', ]
    const secondStartupWords = ['Tigers', 'Slimes', 'Ducks', 'Fingers', 'People', 'Muffins', 'Footballs', 'Angles', 'Didgeridoos']
    return firstStartupWords[Math.floor(Math.random() * firstStartupWords.length)] + ' ' + secondStartupWords[Math.floor(Math.random() * secondStartupWords.length)]

}

console.log('Your startup name could be: ' + getStartupName())



console.log('~~~~~~~~~~~~~~~~~~~~ end ~~~~~~~~~~~~~~~~~~~~')