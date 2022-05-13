product = [{
        id: 1,
        name: "áo 2",
        price: 1000,
        sale: 10,
        liked: true,
        category: "ÁO",
        quantity: 200,
        img: "https://dongphuchaianh.com/wp-content/uploads/2019/08/nhung-hinh-anh-ao-lop-dep-nhat-03.jpg",
    },
    {
        id: 2,
        name: "áo 3",
        price: 1000,
        sale: 10,
        liked: true,
        category: "ÁO",
        quantity: 200,
        img: "https://dongphuchaianh.com/wp-content/uploads/2019/08/nhung-hinh-anh-ao-lop-dep-nhat-03.jpg",
    },
    {
        id: 3,
        name: "quần 1",
        price: 900,
        sale: 10,
        liked: false,
        category: "QUẦN",
        quantity: 50,
        img: "https://quanjogger.net/wp-content/uploads/2020/04/112.jpg",
    },
    {
        id: 4,
        name: "quần 2",
        price: 900,
        sale: 10,
        liked: true,
        category: "QUẦN",
        quantity: 700,
        img: "https://quanjogger.net/wp-content/uploads/2020/04/112.jpg",
    },
    {
        id: 5,
        name: "quần 3",
        price: 900,
        sale: 10,
        liked: false,
        category: "QUẦN",
        quantity: 100,
        img: "https://quanjogger.net/wp-content/uploads/2020/04/112.jpg",
    },
    {
        id: 6,
        name: "váy 1",
        price: 400,
        sale: 10,
        liked: true,
        category: "VÁY",
        quantity: 30,
        img: "https://cf.shopee.vn/file/8c67beb9b8e6dae8436b40d95e28a6e5",
    },
    {
        id: 7,
        name: "váy 2",
        price: 900,
        sale: 10,
        liked: false,
        category: "VÁY",
        quantity: 111,
        img: "https://cf.shopee.vn/file/8c67beb9b8e6dae8436b40d95e28a6e5",
    },
    {
        id: 8,
        name: "váy 3",
        price: 900,
        sale: 10,
        liked: false,
        category: "VÁY",
        quantity: 120,
        img: "https://cf.shopee.vn/file/8c67beb9b8e6dae8436b40d95e28a6e5",
    },
    {
        id: 9,
        name: "giày 1",
        price: 900,
        sale: 10,
        liked: false,
        category: "GIÀY",
        quantity: 100,
        img: "https://vn-live-01.slatic.net/p/8fc8b0949d42407908e0467ee45f21d5.jpg",
    },
    {
        id: 10,
        name: "giày 2",
        price: 900,
        sale: 10,
        liked: false,
        category: "GIÀY",
        quantity: 100,
        img: "https://vn-live-01.slatic.net/p/8fc8b0949d42407908e0467ee45f21d5.jpg",
    },
];
$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);
homeProduct = $(".home-product .grid__row ");
console.log(homeProduct);
product.forEach(function(pro, index) {
    homeProduct.innerHTML += `<div class="grid__column-2-4 keep">
        <a class="home-product-item" href="">
            <div class="home-product-item-img" style="background-image: url(${
              pro.img
            });">
            </div>
            <h5 class="home-product-item-name">${pro.name}</h5>
            <div class="home-product-item-price">
                <span class="home-product-item-price-old">${
                  pro.price
                } VND</span>
                <span class="home-product-item-price-current">${
                  pro.price * ((100 - pro.sale) / 100)
                } VND</span>
            </div>
            <div class="home-product-item__action">
                <span class="home-product-item__like"><i
                        class="fa-solid fa-heart"></i></span>
                <div class="home-product-item__rating">
                    <i class="home-product-item__star-gold fa-solid fa-star"></i>
                    <i class="home-product-item__star-gold fa-solid fa-star"></i>
                    <i class="home-product-item__star-gold fa-solid fa-star"></i>
                    <i class="home-product-item__star-gold fa-solid fa-star"></i>
                    <i class="home-product-item__star-gold fa-solid fa-star"></i>
                </div>
                <div class="home-product-item__sold"> ${
                  pro.quantity
                } Đã bán</div>

        </div>
        <div class="home-product-item__origin">
            <span class="home-product-item__brand">SuperShop</span>
            <span class="home-product-item__origin-name">VietNam</span>
        </div>
        <div class="home-product-item__favourite">
            <i class="fa-solid fa-check"></i>
            <span>Yêu thích</span>
        </div>
        <div class="home-product-item__sale-off">
            <span class="home-product-item__sale-off-percent">${
              pro.sale
            }%</span>
            <span class="home-product-item__sale-off-label">GIẢM</span>
        </div>
    </a>
</div>`;
});

// selectedCat = $('.catelory-item__link')
// console.log(selectedCat)

// keep = $$('.home-product .grid__row .keep ')
// selectedCat.onclick = function() {
//     for (var i = 0; i < keep.length; i++) {
//         homeProduct.removeChild($('.home-product .grid__row .keep '))
//     }
//     product.forEach(function(pro, index) {
//         if (pro.category == 'ÁO') {
//             homeProduct.innerHTML += `<div class="grid__column-2-4 keep">
//             <a class="home-product-item" href="">
//                 <div class="home-product-item-img" style="background-image: url(${pro.img});">
//                 </div>
//                 <h5 class="home-product-item-name">${pro.name}</h5>
//                 <div class="home-product-item-price">
//                     <span class="home-product-item-price-old">${pro.price} VND</span>
//                     <span class="home-product-item-price-current">${pro.price*((100-pro.sale)/100)} VND</span>
//                 </div>
//                 <div class="home-product-item__action">
//                     <span class="home-product-item__like"><i
//                             class="fa-solid fa-heart"></i></span>
//                     <div class="home-product-item__rating">
//                         <i class="home-product-item__star-gold fa-solid fa-star"></i>
//                         <i class="home-product-item__star-gold fa-solid fa-star"></i>
//                         <i class="home-product-item__star-gold fa-solid fa-star"></i>
//                         <i class="home-product-item__star-gold fa-solid fa-star"></i>
//                         <i class="home-product-item__star-gold fa-solid fa-star"></i>
//                     </div>
//                     <div class="home-product-item__sold"> ${pro.quantity} Đã bán</div>

//             </div>
//             <div class="home-product-item__origin">
//                 <span class="home-product-item__brand">SuperShop</span>
//                 <span class="home-product-item__origin-name">VietNam</span>
//             </div>
//             <div class="home-product-item__favourite">
//                 <i class="fa-solid fa-check"></i>
//                 <span>Yêu thích</span>
//             </div>
//             <div class="home-product-item__sale-off">
//                 <span class="home-product-item__sale-off-percent">${pro.sale}%</span>
//                 <span class="home-product-item__sale-off-label">GIẢM</span>
//             </div>
//         </a>
//     </div>`
//         }
//     })
// }