// import {
//   closeNavBtn,
//   sideBar,
//   dashboard,
//   sideBarElements,
//   dashboardNavLinks,
//   dashboardLink,
//   salesHistoryLink,
//   carInventoryLink,
//   navLogoBlack,
//   navBtnBlack,
//   xMark,
//   imgDropdown,
//   dropdownMenu,
//   listCarBtn,
//   editCarsBtn,
//   listNewCarModal,
//   editCarsModal,
//   dashy,
//   editCarForm,
//   editCar1,
// } from "./variables.js";

let closeNavBtn = document.getElementById("close-nav-btn");
let sideBar = document.getElementById("sidebar");
let dashboard = document.getElementById("dashboard");
let sideBarElements = document.getElementsByClassName("sideBarElement");
let dashboardNavLinks = document.querySelectorAll(".nav-links-2");
let dashboardLink = document.getElementById("dashboardLink");
let salesHistoryLink = document.getElementById("salesHistoryLink");
let carInventoryLink = document.getElementById("carInventoryLink");
let navLogoBlack = document.getElementById("nav-logo-black");
let navBtnBlack = document.getElementById("navBtnBlack");
let xMark = document.getElementById("xMark");
let imgDropdown = document.getElementById("imgDropdown");
let dropdownMenu = document.getElementById("dropdownMenu");
let listCarBtn = document.getElementById("listCarBtn");
let editCarsBtn = document.getElementById("editCarInventory");
let listNewCarModal = document.getElementById("listNewCarModal");
let editCarsModal = document.getElementById("editCarsModal");
let dashy = document.getElementById("dashy");
let editCar1 = document.getElementById("editCar1");

//Bring out dropdown when profile picture is clicked
imgDropdown.addEventListener("click", () => {
  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "inline-block";
  } else {
    dropdownMenu.style.display = "none";
  }
});

//Navbar should minimize when the button is clicked and maximize if it is clicked again
closeNavBtn.addEventListener("click", () => {
  if (sideBar.style.width === "6%") {
    sideBar.classList.add("col-3");
    sideBar.style.width = "auto";
    dashboard.classList.remove("col-11");
    dashboard.classList.add("col-9");
    dashboard.style.width = "75%";
    for (var i = 0; i < sideBarElements.length; i++) {
      sideBarElements[i].style.display = "inline-block";
    }
  } else {
    sideBar.classList.remove("col-3");
    sideBar.style.width = "6%";
    dashboard.classList.remove("col-9");
    dashboard.style.display = "inline-block";
    dashboard.style.width = "94%";
    for (var i = 0; i < sideBarElements.length; i++) {
      sideBarElements[i].style.display = "none";
    }
  }
});

//Open Navbar overlay when the nav button is clicked in mobile
navBtnBlack.addEventListener("click", () => {
  sideBar.classList.remove("d-none");
  navLogoBlack.classList.remove("sticky-top");
  sideBar.style.zIndex = "10000";
  sideBar.style.paddingBottom = "100px";
  sideBar.classList.remove("col-3");
  sideBar.classList.add("w-100", "shadow-lg", "sticky-top");
  sideBar.style.backgroundColor = "rgba(61, 74, 62, 0.8)";
  sideBar.style.backdropFilter = "blur(15px)";
  xMark.classList.remove("d-none");
  closeNavBtn.style.display = "none";
});
//Close Navbar overlay when the x mark is clicked in mobile
xMark.addEventListener("click", () => {
  sideBar.classList.add("d-none");
  navLogoBlack.classList.add("sticky-top");
  sideBar.classList.add("col-3");
  sideBar.classList.remove("w-100", "shadow-lg", "sticky-top");
  sideBar.style.backgroundColor = "rgb(61, 74, 62)";
  sideBar.style.backdropFilter = "";
  xMark.classList.add("d-none");
  closeNavBtn.style.display = "inline-block";
});

// Change the active nav link when either is clicked
dashboardLink.addEventListener("click", () => {
  dashboardNavLinks.forEach((link) => {
    link.classList.remove("active-nav-link");
  });
  dashboardLink.classList.add("active-nav-link");
  sideBar.classList.add("d-none");
  navLogoBlack.classList.add("sticky-top");
  dashy.classList.remove("d-none");
  listNewCarModal.classList.add("d-none");
  editCarsModal.classList.add("d-none");
});
salesHistoryLink.addEventListener("click", () => {
  dashboardNavLinks.forEach((link) => {
    link.classList.remove("active-nav-link");
  });
  salesHistoryLink.classList.add("active-nav-link");
  sideBar.classList.add("d-none");
  navLogoBlack.classList.add("sticky-top");
  dashy.classList.remove("d-none");
  listNewCarModal.classList.add("d-none");
  editCarsModal.classList.add("d-none");
});
carInventoryLink.addEventListener("click", () => {
  dashboardNavLinks.forEach((link) => {
    link.classList.remove("active-nav-link");
  });
  carInventoryLink.classList.add("active-nav-link");
  sideBar.classList.add("d-none");
  navLogoBlack.classList.add("sticky-top");
  dashy.classList.remove("d-none");
  listNewCarModal.classList.add("d-none");
  editCarsModal.classList.add("d-none");
});

//On scrolling the page, the highlighted link should be the one for the section in view
window.addEventListener("scroll", () => {
  let mainDashboardHeight =
    document.getElementById("mainDashboard").clientHeight;
  let salesHistoryHeight = document.getElementById("salesHistory").clientHeight;
  let carInventoryHeight = mainDashboardHeight + salesHistoryHeight;
  let currentScrollHeight = window.scrollY;

  if (currentScrollHeight >= carInventoryHeight) {
    dashboardNavLinks.forEach((link) => {
      link.classList.remove("active-nav-link");
    });
    carInventoryLink.classList.add("active-nav-link");
  } else if (currentScrollHeight >= mainDashboardHeight) {
    dashboardNavLinks.forEach((link) => {
      link.classList.remove("active-nav-link");
    });
    salesHistoryLink.classList.add("active-nav-link");
  } else if (currentScrollHeight < mainDashboardHeight) {
    dashboardNavLinks.forEach((link) => {
      link.classList.remove("active-nav-link");
    });
    dashboardLink.classList.add("active-nav-link");
  }
});

listCarBtn.addEventListener("click", () => {
  listNewCarModal.classList.remove("d-none");
  dashy.classList.add("d-none");
});

editCarsBtn.addEventListener("click", () => {
  editCarsModal.classList.remove("d-none");
  dashy.classList.add("d-none");
});

function appendFormToRow(rowId) {
  const row = document.getElementById(`carRow${rowId}`);
  document.querySelectorAll(".editCarForm").forEach((form) => {
    form.remove();
  });
  const formHTML = `
              <tr>
                <td colspan="6" class="w-100">
                  <form class="editCarForm" id="editCarForm${rowId}" data-row-id="${rowId}">
                    <div class="text-start">
                      <div class="editCarFormInput d-inline-block mx-1">
                        <label for="carName${rowId}">Name:</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Lexus LX570"
                          class="p-2"
                          id="carName${rowId}"
                        />
                      </div>
                      <div class="editCarFormInput d-inline-block mx-1">
                        <label for="carPrice${rowId}">Price:</label>
                        <br />
                        <input
                          type="number"
                          placeholder="Lexus-LX570"
                          class="p-2"
                          id="carPrice${rowId}"
                        />
                      </div>
                      <div class="editCarFormInput d-inline-block mx-1">
                        <label for="carMileage${rowId}">Mileage:</label>
                        <br />
                        <input
                          type="number"
                          placeholder="Lexus-LX570"
                          class="p-2"
                          id="carMileage${rowId}"
                        />
                      </div>
                      <div class="editCarFormInput mx-1 mt-2">
                        <label for="carDescription${rowId}">Description:</label>
                        <br />
                        <textarea
                          name="carDescription"
                          id="carDescription${rowId}"
                          rows="4"
                          class="w-100 p-2"
                          placeholder=""
                        ></textarea>
                      </div>
                    </div>
                    <input
                      type="submit"
                      value="Finish Editing"
                      class="green-bg-theme text-white rounded-3"
                    />
                  </form>
                </td>
              </tr>
  `;
  row.insertAdjacentHTML("afterend", formHTML);
  function editCar(rowId) {
    const form = document.getElementById(`editCarForm${rowId}`);
    const carName = form.querySelector(`#carName${rowId}`).value;
    const carMileage = form.querySelector(`#carMileage${rowId}`).value;
    const carPrice = form.querySelector(`#carPrice${rowId}`).value;
    const carNameConfirmed = document.getElementById(
      `carNameConfirmed${rowId}`
    );
    const carMileageConfirmed = document.getElementById(
      `carMileageConfirmed${rowId}`
    );
    const carPriceConfirmed = document.getElementById(
      `carPriceConfirmed${rowId}`
    );
    carNameConfirmed.innerText = carName;
    carMileageConfirmed.innerText = `${formatNumberWithCommas(carMileage)}km`;
    carPriceConfirmed.innerText = `NGN${formatNumberWithCommas(carPrice)}`;
  }
  document.querySelectorAll(".editCarForm").forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const rowId = form.dataset.rowId;
      editCar(rowId);
      form.remove();
    });
  });
}

document.querySelectorAll(".editButton").forEach((button) => {
  button.addEventListener("click", function () {
    const rowId = button.dataset.rowId;
    appendFormToRow(rowId);
  });
});

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}