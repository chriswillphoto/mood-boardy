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

var columnCountSet = function(gridSettings){
  var columnCount;

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

  return columnCount;
}

var addColumns = function(grid, currentCols, columnCount){

  columnList = document.querySelectorAll('.Mood-column');

  while( grid.lastChild ){
    grid.removeChild(grid.lastChild)
  }

  var columnIndex = currentCols + 1;

  while ( grid.children.length < columnCount ){
    var col = document.createElement("div");
    col.classList.add("column-" + columnIndex);
    col.classList.add("Mood-column");
    col.style.width = 100 / columnCount + "%";
    col.style.textAlign = "center";
    col.style.boxSizing = "border-box";
    grid.appendChild(col);
    
    columnIndex += 1;
  }

}

var addContent = function(tileList, columnCount){

  var cols = document.querySelectorAll(".Mood-column");

  if ( cols.length == columnCount ){
    for (var i = 0; i < tileList.length; i++) {
      var tile = tileList[i];
      tile.classList.add("Mood-tile");
      tile.style.marginLeft = "auto";
      tile.style.marginRight = "auto";
      tile.style.width = "100%";
      tile.setAttribute("data-index", i + 1);
      for (var j = columnCount; j > 0; j--) {
        var tileIndex = parseInt(tile.getAttribute("data-index"));
        while (tileIndex > columnCount) {
          tileIndex -= columnCount;
        }
  
        if (tileIndex % j == 0) {
          cols[j - 1].appendChild(tile);
          break;
        }
      }
    }
  }
  
}

// var debug = function(){
//   var test = columnCounter(establishSettings())
//   console.log(test)
// }



var masonryCols = function(settings) {
  

  var gridSettings = establishSettings(settings);
  var columnCount = columnCountSet(gridSettings);
  var columnList = document.querySelectorAll('.Mood-column');
  var currentCols = columnList.length;


  var grid = document.querySelector("." + gridSettings.container);
  var tileList = [].slice.call(grid.children);


  while (grid.lastChild){
    grid.removeChild(grid.lastChild)
  }

  if( currentCols < columnCount ){
    addColumns(grid, currentCols, columnCount);
    addContent(tileList, columnCount)
  }

  window.addEventListener('resize', function(){
    columnCount = columnCountSet(gridSettings);
    columnList = document.querySelectorAll('.Mood-column');
    currentCols = columnList.length;

    if( currentCols != columnCount ){
      addColumns(grid, currentCols, columnCount)
      addContent(tileList, columnCount)
    }
  }) // eventlistener

}; // end masonryCols function

masonryCols({ container: "whatever" });
