

/**
* Write a function that checks whether the string is valid.
* String is valid when all characters of the string appear at
* the same number of times, removal of 1 character is allowed
* to make the string valid
* For e.g abcabd is invalid because we will have to remove c
* and d to make it valid but we can only remove one character
* For e.g ababcc is valid since all the characters are apearing
* at the same number of times
* For e.g aabbccbb is invalid becuase we can remove only one b
* but we need to remove two b in order to make it valid
**/

function validateString(str: string): boolean {
    let map : Map<string, number> = new Map()
    let  i : number
    let j: any

    for( i =0; i<str.length; i++){
        let indexChar: string = str.charAt[i]
        if(map.has(indexChar)){
            map.set(indexChar, map.get(indexChar)!!+1)
        }
        map.set(indexChar, 0)
    }

    let temp: any
    for ( j of  Object.values(map)){
        if( j != temp){
            return false
        }
        temp = j
    }

  return true
}

console.log(validateString('abc')); // true
console.log(validateString('ab8abd')); // false
console.log(validateString('$b$bcc')); // true
console.log(validateString('#b#bccbb')); // false
console.log(validateString('aabb55bbbbb')); // false
console.log(validateString('aabb9dd')); // true