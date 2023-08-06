function confirmSubmit() {
  const forms = document.forms;
  forms[0].onsubmit = function () {
    const name = forms[0].name.value;
    if (!(confirm(`Sr. ${name} ¿Está seguro de que quiere enviarlo?`))) {
      alert("Cancelado.");
      return false;
    }
  };
};

window.onload = confirmSubmit;




function emailValidation() {
  const form = document.getElementById('form');
  const emailComfirmField = document.getElementById('email_confirm');
  const element = document.createElement('p');
  const message = document.createTextNode("Error, los correos electronicos no coinciden");
  const contentField = document.getElementById('email_confirm');
  element.appendChild(message);
  element.setAttribute('id', 'alert');
  element.classList.add("alert_color");
  emailComfirmField.addEventListener('input', e => {
    if(form.email.value !== emailComfirmField.value) {
      if (!document.getElementById('alert')) {
        contentField.parentNode.insertBefore(element, contentField);
        emailComfirmField.classList.add("alert_bg");
      }
    } else {
      emailComfirmField.classList.remove("alert_bg");
      element.parentNode.removeChild(element);
    }
  });
};

window.onload = function() {
  emailValidation();
};
