const menu2 = document.querySelector('.menu2');
const closeBtn = document.querySelector('.close-btn');
const burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
    menu2.classList.add('show');

})
closeBtn.addEventListener('click', function () {
    menu2.classList.remove('show');
});


const container = document.querySelector('.container1')

async function foods() {
    const promise = await fetch('data.json');
    const responce = await promise.json()

    responce.bakery.forEach( bake => {

        const card = `
            <a href="product.html" style="width: 180px; display: flex; flex-direction: column; align-items: center; justify-content: center;  text-decoration: none; color:black" class="img-product">
                <img src='${bake.photo}' style='border-radius: 50%; width:160px;' class="img-pro">
                <p style="font-size: 20px; text-align:center;"> ${bake.name}</p>
                <p style="display: none;" class="description">${bake.description}</p>
                <p style="display: none;" class="type">${bake.type}</p>
                <p style="display: none;" class="calories">${bake.calories}</p>
                <p style="display: none;" class="sugar">${bake.sugar}</p>
                <p style="display: none;" class="fat">${bake.fat}</p>
            </a>
        `;

        container.innerHTML += card
        
        container.querySelectorAll('.img-product').forEach( item => {
            item.addEventListener('click', function() {
                localStorage.setItem('img-product', item.querySelector('.img-pro').getAttribute('src'))
                localStorage.setItem('name-product', item.querySelector('p').textContent);
                localStorage.setItem('description', item.querySelector('.description').textContent);
                localStorage.setItem('type', item.querySelector('.type').textContent);
                localStorage.setItem('calories', item.querySelector('.calories').textContent);
                localStorage.setItem('sugar', item.querySelector('.sugar').textContent);
                localStorage.setItem('fat', item.querySelector('.fat').textContent)
            })
        } )
    });
}
foods()