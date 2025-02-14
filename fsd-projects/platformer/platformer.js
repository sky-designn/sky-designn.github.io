$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 610, 400, 50);
    createPlatform(950, 480, 300, 50, "red");
    createPlatform(600, 400, 200, 50),
    createPlatform(200, 300, 400, 50),
    createPlatform(700, 200, 300, 50)
    createPlatform(1100, 140, 400, 50),



    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 50);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("max", 1200, 440, 0, 0.7);


    
    // TODO 4 - Create Cannons
    createCannon("top", 1200, 3000);
    createCannon("right", 700, 2000);
    createCannon("top", 500, 3000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
