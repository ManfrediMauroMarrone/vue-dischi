var app = new Vue({
    el: '#root',
    data: {

      dischi: [],

      genres: false

    },

    methods: {
      Change() {
          this.genres = true
        }

    },

    mounted() {
      axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((risposta) => {
        let disco = risposta.data.response
        this.dischi = disco

      });


    },

});
