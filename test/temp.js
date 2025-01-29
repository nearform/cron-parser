const { test } = require('node:test');
var CronExpression = require('../lib/expression');
var CronDate = require('../lib/date');

test('should work for valid second sunday in may', t => {
  var options = {
    // currentDate: new CronDate('2017-01-30')
    // currentDate: new CronDate('2018-01-30')
    // currentDate: new CronDate('2019-01-30')
    currentDate: new CronDate('2020-01-30')
  };
  // var expected = new CronDate('2017-05-14');
  // var expected = new CronDate('2018-05-13');
  // var expected = new CronDate('2019-05-12');
  var expected = new CronDate('2020-05-10');

  var interval = CronExpression.parse('0 0 0 ? MAY 0#2', options);

  var date = interval.next();
  t.assert.equal(date.toString(), expected.toString());
});
