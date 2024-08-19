
let button = document.querySelector('#button');

let lii = [];

button.addEventListener('click', () => {
    let input = document.querySelector('#input');
    let inputValue = input.value.trim();
    console.log(inputValue)
    async function ubaid() {

        let api = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${inputValue}&key=8d488d17-fae0-474f-a48f-b7eab7d8c578`);
        let apiJson = await api.json();
        console.log(apiJson.data.recipes)
        let recipesL = apiJson.data.recipes;
        console.log(recipesL.length)
        let container = document.querySelector('.container')
        let firstArea = document.querySelector('.first-area');
        firstArea.innerHTML = '';
        console.log(firstArea.innerHTML)
        for (let i = 0; i < recipesL.length; i++) {
            let li = document.createElement('div');
            li.classList = 'li'
            // li.setAttribute('onclick','forLi()')
            li.innerHTML = `<div class="im"><img src="${apiJson.data.recipes[i].image_url}" alt=""></div>
                    <div class="text">
                    <div class="p-title">${apiJson.data.recipes[i].title}</div>
                    <div class="p-desc">${apiJson.data.recipes[i].publisher}</div>
                    </div>`
            firstArea.appendChild(li)
            // firstArea.style.height = 'auto'
            //  lii.push(li)
            lii.push({ element: li, data: recipesL[i] })
            //  forLi(lii)

            //  console.log(lii)
        }
        // let createlis = 
        console.log(lii, 'lii')
        let num = 0;
        lii.forEach((m) => {
            m.element.addEventListener('click', async () => {
                let recii = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${m.data.id}?key=8d488d17-fae0-474f-a48f-b7eab7d8c578`)
                let reciiJson = await recii.json();
                console.log(reciiJson.data.recipe, '========reci json')
                let secondArea = document.querySelector('.second-area');
                secondArea.innerHTML = '';
                let secondAreaChild = document.createElement('div');
                secondAreaChild.classList = 'second-area-child'
                secondAreaChild.innerHTML = ` <div class="main-img">
                <div class='cross'><i class="fa-solid fa-x"></i></div>
                        <div class="img-blend">

                        </div>
                        <img src="${m.data.image_url}" alt="">
                        <div class="skew">

                            <div class="skewdeg">
                                <h1>${m.data.title}</h1>
                            </div>
                        </div>
                    </div>
                    <div class="detailss">
                        <div class="det-item">
                            <div class="minutes">
                                <i id="icon-color" class="fa-regular fa-clock"></i>
                                <span>${reciiJson.data.recipe.cooking_time}</span> minutes
                            </div>

                            <div class="serving"><i id="icon-color" class="fa-solid fa-users"></i> <span>${reciiJson.data.recipe.servings}</span>
                                servings</div>
                        </div>
                        <div class="det-icon">
                            <div class="bookmark">
                                <i class="fa-regular fa-bookmark"></i>
                            </div>
                        </div>
                    </div>
                    <div class="ingredients">
                        <div class="ingredients-h2">
                            <h2>Recipe ingredients</h2>
                        </div>
                        <div class="ingredients-items">
                             <div class="ing-items-child">
                                
                            </div>
                        </div>
                    </div>`;
                let ingredientsItem = secondAreaChild.querySelector('.ing-items-child');
                reciiJson.data.recipe.ingredients.forEach(ingredient => {
                    let ingredientItem = document.createElement('li');

                    ingredientItem.innerHTML = `
                            <div class="check">
                                <i class="fa-solid fa-check"></i>
                                <span class='ing-color'>${ingredient.quantity ? ingredient.quantity : ''} ${ingredient.unit ? ingredient.unit : ''} ${ingredient.description}</span>
                            </div>
                            `;
                    ingredientsItem.appendChild(ingredientItem);
                    secondArea.classList.remove('none')
                });
                num = 1;
                secondArea.appendChild(secondAreaChild)
                let nav = document.querySelector('nav');
                let cross = secondArea.querySelector('.cross');
                cross.addEventListener('click', () => {
                    secondAreaChild.classList.add('none');
                    secondArea.classList.add('none')
                    firstArea.classList.remove('none');
                    nav.classList.remove('none')
                })

                // let empty = document.querySelector('.empty');
                let width = window.innerWidth;

                if (width < 500) {
                    secondArea.classList.add('none')
                    firstArea.classList.remove('none')
                    // empty.classList.add('none')
                    
                    if (num = 0) {
                        secondArea.classList.add('none')
                        firstArea.classList.remove('none')
                    } else {
                        firstArea.classList.add('none')
                        nav.classList.add('none')
                        secondArea.classList.remove('none')
                        cross.classList.remove('none')
                    }
                }
            })
        })
    }


    ubaid()

})




// function forli(){

// }
