var app = new Vue({
    el: '#root',
    data: {

      dischi: [],

      genres: [],

      selectedGenre: '',

    },

    methods: {
      change() {

      }

    },

    mounted() {
      axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((risposta) => {
        let disco = risposta.data.response
        this.dischi = disco

        this.dischi.forEach((disco) => {
          if (!this.genres.includes(disco.genre)) {
            this.genres.push(disco.genre);
          }
        });

        this.dischi.sort(function(disco1, disco2){
          return parseInt(disco1.year) - parseInt(disco2.year)
        })

      });


    },

});
