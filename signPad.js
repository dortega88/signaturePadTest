$(function(){
    drawSignatureLine();
    var canvas = document.getElementById('signature-pad');
    var signaturePad = new SignaturePad(canvas);
    drawSignatureLine();

    $('button.save').click(function(){
        window.open(signaturePad.toDataURL("image/png"))
        alert("saved");
    });
    $('button.clear').click(function(){
        signaturePad.clear();
        drawSignatureLine();
    });
    function drawSignatureLine(){
          var context = canvas.getContext('2d');
          context.lineWidth = .5;
          context.strokeStyle = '#333';
          context.beginPath();
          context.moveTo(0, 150);
          context.lineTo(500, 150);
          context.stroke();
    }
});
