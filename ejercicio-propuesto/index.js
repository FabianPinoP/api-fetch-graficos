const url = 'https://api.gael.cloud/general/public/monedas'
const info = document.querySelector('.info')

const getData = async () => {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Ocurrio un error')
    
    const data = await response.json()
    console.log(data);
    writeData(data)
  } catch (error) {
    console.log(error);
  }
}

const writeData = (data) => {
  data.forEach((item) => {
    info.innerHTML += `codigo: ${item.Codigo} <br> nombre: ${item.Nombre} <br> valor: ${item.Valor} <br> <br>`
  })
}
getData()
