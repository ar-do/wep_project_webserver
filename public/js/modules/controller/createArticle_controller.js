import * as Model from '../model.js';
import * as Config from '../config.js';
import * as Helper from '../helper.js';

// Add Eventlistener for file selection
if(window.location.href.includes('/createArticle') !== false)
{
      
  const handleImageUpload = (fileObject) => {
    
    const ts = Date.now();
    const rnd = Math.floor(Math.random() * 100000);
    const newFileName = ts + "-" + rnd + ".jpg";
    const files = fileObject;
    const formData = new FormData();
    formData.append('myFile', fileObject[0]);
    formData.append('tempFile', fileObject[0], newFileName);
    fetch('/upload', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
      })
      .catch(error => {
        console.error(error)
      });
      return newFileName;
  }


  (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  
  // Form Submit
  
  
  let form_submit_btn = document.getElementById("form-btn-submit");
  
  form_submit_btn.addEventListener("click", () => {
    if(document.getElementById("form-title").value != ""
    && document.getElementById("form-introtxt").value != ""
    && document.getElementById("form-content").value != ""
    && document.getElementById("files").value != ""){

      const fileObject = document.getElementById("files").files;
      const newFileName = handleImageUpload(fileObject);   
      const form_data = getFormData(newFileName);  
      Model.createArticle(form_data);
      alertHandler("success");
    }else {
      let dang = document.getElementById("alert_danger");
      alertHandler("failed");
    }
  });

  let c_alert = document.getElementById("alert_close");
  c_alert.addEventListener("click", () => {
    document.getElementById("alert").classList.remove("show");
  });
  
} 

function alertHandler(type){
    let __alert = document.getElementById("alert");
    let strong_text = document.getElementById("strong_txt");
    let span_text = document.getElementById("span_text");

      strong_text.textContent = "";
      span_text.textContent = "";
    if(__alert.classList.contains("alert-success")){
      __alert.classList.remove("alert-success");
    }
    if(__alert.classList.contains("alert-danger")){
      __alert.classList.remove("alert-danger");
    }
    

    if(type == "success") {
      let _stt = document.createTextNode("Artikel wurde erstellt");
      let _st = document.createTextNode(" Der Artikel wurde erfolgreich erstellt");
      strong_text.appendChild(_stt);
      span_text.appendChild(_st);
      __alert.classList.add("alert-success", "show");
      

    }
    if(type == "failed") {
      let _stt = document.createTextNode("Artikel wurde nicht erstellt");
      let _st = document.createTextNode(" Bitte fülle alle Felder aus!");
      strong_text.appendChild(_stt);
      span_text.appendChild(_st);
      __alert.classList.add("alert-danger", "show");

    }

}

function getFormData(fn) {
  // Function for getting all the Data from the Form, returns an JSON Object with Values


  // Get Form Values
  const form_title = document.getElementById("form-title").value;
  const form_introtxt = document.getElementById("form-introtxt").value;
  const form_content = document.getElementById("form-content").value;
  const form_image = fn;
  const userid = Helper.getUserIDFromCookie();
  const data = {
      headerimg: Config._imgpath + form_image,
      title: form_title,
      introtxt: form_introtxt,
      content: form_content,
      userid: userid
  }
  return data;
}


function getFileName(file) {
  const filename = file.substring(file.lastIndexOf("\\") + 1, file.length);
  return filename;
}

function validateFormInput () {
  // Function for validating the Form Input
}