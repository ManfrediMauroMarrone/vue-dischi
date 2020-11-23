var app = new Vue({
    el: '#root',
    data: {

      dischi: [],

    },

    methods: {
      getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }

    },

    mounted() {
      axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((risposta) => {
        let disco = risposta.data.response
        this.dischi = disco
        console.log(risposta);

      });


    },


});
