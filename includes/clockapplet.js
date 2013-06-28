/* http://datejs.googlecode.com/svn/trunk/build/date-en-US.js */

function timedate() {
	var date = Date.today().toString('ddd MMM d, yyyy');
	var now = new Date();
	var hh = now.getHours();
	var xm  = (hh >= 12) ? "PM" : "AM";
	var mm = now.getMinutes();
	if(hh > 12) { hh -= 12; }
	if(hh == 0) { hh = 12; }
	if(hh < 10) { hh = "0" + hh; }
	if(mm < 10) { mm = "0" + mm; }
	var clock = hh + ":" + mm + " " + xm;

	document.getElementById('date').innerHTML = date;
	document.getElementById('clock').innerHTML = clock;
	setTimeout('timedate()',500);
}
