
const cars = [
  {
    modelo: "Toyota Corolla",
    preco: "10.000.000 KZ",
    imagem: "img/corolla.jpg"
  },
  {
    modelo: "Hyundai Tucson",
    preco: "15.000.000 KZ",
    imagem: "img/tucson.jpg"
  },
  {
    modelo: "Kia Picanto",
    preco: "6.000.000 KZ",
    imagem: "img/picanto.jpg"
  }
];

const carList = document.getElementById("car-list");

cars.forEach(carro => {
  carList.innerHTML += `
    <div class="col-md-4">
      <div class="card">
        <img src="${carro.imagem}" class="card-img-top" alt="${carro.modelo}">
        <div class="card-body">
          <h5 class="card-title">${carro.modelo}</h5>
          <p class="card-text">Preço: ${carro.preco}</p>
        </div>
      </div>
    </div>
  `;
});
