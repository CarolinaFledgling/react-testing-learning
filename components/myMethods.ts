// ex1

export const getTitle = (isMainPage: boolean) => {
    if (isMainPage) {
        return "Welcome on the main page";
    }

    return "Welcome on the sub page";
}


//ex2

export const add = (a: any, b: any) => {
    const numb1 = Number(a)
    const numb2 = Number(b)

    const result = numb1 + numb2


    if (isNaN(result)) {
        return 0;
    }


    return result
}



//ex3 

// SORT !!!!

interface DataPerson {
    name: string
    age: number
}

type DataPersonArray = DataPerson[] | Object

const people = [
    { name: 'Kasia', age: 25 },
    { name: 'Maria', age: 2 },
    { name: 'Robert', age: 65 },
    { name: 'Rafal', age: 11 }
]

export const sortByAge = (people?: DataPersonArray) => {

    //Array.isArray(people) true

    if (people === undefined) {
        return []
    } else if (!Array.isArray(people)) {
        return []
    } else if(typeof people ==='string' || people instanceof String){
        return[]
    }

    const newPeopleList = [...people]

    const sortedlist = newPeopleList.sort((personA: DataPerson, personB: DataPerson) => {
        const personOne = Number(personA.age)
        const personTwo = Number(personB.age)

        if (personOne > personTwo) {
            return 1
        }

        if (personOne < personTwo) {
            return -1
        }

        return 0


    })

    return sortedlist;
}

// const sortedPeople = sortByAge(people)

// console.log(sortedPeople)


/**
 * Return list of people matching search keyword
 */

//ex4
export const findByName = (people: any, searchKeyword: string) => {
    if (searchKeyword === "") {
        return []
    }

    const filteredList = people.filter((user: any) => {
        return user.name.includes(searchKeyword)
    })

    return filteredList;
}


// ex5
// 2 * 6 = 18

export const multiply = (a: any, b: any) => {

    if(a === undefined || b===undefined){
        return 0
    }
    const result = a * b
    return result;
}

// ex6
// Sum of all numbers in a list. Example input: [1,6,3,8] should return 18

// Edge case: [1,5, undefined, "dupa", 2] . Ommit NaN numbers and sum the rest. So in this case sum will be 8

//  default value for falsy values like (undefined, null, 0, '') with a logical OR || (acc || 0) + (val || 0)

export const sumNumbers = (numberList: any) => {

    const sumResult = numberList.reduce((result: any, value: any) => {
        if(value === undefined || typeof value === 'string' || value instanceof String || value === "" ){
           value=0
        }
        return result + value
    }, 0)

    return sumResult;
}

// ex6

// Return just name field from person object. { name: 'Kasia', age: 5 } => 'Kasia'
// But also cover scenarios where person can be undefined, then return empty string '';
export const getPersonName = (person?: any) => {

    // const personName=people.map((person)=>{
    //     if(!person) return ''

    //     return person.name
    // })

    if(!person) return ''

    const personName=person.name
    return personName;
}


// NaN when we add number and undefined 