const top = {
    data(){
        return {
            userSearch: ''
        }
    },

    template: `
    <header class="header">
        <div class="container header-container">
            <div class="header-left">
                <a class="logo" href="#"><img src="img/logo.png" alt="logo"><p>BRAN<span>D</span></p></a>
                <details class="browse">
                   <summary>Browse</summary>
                      <div class="br-det">
                      <div class="tria"></div>
                       <h4 class="li-h">WOMEN</h4>
                       <ul> 
                           <li>Dresses</li>
                           <li>Tops</li>
                           <li>Sweaters/Knits</li>
                           <li>Jackets/Coats</li>
                           <li>Blazers</li>
                           <li>Denim</li>
                           <li>Leggings/Pants</li>
                           <li>Skirts/Shorts</li>
                           <li>Accessories</li>
                        </ul>
                        <h4 class="li-h">MEN</h4>
                        <ul>   
                           <li>Tees/Tank tops</li>
                           <li>Shirts/Polos</li>
                           <li>Sweaters</li>
                           <li>Sweatshirts/Hoodies</li>
                           <li>Blazers</li>
                           <li>Jackets/vests</li>
                       </ul>
                    </div>
                </details>
                    <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                        <input type="text" class="search-field" placeholder="Search for Items..." v-model="userSearch">
                        <button class="btn-search" type="submit">
                            <img src="img/search.png" alt="search">
                        </button>
                    </form>
            </div>
            <div class="header-right">
               <div class="my-acc">
                   <div class="cart-img">
                        <img src="img/cart.svg" alt="корзина">
                        <div class="cart-mega">
                            <div class="tria2"></div>
                            <div class="cart-item">
                                <a href="#"><img src="img/cart-mega1.png"></a>
                                <div class="short-about">
                                    <a href="#"><h4>REBOX ZANE</h4></a>
                                    <img src="img/stars.png">
                                    <p>1  x   $250</p>
                                </div>
                                <div class="x"><a href="#"><img src="img/X.png"></a></div>
                            </div>
                            <div class="cart-item">
                                <a href="#"><img src="img/cart-mega2.png"></a>
                                <div class="short-about">
                                    <a href="#"><h4>REBOX ZANE</h4></a>
                                    <img src="img/stars.png">
                                    <p>1  x   $250</p>
                                </div>
                                <div class="x"><a href="#"><img src="img/X.png"></a></div>
                            </div>
                            <div class="total">
                                <h4>TOTAL</h4>
                                <h4>$500.00</h4>
                            </div>
                            <a href="#" class="checkout">
                                <h4>CHECKOUT</h4>
                            </a>
                            <a href="#" class="go-to-cart">
                                <h4>GO TO CART</h4>
                            </a>
                       </div>
                    </div>
                    <a class="acc" href="#">My Account<img src="img/acc.png"></a>  
               </div>
            </div>
        </div>
        <nav>
            <div class="container">
                <ul class="menu">
                    <li><a class="menu-active" href="#">Home</a></li>
                    <li><a href="#">Man</a></li>
                    <li><a href="#">Women</a>
                        <div class="triangle"></div>
                        <div class="mega">
                            <div class="mega-flex">
                                <h4>Women</h4>
                                <ul class="mega-menu">
                                    <li><a href="#">Dresses</a></li>
                                    <li><a href="#">Tops</a></li>
                                    <li><a href="#">Sweaters/Knits</a></li>
                                    <li><a href="#">Jackets/Coats</a></li>
                                </ul>
                            </div>
                            <div class="mega-flex">
                                <h4>Women</h4>
                                <ul class="mega-menu">
                                    <li><a href="#">Dresses</a></li>
                                    <li><a href="#">Tops</a></li>
                                    <li><a href="#">Sweaters/Knits</a></li>
                                    <li><a href="#">Jackets/Coats</a></li>
                                    <li><a href="#">Blazers</a></li>
                                    <li><a href="#">Denim</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">Accoseriese</a></li>
                    <li><a href="#">Featured</a></li>
                    <li><a href="#">Hot Deals</a></li>
                </ul>
            </div>
        </nav>
    </header>
    `,
};
export default top;