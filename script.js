const { createApp } = Vue

createApp({
  data() {
    return {
       toDoList: [

            {
                text: 'Fare la spesa',
                done: true,
            },
            {
                text: 'lavare i piatti',
                done: false,
            },
            {
                text: 'Spazzare',
                done: false,
            },
            {
                text: 'stendere i panni',
                done: false,
            },

        ],       

        newtext: '',

    }
},
         
    
    methods: {
        cancelEl(index){
            this.toDoList.splice(index, 1);
        },
    
        newToDo(){

        this.toDoList.push({
            text: this.newtext,
            done: false,
        })

              
        
       }
    }
    
}).mount('#app')
