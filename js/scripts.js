$(document).ready(function() {
  $("button#fire").click(function() {
    // $("body").removeClass();
    $("body").addClass("fire-background");
    $("ul#user").prepend("<li> Aries, Leo or Sagittarius </li>");
    $("ul#webpage").prepend("<li>hot, dry, ardent.</li>");
    $("ul#user").children("li").first().click(function() {
      // alert("guess who am I?");
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      // alert("I'm a witch!");
      $(this).remove();
    });
  });

  $("button#earth").click(function() {
    // $("body").removeClass();
    $("body").addClass("earth-background");
    $("ul#user").prepend("<li> Taurus, Virgo or Capricorn</li>");
    $("ul#webpage").prepend("<li>heavy, cold, dry.</li>");
    $("ul#user").children("li").first().click(function() {
      // alert("guess who am I?");
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      // alert("I'm a witch!");
      $(this).remove();
    });
  });
  $("button#air").click(function() {
    // $("body").removeClass();
    $("body").addClass("air-background");
    $("ul#user").prepend("<li>Gemini, Libra or Aquarius </li>");
    $("ul#webpage").prepend("<li>light, hot, wet.</li>");
    $("ul#user").children("li").first().click(function() {
      // alert("guess who am I?");
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      // alert("I'm a witch!");
      $(this).remove();
    });
  });
  $("button#water").click(function() {
    // $("body").removeClass();
    $("body").addClass("water-background");
    $("ul#user").prepend("<li>Cancer, Scorpio or Pisces</li>");
    $("ul#webpage").prepend("<li>cold, wet, soft.</li>");
    $("ul#user").children("li").first().click(function() {
      // alert("guess who am I?");
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      // alert("I'm a witch!");
      $(this).remove();
    });
  });

});
