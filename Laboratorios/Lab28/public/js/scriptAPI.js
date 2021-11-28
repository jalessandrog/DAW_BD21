const form = document.querySelector(".container-fluid form");
const input = document.querySelector(".container-fluid input");
const msg = document.querySelector(".container-fluid .msg");
const list = document.querySelector(".ajax-section .lugares");


form.addEventListener("submit", e => {
    e.preventDefault();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=619b3e129c11a1df7eb66eba60d046e2&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const { main, name, sys, weather } = data;
            const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;

            const div = document.createElement("div");
            div.classList.add("card-body");
            div.classList.add("lugar");
            const datosClima = `
                <h2 class="lugar-name text-center" data-name="${name},${sys.country}">
                    <span>${name}</span>
                    <sup>${sys.country}</sup>
                </h2>
                <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
                <figure>
                    <img class="city-icon" src="${icon}" alt="${weather[0]["description"]}">
                    <figcaption>${weather[0]["description"]}</figcaption>
                </figure>
                <br>
                <hr>`;
                
            div.innerHTML = datosClima;
            list.appendChild(div);
        })
        .catch(() => {
            msg.textContent = "Opss ha ocurrido un errorm, por favor busca nuevamente el lugar";
        });

        msg.textContent = "";
        input.focus();
});