var masonryCols = function() {
  var num;

  if (window.innerWidth < 600) {
    num = 1;
  } else if (window.innerWidth < 1197) {
    num = 2;
  } else if (window.innerWidth < 1500) {
    num = 3;
  } else {
    num = 4;
  }

  var currentCols = $(".mas-column").length;

  if (currentCols != num) {
    for (var i = currentCols + 1; i <= num; i++) {
      $(".masonry-grid").append("<div class='mas-column column-" + i + "'></div>");
    }
  }

  $(".masonry-grid-item").each(function() {
    var tileIndex = parseInt($(this).data("index")) + 1;

    while (tileIndex > num) {
      tileIndex -= num;
    }

    for (var i = num; i > 0; i--) {
      if (tileIndex % i == 0) {
        $(this).appendTo($(".column-" + i.toString()));

        break;
      }
    }

    if (num < 4) {
      for (var i = num + 1; i < 5; i++) {
        $(".column-" + i.toString()).remove();
      }
    }
  });

  $(".mas-column").css("width", "calc(100% / " + num.toString() + ")");
};
