document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
   admob.start();
  document.getElementById("bannerButton").addEventListener("click", bannerAdShow);	
}
function bannerAdShow() {
let banner
banner = new admob.BannerAd({
adUnitId: 'ca-app-pub-5580919195791472/3987004985',
autoShow: true,
})
banner.on('impression',  (evt) => {
 banner.hide()
})
banner.show()
}
