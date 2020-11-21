const btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(button => {
    button.addEventListener('click', function(e) {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    })
})