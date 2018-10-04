function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


// todo-list
$('#adding-todo-text').on('click', () => {
    let deleteButton = `<button type="button" class="btn btn-danger" id="close">X</button>`;
    $('#todoForm').toggle('displaying').append(deleteButton).on('click', () =>{
    });
    
    $('#close').on('click', () => {
        $('#close').remove();
        $('#todoForm').toggle('displaying');
    });
});

let dragID = 7;
function add(){
    let newText  = $('#newTodoText').val();
    console.log(newText);
    $('#ddd').prepend(`<textarea  class="textParts"  id="drag-${dragID}" draggable="true" ondragstart="drag(event)">
    ${newText}
    </textarea>`);
    dragID++;
    $('#newTodoText').val('');
}


// doing list
$('#adding-doing-text').on('click', () => {
    let deleteButton = `<button type="button" class="btn btn-danger" id="close2">X</button>`;
    $('#doingForm').toggle('displaying').append(deleteButton).on('click', () =>{
    });
    
    $('#close2').on('click', () => {
        $('#close2').remove();
        $('#doingForm').toggle('displaying');
    });
});

function add2(){
    let newText  = $('#newDoingText').val();
    console.log(newText);
    $('#ddd2').prepend(`<textarea  class="textParts"  id="drag-${dragID}" draggable="true" ondragstart="drag(event)">
    ${newText}
    </textarea>`);
    dragID++;
    $('#newDoingText').val('');
}


// done list
$('#adding-done-text').on('click', () => {
    let deleteButton = `<button type="button" class="btn btn-danger" id="close3">X</button>`;
    $('#doneForm').toggle('displaying').append(deleteButton).on('click', () =>{
    });
    
    $('#close3').on('click', () => {
        $('#close3').remove();
        $('#doneForm').toggle('displaying');
    });
});

function add3(){
    let newText  = $('#newDoneText').val();
    console.log(newText);
    $('#ddd3').prepend(`<textarea  class="textParts"  id="drag-${dragID}" draggable="true" ondragstart="drag(event)">
    ${newText}
    </textarea>`);
    dragID++;
    $('#newDoneText').val('');
}






// feedback Page

function feedbackPopUp()
{
    $('#popup').toggle('.show');
    $('#container').toggle('.opacity');
}

function closingFeedback()
{
    $('#popup').toggle('.show');
    $('#container').toggle('.opacity');
}

$(document).keypress(function(e) {
    if(e.which == 13) {
        $('#popup').toggle('.show');
        $('#container').toggle('.opacity');
    }
});