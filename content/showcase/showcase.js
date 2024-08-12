function showModalPic(path) {
  document.getElementById("modal-img").innerHTML =
    '<img class="modal-img" src="' + path + '" />';
  document.getElementById("myModal").style.display = "block";
}

function closeModalPic() {
  document.getElementById("myModal").style.display = "none";
}
