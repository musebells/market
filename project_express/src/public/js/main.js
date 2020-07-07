import cart from './CartComp'
import products from './ProducComp'
import search from './FilterComp'
import error from './ErrorComp'
import top from "./HeaderComp";
import indexCont from "./ContentComp";
import foot from "./FooterComp";


const app = {
    el: '#app',
    components: {
        top,
        indexCont,
        cart,
        products,
        error,
        search,
        foot,

    },

    template: `<div>
    <top></top>
    <indexCont></indexCont>
    <foot></foot>
    <header>
        <div class="logo">Интернет-магазин</div>
        <div class="cart">
            <search></search>
            <cart ref="cart"></cart>
        </div>
    </header>
    <main>
        <products ref="products"></products>
        <error ref="error"></error>
    </main>
    </div>
        `,

    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                })
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
        deleteJson(url) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
    },
};

export default app;
