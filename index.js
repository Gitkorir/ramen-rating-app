const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwp9vtNv50gjkDaTD9Xd90hDpweygSRG0AA&s",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4po9hTYgrQs-VsGJT0g3fXH_Wr_STjvikZg&s",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrGPEifNenuWfkLgIGzetpJJaK_kLbK-VGKQ&s",
    rating: 3,
    comment: "nitokimasu!",
  },
  {
    id: 4,
    name: "Korijo",
    restaurant: "Ramen-ya",
    image:
      "https://dzglkev4c34xb.cloudfront.net/horego.com/kuta-selatan/japanese-restaurant/kojiro-ramen/food/af1qipnke65pq4tyeqnrsat07agrgstqdbv3j2oyll-q.jpg",
    rating: 4,
    comment: "konichiwaa!",
  },
  {
    id: 5,
    name: "Gyukotsu",
    restaurant: "Ramen-ya",
    image:
      "https://preview.redd.it/homemade-kitakata-ramen-v0-3fsw0et83zoe1.jpeg?width=1080&crop=smart&auto=webp&s=6b9d4b37dd0e6e60a60f8f4d42e64d30edfb6c67",
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
