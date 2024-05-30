let Sname = document.getElementById("Sname");
let url = document.getElementById("url");
let Errors = document.getElementById("error");
let container = []; 
let Uerrors = document.getElementById("Uerror");

if (localStorage.getItem('allsites')) {
  container = JSON.parse(localStorage.getItem('allsites'))
  display() 
}






function add() {
if(validateSname()){

if (ValidateUrl()){


    let site = {
      name: Sname.value,
      link: url.value
    };
  
    container.unshift(site);
    display()
    clear()
    localStorage.setItem('allsites', JSON.stringify(container))

  
  }
}
}

function display() {
    let cartona =""
    for (let i = 0; i < container.length; i++) {
      cartona+=`
      <div class="container mt-2">
    <div class="row">
      <div class="col-md-3 col-3 bg-white">
        <h2>
        ${container[i].name}
        </h2>
      </div>
      <div class="col-md-3 col-3 bg-white">
        <h2>
        ${container[i].link}

        </h2>
      </div>
      <div class="col-md-3 col-3 bg-white"> 

        <button class="btn bg-primary-subtle"> <i class="fa fa-eye"></i>
        
        <a href=" ${container[i].link}
        ">

        Visit
        </a>
        
        </button>
      </div>
      <div class="col-md-3 col-3 bg-white">
        <button onclick="deleteItem(${i})" class="btn bg-danger"> <i class="fa fa-trash"></i> Delete</button>
      </div>
    </div>
  </div>
      `
    }
    document.getElementById('table').innerHTML=cartona


}
function clear() {
  Sname.value = ""
  url.value = ""
  
}

function deleteItem(index) {
  container.splice(index, 1)
  display()
  localStorage.setItem('allsites', JSON.stringify(container))

}
function validateSname() {
  var regex =/^[A-Z][a-z]{2,7}$/ ;
  if (regex.test(Sname.value)){
    console.log("match");
   Sname.classList.add("is-valid")
   Sname.classList.remove("is-invalid")
   Errors.classList.replace("d-block", "d-none")
    return true
  }
  
  else {
    console.log("Not Match");

    Sname.classList.add("is-invalid")
    Sname.classList.remove("is-valid")
    Errors.classList.replace("d-none", "d-block")
    return false
  }
  
}
function ValidateUrl() {
  var regexs = /^.+\.com$/;
  if (regexs.test(url.value)) {
    console.log("match");
    Uerrors.classList.replace("d-block", "d-none");
    return true;
  } else {
    console.log("unmatch");
    Uerrors.classList.replace("d-none", "d-block");
    return false;
  }
}

