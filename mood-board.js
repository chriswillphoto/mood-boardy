var establishSettings = function(settings){
  var returnSettings;
  if (!settings) {
    returnSettings = {
      container: "Mood-board",
      breakpoints: {
        1: 480,
        2: 768,
        3: 992,
        4: 1200
      }
    }; // default settings
  } else {
    returnSettings = settings;
  }

  containerClass = returnSettings.container || "Mood-board";
  returnSettings.breakpoints = returnSettings.breakpoints || {};
  returnSettings.breakpoints[1] = returnSettings.breakpoints[1] || 480;
  returnSettings.breakpoints[2] = returnSettings.breakpoints[2] || 768;
  returnSettings.breakpoints[3] = returnSettings.breakpoints[3] || 992;
  returnSettings.breakpoints[4] = returnSettings.breakpoints[4] || 1200;

  return returnSettings
}

var masonryCols = function(settings) {
  var columnCount;

  var gridSettings = establishSettings(settings);

  var grid = document.querySelector("." + gridSettings.container);
  var childList = [];

  for (var node = 0; node < grid.children.length; node++) {
    childList.push(grid.children[node]);
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

  for (var i = 1; i <= columnCount; i++) {
    var col = document.createElement("div");
    col.classList.add("column-" + i);
    col.classList.add("Mood-column");
    col.style.width = 100 / columnCount + "%";
    col.style.textAlign = "center";
    col.style.boxSizing = "border-box";
    grid.appendChild(col);
  }

  for (var i = 0; i < childList.length; i++) {
    var tile = childList[i];
    tile.classList.add("Mood-tile");
    tile.style.marginLeft = "auto";
    tile.style.marginRight = "auto";
    tile.style.width = "100%";
    tile.setAttribute("data-index", i + 1);

    var cols = document.querySelectorAll(".Mood-column");

    for (var j = columnCount; j > 0; j--) {
      var tileIndex = parseInt(tile.getAttribute("data-index"));
      while (tileIndex > columnCount) {
        tileIndex -= columnCount;
        console.log(tileIndex);
      }

      if (tileIndex % j == 0) {
        // console.log(tileIndex, j)
        toAppend = tile.parentNode.removeChild(tile);
        cols[j - 1].appendChild(toAppend);
        break;
      }
    }
  }

  // console.log(columnCount, window.innerWidth);
};

masonryCols({ container: "whatever" });
