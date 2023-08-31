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
                
        ]

            
    }
  }
}).mount('#app')
