document.querySelector("#submit9").addEventListener("click", function() {
    event.preventDefault();
    var toDo9 = document.getElementById("events-9").value;
    localStorage.setItem("toDo9", toDo9);
    getData9();
  });
  getData9();
  function getData9() {
    var field1 = localStorage.getItem("toDo9");
    document.getElementById("events-9").value = field1;
  }