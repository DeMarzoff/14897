document.addEventListener("load", function () {
  var buttons = document.getElementsByClassName('store-servers');

  if (buttons.length > 0) {
    Object.keys(buttons[0].children[0].children).forEach((key) => {
      let button = buttons[0].children[0].children[key];
      button.onclick = function(event) {
        buttons[0].style.visibility = 'hidden';
      }
    });
  }

});