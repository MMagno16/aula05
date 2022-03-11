function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
      listarFilmesNaTela(filmeFavorito);
    } else {
      console.error("O endereço que você adicionou é inválido");
    }
    document.getElementById("filme").value = "";
  }
  
  function listarFilmesNaTela(filme) {
      console.log(filme);
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  }
  
  var listaFilmes = [
    "https://lojasaraiva.vteximg.com.br/arquivos/ids/31762500/1011248210.jpg?v=637487414883400000",
    "https://images-na.ssl-images-amazon.com/images/I/91R8UTUu7FL.jpg",
    "https://cdn.europosters.eu/image/750/posters/rapunzel-group-i12669.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/poster_002_ffcbf145.png",
    "https://lumiere-a.akamaihd.net/v1/images/poster_cf6525c0.png?region=0%2C0%2C864%2C1280",
    "https://i.pinimg.com/originals/41/25/de/4125de91cadd8759d961aaf7cc72c4cd.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/lion_king_the_2019_la_ih_ptb_1000_x_1440_2baad78d.jpeg?region=0%2C0%2C1000%2C1440",
    "https://lumiere-a.akamaihd.net/v1/images/encanto_ka_bpo_pay1_ee2c2e0c.jpeg?region=0,225,1080,1046&width=960",
    "https://www.ocamundongo.com.br/wp-content/uploads/2018/01/viva-titulo-representatividade-poster-camundongo.jpg",
    "https://disneyplusbrasil.com.br/wp-content/uploads/2021/11/Red-Crescer-e-uma-Fera-Novo-Poster-691x1024.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71wfvHXxvYL.jpg"
  ];
  for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
  }
  