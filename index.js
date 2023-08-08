const firebaseConfig = {
  apiKey: "AIzaSyBLl0nj7natV7lA-4uvpoei5GpvjOSqUMs",
  authDomain: "nergiz-cce45.firebaseapp.com",
  databaseURL: "https://nergiz-cce45-default-rtdb.firebaseio.com",
  projectId: "nergiz-cce45",
  storageBucket: "nergiz-cce45.appspot.com",
  messagingSenderId: "419047480747",
  appId: "1:419047480747:web:f30b94e8dbbac5603406ee"
};
firebase.initializeApp(firebaseConfig)
var db = firebase.database().ref()


var users = [{ ad: "eli", sifre: "eli123" }, { ad: "kenan", sifre: "kenan123" }, { ad: "aydan", sifre: 'aydan123' }, { ad: "nezrin", sifre: 'nezrin123' },{ad:'elsen',sifre:'elsen123'},{ad:'cavid',sifre:'cavid123'},{ad:'vahid',sifre:'vahid123'}]
var ad;

$('#giris').on('click', function () {
  ad = $('#ad').val()
  var sifre = $('#sifre').val()
  for (const user of users) {
    if (user.ad == ad && user.sifre == sifre) {
      $('.message-box').css({display:'block'})
      $('.sign-in').css({display:'none'})
      $('.wName').text(ad)
      return alert('Sehifemize xosh gelmisiz')
    }

  }
  alert('Yalnis istifadeci adi ve ya sifre')

})
$('#gonder').on('click', function () {

  var mesaj = $('#mesaj').val()
  db.set({
    mesaj,
    ad
  })


})
db.on('value', function (snapshot) {
  var x = snapshot.val()
  var p = $(`<p>${x.ad} : ${x.mesaj}</p>`)
  $('.message').append(p)
})


