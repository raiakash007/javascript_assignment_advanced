const name = { firstName: 'Philip',
lastName: 'Fry' };
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
}
var emp = Object.assign(name,details);
console.log(emp);