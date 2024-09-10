const myLibrary = [];

function Books(title, author, numberPages, haveRead){
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.bookInfo = function() {
        return `${title} by ${author}, ${numberPages} pages, ` + (this.haveRead === 'Y' ? `have read` : `not read yet`);
    };
}

function addBookToLibrary(){

    const title = prompt("Name of the book: ");
    const author = prompt("Author: ");
    const numberPages = prompt("Number of pages: ");
    const haveRead = prompt("Have you read the book? (Y/N): ");
    const book = new Books(title, author, numberPages, haveRead);
    myLibrary.push(book);
    //console.log(myLibrary.indexOf(book));
    displayLibrary();

    

}

function displayLibrary() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookInfo = document.createElement('p');
        bookInfo.textContent = book.bookInfo();

        // Cria o container de botões
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('book-buttons');

        // Cria o botão de remover
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove Book';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', () => removeBook(index));

        // Cria o botão de mudar status
        const changeStatusButton = document.createElement('button');
        changeStatusButton.textContent = 'Change Status';
        changeStatusButton.classList.add('change-status-button');
        changeStatusButton.addEventListener('click', () => changeStatus(index));

        // Adiciona os botões ao container
        buttonContainer.appendChild(removeButton);
        buttonContainer.appendChild(changeStatusButton);

        // Adiciona o container de botões ao bloco de livro
        bookInfo.appendChild(buttonContainer);

        // Adiciona o bloco de livro à biblioteca
        libraryDiv.appendChild(bookInfo);
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayLibrary();
}

function changeStatus(index) {
    const book = myLibrary[index];
    book.haveRead = (book.haveRead === 'Y') ? 'N' : 'Y';
    displayLibrary();
}

document.getElementById('addBookButton').addEventListener('click', addBookToLibrary);

