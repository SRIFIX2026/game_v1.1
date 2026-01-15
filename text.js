console.log("text.js loaded");                  

let welcomeText = "WELCOME TO AVOID OBSTACLES!";
let promptText = "Press ENTER to start";

let welcomeAlpha = 0; // alpha pour effet clignotant
let welcomeAlphaDirection = 1; // +1 ou -1 pour variation
let promptAlpha = 0;
let promptAlphaDirection = 1;

let welcomeColor = "red";
let promptColor = "green";

let showStartPrompt = false; // affichage du "Press ENTER"
function animateEnterPrompt() {
    enterAlpha += 0.03 * enterDirection;
    if (enterAlpha <= 0.3) enterDirection = 1;
    if (enterAlpha >= 1) enterDirection = -1;
}

function drawScreen() {
    const canvasWidth = gameCanvas.width;
    const canvasHeight = gameCanvas.height;
    const ctx = gameCanvas.getContext("2d");

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // --- WELCOME PRINCIPAL ---
    ctx.save();
    ctx.font = "bold 48px Orbitron";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#960303";
    ctx.shadowColor = "white";
    ctx.shadowBlur = 18;
    ctx.fillText("WELCOME TO AVOID OBSTACLES!", canvasWidth / 2, canvasHeight / 2 - 50);
    ctx.restore();

    // --- Press ENTER vert brillant ---
    ctx.save();
    ctx.font = "bold 32px Orbitron";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "lime";
    ctx.shadowColor = "lime";
    ctx.shadowBlur = 20;
    ctx.globalAlpha = enterAlpha;
    ctx.fillText("Press ENTER to start", canvasWidth / 2, canvasHeight - 80);
    ctx.globalAlpha = 1;
    ctx.restore();
}

// Fonction pour activer le "Press ENTER"
function enableStartPrompt() {
    showStartPrompt = true;
}
