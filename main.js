const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast',
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
});

function showMessage() {
  alert('The connection is already established!');
  //addition codes
}

function showPrompt() {
  let userInput = prompt("Please enter your age.");
  if (userInput >= 18) {
    alert("You are eligible to vote!");
  }
}

function deleteConfirmation() {
  let deleteRecord = confirm("Are you sure you want to delete this record?");
  if (deleteRecord) { //true //false
    //code for deleting record;
    alert("Record deleted!");
  } else {
    alert("Okay!");
  }
}

function submitRegistration(event) {
  event.preventDefault();

  const fullName = document.getElementById("txtFullName");
  const username = document.getElementById("txtUserName");
  const password = document.getElementById("txtPassword");
  const confirmPassword = document.getElementById("txtConfirmPassword");

  if (fullName.value == "" || username.value == "" || password.value == "" || confirmPassword.value == "") {
    document.getElementById("dialogRegistration").close();
    Swal.fire({
      title: "Registration",
      text: "Please provide all the needed information",
      icon: "error"
    }).then( function () {
      document.getElementById("dialogRegistration").showModal();
    });
    
    return;
  }

  if (password.value.length < 8) {
    alert("Password must be at least 8 characters.");
    return;
  }

  if (password.value.length != confirmPassword.value.length) {
    alert("Password not match!");
    return;
  }

  //codes for saving
  document.getElementById("dialogRegistration").close();
  Swal.fire({
    title: "Do you want to submit your registration?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Submit",
    denyButtonText: `Don't submit`,
    icon: 'question'
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      // Swal.fire("Saved!", "", "success");
      Toast.fire({
        icon: 'info',
        title: 'Saved!!',
      });
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
  

  


}

function sweet() {
  Swal.fire({
    title: "BeeBETTER",
    text: "Registration successful!",
    icon: "warning"
  });
}