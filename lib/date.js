'use strict';

var dateFns = require('date-fns');
var dateFnsTz = require('date-fns-tz');

CronDate.prototype.addYear = function() {
  this._date = this._toTz(dateFns.addYears(this._fromTz(this._date), 1));
};

CronDate.prototype.addMonth = function() {
  this._date = this._toTz(dateFns.startOfMonth(dateFns.addMonths(this._fromTz(this._date), 1)));
};

CronDate.prototype.addDay = function() {
  this._date = this._toTz(dateFns.startOfDay(dateFns.addDays(this._fromTz(this._date), 1)));
};

CronDate.prototype.addHour = function() {
  var prev = this._date;
  this._date = this._toTz(dateFns.startOfHour(dateFns.addHours(this._fromTz(this._date), 1)));
  if (this._date <= prev) {
    this._date = this._toTz(dateFns.addHours(this._fromTz(this._date), 1));
  }
};

CronDate.prototype.addMinute = function() {
  var prev = this._date;
  this._date = this._toTz(dateFns.startOfMinute(dateFns.addMinutes(this._fromTz(this._date), 1)));
  if (this._date < prev) {
    this._date = this._toTz(dateFns.addHours(this._fromTz(this._date), 1));
  }
};

CronDate.prototype.addSecond = function() {
  var prev = this._date;
  this._date = this._toTz(dateFns.startOfSecond(dateFns.addSeconds(this._fromTz(this._date), 1)));
  if (this._date < prev) {
    this._date = this._toTz(dateFns.addHours(this._fromTz(this._date), 1));
  }
};

CronDate.prototype.subtractYear = function() {
  this._date = this._toTz(dateFns.subYears(this._fromTz(this._date), 1));
};

CronDate.prototype.subtractMonth = function() {
  this._date = this._toTz(
    dateFns.startOfSecond(dateFns.endOfMonth(dateFns.subMonths(this._fromTz(this._date), 1)))
  );
};

CronDate.prototype.subtractDay = function() {
  this._date = this._toTz(
    dateFns.startOfSecond(dateFns.endOfDay(dateFns.subDays(this._fromTz(this._date), 1)))
  );
};

CronDate.prototype.subtractHour = function() {
  var prev = this._date;
  this._date = this._toTz(
    dateFns.startOfSecond(dateFns.endOfHour(dateFns.subHours(this._fromTz(this._date), 1)))
  );
  if (this._date >= prev) {
    this._date = this._toTz(dateFns.subHours(this._fromTz(this._date), 1));
  }
};

CronDate.prototype.subtractMinute = function() {
  var prev = this._date;
  this._date = this._toTz(
    dateFns.startOfSecond(dateFns.endOfMinute(dateFns.subMinutes(this._fromTz(this._date), 1)))
  );
  if (this._date > prev) {
    this._date = this._toTz(dateFns.subHours(this._fromTz(this._date), 1));
  }
};

CronDate.prototype.subtractSecond = function() {
  var prev = this._date;
  this._date = this._toTz(
    dateFns.startOfSecond(dateFns.subSeconds(this._fromTz(this._date), 1))
  );
  if (this._date > prev) {
    this._date = this._toTz(dateFns.subHours(this._fromTz(this._date), 1));
  }
};

CronDate.prototype.getDate = function() {
  return dateFns.getDate(this._date);
};

CronDate.prototype.getFullYear = function() {
  return dateFns.getYear(this._date);
};

CronDate.prototype.getDay = function() {
  return dateFns.getDay(this._date);
};

CronDate.prototype.getMonth = function() {
  return dateFns.getMonth(this._date);
};

CronDate.prototype.getHours = function() {
  return dateFns.getHours(this._date);
};

CronDate.prototype.getMinutes = function() {
  return dateFns.getMinutes(this._date);
};

CronDate.prototype.getSeconds = function() {
  return dateFns.getSeconds(this._date);
};

CronDate.prototype.getMilliseconds = function() {
  return dateFns.getMilliseconds(this._date);
};

CronDate.prototype.getTime = function() {
  return this._date.getTime();
};

CronDate.prototype.getUTCDate = function() {
  return dateFns.getDate(this._fromTz(this._date));
};

CronDate.prototype.getUTCFullYear = function() {
  return dateFns.getYear(this._fromTz(this._date));
};

CronDate.prototype.getUTCDay = function() {
  return dateFns.getDay(this._fromTz(this._date));
};

CronDate.prototype.getUTCMonth = function() {
  return dateFns.getMonth(this._fromTz(this._date));
};

CronDate.prototype.getUTCHours = function() {
  return dateFns.getHours(this._fromTz(this._date));
};

CronDate.prototype.getUTCMinutes = function() {
  return dateFns.getMinutes(this._fromTz(this._date));
};

CronDate.prototype.getUTCSeconds = function() {
  return dateFns.getSeconds(this._fromTz(this._date));
};

CronDate.prototype.toISOString = function() {
  return this._fromTz(this._date).toISOString();
};

CronDate.prototype.toJSON = function() {
  return this._fromTz(this._date).toJSON();
};

CronDate.prototype.setDate = function(d) {
  this._date = this._toTz(dateFns.setDate(this._fromTz(this._date), d));
};

CronDate.prototype.setFullYear = function(y) {
  this._date = this._toTz(dateFns.setYear(this._fromTz(this._date), y));
};

CronDate.prototype.setDay = function(d) {
  var currentDay = this.getDay();
  var diff = d - currentDay;
  this._date = this._toTz(dateFns.addDays(this._fromTz(this._date), diff));
};

CronDate.prototype.setMonth = function(m) {
  this._date = this._toTz(dateFns.setMonth(this._fromTz(this._date), m));
};

CronDate.prototype.setHours = function(h) {
  this._date = this._toTz(dateFns.setHours(this._fromTz(this._date), h));
};

CronDate.prototype.setMinutes = function(m) {
  this._date = this._toTz(dateFns.setMinutes(this._fromTz(this._date), m));
};

CronDate.prototype.setSeconds = function(s) {
  this._date = this._toTz(dateFns.setSeconds(this._fromTz(this._date), s));
};

CronDate.prototype.setMilliseconds = function(ms) {
  this._date = this._toTz(dateFns.setMilliseconds(this._fromTz(this._date), ms));
};

CronDate.prototype.toString = function() {
  return this.toDate().toString();
};

CronDate.prototype.toDate = function() {
  return new Date(this._date);
};

CronDate.prototype.isLastDayOfMonth = function() {
  var nextDay = this._toTz(dateFns.startOfDay(dateFns.addDays(this._fromTz(this._date), 1)));
  return dateFns.getMonth(this._date) !== dateFns.getMonth(nextDay);
};

CronDate.prototype.isLastWeekdayOfMonth = function() {
  var nextWeek = this._toTz(dateFns.startOfDay(dateFns.addDays(this._fromTz(this._date), 7)));
  return dateFns.getMonth(this._date) !== dateFns.getMonth(nextWeek);
};

CronDate.prototype._toTz = function(date) {
  if (!this._tz) return date;
  var isoStr = dateFnsTz.formatInTimeZone(date, this._tz, 'yyyy-MM-dd\'T\'HH:mm:ss.SSS');
  return new Date(isoStr);
};

CronDate.prototype._fromTz = function(date) {
  if (!this._tz) return date;
  var localOffset = new Date().getTimezoneOffset() * 60000;
  var tzOffset = dateFnsTz.getTimezoneOffset(this._tz, date);
  return new Date(date.getTime() + localOffset - tzOffset);
};

function parseRFC2822(dateStr) {
  var parsed = new Date(dateStr);
  return dateFns.isValid(parsed) ? parsed : null;
}

function parseSQL(dateStr) {
  try {
    var parts = dateStr.split(' ');
    var datePart = parts[0];
    var timePart = parts[1];
    
    var dateComponents = datePart.split('-').map(Number);
    var timeComponents = timePart ? timePart.split(':').map(Number) : [0, 0, 0];
    
    var date = new Date(
      dateComponents[0],
      dateComponents[1] - 1,
      dateComponents[2],
      timeComponents[0],
      timeComponents[1],
      timeComponents[2]
    );
    
    return dateFns.isValid(date) ? date : null;
  } catch (e) {
    return null;
  }
}

function CronDate(timestamp, tz) {
  this._tz = tz;
  
  if (!timestamp) {
    this._date = new Date();
  } else if (timestamp instanceof CronDate) {
    this._date = new Date(timestamp._date);
    this._tz = timestamp._tz;
  } else if (timestamp instanceof Date) {
    this._date = new Date(timestamp);
  } else if (typeof timestamp === 'number') {
    this._date = new Date(timestamp);
  } else if (typeof timestamp === 'string') {
    var parsed = null;
    
    parsed = dateFns.parseISO(timestamp);
    
    if (!dateFns.isValid(parsed)) {
      parsed = parseRFC2822(timestamp);
    }
    
    if (!dateFns.isValid(parsed)) {
      parsed = parseSQL(timestamp);
    }
    
    if (!dateFns.isValid(parsed)) {
      try {
        var testFormat = 'EEE, d MMM yyyy HH:mm:ss';
        parsed = dateFns.parse(timestamp, testFormat, new Date());
      } catch (e) {
        parsed = null;
      }
    }
    
    if (!parsed || !dateFns.isValid(parsed)) {
      throw new Error('CronDate: unhandled timestamp: ' + JSON.stringify(timestamp));
    }
    
    this._date = parsed;
  }

  if (this._tz) {
    var isoStr = dateFnsTz.formatInTimeZone(this._date, this._tz, 'yyyy-MM-dd\'T\'HH:mm:ss.SSS');
    this._date = new Date(isoStr);
  }
}

module.exports = CronDate;
