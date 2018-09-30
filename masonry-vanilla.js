var masonryCols = function(settings) {
  var containerClass;
  var gridSettings;
  var columnCount;

  if (!settings) {
    gridSettings = {
      container: "mood-board",
      breakpoints: {
        1: 480,
        2: 768,
        3: 992,
        4: 1200
      }
    }; // default settings
  } else {
    gridSettings = settings;
  }
  
  containerClass = gridSettings.container || "Mood-board";
  gridSettings.breakpoints = gridSettings.breakpoints || {}
  gridSettings.breakpoints[1] = gridSettings.breakpoints[1] || 480;
  gridSettings.breakpoints[2] = gridSettings.breakpoints[2] || 768;
  gridSettings.breakpoints[3] = gridSettings.breakpoints[3] || 992;
  gridSettings.breakpoints[4] = gridSettings.breakpoints[4] || 1200;

  console.log(gridSettings)

  var grid = document.querySelector("." + containerClass);
  childList = grid.children;

  for (var i = 0; i < childList.length; i++) {
    var tile = childList[i];
    tile.classList.add("Mood-tile");
  }

  if (window.innerWidth < gridSettings.breakpoints[1]) {
    columnCount = 1;
  } else if (window.innerWidth < gridSettings.breakpoints[2]) {
    columnCount = 2;
  } else if (window.innerWidth < gridSettings.breakpoints[3]) {
    columnCount = 3;
  } else if (window.innerWidth < gridSettings.breakpoints[4]) {
    columnCount = 4;
  } else {
    columnCount = 5;
  }

  console.log(columnCount, window.innerWidth);
};

masonryCols({ container: "whatever" });
