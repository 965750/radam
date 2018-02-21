new Vue({
    el: '#vue-app',
    data: {
        segzy: 'testoo',
        products: [
            {
                name: 'Produkt 1',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quis optio, architecto necessitatibus, minus blanditiis perspiciatis totam nam quia facere sit unde maiores laboriosam incidunt beatae fuga ex? Similique repudiandae vero unde fugiat error dignissimos hic quia doloribus, est eos ea, nostrum maxime consequuntur enim temporibus officia rem velit.Ratione!',
                cost: 129,
                img: 'img/512.jpg'
            },
            {
                name: 'Produkt 2',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quis optio, architecto necessitatibus, minus blanditiis perspiciatis totam nam quia facere sit unde maiores laboriosam incidunt beatae fuga ex? Similique repudiandae vero unde fugiat error dignissimos hic quia doloribus, est eos ea, nostrum maxime consequuntur enim temporibus officia rem velit.Ratione!',
                cost: 239,
                img: 'img/505.jpg'
            },
            {
                name: 'Produkt 3',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quis optio, architecto necessitatibus, minus blanditiis perspiciatis totam nam quia facere sit unde maiores laboriosam incidunt beatae fuga ex? Similique repudiandae vero unde fugiat error dignissimos hic quia doloribus, est eos ea, nostrum maxime consequuntur enim temporibus officia rem velit.Ratione!',
                cost: 239,
                img: 'img/510_M.jpg'
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
            //scrollTo
            
            var timerID = setInterval(function () {
                window.scrollBy(0, 12);

                if (window.pageYOffset >= offset - 50)
                    clearInterval(timerID);
            }, 5);
            //change select
            
            var sel = document.getElementById('sel');
            sel.value=nameOfProduct;

        },
    },
    computed: {

    }
});
