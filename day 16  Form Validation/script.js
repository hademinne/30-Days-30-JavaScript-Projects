var nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");

function validateName() {
  var inputName = document.getElementById("inputName").value;
  if (inputName.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!inputName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  // nameError.innerHTML = "Valid";
  return true;
  // Prevent default form submission
  preventDefault();
}

function validatePhone() {
  let inputPhone = document.getElementById("inputPhone").value;

  if (
    inputPhone.length == 0 ||
    !inputPhone.match(/^\d+$/) ||
    inputPhone.length !== 10
  ) {
    phoneError.innerHTML = "Phone number is required";
    return false;
  }
  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
  // Prevent default form submission
  preventDefault();
}
