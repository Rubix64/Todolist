//To- do list
function refresh() {
    if (localStorage.getItem("checklist") == null) {
      itemchecklist = [];
      localStorage.setItem("checklist", JSON.stringify(itemchecklist));
    } else {
      itemchecklist = JSON.parse(localStorage.getItem("checklist"));
    }
    let str = "";
    itemchecklist.forEach((element, index) => {
      str += `<li class="list-group-item d-flex justify-content-between align-items-center">
            <i class="fa fa-check-square-o" aria-hidden="true" ><span style="font-family:cursive;"> ${element}</span>
              </i>  
              <button type="submit" class="btn btn-primary btn-sm mb-3 border-0" style="background-color: rgb(224, 18, 52);" onclick="deleted(${index})">Delete</button>
              </li>`;
    });
  
    list = document.getElementById("list");
    list.innerHTML = str;
  }
  function update() {
    checklist = document.getElementById("checklist").value;
    if (localStorage.getItem("checklist") == null) {
      itemchecklist = [];
      itemchecklist.push(checklist);
      localStorage.setItem("checklist", JSON.stringify(itemchecklist));
    } else {
      itemchecklist = JSON.parse(localStorage.getItem("checklist"));
      itemchecklist.push(checklist);
      localStorage.setItem("checklist", JSON.stringify(itemchecklist));
    }
    let str = "";
    itemchecklist = JSON.parse(localStorage.getItem("checklist"));
    itemchecklist.forEach((element, index) => {
      str += `<li class="list-group-item d-flex justify-content-between align-items-center">
              <i class="fa fa-check-square-o" aria-hidden="true" ><span style="font-family:cursive;"> ${element}</span>
                </i>  
                <button type="submit" class="btn btn-primary btn-sm mb-3 border-0" style="background-color: rgb(224, 18, 52);" onclick="deleted(${index})">Delete</button>
                </li>`;
    });
  
    list = document.getElementById("list");
    list.innerHTML = str;
    refresh();
  }
  function deleted(index) {
    itemchecklist = JSON.parse(localStorage.getItem("checklist"));
    itemchecklist.splice(index, 1);
    localStorage.setItem("checklist", JSON.stringify(itemchecklist));
    refresh();
  }
  function clearall() {
    if (confirm("Are you sure you want to delete?")) {
      //   console.log('bnm');
      localStorage.clear();
      refresh();
    }
  }
  Add = document.getElementById("Add");
  Add.addEventListener("click", update);
  refresh();