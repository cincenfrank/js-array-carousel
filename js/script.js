const items = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];

const title = ["Svezia", "Svizzera", "Gran Bretagna", "Germania", "Paradise"];

const text = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
  "Lorem ipsum",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
  "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
];

const stackedMainContainer = document.querySelector(
  ".stacked-container .main-image-container"
);
const thumbColumn = document.querySelector(".stacked-container .thumb-column");
const buttonUp = document.querySelector(".carousel-controller.up-arrow");
const buttonDown = document.querySelector(".carousel-controller.down-arrow");

let activeIndex = 0;

// LOADING LOOP
for (let i = 0; i < items.length; i++) {
  const singleImage = items[i];
  const singleTitle = title[i];
  const singleText = text[i];

  //   MAIN IMAGE LOGIC
  const mainImage = document.createElement("div");
  mainImage.classList.add("main-image");
  if (i === activeIndex) {
    mainImage.classList.add("active");
  }

  const imgElement = document.createElement("img");
  imgElement.src = singleImage;
  imgElement.alt = `${singleTitle} image`;

  const descriptionBlock = document.createElement("div");
  descriptionBlock.classList.add("description");

  const descriptionTitle = document.createElement("h2");
  descriptionTitle.classList.add("px-3", "my-0", "fs-4");
  descriptionTitle.textContent = singleTitle;

  const descriptionText = document.createElement("p");
  descriptionText.classList.add("px-3", "mb-4", "fs-5");
  descriptionText.textContent = singleText;

  descriptionBlock.appendChild(descriptionTitle);
  descriptionBlock.appendChild(descriptionText);

  mainImage.appendChild(imgElement);
  mainImage.appendChild(descriptionBlock);

  stackedMainContainer.appendChild(mainImage);

  //   THUMBS COLUMN LOGIC
  const thumbBlock = document.createElement("div");
  thumbBlock.classList.add("ratio", "ratio-21x9", "thumb-block");
  if (i === activeIndex) {
    thumbBlock.classList.add("active");
  }
  thumbBlock.setAttribute("index", i.toString());
  const thumbImg = document.createElement("img");
  thumbImg.classList.add("w-100", "thumb");
  thumbImg.src = singleImage;
  thumbImg.alt = `${singleTitle} thumb`;

  const thumbBorder = document.createElement("div");
  thumbBorder.classList.add("thumb-border");
  const thumbOverlay = document.createElement("div");
  thumbOverlay.classList.add("thumb-overlay");

  thumbBlock.appendChild(thumbImg);
  thumbBlock.appendChild(thumbBorder);
  thumbBlock.appendChild(thumbOverlay);

  thumbColumn.appendChild(thumbBlock);
}

buttonUp.addEventListener("click", function () {
  if (activeIndex === 0) {
    activeIndex = items.length - 1;
  } else {
    activeIndex--;
  }
  //   MAIN IMAGE LOGIC
  const previousMainImage = document.querySelector(".main-image.active");
  previousMainImage.classList.remove("active");
  const newMainImage = document.querySelector(
    `.main-image:nth-child(${activeIndex + 1})`
  );
  newMainImage.classList.add("active");
  // THUMB LOGIC
  const previousThumbBlock = document.querySelector(".thumb-block.active");
  previousThumbBlock.classList.remove("active");
  const newThumbBlock = document.querySelector(
    `.thumb-block[index="${activeIndex}"]`
  );
  newThumbBlock.classList.add("active");
});
buttonDown.addEventListener("click", function () {
  if (activeIndex === items.length - 1) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }
  //   MAIN IMAGE LOGIC
  const previousMainImage = document.querySelector(".main-image.active");
  previousMainImage.classList.remove("active");
  const newMainImage = document.querySelector(
    `.main-image:nth-child(${activeIndex + 1})`
  );
  newMainImage.classList.add("active");
  // THUMB LOGIC
  const previousThumbBlock = document.querySelector(".thumb-block.active");
  previousThumbBlock.classList.remove("active");
  const newThumbBlock = document.querySelector(
    `.thumb-block[index="${activeIndex}"]`
  );
  newThumbBlock.classList.add("active");
});
