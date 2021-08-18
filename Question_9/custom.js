// Initialize gimli object
const gimli = { name: "Gimli", race: "dwarf", weapon: "axe", greet: function() { return `Hi, my name is ${this.name}!`; },
};
console.log(gimli.greet())