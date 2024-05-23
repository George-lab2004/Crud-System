let Sname = document.getElementById("Sname");
let url = document.getElementById("url");

let container = []; 


if (localStorage.getItem('allsites')) {
  container = JSON.parse(localStorage.getItem('allsites'))
  display() 
}






function add() {
    let site = {
      name: Sname.value,
      link: url.value
    };
  
    container.unshift(site);
    display()
    clear()
    localStorage.setItem('allsites', JSON.stringify(container))

  }
function display() {
    let cartona =""
    for (let i = 0; i < container.length; i++) {
      cartona+=`
      <div class="container mt-2">
    <div class="row">
      <div class="col-md-3 bg-white">
        <h2>
        ${container[i].name}
        </h2>
      </div>
      <div class="col-md-3 bg-white">
        <h2>
        ${container[i].link}

        </h2>
      </div>
      <div class="col-md-3 bg-white"> 

        <button class="btn bg-primary-subtle"> <i class="fa fa-eye"></i>
        
        <a href=" ${container[i].link}
        ">

        Visit
        </a>
        
        </button>
      </div>
      <div class="col-md-3 bg-white">
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
