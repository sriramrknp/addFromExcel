const uploadBox = document.getElementById("upload-box");
const fileInfoBox = document.getElementById("file-info-box");
const fileInput = document.getElementById("file-input");
const uploadForm = document.getElementById("upload-form");

uploadBox.addEventListener("click", function() {
  fileInput.click();
});

document.getElementById("file-input").addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (file.type === "application/vnd.ms-excel" || file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
    const fileName = file.name;
    document.getElementById("file-name").innerHTML = ` ${fileName} - Add from Excel data .xlsx`;
    uploadBox.style.display = "none";
    fileInfoBox.style.display = "flex";
  }
});

document.getElementById("submit-button").addEventListener("click", function() {
  uploadForm.submit();
  fileInfoBox.style.display = "none";
  document.getElementById("message-box").style.display = "flex";
});
