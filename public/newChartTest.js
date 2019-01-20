var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',
  // The data for our dataset
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [{
      label: "My First dataset",
      backgroundColor: 'rgb(1, 255, 1, 0)',
      borderColor: 'rgb(1, 255, 1)',
      data: [0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20],
    },{
      label: "My Second dataset",
      backgroundColor: 'rgb(255, 1, 1, 0)',
      borderColor: 'rgb(255, 1, 1)',
      data: [15, 47, 2, 7, 11, 44, 22, 15, 47, 2, 7, 11, 15, 47, 2, 7, 11, 44, 22, 15, 47, 2, 7, 11, 15, 47, 2, 7, 11, 44, 22, 15, 47, 2, 7, 11, 15, 47, 2, 7, 11, 44, 22, 15, 47, 2, 7, 11],
    }]
  },

  // Configuration options go here
  options: {}
});
