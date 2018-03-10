(function() {
  'use strict';
  var admobData = {};
  // Determine platform
  if (/(android)/i.test(navigator.userAgent)) {
    admobData = {
        banner: 'ca-app-pub-3352905696298023/3619275840'
    };
  } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobData = {
        banner: 'ca-app-pub-3352905696298023/3619275840'
    };
  } else {
    admobData = {
        banner: 'ca-app-pub-3352905696298023/3619275840'
    };
  }
  function setBanner() {
    if (AdMob) {
        AdMob.createBanner({
            adId : admobData.banner,
            position : AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow : true
        });
    }
  }
  document.addEventListener('deviceready', setBanner, false);
}());