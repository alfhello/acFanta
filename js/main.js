function onBodyLoad(){       
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
	document.addEventListener("menubutton", onMenuKeyDown, false);
	navigator.splashscreen.show();
}

function onMenuKeyDown() {
	showConfirm();
}	

function showConfirm() {
	navigator.notification.confirm('Close Application ?', onConfirm, ' ', 'Cancel,Exit');	
}	

function onConfirm(btnIdx) {
	if (btnIdx == 2) {
		navigator.app.exitApp();
	}
}

function call3_getJSON(inURL, inTimeout) {	
   var value = $.ajax({ 
      url: inURL, 
      async: false,
	  dataType:"json",
	  timeout: inTimeout,
   }).responseText;

	try {
	   jQuery.parseJSON(value)
	} catch(e) {
		value = '{"VALUE":"0"}';
	}   
//   alert(value);
   return value;
}
