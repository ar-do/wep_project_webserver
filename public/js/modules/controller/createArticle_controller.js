import * as Helper from '../helper.js';
import * as Model from '../model.js';
import * as Config from '../config.js';

// Add Eventlistener for file selection
if(window.location.href.includes('/createArticle') !== false)
{
    
  document.querySelector('#files').addEventListener('change', event => {
    handleImageUpload(event);
  });
  
  const handleImageUpload = event => {
    const files = event.target.files;
    console.log(files);
    const formData = new FormData();
    formData.append('myFile', files[0]);
  
    fetch('/upload', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log(data.path)
      })
      .catch(error => {
        console.error(error)
      })
  }
    
  
  
  // Form Submit
  
  let form_preview_btn = document.getElementById("form-btn-preview");
  let form_submit_btn = document.getElementById("form-btn-submit");
  
  form_submit_btn.addEventListener("click", () => {
    
    const form_data = getFormData();
    Model.createArticle(form_data);
  });
  
  
  form_preview_btn.addEventListener("click", () => {
    // Function to create the preview
    const form_data = getFormData();
    console.log("preview Article");
  });
  
} 






function getFormData() {
  // Function for getting all the Data from the Form, returns an JSON Object with Values


  // Get Form Values
  const form_title = document.getElementById("form-title").value;
  const form_introtxt = document.getElementById("form-introtxt").value;
  const form_content = document.getElementById("form-content").value;
  const form_image = getFileName(document.getElementById("files").value);
  
  const data = {
      headerimg: Config._imgpath + form_image,
      title: form_title,
      introtxt: form_introtxt,
      content: form_content,
      userid: Config._userid
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