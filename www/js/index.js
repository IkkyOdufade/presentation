document.addEventListener('deviceready', onDeviceReady, false);

async function onDeviceReady() {
  // Cordova is now initialized. Have fun!
  // await admob.start();
   const ad = new admob.AppOpenAd({
    adUnitId: 'ca-app-pub-5580919195791472/3987004985',
  })

    document.getElementById("bannerButton").addEventListener("click", async ()=>{
      const data = await !ad.show()
      if (!data) {
        alert(33)
         await ad.load()
      }
      else{
        console.log({
          data
        })
      }
    })
}


document.addEventListener('admob.ad.show', async (evnt)=>{
  console.log({evnt})
})