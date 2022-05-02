window.onload = main;

function main() {
    cargarTabla();
}

function cargarTabla() {
    var spinner = document.getElementById("spinner");


    fetch("https://api.covid19tracking.narrativa.com/api/country/spain/region/c_valenciana?date_from=2022-03-02&date_to=2022-05-02", {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            spinner.style.display = "none";
            console.log(data);

            const fecha = [];
            const totalInf = [];
            const totalDef = [];

            for (let i in data.dates) {
                fecha.push(i);
                totalInf.push(data.dates[i].countries.Spain.regions[0].today_new_confirmed);
                totalDef.push(data.dates[i].countries.Spain.regions[0].today_new_deaths)
            }

            const ctx = document.getElementById('myChart').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: fecha,
                    datasets: [{
                        label: ["Defuncions"],
                        data: totalDef,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)'
                        ],
                        borderWidth: 1 
                    },{
                        label: ["Infectats"],
                        data: totalInf,
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });


        })
}