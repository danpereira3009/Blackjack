function Blackjack() {

    if (confirm("Quer iniciar uma rodada?")) {
 
       alert("Boas vindas ao jogo de Blackjack")
 
       let jogador1 = []
       let pontosJogador1 = 0
 
       let jogador2 = []
       let pontosJogador2 = 0
 
       // >>>>>>>>>>>>>>>>>>> comprar as duas primeiras cartas <<<<<<<<<<<<<<<<<<<<<<<
 
       let cartaInicialOk = false
 
       while (!cartaInicialOk) {
          jogador1.push(comprarCarta())
          jogador1.push(comprarCarta())
          jogador2.push(comprarCarta())
          jogador2.push(comprarCarta())
 
          if ((jogador1[0] === 11 && jogador1[1] === 11) || (jogador2[0] === 11 && jogador2[1] === 11)) {
             jogador1 = []
             jogador2 = []
          } else {
             cartaInicialOk = true
          }
       }
 
       for (var i = 0; i < jogador1.length; i++) {
          pontosJogador1 += jogador1[i].valor;
       }
 
       for (var i = 0; i < jogador2.length; i++) {
          pontosJogador2 += jogador2[i].valor;
       }
 
       alert(`Jogador1 comprou as cartas ${jogador1[0].texto} e ${jogador1[1].texto} e está com ${pontosJogador1} pontos`)
       alert(`Jogador2 comprou as carta ${jogador2[0].texto} e  ${jogador2[1].texto} e está com ${pontosJogador2} pontos`)
 
 
       // >>>>>>>>>>>>>>>>>>> comprar a próxima carta <<<<<<<<<<<<<<<<<<<<<<<
 
 
       if (pontosJogador1 == 21 && pontosJogador2 == 21) {
          alert("Empatou")
       } else if (pontosJogador1 == 21) {
          alert("Jogador 1 fez Blackjack")
       } else if (pontosJogador2 == 21) {
          alert("Jogador 2 fez Blackjack")
       } else {
 
          // JOGADOR 1
 
          let compraJogador1 = true
          let y = 2
 
          while (compraJogador1 == true) {
 
             if (confirm("Jogador 1 / Comprar outra carta?")) {
 
                jogador1.push(comprarCarta())
 
                alert(`Jogador 1 comprou a carta ${jogador1[y].texto}`)
                pontosJogador1 += jogador1[y].valor
                alert(`O jogador 1 está com ${pontosJogador1}`)
                y++
 
                if (pontosJogador1 == 21) {
                   alert("Jogador 1 fez Blackjack")
                   compraJogador1 = false
 
                } else if (pontosJogador1 > 21) {
                   alert("Jogador 1 estourou e perdeu")
                   compraJogador1 = false
                }
 
             } else {
                compraJogador1 = false
             }
          }
 
          // JOGADOR 2
 
          if (pontosJogador1 < 21) {
 
             let compraJogador2 = true
             let z = 2
 
             while (compraJogador2 == true) {
 
                if (confirm("Jogador 2 / Comprar outra carta?")) {
                   jogador2.push(comprarCarta())
 
                   alert(`Jogador2 comprou a carta ${jogador2[z].texto}`)
                   pontosJogador2 += jogador2[z].valor
                   alert(`O jogador 2 está com ${pontosJogador2}`)
                   z++
 
                   if (pontosJogador2 == 21) {
                      alert("Jogador 2 fez Blackjack")
                      compraJogador2 = false
 
                   } else if (pontosJogador2 > 21) {
                      alert("Jogador 2 estourou e perdeu")
                      compraJogador2 = false
                   }
 
                } else {
                   compraJogador2 = false
                }
             }
 
             if ((pontosJogador1 < pontosJogador2) && (pontosJogador1 < 21 && pontosJogador2 < 21)) {
                alert("Jogador 2 fez mais pontos e ganhou")
             } else if ((pontosJogador2 < pontosJogador1) && (pontosJogador1 < 21 && pontosJogador2 < 21)) {
                alert("Jogador 1 fez mais pontos e ganhou")
             } else if ((pontosJogador1 == pontosJogador2) && (pontosJogador1 < 21 && pontosJogador2 < 21)) {
                alert("Terminou empatado")
             }
 
          }
       }
    }
 
    alert("Até a próxima!")
 
 }
 
 Blackjack()