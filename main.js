//modal script

//var init
let button = document.getElementById('button');
let closeBtn = document.querySelector('.close');

//funtions
//this opens the modal
let openModal = ()=> {
	document.querySelector('.modal').style.display = "flex";
}
//this closes the modal
let closeModal = () => {
	document.querySelector('.modal').style.display = "none";
}

//event listeners here
button.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);