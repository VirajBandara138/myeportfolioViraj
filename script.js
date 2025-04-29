// Add this to script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    fetch(
      "https://slit.app.n8n.cloud/webhook-test/8d0e90bb-6aa3-4383-bc47-2cd54cf53a03",
      {
        // Replace with your n8n webhook URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => {
        if (response.ok) {
          formStatus.innerText = "Thank you! Your message has been sent.";
          formStatus.style.color = "lightgreen";
          form.reset();
        } else {
          formStatus.innerText = "Oops! Something went wrong.";
          formStatus.style.color = "red";
        }
      })
      .catch((error) => {
        formStatus.innerText = "Error sending message!";
        formStatus.style.color = "red";
        console.error("Error:", error);
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Load saved mode
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save mode
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
