new Vue({
    el: '#vue-app',
    data: {
        chemia: true,
        maszyny: false,
        serwis: false,
        productsChemia: [
            {
                name: 'Produkt 1 - chemia',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quis optio, architecto necessitatibus, minus blanditiis perspiciatis totam nam quia facere sit unde maiores laboriosam incidunt beatae fuga ex? Similique repudiandae vero unde fugiat error dignissimos hic quia doloribus, est eos ea, nostrum maxime consequuntur enim temporibus officia rem velit.Ratione!',
                cost: 29,
                img: 'img/512.jpg',
            },
            {
                name: 'Produkt 3 - chemia',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quis optio, architecto necessitatibus, minus blanditiis perspiciatis totam nam quia facere sit unde maiores laboriosam incidunt beatae fuga ex? Similique repudiandae vero unde fugiat error dignissimos hic quia doloribus, est eos ea, nostrum maxime consequuntur enim temporibus officia rem velit.Ratione!',
                cost: 39,
                img: 'img/510_M.jpg',
            },
        ],
        productsMaszyny: [
            {
                name: 'Produkt 1 - maszyny',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quis optio, architecto necessitatibus, minus blanditiis perspiciatis totam nam quia facere sit unde maiores laboriosam incidunt beatae fuga ex? Similique repudiandae vero unde fugiat error dignissimos hic quia doloribus, est eos ea, nostrum maxime consequuntur enim temporibus officia rem velit.Ratione!',
                cost: 129,
                img: 'img/512.jpg',
            },
            {
                name: 'Produkt 2 - maszyny',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quis optio, architecto necessitatibus, minus blanditiis perspiciatis totam nam quia facere sit unde maiores laboriosam incidunt beatae fuga ex? Similique repudiandae vero unde fugiat error dignissimos hic quia doloribus, est eos ea, nostrum maxime consequuntur enim temporibus officia rem velit.Ratione!',
                cost: 239,
                img: 'img/505.jpg',
            },
            {
                name: 'Produkt 3 - maszyny',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quis optio, architecto necessitatibus, minus blanditiis perspiciatis totam nam quia facere sit unde maiores laboriosam incidunt beatae fuga ex? Similique repudiandae vero unde fugiat error dignissimos hic quia doloribus, est eos ea, nostrum maxime consequuntur enim temporibus officia rem velit.Ratione!',
                cost: 239,
                img: 'img/510_M.jpg',
            },
        ],
        productsSerwis: [
            {
                name: 'Produkt 1 - serwis',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quis optio, architecto necessitatibus, minus blanditiis perspiciatis totam nam quia facere sit unde maiores laboriosam incidunt beatae fuga ex? Similique repudiandae vero unde fugiat error dignissimos hic quia doloribus, est eos ea, nostrum maxime consequuntur enim temporibus officia rem velit.Ratione!',
                cost: 929,
                img: 'img/512.jpg',
            },
        ],
    },
    methods: {
        readRefs: function () {

        },
        buyScroll: function (nameOfProduct) {

            //offset = windowY

            var ele = document.getElementById("orderForm");
            var bodyRect = document.body.getBoundingClientRect(),
                elemRect = ele.getBoundingClientRect(),
                offset = elemRect.top - bodyRect.top;
            console.log(offset);

            //scrollTo

            var timerID = setInterval(function () {
                if (window.pageYOffset >= offset - 80) {
                    clearInterval(timerID);
                } else {

                    window.scrollBy(0, 10);
                    setTimeout(function () {
                        clearInterval(timerID);
                    }, 1500);
                }
            }, 5);
            window.addEventListener("scroll", function () {

            });

            //change select

            var sel = document.getElementById('sel');
            sel.value = nameOfProduct;
        },
        categoryChemia: function () {
            this.chemia = true;
            this.maszyny = false;
            this.serwis = false;

            if (this.products.category == 1) {
                this.products.show = true;
            } else {
                this.products.show = true;
                console.log('chemia2');
            }
        },
        categoryMaszyny: function () {
            this.chemia = false;
            this.maszyny = true;
            this.serwis = false;

            if (this.products.category == 2) {
                this.products.show = true;
            } else {
                this.products.show = true;
                console.log('maszyny2');
            }
        },
        categorySerwis: function () {
            this.chemia = false;
            this.maszyny = false;
            this.serwis = true;

            if (this.products.category == 3) {
                this.products.show = true;
            } else {
                this.products.show = true;
                console.log('ser2');
            }
        },
    },
    computed: {

    }
});
