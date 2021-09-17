var floatAge, floatDays, intWeeks, floatMonths, intFortnights
floatAge = parseFloat(prompt("Enter age in years"));
floatDays = parseFloat(floatAge*365.25)
intWeeks = parseInt(floatAge*52)
floatMonths = parseFloat(floatAge*12)
intFortnights = parseInt(floatDays/14)
alert("Your age in years = " + floatAge.toFixed(2) + ". Your age in days = " + floatDays.toFixed(2) + ". Your age in weeks = " + intWeeks + ". Your age in months = " + floatMonths.toFixed(2) + ". Your age in fortnights = " + intFortnights);