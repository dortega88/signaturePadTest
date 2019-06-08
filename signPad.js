jQuery(document).ready(function($) {

  $(function(){
    drawSignatureLine();
  })

  var canvas = document.getElementById("signature-pad");

  var signaturePad = new SignaturePad(canvas, {
    backgroundColor: "rgb(255, 0, 0)",
    penColor: "rgb(0, 0, 0)",
    enableTypeToSign: true,
    inputSelector: "#txtname",
    maxFontSize: "28",  // Defaults to 300 pt.
    fontface: "Arial" // Defaults to Helvetica
  });



  $('button.save').click(function() {
    window.open(signaturePad.toDataURL("image/png"))
    alert("saved");
    drawSignatureLine();
  });


  document.getElementById('clear').addEventListener('click', function () {
      signaturePad.clear();
      $('#txtname').val('');
    drawSignatureLine();
  });

  function drawSignatureLine() {
     var context = canvas.getContext('2d');
     context.lineWidth = .5;
     context.strokeStyle = '#333';
     context.beginPath();
     context.moveTo(0, 150);
     context.lineTo(500, 150);
     context.stroke();
    }
});
