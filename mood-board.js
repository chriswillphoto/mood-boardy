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

  

  var grid = document.querySelector("." + containerClass);
  var childList = [];

  for (var node = 0; node < grid.children.length; node++) {
    childList.push(grid.children[node])
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

  for (var i=1; i<=columnCount; i++){
    var col = document.createElement('div');
    col.classList.add('column-'+i)
    col.classList.add('Mood-column')
    grid.appendChild(col)
  }

  for (var i = 0; i < childList.length; i++) {
    var tile = childList[i];
    tile.classList.add("Mood-tile");
    tile.setAttribute("data-index", i + 1);

    var cols = document.querySelectorAll('.Mood-column')

    for (var j=columnCount; j > 0; j--){
      var tileIndex = tile.getAttribute("data-index")
      if( parseInt(tileIndex) % j == 0 ){
        console.log(tileIndex, j)
        break
        // toAppend = tile.parentNode.removeChild(tile);
        // cols[j].appendChild(toAppend)
      }
    }
  }

  // console.log(columnCount, window.innerWidth);
};

masonryCols({ container: "whatever" });
