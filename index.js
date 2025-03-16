const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "/home/arnold/Downloads/nirvana.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "/home/arnold/Downloads/naruto.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "/home/arnold/Downloads/shoyu.jpg",
    rating: 3,
    comment: "nitokimasu!",
  },
  {
    id: 4,
    name: "Korijo",
    restaurant: "Ramen-ya",
    image: "/home/arnold/Downloads/kojiro.jpg",
    rating: 4,
    comment: "konichiwaa!",
  },
  {
    id: 5,
    name: "Gyukotsu",
    restaurant: "Ramen-ya",
    image: "/home/arnold/Downloads/gyukotsu (1).jpg",
    rating: 5,
    comment: "Boy ooooow Boy!",
  },
];

function displayRamens() {
  const ramenMenu = document.getElementById("ramen-menu");
  ramens.forEach((ramen) => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener("click", () => handleClick(ramen));
    ramenMenu.appendChild(img);
  });
}

function handleClick(ramen) {
  const ramenDetail = document.getElementById("ramen-detail");
  ramenDetail.innerHTML = `             <img src="${
    ramen.image
  }" alt="Image of ${ramen.name}" style="width: 350px; height: 250px;"  />
                <h2>${ramen.name}</h2>
                <p>Restaurant: ${ramen.restaurant}</p>
                ${ramen.rating ? `<p>Rating: ${ramen.rating}</p>` : ""}
                ${ramen.comment ? `<p>Comment: ${ramen.comment}</p>` : ""}
            `;
}

function addSubmitListener() {
  const ramenForm = document.getElementById("ramen-form");
  ramenForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const restaurant = document.getElementById("restaurant").value;
    const image = document.getElementById("image").value;
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value;

    const newRamen = {
      id: ramens.length + 1,
      name: name,
      restaurant: restaurant,
      image: image,
      rating: rating ? parseInt(rating) : undefined,
      comment: comment,
    };

    ramens.push(newRamen);
    const ramenMenu = document.getElementById("ramen-menu");
    const img = document.createElement("img");
    img.src = image;
    img.alt = name;
    img.addEventListener("click", () => handleClick(newRamen));
    ramenMenu.appendChild(img);
    ramenForm.reset();
  });
}

function main() {
  displayRamens();
  addSubmitListener();
  if (ramens.length > 0) {
    handleClick(ramens[0]);
  }
}

document.addEventListener("DOMContentLoaded", main);
