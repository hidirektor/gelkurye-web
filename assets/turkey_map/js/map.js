/// Bind the map container events and some CSS features.
function bindActionEvents() {
  $(".button-class").off();

  $(".path-class")
    .off()
    .on("mouseover", onMouseoverCity)
    .on("mouseout", onMouseoutCity)
    .on("mousemove", (e) => {
      onMoveMovableContainer(e);
    })
    .on("touchmove", (e) => {
      onMoveMovableContainer(e);
    });

  function onMouseoverCity(e) {
    const cityName = $(e.currentTarget).parent().attr("id");

    /// Set current city name.
    $(".movable-container-city-name").html(cityName.toUpperCase());

    $(e.currentTarget).css({
      fill: "#dcdcdcdc",
    });
    $(".movable-container").show();
  }

  function onMouseoutCity(e) {
    $(".movable-container").hide();

    if (e.currentTarget.id.toLowerCase() === "manisa" || e.currentTarget.id.toLowerCase() === "balikesir" || e.currentTarget.id.toLowerCase() === "mugla") {
      $(e.currentTarget).css({
        fill: "rgb(252, 137, 0)",
      });
    } else {
      $(e.currentTarget).css({
        fill: "rgb(56, 62, 66)",
      });
    }
  }

  const onMoveMovableContainer = (e) => {
    let windowWidth = $(document).width();

    $(".movable-container").show();
    //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
    try {
      //PageX and PageY return the position of client's cursor from top left of screen
      var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
      var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    } catch (e) {}
    //set left and top of div based on mouse position
    $(".movable-container").css("left", x - 25 + "px");
    $(".movable-container").css(
      "top",
      y - parseInt($(".movable-container").css("height")) - 25 + "px"
    );
  };

  //Detect touch device
  function isTouchDevice() {
    try {
      //We try to create TouchEvent. It would fail for desktops and throw error
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  }
}

/// Function for wrap all app. functions.
function initializeApplication() {
  bindActionEvents();
}

initializeApplication();
