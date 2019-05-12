function changeLink(oldHtml, newHTML) {
  var oldPath = window.location.pathname;
  var newPath;

  if (oldPath.indexOf(oldHtml)) {
    newPath = oldPath.replace(oldHtml, newHTML);
  } else {
    newPath = oldPath + newHTML;
  }

  return newPath;
}

function inputLogic() {
  if (document.getElementById("reserve-btn")) {
    document
      .getElementById("reserve-btn")
      .addEventListener("click", function() {
        var nickName = document.getElementById("handleReserve").value;
        localStorage.setItem("userHandle", nickName);
        window.location.pathname = changeLink("index.html", "signup.html");
      });
    var input = document.getElementById("handleReserve");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("reserve-btn").click();
      }
    });
  } else {
  }
}

function setAccordHeight() {
  var height = jQuery(".accord-1").height();
  jQuery(".accordion").css("min-height", height);
}

jQuery(document).ready(function() {
  // activate input button
  inputLogic();

  // accordion logic
  setAccordHeight();
  jQuery(window).bind("resize", function() {
    setAccordHeight();
  });
  jQuery(".accord-2").slideUp(1);
  jQuery(".accord-2").click(function(event) {
    jQuery(this).slideUp(500, function() {
      jQuery(".accord-1").slideDown(1000);
    });
    event.preventDefault();
  });
  jQuery(".accord-1").click(function(event) {
    jQuery(this).slideUp(500, function() {
      jQuery(".accord-2").slideDown(1000);
    });
    event.preventDefault();
  });
});
