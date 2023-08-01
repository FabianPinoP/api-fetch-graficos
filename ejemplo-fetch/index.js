// ver documentacion https://docs.magicthegathering.io/#api_v1cards_list

//seleccionamos el boton que tiene la clase load-cards para manejar el evento click
const element = document.querySelector(".load-cards");

//agregamos el evento click al boton
element.addEventListener("click", async () => {
  //llamamos a la funcion apiData
  const infoCards = await apiData();
  //llamamos a la funcion createCard y le pasamos como parametro la informacion de las cartas
  await createCard(infoCards);
});

const apiData = async () => {
  try {
    //hacemos la peticion a la api
    const response = await fetch("https://api.magicthegathering.io/v1/cards");
    //si la peticion no es exitosa lanzamos un error
    if (!response.ok) {
      throw new Error("Error en la peticion");
    }
    //si la peticion es exitosa convertimos la respuesta a json
    const data = await response.json();
    //obtenemos los valores del objeto cards y los guardamos en un array
    const dataArray = Object.values(data.cards);
    //filtramos el array para que solo nos muestre las cartas que tienen imagen
    const filterData = dataArray.filter((card) => card.imageUrl !== undefined);
    console.log(filterData);
    //retornamos el array con las cartas que tienen imagen
    return filterData;
  } catch (error) {
    //si hay un error lo mostramos en consola
    console.log(error);
  }
};

const createCard = async (cards) => {
  //recorremos el array de cartas y por cada carta creamos un elemento html
  cards.forEach((card) => {
    //seleccionamos el elemento con la clase cards
    const cardElement = document.querySelector(".cards");
    //agregamos el elemento html al elemento con la clase cards
    cardElement.innerHTML += `
                  <div class="card mt-3 border border border-dark" style="width: 18rem;">
                      <img class="card-img-top" src="${card.imageUrl}" alt="${card.name}">
                      <h3 class="card-title">${card.name}</h3>
                      <p class="card-text">${card.text}</p>
                      </div>
                  `;
  });
};
