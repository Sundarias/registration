  const firebaseConfig = {
    apiKey: "AIzaSyB4Anm0VIAdW1T21BFuwO4zmERiHGpKJKQ",
    authDomain: "aatralregistration.firebaseapp.com",
    databaseURL: "https://aatralregistration-default-rtdb.firebaseio.com",
    projectId: "aatralregistration",
    storageBucket: "aatralregistration.firebasestorage.app",
    messagingSenderId: "747309277340",
    appId: "1:747309277340:web:7e17d1b99df8c252480d59",
    measurementId: "G-DB505504HF"
  }

  firebase.initializeApp(firebaseConfig);

  const AatralregistrationDB = firebase.database().ref('registrationForm')
  document.getElementById('registrationForm').addEventListener("submit", submitForm)

  function submitForm(e) {
    e.preventDefault();

    var name =getElementByVal('name')
    var email =getElementByVal('email')
    var department =getElementByVal('department')
    var otherdept = getElementByVal('other-dept')
    var phone = getElementByVal('phone')
    var college =getElementByVal('college')
    var workshop =getElementByVal('workshop')
    var totalfee =getElementByVal('total-fee')

    console.log(name, email, department, otherdept, phone, college, workshop, totalfee)

  }

  const getElementByVal = (id) => {
    return document.getElementById(id).value;
  }
