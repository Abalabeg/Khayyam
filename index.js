
    $(document).ready(function () {
        $("#flip").click(function () {
          $("#panel").slideToggle("slow");
        });
      });
      $(document).ready(function () {
        $("#flip1").click(function () {
          $("#panel1").slideToggle("slow");
        });
      });
      function replace() {
        document.getElementById("f").style.display = "none";
        document.getElementById("f_vase").style.display = "block";
      }
      function replace1() {
        document.getElementById("d").style.display = "none";
        document.getElementById("d_kruge").style.display = "block";
      }
      function replace2() {
        document.getElementById("e").style.display = "none";
        document.getElementById("e_pot").style.display = "block";
      }
      $(document).ready(function () {
        $("#demo1").click(function () {
          $("#para").animate({
            width: 'toggle'
          });
        });
      });
      $(document).ready(function () {
        $("#demo").click(function () {
          $("#para1").animate({
            height: 'toggle'
          });
        });
      });
  
      
        document.getElementById("demo").onmouseover = function () { mouseOver() };
        document.getElementById("demo").addEventListener("mouseout", mouseOut);
        function mouseOver() {
          let x = document.querySelectorAll("div > .m");
          let i;
          for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "rgb(255, 123, 0)";
          }
        }
        function mouseOut() {
          let x = document.querySelectorAll("div > .m");
          let i;
          for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "rgb(240, 233, 171, 0.534)";
          }
        }
        document.getElementById("demo1").onmouseover = function () { mouseOver1() };
        document.getElementById("demo1").addEventListener("mouseout", mouseOut1);
        function mouseOver1() {
          let x = document.querySelectorAll("div > .m1");
          let i;
          for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "rgb(255, 123, 0)";
          }
        }
        function mouseOut1() {
          let x = document.querySelectorAll("div > .m1");
          let i;
          for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "rgb(240, 233, 171, 0.534)";
          }
        }
    
        let spns = document.getElementsByClassName("au");
        let audi = document.getElementById("adi");
    
        audi.addEventListener("timeupdate", f1);
        function f1() {
          let j;
          for (j = 0; j < spns.length; j++) {
            let time = Number(spns[j].id.slice(2));
            if (time < audi.currentTime) {
              if (j > 0) spns[j - 1].style.fontSize = "25px";
              spns[j].style.fontSize = "30px";
            }
          }
        }
     
  
  