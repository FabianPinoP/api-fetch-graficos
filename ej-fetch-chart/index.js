const fetchData = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/launches');
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

// Función para procesar los datos de lanzamientos y contar el número de lanzamientos por año
const processLaunchData = (data) => {
  // Creamos un objeto vacío para almacenar el conteo de lanzamientos por año
  const yearCounts = {};

  // Recorremos cada objeto en el array 'data' que contiene información de los lanzamientos
  data.forEach((launch) => {
    // Obtenemos el año de la fecha de lanzamiento utilizando el método 'getFullYear()' de la clase Date
    // La función getFullYear() es un método que se utiliza en objetos de tipo Date en JavaScript para obtener el año 
    // completo (a cuatro dígitos) de una fecha en formato UTC (tiempo universal coordinado). Esta función retorna un 
    // número de cuatro dígitos que representa el año de la fecha proporcionada.
    const year = new Date(launch.launch_date_utc).getFullYear();

    // Incrementamos el contador de lanzamientos para el año correspondiente
    // Si el año ya existe en 'yearCounts', se incrementa en 1; si no existe, se inicializa con 1
    yearCounts[year] = (yearCounts[year] || 0) + 1;
  });

  // Después de procesar todos los lanzamientos, 'yearCounts' contiene el conteo de lanzamientos por año
  // Por ejemplo, podría ser: { 2019: 10, 2020: 15, 2021: 20, ... }

  // Finalmente, convertimos 'yearCounts' en dos arreglos separados: uno para los años y otro para el conteo de lanzamientos
  // Utilizamos Object.keys() para obtener los años y Object.values() para obtener el conteo de lanzamientos
  return {
    years: Object.keys(yearCounts),
    counts: Object.values(yearCounts),
  };
};


const renderChart = (years, counts) => {
  const ctx = document.getElementById('launchesChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [{
        label: 'Number of Launches',
        data: counts,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

const init = async () => {
  try {
    const launchesData = await fetchData();
    const { years, counts } = processLaunchData(launchesData);
    renderChart(years, counts);
  } catch (error) {
    // Handle errors
  }
};

init();
