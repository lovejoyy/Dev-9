$(function() {
  $("#userSignInput").on("keyup", function(e) {
    var inputLength = $(this).val().length;
    $("#tiles").text(inputLength);
    updatePrice(inputLength);
    var inputFont = False;
    var inputColor = False;
  });

  $("#userFontInput").on("click", function(e) {
    inputFont = $(this).is(":checked");

    updatePrice($("#userSignInput").val().length, inputFont, inputColor);
  });

  $("#userColorInput").on("click", function(e) {
    inputColor = $(this).is(":checked");

    updatePrice($("#userSignInput").val().length, inputFont, inputColor);
  });

  $("#confirmOrder").on("click", function(e) {
    event.preventDefault();

    var previewMsg = $("#userSignInput").val();

    $("#defaultMsg").html(previewMsg);

    if ($("#userFontInput").is(":checked")) {
      $("#defaultMsg").addClass("deluxeFont");
    }

    $("#previewScreen").toggle();
  });

  $("#cancelPreview").on("click", function(e) {
    event.preventDefault();

    $("#previewScreen").toggle();
  });

  $("#confirmPreview").on("click", function(e) {
    event.preventDefault();

    $("#previewScreen").text("Thanks for your purchase!");
  });
});

function updatePrice(signLength, fontUpgrade, colorUpgrade) {
  var costPerTile = 5;

  if (fontUpgrade && colorUpgrade) {
    costPerTile = 8;
    ("true");
  } else if (fontUpgrade) {
    costPerTile = 6;
    ("font");
  } else if (colorUpgrade) {
    costPerTile = 7;
    ("color");
  } else {
    costPerTile = 5;
  }

  var subTotal = signLength * costPerTile;
  var shipping = 7;

  if (signLength != 0) {
    shipping = 7;
  } else {
    shipping = 0;
  }

  var grandTotal = subTotal + shipping;

  $("#subTotal").text("$" + subTotal);
  $("#shipping").text("$" + shipping);
  $("#grandTotal").text("$" + grandTotal);

  return grandTotal;
}
