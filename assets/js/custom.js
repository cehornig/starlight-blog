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

  // Populate comment emails
  $('[name="name"], [name="content"]').on('change', function(e) {
    e.preventDefault();

    var name = $('input[name="name"]').val();
    var content = $('textarea[name="content"]').val();
    var href = $('.form-submit').attr('href');
    var date = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });

    var split = href.split('&body=');
    var baseHref = split[0];
    var body = 'Name: ' + name + 
               '%0D%0A%0D%0AMessage: ' + content +
               '%0D%0A%0D%0ADate: ' + date;

    body += "%0D%0A%0D%0A(Yeah, you need to send this in an email. Sorry. If you want to know why, ask me. Maybe I'll write a post about it!)";

    $('.form-submit').attr('href', baseHref + '&body=' + body);
  });

  $('.form-submit').on('click', function() {
    $('input[name="name"]').val('');
    $('textarea[name="content"]').val('');
  });
