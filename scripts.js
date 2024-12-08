function openProject(projectId) {
    var modal = document.getElementById("projectModal");
    var title = document.getElementById("modal-title");
    var img = document.getElementById("modal-img");
    var description = document.getElementById("modal-description");
  
    // Set modal content based on clicked project
    if (projectId === "project1") {
      title.innerText = "Project 1";
      img.src = "images/1.png";
      description.innerText = "best project in da world";
    } else if (projectId === "project2") {
      title.innerText = "Project 2";
      img.src = "images/1.png";
      description.innerText = "Detailed description of Project 2.";
    } else if (projectId === "project3") {
      title.innerText = "Project 3";
      img.src = "images/1.png";
      description.innerText = "Detailed description of Project 3.";
    }
  
    // Show the modal
    modal.style.display = "block";
  }
  
  // Close the modal when the close button is clicked
  function closeModal() {
    document.getElementById("projectModal").style.display = "none";
  }
  
  // Close the modal when clicking outside the modal content
  window.onclick = function(event) {
    var modal = document.getElementById("projectModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  