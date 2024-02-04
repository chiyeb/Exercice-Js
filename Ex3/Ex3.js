//gérer le changement entre 2 éléments (quand on clique sur un élément)
function move(number, blanc) {
    const x = parseInt(document.getElementById(`button-${number}`).getAttribute('data-x'));
    const y = parseInt(document.getElementById(`button-${number}`).getAttribute('data-y'));
    const bx = parseInt(document.getElementById('blanc').getAttribute('data-x'));
    const by = parseInt(document.getElementById('blanc').getAttribute('data-y'));
    if ((Math.abs(x - bx) === 1 && Math.abs(y - by) === 0) || (Math.abs(y - by) === 1 && Math.abs(x - bx) === 0)) {
        document.getElementById(`button-${number}`).setAttribute('data-x', bx);
        document.getElementById(`button-${number}`).setAttribute('data-y', by);
        document.getElementById(`blanc`).setAttribute('data-x', x);
        document.getElementById(`blanc`).setAttribute('data-y', y);
        swap(document.getElementById(`button-${number}`), blanc)
    }
    if (verifierGagne()) {
        alert("Félicitations ! Vous avez gagné !");
    }
}
//vérifier si le joueur a gagné
function verifierGagne() {
    for (let y = 1; y <= 4; y++) {
        for (let x = 1; x <= 4; x++) {
            if (x === 4 && y === 4) {
                break;
            }
            const numAttendu = (y - 1) * 4 + x;
            const bouton = document.querySelector(`button[data-x="${x}"][data-y="${y}"]`);
            if (!bouton || parseInt(bouton.innerText) !== numAttendu) {
                return false;
            }
        }
    }
    return true;
}
//échanger la place de 2 éléments
function swap(elm1, elm2){
    const tmp = document.createElement("div");
    elm1.parentNode.insertBefore(tmp, elm1);
    elm1.parentNode.insertBefore(elm1, elm2);
    elm2.parentNode.insertBefore(elm2, tmp);
    tmp.parentNode.removeChild(tmp);
}
//charger le taquin
var numbers = [1, 5, 3, 7, 8, 9, 11, 2, 4, 6, 10, 15, 13, 14, 12];
document.addEventListener('DOMContentLoaded', (event) => {
    const targetDiv = document.getElementById('puzzleSlide');
    var x = 1;
    var y = 1;
    numbers.forEach((i) => {
        if(x > 4){
            x=1;
            y+=1;
        }
        const button = document.createElement('button');
        button.innerText = i;
        button.id = `button-${i}`;
        button.setAttribute('data-x', x);
        button.setAttribute('data-y', y);
        button.onclick = function() {
            move(button.innerText, document.getElementById("blanc"));
        };
        targetDiv.appendChild(button);
        x+=1;
    });
    const div = document.createElement('div');
    div.id = `blanc`;
    div.setAttribute('data-x',4)
    div.setAttribute('data-y',4)
    targetDiv.appendChild(div);
});

