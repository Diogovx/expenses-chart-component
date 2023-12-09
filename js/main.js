const ctx = document.getElementById('chart');
fetch('../data.json').then((response) =>{
  response.json().then((dados) =>{
    function createChart(){
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: dados.map(row => row.day),
          datasets: [{
            data: dados.map(row => row.amount),
            backgroundColor: 'hsl(10, 79%, 65%)'

          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins:{
            legend: {
              display: false
            },
            tooltip: {
              enabled: true
            }
          }
        }
      });
    }
    createChart()
  })
})
