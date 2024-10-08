const url = `https://fakestoreapi.com/products`;
fetch(url)
    .then(res => res.json())
    .then(json => {
        const carddata = json;
        const prodlist = document.getElementsByClassName('product-container')[0]; // Access the first element in the collection
        const prodcart = carddata.map((val, i) => 
            `<div class="card" key="${i}">
                <img src="${val.image}" class="prod-image" alt="image">
                <h2 id="header">${val.title.slice(0, 25)}</h2>
                <p id="price">Rs-${val.price}</p>
            </div>`
        ).join('');
        prodlist.innerHTML = prodcart; 
    })
    .catch(error => console.error('Error fetching data:', error)); 
