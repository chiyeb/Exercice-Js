document.getElementById('btnJouer').addEventListener('click', function() {
    document.getElementById('menuPrincipal').style.display = 'none';
    document.getElementById('conteneurJeu').style.display = 'block';
    document.getElementById('jeuCanvas').style.display = 'block';
    document.getElementById('score').style.display = 'block';
    initialiserJeu();
});

document.getElementById('btnInstructions').addEventListener('click', function() {
    alert("Instructions du jeu: \n - Utilisez les flèches du clavier pour diriger le serpent.\n - Mangez de la nourriture pour grandir.\n - Évitez de vous heurter aux murs ou à votre propre queue.");
});

document.getElementById('btnAbout').addEventListener('click', function() {
    alert("Développé par Chiheb Bradai, étudiant en 2ème année de BUT Informatique à l'IUT de Aix. \nCe jeu a été développé dans le cadre d'un exercice de JS.");
});
function initialiserJeu() {


    let snakeCanva = document.getElementById('snake');
    let snakeCtx = snakeCanva.getContext('2d');


    let terrainCanva = document.getElementById('terrain');
    let terrainCtx = snakeCanva.getContext('2d');
    terrainCtx.fillStyle = 'black';
    terrainCtx.fillRect(0, 0, terrainCanva.width, terrainCanva.height);

    let foodCanva = document.getElementById('food');
    let foodCtx = foodCanva.getContext('2d');
    foodCtx.fillStyle = 'red';
    var score = 0;
    let serpent = [{x: 10, y: 10}];
    let w = 20;
    let h = 20;
    let directionActuelle = null;
    let futurDirection = null;
    const speed = 10;
    const temps = 100;
    snakeCtx.fillStyle = 'green';

    let xFood = Math.floor(Math.random() * (foodCanva.width - w));
    let yFood = Math.floor(Math.random() * (foodCanva.height - w))


    function gagner() {
        let totalSegments = (terrainCanva.width / w) * (terrainCanva.height / h);
        if (serpent.length === totalSegments) {
            alert("Vous avez gagné, vous avez fait un score de " + score + " points");
            location.reload();
        }
    }

    function keyPressHandler(event) {
        if (event.key.startsWith("Arrow")) {
            futurDirection = event.key;
        }
    }
    function foodSpawn() {
        let positionsPossibles = [];
        for (let x = 0; x < foodCanva.width; x += w) {
            for (let y = 0; y < foodCanva.height; y += h) {
                if (!serpent.some(segment => segment.x === x && segment.y === y)) {
                    positionsPossibles.push({x, y});
                }
            }
        }
        if (positionsPossibles.length > 0) {
            let positionAleatoire = positionsPossibles[Math.floor(Math.random() * positionsPossibles.length)];
            xFood = positionAleatoire.x;
            yFood = positionAleatoire.y;

            foodCtx.clearRect(0, 0, foodCanva.width, foodCanva.height);
            foodCtx.fillStyle = 'red';
            foodCtx.fillRect(xFood, yFood, w, h);
        } else {
            gagner();
        }
    }

    foodSpawn();
    function sortirDuTerrain() {
        let tete = serpent[0];
        if (tete.x < 0 || tete.x > terrainCanva.width - h || tete.y < 0 || tete.y > terrainCanva.height) {
            lose();
        }
    }
    function seToucheLuiMeme() {
        var tete = serpent[0];
        serpent.forEach(segment => {
            if (!(tete === segment) && segment.x === tete.x && segment.y === tete.y) {
                lose();
            }
        });
    }
    function lose(){
        alert("Vous avez perdu, vous avez fait un score de "+score+" points");
        location.reload();
    }

    function eat() {
        console.log(serpent[0].x, xFood, serpent[0].y, yFood);
        let tete = serpent[0];
        if (tete.x < xFood + 10 && tete.x + w > xFood && tete.y < yFood + 10 && tete.y + h > yFood) {
            score+=1;
            document.getElementById("score").innerHTML = "Score : "+score;
            foodSpawn();
            return true;
        }
        else {
            return false;
        }
    }
    function move() {
        sortirDuTerrain();
        seToucheLuiMeme();
        gagner();
        let nouvelleTete = { x: serpent[0].x, y: serpent[0].y };
        if(futurDirection === "ArrowUp" && directionActuelle !== "ArrowDown") {
            directionActuelle = futurDirection;
            nouvelleTete.y -= speed;
        } else if(futurDirection === "ArrowDown" && directionActuelle !== "ArrowUp") {
            directionActuelle = futurDirection;
            nouvelleTete.y += speed;
        }
        else if(futurDirection === "ArrowLeft" && directionActuelle !== "ArrowRight") {
            directionActuelle = futurDirection;
            nouvelleTete.x -= speed;
        }
        else if(futurDirection === "ArrowRight" && directionActuelle !== "ArrowLeft") {
            directionActuelle = futurDirection;
            nouvelleTete.x += speed;
        }
        else {
            if (directionActuelle === "ArrowUp") {
                nouvelleTete.y -= speed;
            } else if (directionActuelle === "ArrowDown") {
                nouvelleTete.y += speed;
            } else if (directionActuelle === "ArrowLeft") {
                nouvelleTete.x -= speed;
            } else if (directionActuelle === "ArrowRight") {
                nouvelleTete.x += speed;
            }
        }
        serpent.unshift(nouvelleTete);

        if (!eat()) {
            serpent.pop();
        }

        snakeCtx.clearRect(0, 0, snakeCanva.width, snakeCanva.height);

        serpent.forEach(segment => {
            snakeCtx.fillRect(segment.x, segment.y, w, h);
        });
    }

    document.addEventListener("keydown", keyPressHandler);

    setInterval(move, temps);

}



