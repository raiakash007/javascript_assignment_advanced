// Initialize an object
const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

console.log(entries);

// Loop through the results
entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];

    console.log(`${key}: ${value}`);
});