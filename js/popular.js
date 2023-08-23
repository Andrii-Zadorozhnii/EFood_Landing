const burgers = [{
        id: 1,
        Image: './../images/Popular/Slider/cheesburgerWithSalad.jpeg',

        rating: 0,
        name: 'Cheeseburger With Salad',
        price: '18',
    },
    {
        id: 2,
        Image: './../images/Popular/Slider/beefBurger.png',
        rating: 0,
        name: 'Beef Burger',
        price: '15',
    },
    {
        id: 3,
        Image: './../images/Popular/Slider/RoyalChesburger.png',
        rating: 0,
        name: 'Royal Cheesburger',
        price: '16',
    },
    {
        id: 4,
        Image: './../images/Popular/Slider/blackBurger.png',
        rating: 0,
        name: 'Black Gamburger',
        price: '14',
    },
    {
        id: 5,
        Image: './../images/Popular/Slider/chickenBurger.png',
        rating: 0,
        name: 'Chicken Burger',
        price: '15',
    },
];

const pizza = [{
    id: 1,
    Image: 'https://api.pizzahut.io/v1/content/en-ca/ca-1/images/pizza/pizza.hawaiian.6c049fb1897c6f45f597dd1671fbd016.1.jpg',
    rating: 0,
    name: 'Hawaiian',
    price: '12',
    category: 'Classic Pizza',
  },
  {
    id: 2,
    Image: 'https://api.pizzahut.io/v1/content/en-ca/ca-1/images/pizza/pizza.pepperoni-lovers.69f7bdf7b6f50a87eb2886934fe0be9f.1.jpg',
    rating: 0,
    name: 'Pepperoni Lovers',
    price: '15',
    category: 'Classic Pizza',
  },
  {
    id: 3,
    Image: 'https://api.pizzahut.io/v1/content/en-ca/ca-1/images/pizza/pizza.meat-lovers.0eca41e1ef70793e60c2975447a6495c.1.jpg',
    rating: 0,
    name: 'Meat Lovers',
    price: '14',
    category: 'Classic Pizza',
  },
  {
    id: 4,
    Image: 'https://api.pizzahut.io/v1/content/en-ca/ca-1/images/pizza/pizza.canadian.67c22dc316f702bf4d992c667d22fbf0.1.jpg',
    rating: 0,
    name: 'Canadian',
    price: '13',
    category: 'Classic Pizza',
  },
  {
    id: 5,
    Image: 'https://api.pizzahut.io/v1/content/en-ca/ca-1/images/pizza/pizza.bbq-chicken.fca67baad9e87b442f101c1cc26e3ae2.1.jpg',
    rating: 0,
    name: 'BBQ Chicken',
    price: '16',
    category: 'Classic Pizza',
  }
]

const sandwich = [{
    id: 1,
    Image: 'https://hips.hearstapps.com/hmg-prod/images/delish-200511-seo-club-sandwich-h-14383-eb-1590780714.jpg?crop=0.671xw:1.00xh;0.123xw,0&resize=1200:*',
    rating: 0,
    name: 'Classic Club',
    price: '9',
    category: 'Classic Sandwich',
  },
  {
    id: 2,
    Image: 'https://ohsweetbasil.com/wp-content/uploads/How-to-make-the-best-BLT-recipe-4-scaled.jpg',
    rating: 0,
    name: 'BLT',
    price: '8',
    category: 'Classic Sandwich',
  },
  {
    id: 3,
    Image: 'https://neighborfoodblog.com/wp-content/uploads/2019/04/turkey-avocado-sandwich-3.jpg',
    rating: 0,
    name: 'Turkey Avocado',
    price: '10',
    category: 'Classic Sandwich',
  },
  {
    id: 4,
    Image: 'https://subwayaruba.com/wp-content/uploads/2019/05/sub6-veggie-delite.jpg',
    rating: 0,
    name: 'Veggie Delight',
    price: '7',
    category: 'Classic Sandwich',
  },
  {
    id: 5,
    Image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/1/RX-FNM_030111-Weeknight-Dinners-025_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539864691.jpeg',
    rating: 0,
    name: 'Italian Sub',
    price: '9',
    category: 'Classic Sandwich',
  }
]

const asianFood = [{
    id: 1,
    Image: 'https://drivemehungry.com/wp-content/uploads/2021/11/chicken-teriyaki-4.jpg',
    rating: 0,
    name: 'Chicken Teriyaki',
    price: '12',
    category: 'Japanese Cuisine',
  },
  {
    id: 2,
    Image: 'https://khinskitchen.com/wp-content/uploads/2023/03/beef-stir-fry-01.jpg',
    rating: 0,
    name: 'Beef Stir Fry',
    price: '14',
    category: 'Chinese Cuisine',
  },
  {
    id: 3,
    Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/1200px-Phat_Thai_kung_Chang_Khien_street_stall.jpg',
    rating: 0,
    name: 'Pad Thai',
    price: '11',
    category: 'Thai Cuisine',
  },
  {
    id: 4,
    Image: 'https://i.pinimg.com/1200x/34/81/36/3481363b08dc183e5ea06bbd6c6079d3.jpg',
    rating: 0,
    name: 'Sushi Platter',
    price: '18',
    category: 'Japanese Cuisine',
  },
  {
    id: 5,
    Image: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/10/Kung-Pao-Chicken-square-FS-39-new.jpg',
    rating: 0,
    name: 'Kung Pao Chicken',
    price: '13',
    category: 'Chinese Cuisine',
  }
]

const setMenu = [{
        id: 1,
        Image: 'https://s23209.pcdn.co/wp-content/uploads/2022/07/220602_DD_The-Best-Ever-Cheeseburger_267-500x500.jpg',

        rating: 0,
        name: 'Cheeseburger',
        price: '18',
    },
    {
        id: 2,
        Image: 'https://burgerurge.com.au/wp-content/uploads/2022/04/BostonCheese-300x300.jpg',
        rating: 0,
        name: 'Beef Burger',
        price: '15',
    },
    {
        id: 3,
        Image: 'https://haidasandwich.ca/wp-content/uploads/2021/02/IMG_0646.jpg',
        rating: 0,
        name: 'Royal Cheesburger',
        price: '16',
    },
    {
        id: 4,
        Image: 'https://media.express24.uz/r/:w/:h/LL1HLHtgNfN25gjzw4ZaA.jpg',
        rating: 0,
        name: 'Black Gamburger',
        price: '14',
    },
    {
        id: 5,
        Image: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2021-04-how-to-chicken-burgers%2F2021-04-19_ATK-52011',
        rating: 0,
        name: 'Chicken Burger',
        price: '15',
    },
]


function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <img class="slider-card__image" src="${product.Image}" alt="${product.name}">
        <div class="rating slider-card__rating" 
             onmousemove="highlightStars(event, ${product.id})"
             onmouseleave="resetStars(${product.id})">
          <span class="star" onclick="rate(${product.id}, 1)">&#9733;</span>
          <span class="star" onclick="rate(${product.id}, 2)">&#9733;</span>
          <span class="star" onclick="rate(${product.id}, 3)">&#9733;</span>
          <span class="star" onclick="rate(${product.id}, 4)">&#9733;</span>
          <span class="star" onclick="rate(${product.id}, 5)">&#9733;</span>
        </div>
        <h3 class="slider-card__name">${product.name}</h3>
        <p class="slider-card__price">$${product.price}</p>
        <button class="btn slider-card__button">Add to Cart</button>
    `;
    return productElement;
}

function highlightStars(event, productId) {
    const stars = document.querySelectorAll(`.product[data-id="${productId}"] .star`);
    const mouseX = event.clientX;

    stars.forEach((star, index) => {
        const starX = star.getBoundingClientRect().left;
        if (mouseX >= starX) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function resetStars(productId) {
    const stars = document.querySelectorAll(`.product[data-id="${productId}"] .star`);
    stars.forEach((star) => {
        star.classList.remove('active');
    });
}

async function rate(productId, stars) {
    const productElement = document.querySelector(`.product[data-id="${productId}"]`);
    const product = burgers.find((p) => p.id === productId);

    product.rating = stars;
    const starsElements = productElement.querySelectorAll('.star');
    starsElements.forEach((star, index) => {
        if (index < stars) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });

    try {
        const response = await fetch('URL_ВАШЕГО_СЕРВЕРА', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productId,
                stars
            }),
        });

        if (response.ok) {
            console.log('Рейтинг успешно отправлен на сервер.');
        } else {
            console.log('Ошибка при отправке рейтинга на сервер:', response.status);
        }
    } catch (error) {
        console.log('Произошла ошибка при отправке рейтинга:', error.message);
    }
}

function updateProducts(category) {
    const products = category;
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    products.forEach((product) => {
        const productElement = createProductElement(product);
        productElement.setAttribute('data-id', product.id);
        productsContainer.appendChild(productElement);
    });
}

const productsContainer = document.getElementById('products-container');
updateProducts(burgers);

const categoryButtons = document.querySelectorAll('.category-button');
categoryButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const selectedCategory = event.target.dataset.category;
        if (selectedCategory === 'burger') {
            updateProducts(burgers);
        } else if (selectedCategory === 'pizza') {
            updateProducts(pizza);
        } else if (selectedCategory === 'sandwich') {
            updateProducts(sandwich);
        } else if (selectedCategory === 'asianFood') {
            updateProducts(asianFood);
        } else if (selectedCategory === 'setMenu') {
            updateProducts(setMenu);
        }
    });
});