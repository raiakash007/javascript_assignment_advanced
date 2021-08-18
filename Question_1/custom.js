// Here a date has been assigned according
// to universal time while creating Date object
var dateToday = new Date('October 15, 1996 05:35:32:77 GMT+11:00');
 
// millisecond from above date object is
// being extracted using getUTCMilliseconds().
var B = dateToday.getUTCMilliseconds();
 
// Printing millisecond according
// to universal time
console.log(B);