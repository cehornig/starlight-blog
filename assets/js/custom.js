// Show/hide spoilers
  $(".spoiler").click(function(e){
    if ($(e.target).is(".spoiler-info"))
      return;

    if (!$(this).hasClass("spoiler-revealed")) {
      $(this).addClass("spoiler-revealed");
    }
    else {
      $(this).removeClass("spoiler-revealed");
    }
  });

  // Position spoiler info bubbles
  // Expand hamburger menu when hamburger button is clicked
  $(".bar-wrapper").click(function(e){
    e.preventDefault();
    $(".toggle-links").slideToggle();
  });

  // Remove empty a elements
  var els = $('a');
  for (var el of els) {
    if ($(el).html().trim() == "")
      $(el).remove();
  }
