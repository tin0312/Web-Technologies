let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here
// Codedy wants me to change the text from view button to 'Hello World'
function textChange() {
  view.innerHTML = 'Hello World';
}
function textReturn() {
  view.innerHTML = 'View';
}
// onevent
/*view.onclick = textChange;*/
// addEventListener method
view.addEventListener('click',textChange);
close.onclick = textReturn;

