// OPEN POPUP & GET CAR NAME
function openEnquiry(button) {
  const modal = document.getElementById("enquiryModal");
  const card = button.closest(".card");
  const carName = card.querySelector("h3").innerText;

  document.getElementById("carNameField").value = carName;
  modal.style.display = "flex";
}

// CLOSE POPUP
function closeEnquiry() {
  document.getElementById("enquiryModal").style.display = "none";
}

// SUBMIT FORM
function submitPopupEnquiry() {
  alert("Thank you! Singh Motors will contact you soon 🚗");
  closeEnquiry();
  return false;
}

// CLOSE WHEN CLICK OUTSIDE
window.onclick = function(event) {
  const modal = document.getElementById("enquiryModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function submitEnquiryForm() {
  alert("Thank you! Our team will contact you soon.");
  return false; // Prevent page reload
}

function scrollToCars() {
  document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
}

function scrollToCustomerReviews() {
  document.getElementById("Customer Reviews").scrollIntoView({ behavior: "smooth" });
}

function submitForm() {
  alert("Form submitted successfully!Thank you! Our team will contact you soon.");
  return false;
}
function openDashboard() {
    window.location.href = "cars.html";
}
function searchCars() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll("#carList .card");

  cards.forEach(card => {
    let name = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = name.includes(input) ? "block" : "none";
  });
}

function filterCars() {
  let filter = document.getElementById("priceFilter").value;
  let cards = document.querySelectorAll("#carList .card");

  cards.forEach(card => {
    let price = parseInt(card.getAttribute("data-price"));

    if (filter === "low" && price < 800000) card.style.display = "block";
    else if (filter === "mid" && price >= 800000 && price <= 1500000) card.style.display = "block";
    else if (filter === "high" && price > 1500000) card.style.display = "block";
    else if (filter === "all") card.style.display = "block";
    else card.style.display = "none";
  });
}

function sellCar() {
  alert("Your car details submitted! We will contact you.");
  return false;
}

function addToCart(button) {
  const card = button.closest(".card");

  const name = card.querySelector("h3").innerText;
  const priceText = card.querySelector("p").innerText;

  const price = parseInt(priceText.replace(/[₹,]/g, ""));

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name, price });

  localStorage.setItem("cart", JSON.stringify(cart));

  // Redirect to cart page
  window.location.href = "cart.html";
}

function showMoreParts() {
  document.getElementById("moreParts").style.display = "block";
}
function showMoreCars() {
  document.getElementById("moreCars").style.display = "flex";
}



function scrollReviews(direction){
  const slider = document.getElementById("reviewSlider");
  slider.scrollBy({
    left: direction * 320,
    behavior: "smooth"
  });
}
