window.onload = main;

function main() {
    cargarTabla();
}

function cargarTabla() {
    fetch("https://api.covid19tracking.narrativa.com/api/country/spain/region/c_valenciana?date_from=2020-03-20&date_to=2020-03-22", {
            method: "GET"            
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}