App({
    onLaunch (options) {
      // Do something initial when launch.
      console.log('hello cc')
    },
    onShow (options) {
      // Do something when show.
      console.log('show my name sunnie')
    },
    onHide () {
      // Do something when hide.
      console.log('guai shu shu1')
    },
    onError (msg) {
      console.log(msg)
    },
    globalData: 'I am global data'
  })