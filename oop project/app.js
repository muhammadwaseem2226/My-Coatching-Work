alert('working')

const bookForm = document.getElementById('book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const bookListTbody = document.getElementById('book-list');
const showErrors = document.getElementById('showErrors');

bookForm.addEventListener('submit',bookFormFunction);

function bookFormFunction(event){
    event.preventDefault(); //defualt functionaltiy rukna
    const ui = new UI; //user interface
    if(!titleInput.value || !authorInput.value || !isbnInput.value){
        // alert('you have to fill out this fields');
        ui.showMessage('you have to fill out this fields!','error');
        return;
    }
    const titleInputValue = titleInput.value;
    const isbnInputValue = isbnInput.value;
    const authorInputValue = authorInput.value;
    
    const bookObject = new createBookObject(titleInputValue,isbnInputValue,authorInputValue);
    // {title:"booktitle" ,isbn:"book isbn" , author: "author" }
    
    ui.addBook(bookObject);


    ui.showMessage('book added successfully!');

    bindAllDeleteBtn();
}

function bindAllDeleteBtn(){
    const deleteBtns = document.getElementsByClassName('delete');

    if(deleteBtns.length > 0){
        for (let index = 0; index < deleteBtns.length; index++) {
            const singleItem = deleteBtns[index];
            singleItem.addEventListener('click',deleteBookHandler);
        }
    }

}


function deleteBookHandler(event){
    event.preventDefault();
    const currentElement = event.target;
    const ui = new UI;
    ui.removeBook(currentElement);
    ui.showMessage('book deleted successfully!');
}

//object oriented programming

function UI(){
    
}

UI.prototype.addBook = function(book){
    const tableRowElement = document.createElement('tr');
    tableRowElement.innerHTML = `
                    <td>${book.title}</td>
                    <td>${book.isbn}</td>
                    <td>${book.author}</td>
                    <td><a href="#" class="delete">X<a></td>
                `;
    bookListTbody.appendChild(tableRowElement);

    titleInput.value = "";
    authorInput.value = "";
    isbnInput.value = "";
}


UI.prototype.removeBook = function(hrefElement){
    if(confirm("Are You Sure")){
        hrefElement.parentElement.parentElement.remove();
        
    }
}

UI.prototype.showMessage = function(Message,type="success"){

    showErrors.innerHTML = "";

    messageElement = document.createElement('div');
    messageElement.className = `alert ${type == 'success' ? 'success' : 'error'}`;
    messageElement.innerText = Message;
    showErrors.appendChild(messageElement);


    setTimeout(function(){
        messageElement.remove();
    },2000)
    }


    function createBookObject(title,isbn,author){
        this.title = title;
        this.isnn = isbn;
        this.author = author;
    
    }

