categories = ["TẤT CẢ ", "ÁO", "QUẦN", "VÁY", "GIÀY"];
categories_list = $(".catelory-list");
categories.forEach(function(cat) {
    categories_list.innerHTML += `
    <li class="catelory-item ">
    <p class="catelory-item__link ">${cat}</p>
    </li>
`;
});

category_item = $$(".catelory-list .catelory-item ");
console.log(categories_list);
console.log(category_item);

category_item[0].classList.add("catelory-item-active");

keep = $$(".home-product .grid__row .keep ");
category_item.forEach(function(item, index) {
    // console.log(item)
    item.onclick = function() {
        keep = $$(".home-product .grid__row .keep ");
        $(".catelory-list .catelory-item-active").classList.remove(
            "catelory-item-active"
        );
        this.classList.add("catelory-item-active");
        for (var i = 0; i < keep.length; i++) {
            homeProduct.removeChild($(".home-product .grid__row .keep "));
        }

        tenproduct = categories[index];
        console.log(tenproduct);
        if (tenproduct == "TẤT CẢ ") {
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
        } else {
            //them
            product.forEach(function(pro, index) {
                keep = $$(".home-product .grid__row .keep ");

                // console.log(pro.category)
                if (pro.category == tenproduct) {
                    // console.log(pro.category)
                    // console.log(index)
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
                }
            });
        }
    };
});