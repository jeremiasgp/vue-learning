new Vue({
  el: '#exercise',
  data: {
    clase: '',
    modelo: ''
  },
  methods: {
    startEffect: function() {
      var ef = this;
      setInterval(
        function() {
          ef.clase = ef.clase === 'shrink' ? 'highlight' : 'shrink';
        },
        2000
      );
    }
  }
});
