export const getTitle = (isMainPage: boolean) => {
    if (isMainPage) {
        return "Welcome on the main page";
    }

    return "Welcome on the sub page";
}

export const add = (a: any, b: any) => {
    const numb1= Number(a)
    const numb2= Number(b)

    const result= numb1 + numb2 

    
    if(isNaN(result)){
        return 0;
    }


    return result
}

export const sortByAge = (people: any) => {
    return people;
}

/**
 * Return list of people matching search keyword
 */
export const findByName = (people: any, searchKeyword: string) => {
    return people;
}

// 2 * 6 = 18
export const multiply = (a:any, b: any) => {
    return 0;
}

// Sum of all numbers in a list. Example input: [1,6,3,8] should return 18
// Edge case: [1,5, undefined, "dupa", 2] . Ommit NaN numbers and sum the rest. So in this case sum will be 8
export const sumNumbers = (numberList: any) => {
    return 0;
}

// Return just name field from person object. { name: 'Kasia', age: 5 } => 'Kasia'
// But also cover scenarios where person can be undefined, then return empty string '';
export const getPersonName = (person: any) => {
    return undefined;
}
// NaN when we add number and undefined 