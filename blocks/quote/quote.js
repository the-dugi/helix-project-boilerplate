export default function decorate(block) {
    // decorate the quote as a blockquote element
    const quoteDiv = block.querySelector(':scope > div > div');
    console.log(quoteDiv);
    const blockquote = document.createElement('blockquote');
    blockquote.innerHTML = quoteDiv.innerHTML;
    quoteDiv.parentElement.replaceWith(blockquote);

    // decorate the author 
    const authorDiv = block.querySelector(':scope > div > div');
    console.log(authorDiv);
    if (authorDiv) {
        const p = document.createElement('p');
        p.innerHTML = '<em> - ' + authorDiv.innerText + '</en>';
        authorDiv.parentElement.replaceWith(p);
    }
}