const app = Vue.createApp({
    data() {
        return {
            products: null,
            maximum: 50,
            cart: [],
            style: {
                label: ["font-weight-bold", "me-2"],
                inputWidth: 60,
                sliderStatus: false,
            },
        };
    },
    mounted: function () {
        fetch("https://hplussport.com/api/products/order/price")
            .then((response) => response.json())
            .then((data) => {
                this.products = data;
            });
    },
    computed: {
        sliderState: function () {
            return this.style.sliderStatus ? "d-flex" : "d-none";
        },
    },
    methods: {
        before: function (el) {
            el.className = "d-none";
        },
        enter: function (el) {
            var delay = el.dataset.index * 100;
            setTimeout(function () {
                el.className =
                    "row d-flex mb-3 aligns-item-center animate__animated animate__fadeInRight";
            }, delay);
        },
        leave: function (el) {
            var delay = el.dataset.index * 100;
            setTimeout(function () {
                el.className =
                    "row d-flex mb-3 aligns-item-center animate__animated animate__fadeOutRight";
            }, delay);
        },
        addItem: function (params) {
            this.cart.push(params);
        },
    },
});

app.mount("#app");
