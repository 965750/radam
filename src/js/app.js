new Vue({
    el: '#vue-app',
    data: {
        buy: true,
        empty: true,
        fullCost: 100,
        cardCount: 0,
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
        card: [
            
        ],
    },
    methods: {
        changeBuy: function() {
            this.buy = !this.buy;
            
            var ord = document.getElementById("ord");
            var shop = document.getElementById("shop");
            
            if( this.buy == true){
                shop.classList.add("activeNav");
                ord.classList.remove("activeNav");
                
            } else {
                ord.classList.add("activeNav");
                shop.classList.remove("activeNav");      
            }
        },
        deleteProduct: function (index) {

            this.cardCount -= 1;

            this.fullCost = this.fullCost - this.card[index].price;
            this.fullCost = Math.round(this.fullCost * 100) / 100;
            this.card.splice(index, 1);
            
            if (this.cardCount == 0) {
                this.empty = true;
                this.fullCost = 0;
            }

        },
        readRefs: function () {

        },
        checkPrice: function(index, category){
            
            alert(category);
            this.cardCount += 1;
            this.empty = false;
            this.fullCost = this.fullCost + this.productsChemia[index].cost;
            alert(this.fullCost);
            this.fullCost = Math.round(this.fullCost * 100) / 100;
            
            
            this.card.push({
                index: index,
                price: this.category[index].cost,
                name: this.category[index].name
            });
            
            
        },
        buyScroll: function (nameOfProduct) {

            //offset = windowY
            
            var ele = document.getElementById("orderForm");
            var bodyRect = document.body.getBoundingClientRect(),
                elemRect = ele.getBoundingClientRect(),
                offset = elemRect.top - bodyRect.top;
            console.log(offset);

            //scrollTo

            //var timerID = setInterval(function () {
                //if (window.pageYOffset >= offset - 80) {
                  //  clearInterval(timerID);
                //} else {

                  //  window.scrollBy(0, 10);
                    //setTimeout(function () {
                      //  clearInterval(timerID);
                    //}, 1500);
                //}
            //}, 5);
            //window.addEventListener("scroll", function () {

            //});

            //change select

            var sel = document.getElementById('sel');
            sel.value = nameOfProduct;
        },
        categoryChemia: function () {
            this.chemia = true;
            this.maszyny = false;
            this.serwis = false;
        },
        categoryMaszyny: function () {
            this.chemia = false;
            this.maszyny = true;
            this.serwis = false;
        },
        categorySerwis: function () {
            this.chemia = false;
            this.maszyny = false;
            this.serwis = true;
        },
    },
    computed: {

    }
});
