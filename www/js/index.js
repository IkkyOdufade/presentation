document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
   admob.start();
  document.getElementById("bannerButton").addEventListener("click", bannerAdShow);	
  document.getElementById("intersitialButton").addEventListener("click", interstitialAdShow);	
  document.getElementById("rewardButton").addEventListener("click", showRewardedAds);	
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


function interstitialAdShow() {
  interstitial = new admob.InterstitialAd({
    adUnitId: 'ca-app-pub-5580919195791472/6081873213',
  })

  interstitial.on('load', (evt) => {
    evt.ad
  })
   interstitial.load()
   interstitial.show()

document.addEventListener('admob.ad.dismiss', async () => {
  await interstitial.load()
})
}


function showRewardedAds(){
  let rewarded;
  rewarded = new admob.RewardedAd({
    adUnitId: 'ca-app-pub-5580919195791472/6115013870',
  })

  rewarded.on('load', (evt) => {
     rewarded.load()
  })

  await rewarded.load()
  await rewarded.show()
}
