const { createApp } = Vue

createApp({
  data() {
    return {
       toDoList: [

            {
                text: 'Fare la spesa',
                done: false,
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
            
            this.newtext = ''
       },

       doneEl(index){
                
        this.toDoList[index].done ? this.toDoList[index].done = false : this.toDoList[index].done = true;
       }
    }
    
}).mount('#app')
