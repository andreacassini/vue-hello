const { createApp } = Vue;

createApp({
    data() {
      return {
        message: 'Hello World!',
        image: './mondo.jpg'
      }
    }
  }).mount('#app')