/* =====================================================
   EDITABLE VARIABLES
   Change these values to update the card content
===================================================== */
const universityLogo   = "https://www.eurashe.eu/wp-content/uploads/2023/10/Parul-University-logo.jpg";
const profilePhoto     = "FINEL IMAGE.jpeg";
const topProfilePhoto  = "FINEL IMAGE.jpeg";

const studentName      = "SHUBHAM SANJAY WAGH";
const enrollmentNo     = "2503051050612";
const hostelName       = "ABRAHAM LINCOLN - A";
const contactNo        = "8010626675";
const institute        = "PIT-1";
const validity         = "01-07-2026 to 30-06-2027";
const messName         = "ABRAHAM LINCOLN MESS";

/* =====================================================
   APPLY VARIABLES TO THE DOM
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Images
  document.getElementById("universityLogo").src = universityLogo;
  document.getElementById("topProfilePhotoImg").src = topProfilePhoto;
  document.getElementById("studentPhotoImg").src = profilePhoto;

  // Text fields
  document.getElementById("topProfileName").textContent = studentName;
  document.getElementById("pageHeadingName").textContent = studentName;
  document.getElementById("hostelMessName").textContent = messName;
  document.getElementById("studentNameDisplay").textContent = studentName;
  document.getElementById("enrollmentNoDisplay").textContent = enrollmentNo;
  document.getElementById("hostelNameDisplay").textContent = hostelName;
  document.getElementById("contactNoDisplay").textContent = contactNo;
  document.getElementById("instituteDisplay").textContent = institute;
  document.getElementById("validityDisplay").textContent = validity;

  // Start live clock
  updateDateTime();
  setInterval(updateDateTime, 1000);
});

/* =====================================================
   LIVE DATE & TIME (updates every second)
===================================================== */
function updateDateTime() {
  const now = new Date();

  // Date: DD-MM-YYYY
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const dateStr = `${day}-${month}-${year}`;

  // Time: hh:mm:ss AM/PM
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;
  const hoursStr = String(hours).padStart(2, "0");
  const timeStr = `${hoursStr}:${minutes}:${seconds} ${ampm}`;

  document.getElementById("liveDate").textContent = dateStr;
  document.getElementById("liveTime").textContent = timeStr;
}
