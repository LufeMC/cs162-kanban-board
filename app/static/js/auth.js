const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

const inputBoxes = document.getElementByClassName("input-box");
const inputs = document.getElementByClassName("auth-input");

const notificationModalContainer = document.getElementById(
  "notification-modal-container"
);
const notificationModal = document.getElementById("notification-modal");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault()
  const query = await fetch(`${process.env.API_URL}/auth/login`, {method: "POST"})
  const status = query.json().status
  const data = query.json().data
  
  if (status === 200) {
    window.location.href = "/home";
    return
  }
  
  message = encodeURIComponent(message)
  window.location.href = `/auth/login?message=${message}`;
});

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault()
  const query = await fetch(`${process.env.API_URL}/auth/register`, {method: "POST"})
  const status = query.json().status
  const data = query.json().data
  
  const message = encodeURIComponent(data.message)
  window.location.href = `/auth/login?message=${message}`;
});

for (const input of inputs) {
  input.addEventListener("input", (event) => {
    const inputBox = input.getElementsByTagName('input')[0];
    if (event.target.value) {
      inputBox.classList.add("active");
    } else {
      inputBox.classList.remove("active");
    }
  });
}

if (notificationModalContainer) {
  notificationModalContainer.addEventListener("click", () => {
    console.log("oi");
    window.location = "/auth/login";
  });
}

if (notificationModal) {
  notificationModal.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
