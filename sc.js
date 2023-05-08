const colorImages = [
    "assets/Blue umbrella.png",
    "assets/Pink umbrella.png",
    "assets/Yello umbrella.png",
  ];
  
  const bodyColors = ["#e6f6fc", "#ffdeef", "#fffaed"];
  
  const umbrellaColors = ["#28b0e4", "#d0006f", "#fed141"];
  
  const body = document.getElementsByTagName("BODY")[0];
  const menu = document.getElementsByClassName("color-circle");
  const umbImg = document.getElementById("umbrellaImgWrap");
  const upload = document.getElementById("upload");
  const umbrella = document.getElementById("umbImg");
  const loader = document.getElementsByClassName("loader");
  const svgPath = document.querySelectorAll("svg path");
  const fileInput = document.getElementById("file-input");
  const logoContainer = document.getElementById("logo-container");
  
  document.getElementById("cross").style.display = "none";
  
  for (let j = 0; j < loader.length; j++) {
    loader[j].style.display = "none";
  }
  
  svgPath[1].style.fill = "white";
  
  for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function () {
      svgPath[0].style.fill = umbrellaColors[i];
  
      for (let j = 0; j < loader.length; j++) {
        loader[j].style.display = "block";
      }
      umbImg.style.display = "none";
      upload.style.display = "none";
      body.style.backgroundColor = bodyColors[i];
      setTimeout(function () {
          for (let j = 0; j < loader.length; j++) {
            loader[j].style.display = "none";
          }
          umbImg.style.display = "block";
          umbrella.src = colorImages[i];
          umbImg.style.display = "block";
          upload.style.display = "block";
        }, 2000);
      
      
    });
  }
  
  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (!file || !(file instanceof Blob)) {
      console.error("Invalid file selected.");
      return;
    }
    reader.onload = (event) => {
      const imageUrl = event.target.result;
      const image = new Image();
      image.src = imageUrl;
      let inputImage = document.querySelector("input[type=file]").files[0];
      document.getElementsByClassName("select")[0].style.display = "none";
      imageName.innerText = inputImage.name;
      document.getElementById("cross").style.display = "block";
      image.onload = () => {
        logoContainer.appendChild(image);
      };
    };
  
    reader.readAsDataURL(file);
  });
  
  const removeButton = document.getElementById("cross");
  removeButton.addEventListener("click", () => {
    const logoContainer = document.getElementById("logo-container");
    const image = logoContainer.querySelector("img");
  
    if (image) {
      logoContainer.removeChild(image);
      document.getElementsByClassName("select")[0].style.display = "block";
      imageName.innerText = "";
      document.getElementById("cross").style.display = "none";
    }
  });
  