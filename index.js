// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter((drivers) => {return drivers.toLowerCase() === string.toLowerCase()});
};

function fuzzyMatch(drivers, string) {
    return drivers.filter((drivers) => {return drivers.toLowerCase().substring(0, string.length) === string.toLowerCase()});
};


function matchName(drivers, string) {
    return drivers.filter((drivers) => {return drivers.name === string});
};
