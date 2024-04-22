var app = new Vue({
    el: "article",
    data: {
        products: [
            { id: 1, title: "ВИНОГРАД СУВЕНІР ", short_text: "(масою 300 г)", image: "sajency-vinograd-suvenir-3-saj_1.jpg", desc: "Full desc" },
            { id: 2, title: "КИШМИШ ПРОМЕНИСТИЙ ", short_text: "(700-900 г) ", image: "vinograd-kishmish-luchistyy-3_1 (1).jpg", desc: "Full desc" },
            { id: 3, title: "МАКСІ ЧОРНИЙ ", short_text: "(масою до 4 г) ", image: "sajency-vinograd-maksi-cherniy-3-saj_1.jpg", desc: "Full desc" },
            { id: 4, title: "ПРЕОБРАЖЕННЯ ", short_text: "(досягає 1,5 кг )", image: "sajency-vinograd-preobrajenie-3-saj_1.jpg", desc: "Full desc" },
            { id: 5, title: "АРКАДІЯ ", short_text: "(400-500 г )", image: "vinograd-arkadiya_1.jpg", desc: "Full desc" }
        ]
    },
    mounted: function () {
        console.log(window.localStorage.getItem("prod"));
    },
    methods: {
        addItem: function (id) {
            window.localStorage.setItem("prod", id);
        }
    }
});
