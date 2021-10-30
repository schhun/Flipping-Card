new Vue({
    el: "#flashcards-app",
    data: {
        cards:[
            {
                question:"What year was IUPUI founded?",
                answer:"1969",
                category:"history",
                flipped:false
            },
            {
                question:"What is 2+2?",
                answer:"Fish",
                category:"math",
                flipped:false
            },{
                question:"Is mayonnaise an instrument?",
                answer:"No",
                category:"science",
                flipped:false
            }
        ],
        question: "",
        answer: "",
        category: "",
    },
    methods: {
        submit: function(text) {
            var card = {
                question: this.question,
                answer: this.answer,
                category: this.category,
                flipped: false
            }

            this.cards.push(card);
            this.question = "";
            this.answer="";
        }
    }
})