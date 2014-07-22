/*** jb-locale ******/
/*** version 0.2 ****/
/*** JustBrowsing ***/

function locale() {

	var firefox = "true";
	var chrome = "true";	
	var browserLang = (navigator.language) ? navigator.language : navigator.userLanguage;

	if(browserLang == "en-US") {
		flag = "us";
		locale = "English (US)";
	}
	else if(browserLang == "af") {
		flag = "af";
		locale = "Afrikaans";
		chrome = false;
	}
	else if(browserLang == "am") {
		flag = "am";
		locale = "Amharic";
		firefox = false;
	}
	else if(browserLang == "ar") {
		flag = "ar";
		locale = "Arabic";
	}
	else if(browserLang == "be" || browserLang == "be-BY") {
		flag = "be";
		locale = "Belarusian";
		chrome = false;
	}
	else if(browserLang == "br") {
		flag = "br";
		locale = "Breton";
		chrome = false;
	}
	else if(browserLang == "bg") {
		flag = "bg";
		locale = "Bulgarian";
	}
	else if(browserLang == "ca") {
		flag = "ca";
		locale = "Catalan";
	}
	else if(browserLang == "zh-CN") {
		flag = "cn";
		locale = "Chinese Mainland";
	}
	else if(browserLang == "zh-TW") {
		flag = "tw";
		locale = "Chinese Taiwan";
	}
	else if(browserLang == "hr" || browserLang == "hr-HR") {
		flag = "hr";
		locale = "Croatian";
	}
	else if(browserLang == "nl") {
		flag = "nl";
		locale = "Dutch";
	}
	else if(browserLang == "en-GB") {
		flag = "gb";
		locale = "English (GB)";
	}
	else if(browserLang == "et") {
		flag = "et";
		locale = "Estonian";
	}
	else if(browserLang == "fi" || browserLang == "fi-FI") {
		flag = "fi";
		locale = "Finnish";
	}
	else if(browserLang == "fr") {
		flag = "fr";
		locale = "French";
	}
	else if(browserLang == "de") {
		flag = "de";
		locale = "German";
	}
	else if(browserLang == "el" || browserLang == "el-GR") {
		flag = "el";
		locale = "Greek";
	}
	else if(browserLang == "he") {
		flag = "he";
		locale = "Hebrew";
	}
	else if(browserLang == "hu" || browserLang == "hu-HU") {
		flag = "hu";
		locale = "Hungarian";
	}
	else if(browserLang == "is") {
		flag = "is";
		locale = "Icelandic";
		chrome = false;
	}
	else if(browserLang == "it" || browserLang == "it-IT") {
		flag = "it";
		locale = "Italian";
	}
	else if(browserLang == "ja") {
		flag = "ja";
		locale = "Japanese";
	}	
	else if(browserLang == "ko" || browserLang == "ko-KR") {
		flag = "ko";
		locale = "Korean";
	}
	else if(browserLang == "lv") {
		flag = "lv";
		locale = "Latvian";
	}
	else if(browserLang == "lt") {
		flag = "lt";
		locale = "Lithuanian";
	}
	else if(browserLang == "mk" || browserLang == "mk-MK") {
		flag = "mk";
		locale = "Macedonian";
	}
	else if(browserLang == "ml" || browserLang == "ml-IN") {
		flag = "ml";
		locale = "Malaylam";
	}
	else if(browserLang == "no" || browserLang == "nb") {
		flag = "no";
		locale = "Norewegian";
		firefox = false;
	}
	else if(browserLang == "pl") {
		flag = "pl";
		locale = "Polish";
	}
	else if(browserLang == "ro" || browserLang == "ro-RO") {
		flag = "ro";
		locale = "Romanian";
	}
	else if(browserLang == "ru" || browserLang == "ru-RU") {
		flag = "ru";
		locale = "Russian";
	}
	else if(browserLang == "sk") {
		flag = "sk";
		locale = "Slovak";
	}
	else if(browserLang == "es" || browserLang == "es-ES") {
		flag = "es";
		locale = "Spanish";
	}	
	else if(browserLang == "sv" || browserLang == "sv-SE") {
		flag = "sv";
		locale = "Swedish";
	}
	else if(browserLang == "th" || browserLang == "th-TH") {
		flag = "th";
		locale = "Thai";
	}	
	else if(browserLang == "tr" || browserLang == "tr-TR") {
		flag = "tr";
		locale = "Turkish";
	}
	else if(browserLang == "vi" || browserLang == "vi-VN") {
		flag = "vi";
		locale = "Vietnamese";
	}
	else {
		flag = "zz";
		locale = "Unknown " + browserLang + " locale";
	}

	document.getElementById("flag").src = "/flags/" + flag + ".png";
	document.getElementById("language").title = locale;
	document.getElementById("language").href += "#" + browserLang;
}

/* END */
