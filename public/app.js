function validateZeeForm() {
  var email = document.forms.zeeForm.email.value;
  if ((/[\w]+@[\w.]+/).test(email)) {
    return true;
  } else {
    return false;
  }
}

function disablePassword() {
  document.getElementById('password').disabled = true;
}

function enablePassword() {
  document.getElementById('password').disabled = false;
}

