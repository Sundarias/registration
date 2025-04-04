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
    e.preventDefault(); // Prevent default form submission

    // Get input values safely
    var name = document.getElementById('name')?.value || "";
    var email = document.getElementById('email')?.value || "";
    var department = document.getElementById('department')?.value || "";
    var otherDept = document.getElementById('other-dept')?.value || "";
    var year = document.getElementById('year')?.value || "";
    var phone = document.getElementById('phone')?.value || "";
    var college = document.getElementById('college')?.value || "";
    var workshop = document.getElementById('workshop')?.value || "No"; // Default to "No" if not found
    var accommodation = document.getElementById('accommodation')?.value || "No"; // Default to "No" if not found
    var food = document.getElementById('food')?.value || "Non - Veg"; // Default to "No" if not found
    var totalFeeElement = document.getElementById('total-fee');
    var totalFee = totalFeeElement ? totalFeeElement.innerText.replace("₹", "") : "0";

    // Get selected checkboxes for Technical & Non-Technical events
    var selectedTechEvents = Array.from(document.querySelectorAll("#technical-events input:checked")).map(cb => cb.value);
    var selectedNonTechEvents = Array.from(document.querySelectorAll("#non-technical-events input:checked")).map(cb => cb.value);

    // Debugging: Check if any field is empty
    if (!name || !email || !phone  || !college || !accommodation || !food) {
        alert("Please fill in all required fields!");
        return;
    }

    // Save data to Firebase Firestore
    db.collection("registrations").add({
        name: name,
        email: email,
        department: department === "Other" ? otherDept : department,
        year: year
        phone: phone,
        college: college,
        workshop: workshop,
        accommodation: accommodation,
        food: food,
        technicalEvents: selectedTechEvents,
        nonTechnicalEvents: selectedNonTechEvents,
        totalFee: totalFee,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        alert("Registration Successful!");
        document.getElementById("registrationForm").reset(); // Reset form
        document.getElementById("total-fee").innerText = "₹0"; // Reset total fee
        checkOtherDepartment(); // Hide "Other Department" input if needed
    })
    .catch(error => {
        alert("Error: " + error.message);
    });
}



  const getElementByVal = (id) => {
    return document.getElementById(id).value;
  }
