function createGame(player1, hour, player2) {
  return `
            <li>
              <img src="./assets/icon-${player1}.svg" alt="bandeira do ${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg" alt="bandeira da ${player2}" />
            </li>
            `
}

let delay = -0.3;
function creeateCard(date, day, games) {
  delay += 0.4
  return `
        <div class="card" style='animation-delay: ${delay}s'>
          <h2>${date} <span>${day}</span></h2>

          <ul>
          ${games}  
          </ul>
        </div>`
}

document.querySelector("#cards").innerHTML = 
        creeateCard(
          "24/11",
          "quinta",
          createGame("portugal", "13:00", "ghana") +
            createGame("brazil", "16:00", "serbia")
        ) +
        creeateCard(
          "28/11",
          "segunda",
          createGame("south korea", "10:00", "ghana") +
            createGame("brazil", "13:00", "switzerland")
        ) +
        creeateCard(
          "02/12",
          "sexta",
          createGame("south korea", "12:00", "portugal") +
            createGame("brazil", "16:00", "cameroon")
        )
        

