
var faceImg = new Image;
var noseImg = new Image;
var now, then;
var canvasFace;
var ctx;
//Her setter de forskjellige stegene for Canvas animasjonen i prosent.
var k = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 55, 65, 75, 90, 100];


//init() kalles på onload i body. Tegner inn fjeset i canvas.
//Datakilden Canvas APIet skal bruke er SVG-elementet fra HTMLen
//SVG-elementet må derfor gjøres om til en text streng + informasjon om hvordan strengen skal tolkes.
function init(){
  canvasFace = document.getElementById('myArt21');
  ctx = canvasFace.getContext('2d');
  faceImg.onload = function() {
          ctx.drawImage(faceImg,0,0); // Or at whatever offset you like
  };
  noseImg.onload = function() {
          ctx.drawImage(noseImg,0,0); // Or at whatever offset you like
  };
  faceImg.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(document.getElementById("myArt11")));
  noseImg.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(document.getElementById("noseSVG")));
}


  $(function() {
    //Toggle funksjon som viser og skjuler dokumentasjonen når du klikker på btnDocumentation.
    $("#btnDocumentation").click(function(){
      $("#documentationText").toggle(200);
    });


    //Disse kjekke kodesnuttene ble løsningen for å la animasjonen kjøre fullt ut når du klikker på nesen.
    $(".nosePath").bind("webkitAnimationEnd animationend", function(){
      $(this).removeClass("animated")
    });

    $(".nosePath").click(function(){
      $(this).addClass("animated");
    });


    //Sjekker om musen har klikket på et definert område gitt av xy posisjonen til musen.
    //Dersom musen er innenfor område nesen i canvasgrafikken befinner seg vil den kjøre draw().
    $("#myArt21").click(function(e){
      var p = $( "#myArt21");
      var offset = p.offset();
      console.log("left: " + offset.left + ", top: " + offset.top );
      console.log("pageX: " + e.pageX + ", pageY: " + e.pageY );
      //noseClickOffset
      //Original størrelse på grafikken er 500, men er skalert ned til 300.
      //offsetter er detfor justert ned til 3/5.
      var leftMin = offset.left+200*(3/5);
      var leftMax = offset.left+300*(3/5);
      var topMin = offset.top+130*(3/5);
      var topMax = offset.top+260*(3/5);

      if(leftMin<e.pageX&&leftMax>e.pageX&&topMin<e.pageY&&topMax>e.pageY){
          then = performance.now();
          window.requestAnimationFrame(draw);
      }
    });
  });

//Kjører i loop i 3 sekunder og endrer nesen sin posisjon hver gang ved å justere xy posisjon og skew.
  function draw() {
    //Setter opp en klokke som brukes til å time animasjonen.
    var elapsed = performance.now() - then;

    ctx.save();
    //Animasjonen til nesen.
    for(var i = 0; i<k.length; i++){
      if(elapsed<k[i]*30){
        window.requestAnimationFrame(draw);

        var x = elapsed/(k[i]*30);
        console.log(elapsed);
        //fjerner forrige bilde.
        ctx.clearRect(0, 0, canvasFace.width, canvasFace.height)
        //tegner først fjeset uten nese.
        ctx.drawImage(faceImg,0,0);
        if(i==0){
          ctx.transform(1, 0, -0.01*x, 1, 1*x, -2*x);
        }else if (i == 1) {
          ctx.transform(1, 0, 0.01*x, 1, 1*x, -4*x);
        }else if (i == 2) {
          ctx.transform(1, 0, -0.01*x, 1, -1*x, -6*x);
        }else if (i == 3) {
          ctx.transform(1, 0, 0.01*x, 1, 1*x, -3*x);
        }else if (i == 4) {
          ctx.transform(1, 0, -0.01*x, 1, 2*x, -8*x);
        }else if (i == 5) {
          ctx.transform(1, 0, 0.01*x, 1, 1*x, -8*x);
        }else if (i == 6) {
          ctx.transform(1, 0, -0.01*x, 1, 1*x, -4*x);
        }else if (i == 7) {
          ctx.transform(1, 0, 0.01*x, 1, -1*x, -8*x);
        }else if (i == 8) {
          ctx.transform(1, 0, -0.01*x, 1, 1*x, -6*x);
        }else if (i == 9) {
          ctx.transform(1, 0, 0.01*x, 1, 2*x, -20*x);
        }else if (i == 10) {
          ctx.transform(1, 0, -0.01*x, 1, 1*x, -40*x);
        }else if (i == 11) {
          ctx.transform(1, 0, 0.01*x, 1, 1*x, -70*x);
        }else if (i == 12) {
          ctx.transform(1, 0, -0.01*x, 1, 0*x, -115*x);
        }else if (i == 13) {
          ctx.transform(1, 0, 0.01*x, 1, 0*x, -185*x);
        }else if (i == 14) {
          ctx.transform(1, 0, 0*x, 1, 0*x, -300*x);
        }

        ctx.drawImage(noseImg, 0, 0);
        //tegner så inn nesen med en endring basert på hvor lang tid det har gått.
        ctx.restore();
        break;
      }
    }
  };
