const selectButton = document.querySelector('.custom-button');
const overflow = document.querySelector('.overflow')
const optionList = document.querySelector('.custom-list')
const body = document.querySelector('body');
const options = Array.from(document.querySelectorAll('.custom-item'))
selectButton.addEventListener('click', openOptions)

function openOptions(){
overflow.style.display = 'block';
optionList.style.display = 'block';
body.style.overflow = 'hidden';
}

optionList.addEventListener('click', selectOptions)

function selectOptions(event){
    console.log(options)
if(event.target.textContent){
    removeClass()
    event.target.classList.add('custom-active')
    selectButton.innerHTML = event.target.textContent
}
closeOptions()
}

function removeClass(){
    options.map(function (item) {
if (item.classList.contains('custom-active')){
    item.classList.remove('custom-active')
}
    })
}

function closeOptions(){
    overflow.style.display = 'none';
optionList.style.display = 'none';
body.style.overflow = 'scroll';
}

