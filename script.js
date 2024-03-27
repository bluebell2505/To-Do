const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if(inputBox.value===''){
        alert('Please enter a task');
    }
    else {
        let li = document.createElement('li'); /*to create an HTML element and to store it in 'li'*/ 
        li.innerHTML=inputBox.value; /*to store the input taken */
        listContainer.appendChild(li); /*to display the inserted list item */

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';

        li.appendChild(span);
        inputBox.value = '';
    }

    listContainer.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle("checked");
        }
        else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove();
        }
    }, false);
}
