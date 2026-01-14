console.log("DATA OK");

const CANVAS_RATIO_WIDTH = 0.767;
const CANVAS_RATIO_HEIGHT = 0.7;

/* =========================
   PLAYER (Tx)
========================= */
const PLAYER = {
    width: 20,
    height: 20,
    color: '#d20e28', // red ribbon
    speed: 7
};

/* =========================
   SCORE & TIME
========================= */
const SCORE_RULES = {
    perSecond: 17.87,
    perObstacle: 3,
    quadrupleMultiplier: 4
};

/* =========================
   OBSTACLES
========================= */
const OBSTACLE_BASE_SPEED_INCREASE = 0.07;

const OBSTACLES = [
    { type: 'smallRock', spawnTime: 0, baseSpeed: 5.5, width: 28, height: 28, color: '#6b4a2d' },
    { type: 'bigRock', spawnTime: 15, baseSpeed: 8, width: 40, height: 40, color: '#635e5b' },
    { type: 'rod', spawnTime: 35, baseSpeed: 10, width: 12, height: 80, color: '#b0b0b0' },
    { type: 'missile', spawnTime: 75, baseSpeed: 24, width: 55, height: 10, color: '#d4af37' }
];

/* =========================
   SPAWN FREQUENCY
========================= */
const SPAWN_RATE = { start: 1.25, min: 0.25 };

/* =========================
   SUPPORT ITEMS
========================= */
const SUPPORT_ITEM = { width: 45, height: 45, speed: 7 };

const SUPPORT_ITEMS = {
    shield: { start: 10, interval: 20, color: '#0b5d2a', width: SUPPORT_ITEM.width, height: SUPPORT_ITEM.height },
    speedBoost: { start: 17, interval: 25, duration: 7, color: '#0a2f6b', width: SUPPORT_ITEM.width, height: SUPPORT_ITEM.height },
    quadrupleScore: { start: 0, interval: 20, duration: 10, color: '#5b1b6f', width: SUPPORT_ITEM.width, height: SUPPORT_ITEM.height },
    miniTx: { start: 35, scale: 0.25, color: '#ffb347', width: SUPPORT_ITEM.width, height: SUPPORT_ITEM.height },
    slowMotion: { start: 40, interval: 24, duration: 8, slowFactor: 0.25, invincibilityAfter: 1, color: '#2ec4c6', width: SUPPORT_ITEM.width, height: SUPPORT_ITEM.height }
};





