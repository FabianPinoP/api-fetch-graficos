const ventasMensuales = [
  { mes: 'Enero', ventas: 120 },
  { mes: 'Febrero', ventas: 80 },
  { mes: 'Marzo', ventas: 150 },
  { mes: 'Abril', ventas: 100 },
  { mes: 'Mayo', ventas: 200 },
  { mes: 'Junio', ventas: 180 },
  { mes: 'Julio', ventas: 140 },
  { mes: 'Agosto', ventas: 170 },
  { mes: 'Septiembre', ventas: 90 },
  { mes: 'Octubre', ventas: 120 },
  { mes: 'Noviembre', ventas: 160 },
  { mes: 'Diciembre', ventas: 190 }
];

// Obtener los datos necesarios para el gráfico
const months = ventasMensuales.map(venta => venta.mes);
const sales = ventasMensuales.map(venta => venta.ventas);
console.log("meses-->>", months);
console.log("ventas-->>>", sales);
// Configuración del gráfico
const data = {
  labels: months,
  datasets: [{
      label: 'Ventas Mensuales',
      data: sales,
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
  }]
};

// Configuración de opciones (puedes personalizar el gráfico según tus necesidades)
const options = {
  scales: {
      y: {
          beginAtZero: true
      }
  }
};

// Crear el gráfico de barras
const ctx = document.getElementById('chart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});