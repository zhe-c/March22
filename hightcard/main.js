(function(){
  (function drawCard()
  {
    var drawACard = new XMLHttpRequest();
    var url = `https://deckofcardsapi.com/api/deck/new/draw/?count=2`;
    var type = "GET";       
    drawACard.open(type,url +new Date().getTime(),true);   
    drawACard.send();   
    drawACard.onreadystatechange = function() 
    {
      if(drawACard.status === 200 && drawACard.readyState === 4)
      {
        var result = JSON.parse(drawACard.response);
        //console.log(result);        
        document.getElementById('card1').innerHTML = `<img src= ${result.cards[1].image} />`;
        document.getElementById('card2').innerHTML = `<img src= ${result.cards[2].image} />`;
        document.getElementById('card3').innerHTML = `<img src= ${result.cards[3].image} />`;
        document.getElementById('card4').innerHTML = `<img src= ${result.cards[4].image} />`;
        document.getElementById('card5').innerHTML = `<img src= ${result.cards[5].image} />`;

        var deal = result.cards;
        for (var i = 0; i < deal.length; i++) 
        { if(deal[i].value === "JACK" && deal[i].suit === "SPADES"){deal[i].value = 110 + 4;}
          else if(deal[i].value === "JACK" && deal[i].suit === "HEARTS"){deal[i].value = 110 + 3;}
          else if(deal[i].value === "JACK" && deal[i].suit === "CLUBS"){deal[i].value = 110 + 2;}
          else if(deal[i].value === "JACK" && deal[i].suit === "DIAMONDS"){deal[i].value = 110 + 1;}
          else if(deal[i].value === "QUEEN" && deal[i].suit === "SPADES"){deal[i].value = 120 + 4;}
          else if(deal[i].value === "QUEEN" && deal[i].suit === "HEARTS"){deal[i].value = 120 + 3;}
          else if(deal[i].value === "QUEEN" && deal[i].suit === "CLUBS"){deal[i].value = 120 + 2;}
          else if(deal[i].value === "QUEEN" && deal[i].suit === "DIAMONDS"){deal[i].value = 120 + 1;}
          else if(deal[i].value === "KING" && deal[i].suit === "SPADES"){deal[i].value = 130 + 4;}
          else if(deal[i].value === "KING" && deal[i].suit === "HEARTS"){deal[i].value = 130 + 3;}
          else if(deal[i].value === "KING" && deal[i].suit === "CLUBS"){deal[i].value = 130 + 2;}
          else if(deal[i].value === "KING" && deal[i].suit === "DIAMONDS"){deal[i].value = 130 + 1;}
          else if(deal[i].value === "ACE" && deal[i].suit === "SPADES"){deal[i].value = 140 + 4;}
          else if(deal[i].value === "ACE" && deal[i].suit === "HEARTS"){deal[i].value = 140 + 3;}
          else if(deal[i].value === "ACE" && deal[i].suit === "CLUBS"){deal[i].value = 140 + 2;}
          else if(deal[i].value === "ACE" && deal[i].suit === "DIAMONDS"){deal[i].value = 140 + 1;}
          else if(deal[i].value === "2" && deal[i].suit === "SPADES"){deal[i].value = 20 + 4;}
          else if(deal[i].value === "2" && deal[i].suit === "HEARTS"){deal[i].value = 20 + 3;}
          else if(deal[i].value === "2" && deal[i].suit === "CLUBS"){deal[i].value = 20 + 2;}
          else if(deal[i].value === "2" && deal[i].suit === "DIAMONDS"){deal[i].value = 20 + 1;}
          else if(deal[i].value === "3" && deal[i].suit === "SPADES"){deal[i].value = 30 + 4;}
          else if(deal[i].value === "3" && deal[i].suit === "HEARTS"){deal[i].value = 30 + 3;}
          else if(deal[i].value === "3" && deal[i].suit === "CLUBS"){deal[i].value = 30 + 2;}
          else if(deal[i].value === "3" && deal[i].suit === "DIAMONDS"){deal[i].value = 30 + 1;}
          else if(deal[i].value === "4" && deal[i].suit === "SPADES"){deal[i].value = 40 + 4;}
          else if(deal[i].value === "4" && deal[i].suit === "HEARTS"){deal[i].value = 40 + 3;}
          else if(deal[i].value === "4" && deal[i].suit === "CLUBS"){deal[i].value = 40 + 2;}
          else if(deal[i].value === "4" && deal[i].suit === "DIAMONDS"){deal[i].value = 40 + 1;}
          else if(deal[i].value === "5" && deal[i].suit === "SPADES"){deal[i].value = 50 + 4;}
          else if(deal[i].value === "5" && deal[i].suit === "HEARTS"){deal[i].value = 50 + 3;}
          else if(deal[i].value === "5" && deal[i].suit === "CLUBS"){deal[i].value = 50 + 2;}
          else if(deal[i].value === "5" && deal[i].suit === "DIAMONDS"){deal[i].value = 50 + 1;}
          else if(deal[i].value === "6" && deal[i].suit === "SPADES"){deal[i].value = 60 + 4;}
          else if(deal[i].value === "6" && deal[i].suit === "HEARTS"){deal[i].value = 60 + 3;}
          else if(deal[i].value === "6" && deal[i].suit === "CLUBS"){deal[i].value = 60 + 2;}
          else if(deal[i].value === "6" && deal[i].suit === "DIAMONDS"){deal[i].value = 60 + 1;}
          else if(deal[i].value === "7" && deal[i].suit === "SPADES"){deal[i].value = 70 + 4;}
          else if(deal[i].value === "7" && deal[i].suit === "HEARTS"){deal[i].value = 70 + 3;}
          else if(deal[i].value === "7" && deal[i].suit === "CLUBS"){deal[i].value = 70 + 2;}
          else if(deal[i].value === "7" && deal[i].suit === "DIAMONDS"){deal[i].value = 70 + 1;}
          else if(deal[i].value === "8" && deal[i].suit === "SPADES"){deal[i].value = 80 + 4;}
          else if(deal[i].value === "8" && deal[i].suit === "HEARTS"){deal[i].value = 80 + 3;}
          else if(deal[i].value === "8" && deal[i].suit === "CLUBS"){deal[i].value = 80 + 2;}
          else if(deal[i].value === "8" && deal[i].suit === "DIAMONDS"){deal[i].value = 80 + 1;}
          else if(deal[i].value === "9" && deal[i].suit === "SPADES"){deal[i].value = 90 + 4;}
          else if(deal[i].value === "9" && deal[i].suit === "HEARTS"){deal[i].value = 90 + 3;}
          else if(deal[i].value === "9" && deal[i].suit === "CLUBS"){deal[i].value = 90 + 2;}
          else if(deal[i].value === "9" && deal[i].suit === "DIAMONDS"){deal[i].value = 90 + 1;}
          else if(deal[i].value === "10" && deal[i].suit === "SPADES"){deal[i].value = 100 + 4;}
          else if(deal[i].value === "10" && deal[i].suit === "HEARTS"){deal[i].value = 100 + 3;}
          else if(deal[i].value === "10" && deal[i].suit === "CLUBS"){deal[i].value = 100 + 2;}
          else if(deal[i].value === "10" && deal[i].suit === "DIAMONDS"){deal[i].value = 100 + 1;}}

          var displayCardsArr =[deal[1].value, deal[2].value, deal[3].value, deal[4].value, deal[5].value]
          function sortNumber(a,b){return a - b};
          var caio = displayCardsArr.sort(sortNumber);  //low---high  caio== cardsArrInOrder
          if(caio ===[101,111,121,131,141] || caio ===[102,112,122,132,142] || caio ===[103,113,123,133,143] || caio ===[104,114,124,134,144])
          {document.getElementById('result').innerHTML = `<h1 style="color:white">Royal flush</h1>`;}
            
          else if(caio[4]-caio[3]===10 && caio[3]-caio[2]===10 && caio[2]-caio[1]===10 && caio[1]-caio[0]===10)
          {document.getElementById('result').innerHTML = `<h1 style="color:white">Straight flush</h1>`;}
          
          else if((caio[4]-caio[3]===1 && caio[3]-caio[2]===1 && caio[2]-caio[1]===1)||
                  (caio[4]-caio[3]===1 && caio[3]-caio[2]===1 && caio[2]-caio[0]===1)||
                  (caio[4]-caio[3]===1 && caio[3]-caio[1]===1 && caio[1]-caio[0]===1)||
                  (caio[4]-caio[2]===1 && caio[2]-caio[1]===1 && caio[1]-caio[0]===1)||
                  (caio[3]-caio[2]===1 && caio[2]-caio[1]===1 && caio[1]-caio[0]===1))
          { document.getElementById('result').innerHTML = `<h1 style="color:white">Four of a kind</h1>`;}
          
          else if((caio[1]-caio[0]===1 || caio[1]-caio[0]===2||caio[1]-caio[0]===3) && 
                  ((caio[4]-caio[3]===1||caio[4]-caio[3]===2) && (caio[3]-caio[2]===1||caio[3]-caio[2]===2)))
          { document.getElementById('result').innerHTML = `<h1 style="color:white">Full house</h1>`;}

          else if((caio[4]-caio[3]===1||caio[4]-caio[3]===2||caio[4]-caio[3]===3) && 
                  ((caio[2]-caio[1]===1||caio[2]-caio[1]===2) && (caio[1]-caio[0]===1||caio[1]-caio[0]===2)))
          { document.getElementById('result').innerHTML = `<h1 style="color:white">Full house</h1>`;}
          
          else if(deal[0].suit === deal[1].suit ===deal[2].suit===deal[3].suit===deal[4].suit===deal[5].suit)
          {  document.getElementById('result').innerHTML = `<h1 style="color:white">Flush</h1>`;}
          
          else if((caio[1]-caio[0] >=7 && caio[1]-caio[0] <=13)&&
                  (caio[2]-caio[1] >=7 && caio[2]-caio[1] <=13)&&
                  (caio[3]-caio[2] >=7 && caio[3]-caio[2] <=13)&&
                  (caio[4]-caio[3] >=7 && caio[4]-caio[3] <=13))
          { document.getElementById('result').innerHTML = `<h1 style="color:white">Straight</h1>`;}
          
          else if(((caio[2]-caio[1]===1 || caio[2]-caio[1]===2) && (caio[1]-caio[0]===1||caio[1]-caio[0]===2)) ||
                  ((caio[3]-caio[2]===1|| caio[3]-caio[2]===2) && (caio[2]-caio[1]===1||caio[2]-caio[1]===2)) ||
                  ((caio[4]-caio[3]===1||caio[4]-caio[3]===2) && (caio[3]-caio[2]===1||caio[3]-caio[2]===2)))
          { document.getElementById('result').innerHTML = `<h1 style="color:white">Three of a kind</h1>`;}
          
          else if(((caio[1]-caio[0]===1||caio[1]-caio[0]===2||caio[1]-caio[0]===3) && (caio[3]-caio[2]===1||caio[3]-caio[2]===2||caio[3]-caio[2]===3))||
                  ((caio[2]-caio[1]===1||caio[2]-caio[1]===2||caio[2]-caio[1]===3) && (caio[4]-caio[3]===1||caio[4]-caio[3]===2||caio[4]-caio[3]===3))||
                  ((caio[1]-caio[0]===1||caio[1]-caio[0]===2||caio[1]-caio[0]===3) && (caio[4]-caio[3]===1||caio[4]-caio[3]===2||caio[4]-caio[3]===3)))
          { document.getElementById('result').innerHTML = `<h1 style="color:white">Two pair</h1>`;}
          
          else if((caio[1]-caio[0]===1||caio[1]-caio[0]===2||caio[1]-caio[0]===3) ||
                  (caio[2]-caio[1]===1||caio[2]-caio[1]===2||caio[2]-caio[1]===3) ||
                  (caio[3]-caio[2]===1||caio[3]-caio[2]===2||caio[3]-caio[2]===3) ||
                  (caio[4]-caio[3]===1||caio[4]-caio[3]===2||caio[4]-caio[3]===3))
          { document.getElementById('result').innerHTML = `<h1 style="color:white">Pair</h1>`;}
          
          else { 
            console.log(caio[4]);
            var highCardNum = parseInt(caio[4] / 10);
            if(highCardNum ===11){highCardNum = "J"}
            else if(highCardNum ===12){highCardNum = "Q"}
            else if(highCardNum ===13){highCardNum = "K"}
            else if(highCardNum ===14){highCardNum = "A"}
            var highCardSuit = "";
            if(caio[4] % 10 ===1){highCardSuit = "DIAMONDS"}
            else if(caio[4] % 10 ===2){highCardSuit = "CLUBS"}
            else if(caio[4] % 10 ===3){highCardSuit = "HEARTS"}
            else if(caio[4] % 10 ===4){highCardSuit = "SPADES"}
            document.getElementById('result').innerHTML = `<h1 style="color:white">The High Card is ${highCardNum +"-"+ highCardSuit}</h1>`;}
      }
    }
  })();


  function shuffle() {
    fetch('https://deckofcardsapi.com/api/deck/bbz3hqp3kgoo/shuffle/').then(function(response) {
      response.json().then(function(data) {
        var api = data;
        var deckID = api.deck_id;
        fetch('https://deckofcardsapi.com/api/deck/'+deckID+'/draw/?count=52').then(function(response) {
          response.json().then(function(data) {
            document.getElementById('card1').innerHTML = `<img src= ${data.cards[6].image} />`;
            document.getElementById('card2').innerHTML = `<img src= ${data.cards[7].image} />`;
            document.getElementById('card3').innerHTML = `<img src= ${data.cards[8].image} />`;
            document.getElementById('card4').innerHTML = `<img src= ${data.cards[9].image} />`;
            document.getElementById('card5').innerHTML = `<img src= ${data.cards[10].image} />`;
            console.log(data);
            var deal = data.cards;
            for (var i = 0; i < deal.length; i++) 
            { if(deal[i].value === "JACK" && deal[i].suit === "SPADES"){deal[i].value = 110 + 4;}
              else if(deal[i].value === "JACK" && deal[i].suit === "HEARTS"){deal[i].value = 110 + 3;}
              else if(deal[i].value === "JACK" && deal[i].suit === "CLUBS"){deal[i].value = 110 + 2;}
              else if(deal[i].value === "JACK" && deal[i].suit === "DIAMONDS"){deal[i].value = 110 + 1;}
              else if(deal[i].value === "QUEEN" && deal[i].suit === "SPADES"){deal[i].value = 120 + 4;}
              else if(deal[i].value === "QUEEN" && deal[i].suit === "HEARTS"){deal[i].value = 120 + 3;}
              else if(deal[i].value === "QUEEN" && deal[i].suit === "CLUBS"){deal[i].value = 120 + 2;}
              else if(deal[i].value === "QUEEN" && deal[i].suit === "DIAMONDS"){deal[i].value = 120 + 1;}
              else if(deal[i].value === "KING" && deal[i].suit === "SPADES"){deal[i].value = 130 + 4;}
              else if(deal[i].value === "KING" && deal[i].suit === "HEARTS"){deal[i].value = 130 + 3;}
              else if(deal[i].value === "KING" && deal[i].suit === "CLUBS"){deal[i].value = 130 + 2;}
              else if(deal[i].value === "KING" && deal[i].suit === "DIAMONDS"){deal[i].value = 130 + 1;}
              else if(deal[i].value === "ACE" && deal[i].suit === "SPADES"){deal[i].value = 140 + 4;}
              else if(deal[i].value === "ACE" && deal[i].suit === "HEARTS"){deal[i].value = 140 + 3;}
              else if(deal[i].value === "ACE" && deal[i].suit === "CLUBS"){deal[i].value = 140 + 2;}
              else if(deal[i].value === "ACE" && deal[i].suit === "DIAMONDS"){deal[i].value = 140 + 1;}
              else if(deal[i].value === "2" && deal[i].suit === "SPADES"){deal[i].value = 20 + 4;}
              else if(deal[i].value === "2" && deal[i].suit === "HEARTS"){deal[i].value = 20 + 3;}
              else if(deal[i].value === "2" && deal[i].suit === "CLUBS"){deal[i].value = 20 + 2;}
              else if(deal[i].value === "2" && deal[i].suit === "DIAMONDS"){deal[i].value = 20 + 1;}
              else if(deal[i].value === "3" && deal[i].suit === "SPADES"){deal[i].value = 30 + 4;}
              else if(deal[i].value === "3" && deal[i].suit === "HEARTS"){deal[i].value = 30 + 3;}
              else if(deal[i].value === "3" && deal[i].suit === "CLUBS"){deal[i].value = 30 + 2;}
              else if(deal[i].value === "3" && deal[i].suit === "DIAMONDS"){deal[i].value = 30 + 1;}
              else if(deal[i].value === "4" && deal[i].suit === "SPADES"){deal[i].value = 40 + 4;}
              else if(deal[i].value === "4" && deal[i].suit === "HEARTS"){deal[i].value = 40 + 3;}
              else if(deal[i].value === "4" && deal[i].suit === "CLUBS"){deal[i].value = 40 + 2;}
              else if(deal[i].value === "4" && deal[i].suit === "DIAMONDS"){deal[i].value = 40 + 1;}
              else if(deal[i].value === "5" && deal[i].suit === "SPADES"){deal[i].value = 50 + 4;}
              else if(deal[i].value === "5" && deal[i].suit === "HEARTS"){deal[i].value = 50 + 3;}
              else if(deal[i].value === "5" && deal[i].suit === "CLUBS"){deal[i].value = 50 + 2;}
              else if(deal[i].value === "5" && deal[i].suit === "DIAMONDS"){deal[i].value = 50 + 1;}
              else if(deal[i].value === "6" && deal[i].suit === "SPADES"){deal[i].value = 60 + 4;}
              else if(deal[i].value === "6" && deal[i].suit === "HEARTS"){deal[i].value = 60 + 3;}
              else if(deal[i].value === "6" && deal[i].suit === "CLUBS"){deal[i].value = 60 + 2;}
              else if(deal[i].value === "6" && deal[i].suit === "DIAMONDS"){deal[i].value = 60 + 1;}
              else if(deal[i].value === "7" && deal[i].suit === "SPADES"){deal[i].value = 70 + 4;}
              else if(deal[i].value === "7" && deal[i].suit === "HEARTS"){deal[i].value = 70 + 3;}
              else if(deal[i].value === "7" && deal[i].suit === "CLUBS"){deal[i].value = 70 + 2;}
              else if(deal[i].value === "7" && deal[i].suit === "DIAMONDS"){deal[i].value = 70 + 1;}
              else if(deal[i].value === "8" && deal[i].suit === "SPADES"){deal[i].value = 80 + 4;}
              else if(deal[i].value === "8" && deal[i].suit === "HEARTS"){deal[i].value = 80 + 3;}
              else if(deal[i].value === "8" && deal[i].suit === "CLUBS"){deal[i].value = 80 + 2;}
              else if(deal[i].value === "8" && deal[i].suit === "DIAMONDS"){deal[i].value = 80 + 1;}
              else if(deal[i].value === "9" && deal[i].suit === "SPADES"){deal[i].value = 90 + 4;}
              else if(deal[i].value === "9" && deal[i].suit === "HEARTS"){deal[i].value = 90 + 3;}
              else if(deal[i].value === "9" && deal[i].suit === "CLUBS"){deal[i].value = 90 + 2;}
              else if(deal[i].value === "9" && deal[i].suit === "DIAMONDS"){deal[i].value = 90 + 1;}
              else if(deal[i].value === "10" && deal[i].suit === "SPADES"){deal[i].value = 100 + 4;}
              else if(deal[i].value === "10" && deal[i].suit === "HEARTS"){deal[i].value = 100 + 3;}
              else if(deal[i].value === "10" && deal[i].suit === "CLUBS"){deal[i].value = 100 + 2;}
              else if(deal[i].value === "10" && deal[i].suit === "DIAMONDS"){deal[i].value = 100 + 1;}}

              var displayCardsArr =[deal[6].value, deal[7].value, deal[8].value, deal[9].value, deal[10].value]
              function sortNumber(a,b){return a - b};
              var caio = displayCardsArr.sort(sortNumber);  //low---high  caio== cardsArrInOrder

              if(caio ===[101,111,121,131,141] || caio ===[102,112,122,132,142] || caio ===[103,113,123,133,143] || caio ===[104,114,124,134,144])
              {document.getElementById('result').innerHTML = `<h1 style="color:white">Royal flush</h1>`;} 

              else if(caio[4]-caio[3]===10 && caio[3]-caio[2]===10 && caio[2]-caio[1]===10 && caio[1]-caio[0]===10)
              {document.getElementById('result').innerHTML = `<h1 style="color:white">Straight flush</h1>`;}

              else if((caio[4]-caio[3]===1 && caio[3]-caio[2]===1 && caio[2]-caio[1]===1)||
                      (caio[4]-caio[3]===1 && caio[3]-caio[2]===1 && caio[2]-caio[0]===1)||
                      (caio[4]-caio[3]===1 && caio[3]-caio[1]===1 && caio[1]-caio[0]===1)||
                      (caio[4]-caio[2]===1 && caio[2]-caio[1]===1 && caio[1]-caio[0]===1)||
                      (caio[3]-caio[2]===1 && caio[2]-caio[1]===1 && caio[1]-caio[0]===1))
              { document.getElementById('result').innerHTML = `<h1 style="color:white">Four of a kind</h1>`;}
              else if((caio[1]-caio[0]===1 || caio[1]-caio[0]===2||caio[1]-caio[0]===3) && 
                      ((caio[4]-caio[3]===1||caio[4]-caio[3]===2) && (caio[3]-caio[2]===1||caio[3]-caio[2]===2)))
              { document.getElementById('result').innerHTML = `<h1 style="color:white">Full house</h1>`;}
              else if((caio[4]-caio[3]===1||caio[4]-caio[3]===2||caio[4]-caio[3]===3) && 
                      ((caio[2]-caio[1]===1||caio[2]-caio[1]===2) && (caio[1]-caio[0]===1||caio[1]-caio[0]===2)))
              { document.getElementById('result').innerHTML = `<h1 style="color:white">Full house</h1>`;}
              else if(deal[0].suit === deal[1].suit ===deal[2].suit===deal[3].suit===deal[4].suit===deal[5].suit)
              {  document.getElementById('result').innerHTML = `<h1 style="color:white">Flush</h1>`;}
              else if((caio[1]-caio[0] >=7 && caio[1]-caio[0] <=13)&&
                      (caio[2]-caio[1] >=7 && caio[2]-caio[1] <=13)&&
                      (caio[3]-caio[2] >=7 && caio[3]-caio[2] <=13)&&
                      (caio[4]-caio[3] >=7 && caio[4]-caio[3] <=13))
              { document.getElementById('result').innerHTML = `<h1 style="color:white">Straight</h1>`;}             
              else if(((caio[2]-caio[1]===1 || caio[2]-caio[1]===2) && (caio[1]-caio[0]===1||caio[1]-caio[0]===2)) ||
                      ((caio[3]-caio[2]===1|| caio[3]-caio[2]===2) && (caio[2]-caio[1]===1||caio[2]-caio[1]===2)) ||
                      ((caio[4]-caio[3]===1||caio[4]-caio[3]===2) && (caio[3]-caio[2]===1||caio[3]-caio[2]===2)))
              { document.getElementById('result').innerHTML = `<h1 style="color:white">Three of a kind</h1>`;}
              else if(((caio[1]-caio[0]===1||caio[1]-caio[0]===2||caio[1]-caio[0]===3) && (caio[3]-caio[2]===1||caio[3]-caio[2]===2||caio[3]-caio[2]===3))||
                      ((caio[2]-caio[1]===1||caio[2]-caio[1]===2||caio[2]-caio[1]===3) && (caio[4]-caio[3]===1||caio[4]-caio[3]===2||caio[4]-caio[3]===3))||
                      ((caio[1]-caio[0]===1||caio[1]-caio[0]===2||caio[1]-caio[0]===3) && (caio[4]-caio[3]===1||caio[4]-caio[3]===2||caio[4]-caio[3]===3)))
              { document.getElementById('result').innerHTML = `<h1 style="color:white">Two pair</h1>`;}
              else if((caio[1]-caio[0]===1||caio[1]-caio[0]===2||caio[1]-caio[0]===3) ||
                      (caio[2]-caio[1]===1||caio[2]-caio[1]===2||caio[2]-caio[1]===3) ||
                      (caio[3]-caio[2]===1||caio[3]-caio[2]===2||caio[3]-caio[2]===3) ||
                      (caio[4]-caio[3]===1||caio[4]-caio[3]===2||caio[4]-caio[3]===3))
              { document.getElementById('result').innerHTML = `<h1 style="color:white">Pair</h1>`;}              
              else { 
                console.log(caio[4]);
                var highCardNum = parseInt(caio[4] / 10);
                if(highCardNum ===11){highCardNum = "J"}
                else if(highCardNum ===12){highCardNum = "Q"}
                else if(highCardNum ===13){highCardNum = "K"}
                else if(highCardNum ===14){highCardNum = "A"}
                var highCardSuit = "";
                if(caio[4] % 10 ===1){highCardSuit = "DIAMONDS"}
                else if(caio[4] % 10 ===2){highCardSuit = "CLUBS"}
                else if(caio[4] % 10 ===3){highCardSuit = "HEARTS"}
                else if(caio[4] % 10 ===4){highCardSuit = "SPADES"}
                document.getElementById('result').innerHTML = `<h1 style="color:white">The High Card is ${highCardNum +"-"+ highCardSuit}</h1>`;}
          });
        });
      });
    });
  };
  var myButton = document.getElementById("myButton");
  myButton.addEventListener("click", function (){shuffle();});


})();
