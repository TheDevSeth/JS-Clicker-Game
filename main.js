const keyActions = {
  KeyM: () => toggleMenu(),
  KeyI: () => toggleInventory(),
  // KeyT: () => toggleTravel(),

  // ArrowUp: () => movePlayer("up"),
  // ArrowDown: () => movePlayer("down"),
  // ArrowLeft: () => movePlayer("left"),
  // ArrowRight: () => movePlayer("right"),
  // Space: () => jump(),
  // KeyE: () => interact(),
  // Escape: () => togglePauseMenu()
};

let playerStats = {
  current: {
    health: 100,
    hunger: 50,
    thirst: 25,
    stamina: 75,
    mana: 100,
  },
  max: {
    health: 100,
    hunger: 100,
    thirst: 100,
    stamina: 100,
    mana: 100,
  },
  activeEffects: {
    posion: false,
    burn: false,
    energized: true,
  },
};

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("menu-open");
}

function toggleInventory() {
  const inventory = document.querySelector(".inventory");
  inventory.classList.toggle("inventory-open");
}

function init() {
  //
  function initKeyEvents() {
    document.addEventListener("keydown", (event) => {
      const action = keyActions[event.code];
      if (action) {
        event.preventDefault();
        action();
      }
    });
  }

  //
  function initPlayerUI() {
    function initPrimaryHUD() {
      console.log(`Primary HUD Active!`);
    }
    function initSecondaryHUD() {
      console.log(`Secondary HUD Active!`);
    }
    function initEffects() {
      console.log(`
        Posion active? ${playerStats.activeEffects.posion}.\n
        Burn active? ${playerStats.activeEffects.burn}.\n
        Energized active? ${playerStats.activeEffects.energized}.
        `);
    }
    function initOverlay() {
      console.log(`
        Player Stats:\n
        Player Health❤️- ${playerStats.current.health}/${playerStats.max.health}\n  
        Player Hunger🍖- ${playerStats.current.hunger}/${playerStats.max.hunger}\n  
        Player Thirst💧- ${playerStats.current.thirst}/${playerStats.max.thirst}\n  
        Player Stamina⚡- ${playerStats.current.stamina}/${playerStats.max.stamina}\n  
        Player Mana🩵- ${playerStats.current.thirst}/${playerStats.max.mana}
        `);
    }
    initPrimaryHUD();
    initSecondaryHUD();
    initEffects();
    initOverlay();
  }

  function initInventory() {
    console.log(`There is no inventory.`);
  }

  function initPlayableArea() {
    console.log(`Work in progress...🚧👷🏽‍♂️`);
  }

  initKeyEvents();
  initPlayableArea();
  initPlayerUI();
  initInventory();
}

document.addEventListener("DOMContentLoaded", init());
