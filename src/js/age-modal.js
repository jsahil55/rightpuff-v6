import Modal from 'bootstrap/js/dist/modal';

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    var sameSite = "Samesite=Lax;"
    document.cookie = cname + "=" + cvalue + "; " + expires; + sameSite
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    
    for (var i=0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) === 0) return c.substring(name.length,c.length);
    }
    return "";
}

function checkCookie() {
    var ageCheckModal = new Modal(document.getElementById('age-check-modal'), {});
    var age = getCookie("ageVerify");
    
    if (age === "over19") {   
        setCookie("ageVerify", "over19", 1); 
    } else {
        ageCheckModal.show();
    };
    
    var closeAgeModalYes = document.getElementById('close-age-modal-yes');
    var closeAgeModalNo = document.getElementById('close-age-modal-no');
    
    closeAgeModalYes.addEventListener('click', function() {
        age = "over19";
		setCookie("ageVerify", "over19", 1);
        ageCheckModal.hide()
    });

    closeAgeModalNo.addEventListener('click', function() {
        setCookie("ageVerify", "under19", 1);
    });
}

document.addEventListener('DOMContentLoaded', function () {

    setTimeout(function() { checkCookie(); }, 1000);

});