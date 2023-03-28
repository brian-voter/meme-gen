document.addEventListener("submit", (e) => {
  e.preventDefault();

  addMeme();
});

function addMeme() {
  const formElem = document.forms.MemeForm;
  const formData = new FormData(formElem);

  const memesContainer = document.getElementById("memesContainer");

  let memeDiv = document.createElement("div");
  memeDiv.setAttribute("class", "memeDiv");
  memesContainer.appendChild(memeDiv);

  addImage(memeDiv, formData);

  addMemeText(memeDiv, formData);

  addDeleteButton(memeDiv);

  formElem.reset();
}

function addImage(memeDiv, formData) {

  let image = document.createElement("img");
  image.setAttribute("src", formData.get("imageURL"));
  memeDiv.appendChild(image);
}

function addMemeText(memeDiv, formData) {

  let memeTextDiv = document.createElement("div");
  memeTextDiv.setAttribute("class", "memeTextDiv");
  memeDiv.appendChild(memeTextDiv);

  let topText = document.createElement("span");
  topText.innerHTML = formData.get("topText");
  memeTextDiv.appendChild(topText);

  let bottomText = document.createElement("span");
  bottomText.innerHTML = formData.get("bottomText");
  memeTextDiv.appendChild(bottomText);
}


function addDeleteButton(memeDiv) {

  let memeDeleteButton = document.createElement("div");
  memeDeleteButton.setAttribute("class", "memeDeleteButton");
  memeDeleteButton.style.display = "none";

  let xText = document.createElement("p");
  xText.innerText = "X";
  memeDeleteButton.appendChild(xText);

  memeDiv.addEventListener("mouseenter", () => {
    console.log("enter");
    memeDeleteButton.style.display = "flex";
  });
  memeDiv.addEventListener("mouseleave", () => {
    console.log("exit");
    memeDeleteButton.style.display = "none";
  });
  memeDeleteButton.addEventListener("click", () => {
    memeDiv.remove();
  })

  memeDiv.appendChild(memeDeleteButton);
}