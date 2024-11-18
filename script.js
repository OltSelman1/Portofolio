document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("header nav ul li a");
    const sections = document.querySelectorAll(".section");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.2 }
    );
  
    sections.forEach((section) => observer.observe(section));
  });

  

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const formResponse = document.getElementById("formResponse");
  
    
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (!name || !email || !message) {
        formResponse.textContent = "Please fill in all required fields.";
        formResponse.style.color = "red";
        return;
      }
  
      
      setTimeout(() => {
        formResponse.textContent = "Thank you for reaching out! We'll get back to you soon.";
        formResponse.style.color = "green";
  
        
        contactForm.reset();
      }, 1000);
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const contactLinks = document.querySelectorAll(".contact-icons a");
  
    contactLinks.forEach((link) => {
      // Adding a hover animation effect
      link.addEventListener("mouseover", () => {
        link.style.transform = "scale(1.1)";
      });
  
      link.addEventListener("mouseout", () => {
        link.style.transform = "scale(1)";
      });
  
      // Tooltip functionality
      const tooltip = document.createElement("div");
      tooltip.classList.add("tooltip");
      tooltip.style.position = "absolute";
      tooltip.style.padding = "5px 10px";
      tooltip.style.backgroundColor = "#007BFF";
      tooltip.style.color = "#fff";
      tooltip.style.borderRadius = "5px";
      tooltip.style.fontSize = "0.8rem";
      tooltip.style.visibility = "hidden";
      tooltip.style.transition = "visibility 0.2s, opacity 0.2s ease";
      tooltip.style.opacity = "0";
  
      document.body.appendChild(tooltip);
  
      link.addEventListener("mouseover", (e) => {
        tooltip.textContent = link.querySelector("span").textContent;
        tooltip.style.top = `${e.pageY - 40}px`;
        tooltip.style.left = `${e.pageX}px`;
        tooltip.style.visibility = "visible";
        tooltip.style.opacity = "1";
      });
  
      link.addEventListener("mousemove", (e) => {
        tooltip.style.top = `${e.pageY - 40}px`;
        tooltip.style.left = `${e.pageX}px`;
      });
  
      link.addEventListener("mouseout", () => {
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = "0";
      });
    });
  });