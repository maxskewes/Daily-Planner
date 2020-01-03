document.querySelector("#submit9").addEventListener("click", function() {
    event.preventDefault();
    var hour9 = document.getElementById("events-9").value;
    localStorage.setItem("hour9", hour9);
    getData9();
  });
  getData9();
  function getData9() {
    var field1 = localStorage.getItem("hour9");
    document.getElementById("events-9").value = field1;
  }

  document.querySelector("#submit10").addEventListener("click", function() {
    event.preventDefault();
    var hour10 = document.getElementById("events-10").value;
    localStorage.setItem("hour10", hour10);
    getData10();
  });
  getData10();
  function getData10() {
    var field1 = localStorage.getItem("hour10");
    document.getElementById("events-10").value = field1;
  }

  document.querySelector("#submit11").addEventListener("click", function() {
    event.preventDefault();
    var hour11 = document.getElementById("events-11").value;
    localStorage.setItem("hour11", hour11);
    getData11();
  });
  getData11();
  function getData11() {
    var field1 = localStorage.getItem("hour11");
    document.getElementById("events-11").value = field1;
  }

  document.querySelector("#submit12").addEventListener("click", function() {
    event.preventDefault();
    var hour12 = document.getElementById("events-12").value;
    localStorage.setItem("hour12", hour12);
    getData12();
  });
  getData12();
  function getData12() {
    var field1 = localStorage.getItem("hour12");
    document.getElementById("events-12").value = field1;
  }

  document.querySelector("#submit13").addEventListener("click", function() {
    event.preventDefault();
    var hour13 = document.getElementById("events-13").value;
    localStorage.setItem("hour13", hour13);
    getData13();
  });
  getData13();
  function getData13() {
    var field1 = localStorage.getItem("hour13");
    document.getElementById("events-13").value = field1;
  }

  document.querySelector("#submit14").addEventListener("click", function() {
    event.preventDefault();
    var hour14 = document.getElementById("events-14").value;
    localStorage.setItem("hour14", hour14);
    getData14();
  });
  getData14();
  function getData14() {
    var field1 = localStorage.getItem("hour14");
    document.getElementById("events-14").value = field1;
  }

  document.querySelector("#submit15").addEventListener("click", function() {
    event.preventDefault();
    var hour15 = document.getElementById("events-15").value;
    localStorage.setItem("hour15", hour15);
    getData15();
  });
  getData15();
  function getData15() {
    var field1 = localStorage.getItem("hour15");
    document.getElementById("events-15").value = field1;
  }

  document.querySelector("#submit16").addEventListener("click", function() {
    event.preventDefault();
    var hour16 = document.getElementById("events-16").value;
    localStorage.setItem("hour16", hour16);
    getData16();
  });
  getData16();
  function getData16() {
    var field1 = localStorage.getItem("hour16");
    document.getElementById("events-16").value = field1;
  }

  document.querySelector("#submit17").addEventListener("click", function() {
    event.preventDefault();
    var hour17 = document.getElementById("events-17").value;
    localStorage.setItem("hour17", hour17);
    getData17();
  });
  getData17();
  function getData17() {
    var field1 = localStorage.getItem("hour17");
    document.getElementById("events-17").value = field1;
  }

  function hourUpdater() {
    var currentHour = moment().hours();
    console.log(currentHour);
    $(".time-block").each(function() {
      var blockHour = parseInt(
        $(this)
          .attr("id")
          .split("-")[1]
      );
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  
  hourUpdater();