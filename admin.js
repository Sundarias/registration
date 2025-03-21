import { auth } from "./firebase.js"; 

// Function to handle admin login
async function adminLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById("admin-email").value;
    const password = document.getElementById("admin-password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        alert("Admin Login Successful!");
        window.location.href = "admin-dashboard.html"; // Redirect to dashboard
    } catch (error) {
        alert("Error: " + error.message);
    }
}

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Admin logged in:", user.email);
    } else {
        console.log("No admin logged in.");
    }
});

// Export login function
export { adminLogin };
import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

function logout() {
    signOut(auth).then(() => {
        alert("Logged out successfully.");
        window.location.href = "admin-login.html";
    }).catch((error) => {
        alert("Error: " + error.message);
    });
}

export { logout };
