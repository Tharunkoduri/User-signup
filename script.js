function signup() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const mobile = document.getElementById("mobile").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const address = document.getElementById("address").value.trim();
    const terms = document.getElementById("terms").checked;
    const error = document.getElementById("error");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !username || !password || !confirmPassword || !mobile || !dob || !gender) {
        error.innerText = "All required fields must be filled";
        return;
    }

    if (!emailRegex.test(email)) {
        error.innerText = "Invalid email format";
        return;
    }

    if (password.length < 6) {
        error.innerText = "Password must be at least 6 characters";
        return;
    }

    if (password !== confirmPassword) {
        error.innerText = "Passwords do not match";
        return;
    }

    if (!terms) {
        error.innerText = "Please accept Terms & Conditions";
        return;
    }

    const user = { name, email, username, password, mobile, dob, gender, address };
    localStorage.setItem("userData", JSON.stringify(user));

    alert("Signup successful!");
    window.location.href = "login.html";
}

function login() {
    const user = JSON.parse(localStorage.getItem("userData"));
    const username = document.getElementById("loginUser").value;
    const password = document.getElementById("loginPass").value;
    const error = document.getElementById("loginError");

    if (!user || user.username !== username || user.password !== password) {
        error.innerText = "Invalid credentials";
        return;
    }

    alert("Login successful");
    window.location.href = "profile.html";
}

if (window.location.pathname.includes("profile.html")) {
    const user = JSON.parse(localStorage.getItem("userData"));

    if (!user) {
        window.location.href = "login.html";
    }

    document.getElementById("pname").innerText = user.name;
    document.getElementById("pemail").innerText = user.email;
    document.getElementById("pusername").innerText = user.username;
    document.getElementById("pmobile").innerText = user.mobile;
    document.getElementById("pdob").innerText = user.dob;
    document.getElementById("pgender").innerText = user.gender;
    document.getElementById("paddress").innerText = user.address || "Not Provided";

    document.getElementById("avatarText").innerText =
        user.name.charAt(0).toUpperCase();
}

function logout() {
    alert("Logged out successfully");
    window.location.href = "login.html";
}
