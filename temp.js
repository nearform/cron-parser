'use strict';

var CronDate = require('./lib/date.js');
var CronExpression = require('./lib/expression.js');
var options = {
  currentDate: '2016-10-30 02:00:01',
  tz: 'Europe/Athens'
};

var interval, date;

interval = CronExpression.parse('0 * * * *', options);

date = interval.next();
console.log(date.toString());
console.log(date.getHours(), 3, '3 AM');
console.log(date.getDate(), 30, '30th');

date = interval.next();
console.log(date.getHours(), 3, 'Due to DST end in Athens (4-->3)');
console.log(date.getDate(), 30, '30th');

date = interval.next();
console.log(date.getHours(), 4, '4 AM');
console.log(date.getDate(), 30, '30th');
