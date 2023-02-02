const transport = [
  {
    img: "https://t4.ftcdn.net/jpg/00/15/53/79/360_F_15537925_5qUqgBbDSQHCI5DeP7M0z88ouNIHdeKY.jpg",
    name: "Bus",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus tenetur iure, ratione, sit eveniet omnis cumque modi, assumenda doloribus nihil quae praesentium amet. Soluta iste quod veritatis enim, velit sint!",
    fare: 4,
    capacity: 32,
    id: 1,
  },
  {
    img: "https://www.topgear.com/sites/default/files/2022/07/9_1.jpg",
    name: "Car",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus tenetur iure, ratione, sit eveniet omnis cumque modi, assumenda doloribus nihil quae praesentium amet. Soluta iste quod veritatis enim, velit sint!",
    fare: 10,
    capacity: 3,
    id: 2,
  },
  {
    img: "https://www.steadcycles.com.au/wp-content/uploads/2017/04/bike-banner.jpg",
    name: "Bike",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus tenetur iure, ratione, sit eveniet omnis cumque modi, assumenda doloribus nihil quae praesentium amet. Soluta iste quod veritatis enim, velit sint!",
    fare: 5,
    capacity: 1,
    id: 3,
  },
];

const arrayMap = () => {
  for (const props of transport) {
    displayContent(props);
  }
};

const displayContent = (props) => {
  console.log("3");
  const { img, name, text, fare, capacity, id } = props;
  const stringProps = JSON.stringify(props);
  const containerDiv = document.getElementById("transport");
  const innerDiv = document.createElement("div");
  innerDiv.setAttribute(
    "class",
    "d-flex justify-content-around align-items-center card-style "
  );
  innerDiv.innerHTML = `
    <div class="img-div">
      <img src=${img} class="img-fluid h-100 rounded">
    </div>
    <div class="text-div">
      <h5>Transport Mood: ${name}</h5>
      <p class="text-sm">${text}</p>
      <div class="text-muted">
       <small>Fare per kilo: ${fare}tk</small> <small>Capacity: ${capacity}</small>
      </div>
      <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal"  id=${id} onclick='openModal(${stringProps})'>
       BOOK NOW
      </button>
    </div>
  `;

  containerDiv.appendChild(innerDiv);
};
arrayMap();
const openModal = (props) => {
  const { img, name, fare, capacity } = props;
  console.log(img);
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
      <div>
      <img src="${img}" class="img-fluid rounded">
      </div>
      <div class="pt-2">
        <h5>${name}</h5>
        <div>
          <small class="me-2">Fare per killo: ${fare} tk</small>
          <small>Capacity: ${capacity}</small>
        </div>
        <div class="m-2">
          <p>Fare:<span class="ms-2" id="Fare">0</span> tk</p>
          <p>Tax:<span class="ms-2" id="Tax">0</span> tk</p>
          <p>Total fare:<span class="ms-2" id="Total-fare">0</span> tk</p>
        </div>
        <div>
          <input type="number" class="form-control m-1" placeholder="Total distance" id="distance">
          <input type="number" class="form-control m-1" placeholder="Number of person" id="person">
          <button class="btn btn-outline-success m-1" type="button" id="button-addon2" onclick="calculateFare(${fare})">Submit</button>
        </div>
      </div>
  `;
};

const calculateFare = (fare) => {
  const inputDistance = document.getElementById("distance");
  const distanceValue = inputDistance.value;
  const farePerPerson = fare * distanceValue;

  const inputPerson = document.getElementById("person");
  const personValue = inputPerson.value;
  const totalFare = personValue * farePerPerson;

  const totalTax = (7.5 / 100) * totalFare;

  const taxAndFare = totalTax + totalFare;

  const showFare = document.getElementById("Fare");
  showFare.innerText = totalFare;

  const showTax = document.getElementById("Tax");
  showTax.innerText = totalTax;

  const showATotalFare = document.getElementById("Total-fare");
  showATotalFare.innerText = taxAndFare;

  inputDistance.value = 0;
  inputDistance.value = 0;
};

document.getElementById("search").addEventListener("click", (event) => {
  event.preventDefault();
  const searchValue = document.getElementById("search-value").value;
  console.log("1");
  for (const props of transport) {
    if (props.name.toLowerCase() === searchValue.toLowerCase()) {
      const containerDiv = document.getElementById("transport");
      containerDiv.innerHTML = "";
      console.log("2");
      displayContent(props);

      return;
    }
  }
  alert("No service found!");
});
