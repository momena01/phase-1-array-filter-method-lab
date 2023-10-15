// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(array, name) {
    const result = array.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return result;
}
console.log(findMatching(drivers, 'Bobby'));

function fuzzyMatch(array, letters) {
    const result = array.filter(driver => driver.startsWith(letters));
    return result;
}
console.log(fuzzyMatch(drivers, 'Sa'));
const drivers2 = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];
function matchName(array, name) {
    const result = array.filter(driver => driver.name === name)
    return result;
}
console.log(matchName(drivers2, 'Bobby'));
