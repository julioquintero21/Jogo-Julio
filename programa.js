//JOGO TROCA PALAVRAS 

      function TrocaPalavra(){
      palavraDigitada = document.getElementById("palavra").value

      document.getElementById("palavra_1").innerHTML = palavraDigitada
      document.getElementById("palavra_2").innerHTML = palavraDigitada
      document.getElementById("palavra_3").innerHTML = palavraDigitada
      document.getElementById("palavra_4").innerHTML = palavraDigitada
      document.getElementById("palavra_5").innerHTML = palavraDigitada
      document.getElementById("palavra_6").innerHTML = palavraDigitada
      
      
  }
  
//////


  function f_wanda(){
    fetch("http://localhost:3000/personagem")
        .then(response => {
            return response.json()
        }).then(wnadaJson => {
    
            console.log(wnadaJson)  
    
            document.getElementById("conteudo").innerHTML = " "
    
            
                document.getElementById("conteudo").innerHTML += 
                "<p> <b>Nome:</b> " + wnadaJson[0].nome +
                "<p> <b>Poder:</b> "+ wnadaJson[0].poder +"<p>"  +
                "<p> <b>Força:</b> "+ wnadaJson[0].forca +"<p>"  +
                "<p> <b>Habilidade:</b> "+ wnadaJson[0].habil +"<p>" +"<hr>"+"<hr>"+
                "<p></p>" + wnadaJson[0].gif
            
        });
    
    }

    function f_gamora(){
      fetch("http://localhost:3000/personagem")
          .then(response => {
              return response.json()
          }).then(wnadaJson => {
      
              console.log(wnadaJson)  
      
              document.getElementById("conteudo").innerHTML = " "
      
              
                  document.getElementById("conteudo").innerHTML += 
                  "<p> <b>Nome:</b>" + wnadaJson[1].nome +
                  "<p> <b>Poder:</b> "+ wnadaJson[1].poder +"<p>"  +
                  "<p> <b>Força:</b> "+ wnadaJson[1].forca +"<p>"  +
                  "<p> <b>Habilidade:</b> "+ wnadaJson[1].habil +"<p>" +"<hr>"+"<hr>"+
                  "<p></p>" + wnadaJson[1
                ].gif 
              
          });
      
      }

      function f_viuva(){
        fetch("http://localhost:3000/personagem")
            .then(response => {
                return response.json()
            }).then(wnadaJson => {
        
                console.log(wnadaJson)  
        
                document.getElementById("conteudo").innerHTML = " "
        
                
                    document.getElementById("conteudo").innerHTML += 
                    "<p> <b>Nome:</b> " + wnadaJson[2].nome +
                    "<p> <b>Poder:</b> "+ wnadaJson[2].poder +"<p>"  +
                    "<p> <b>Força:</b> "+ wnadaJson[2].forca +"<p>"  +
                    "<p> <b>Habilidade:</b> "+ wnadaJson[2].habil +"<p>" +"<hr>"+"<hr>"+
                    "<p></p>" + wnadaJson[2].gif  
                
            });
        
        }

        function f_shuri(){
          fetch("http://localhost:3000/personagem")
              .then(response => {
                  return response.json()
              }).then(wnadaJson => {
          
                  console.log(wnadaJson)  
          
                  document.getElementById("conteudo").innerHTML = " "
          
                  
                      document.getElementById("conteudo").innerHTML += 
                      "<p> <b>Nome:</b> " + wnadaJson[3].nome +
                      "<p> <b>Poder:</b> "+ wnadaJson[3].poder +"<p>"  +
                      "<p> <b>Força:</b> "+ wnadaJson[3].forca +"<p>"  +
                      "<p> <b>Habilidade:</b> "+ wnadaJson[3].habil +"<p>" +"<hr>"+"<hr>"  +
                      "<p></p>" + wnadaJson[3].gif
                  
              });
          
          }

          function f_visao(){
            fetch("http://localhost:3000/personagem")
                .then(response => {
                    return response.json()
                }).then(wnadaJson => {
            
                    console.log(wnadaJson)  
            
                    document.getElementById("conteudo").innerHTML = " "
            
                    
                        document.getElementById("conteudo").innerHTML += 
                        "<p> <b>Nome:</b> " + wnadaJson[4].nome +
                        "<p> <b>Poder:</b> "+ wnadaJson[4].poder +"<p>"  +
                        "<p> <b>Força:</b> "+ wnadaJson[4].forca +"<p>"  +
                        "<p> <b>Habilidade:</b> "+ wnadaJson[4].habil +"<p>" +"<hr>"+"<hr>" +
                        "<p></p>" + wnadaJson[4].gif 
                    
                });
            
            }

            function f_thor(){
              fetch("http://localhost:3000/personagem")
                  .then(response => {
                      return response.json()
                  }).then(wnadaJson => {
              
                      console.log(wnadaJson)  
              
                      document.getElementById("conteudo").innerHTML = " "
              
                      
                          document.getElementById("conteudo").innerHTML += 
                          "<p> <b>Nome:</b> " + wnadaJson[5].nome +
                          "<p> <b>Poder:</b> "+ wnadaJson[5].poder +"<p>"  +
                          "<p> <b>Força:</b> "+ wnadaJson[5].forca +"<p>"  +
                          "<p> <b>Habilidade:</b> "+ wnadaJson[5].habil +"<p>" +"<hr>"+"<hr>" +
                          "<p></p>" + wnadaJson[5].gif 
                      
                  });
              
              }

              function f_hulk(){
                fetch("http://localhost:3000/personagem")
                    .then(response => {
                        return response.json()
                    }).then(wnadaJson => {
                
                        console.log(wnadaJson)  
                
                        document.getElementById("conteudo").innerHTML = " "
                
                        
                            document.getElementById("conteudo").innerHTML += 
                            "<p> <b>Nome:</b> " + wnadaJson[6].nome +
                            "<p> <b>Poder:</b> "+ wnadaJson[6].poder +"<p>"  +
                            "<p> <b>Força:</b> "+ wnadaJson[6].forca +"<p>"  +
                            "<p> <b>Habilidade:</b> "+ wnadaJson[6].habil +"<p>" +"<hr>"+"<hr>" +
                            "<p></p>" + wnadaJson[6].gif 
                        
                    });
                
                }

                function f_stranger(){
                  fetch("http://localhost:3000/personagem")
                      .then(response => {
                          return response.json()
                      }).then(wnadaJson => {
                  
                          console.log(wnadaJson)  
                  
                          document.getElementById("conteudo").innerHTML = " "
                  
                          
                              document.getElementById("conteudo").innerHTML += 
                              "<p> <b>Nome:</b> " + wnadaJson[7].nome +
                              "<p> <b>Poder:</b> "+ wnadaJson[7].poder +"<p>"  +
                              "<p> <b>Força:</b> "+ wnadaJson[7].forca +"<p>"  +
                              "<p> <b>Habilidade:</b> "+ wnadaJson[7].habil +"<p>" +"<hr>"+"<hr>"+
                              "<p></p>" + wnadaJson[7].gif  
                          
                      });
                  
                  }
   

////////

//inicializa as casas com nove para sabermos que nõ foi clicado
var casas = [9, 9, 9, 9, 9, 9, 9, 9, 9];
//indica a vez do jogador - (1) xis (-1) bola
var vez = 1;
//conta quantos cliques foram dados durante o jogo 
var contaclique = 0;
//Placar
var iPontosX = 0;
var iPontosO = 0;
var iPontosV = 0;
var sResposta = "";

//Função que verifica as jogadas 
function verifica(casa) {
//verifica se a casa não foi clicada.
if(casas[casa]== 9){
//Modifica de 9 para o valor do jogador da vez 
casas [casa]=vez; 
//se o jogador da vez for 1, coloca o desenho do xis
if(vez==1){
document.getElementById("img"+casa).src="imagens/xis.jpg"; //se o jogador for -1, coloca o desenho da bola
}else{
document.getElementById("img"+casa).src="imagens/bola.jpg";
} 
//inverte o jogador da vez
vez*=-1;
contaclique++; 
//confere se houve vencedor
confere();
    }
}

//Função que testa se houve vencedor 
function confere() {
    var i;
    //Variável que marca se houve ganhador
    var lGanhou = false;
    //Variável que marca se o jogo acabou (todas casas clicadas)
    var lAcabou = true;
    //percorre todas as casas para verificar se ainda existe alguma não clicada
    for (i=0; i<casas.length; i++) {
    if(casas [i] == 9){ 
    //se houver, sabemos que ainda não deu velha
    lAcabou=false;
        }
    }
    //se a quantidade de cliques forem 9, o jogo acabou
    if(contaclique==9){
    lAcabou=true;
    }
    //Realiza a soma de cada coluna, Linha e diagonal e coloca o valor num vetor
    var Soma = [];
    Soma [0]=casas [0]+casas [1]+casas [2]; //tinha 1
    Soma [1]=casas [3]+casas [4]+casas [5]; //Linha 2
    Soma [2]=casas [6]+casas [7]+casas [8]; //linha 3 
    Soma [3]=casas [0]+casas [3]+casas [6]; //coluna 1
    Soma [4]=casas [1]+casas [4]+casas [7]; //coluna 2
    Soma [5]=casas [2]+casas [5]+casas [8]; //coluna 3 
    Soma [6]=casas [0]+casas [4]+casas [8]; //diagonal 1
    Soma [7]=casas [2]+casas [4]+casas [6]; //diagonal 2
    //percorre todos os valores de soma
    for (i=0; i<Soma.length; i++){
    //se achou uma soma (-3) é porque a bola ganhou 1Ganhou= true; iPontos0++;
    if(Soma [i]==-3){
    lGanhou= true;
    sResposta = "Bolinha GANHOU!!!";
    iPontosO++;
    document.getElementById("bola").innerHTML = "PONTOS O: " + iPontosO;
    break;

    //se achou uma soma (3) é porque o xis ganhou
    }else if(Soma[i] == 3){
        lGanhou = true;
        sResposta = "Xis GANHOU!!!";
        iPontosX++;
    document.getElementById("xis").innerHTML = "PONTOS X: " + iPontosX;
    }
}
//se a bola e nem xis ganharam, mas o jogo acabou, é porquê deu velha
if(lGanhou == false && lAcabou == true) {   
        sResposta = "Deu VELHA!!!";
        iPontosV++
        document.getElementById("velha").innerHTML = "VELHA...: " + iPontosV;
}
//se alguêm ganhou ou o jogo acabou
if(lGanhou || lAcabou) {
    //desabilita todas as casas para não serem mais clicadas
    for(i = 0; i < casas.length; i++) {
        document.getElementById("casa" + i).disable = true;
        casas[i] = 0;
    }
    //exibe o resultado
    document.getElementById("resposta").innerHTML = sResposta;
    //muda cor da letra
    document.getElementById("resposta").style.color = "#ffc400";
    //muda o tamanho do texto
    document.getElementById("resposta").style.fontSize = "xx-large";
    //window.confirm(sResposta)
    }
}

/****************************************************************/
//Função que recomeça todo o jogo
function recomeca() {
    for(i = 0; i < casas.length; i++) {
        //não permite arrastar a imagem
        document.getElementById("img" + i).ondragstart = function() {return false; };
        //habilita as casas
        document.getElementById("casa" + i).disable = false;
        //remove as imagens
        document.getElementById("img" + i).src = "";
        //volta configuração original
        document.getElementById("resposta").innerHTML = "RESULTADO:"
        document.getElementById("resposta").style.color = "#f5ff00";
        document.getElementById("resposta").style.fontSize = "20px";
        //restaura os 9 das casas
        casas[i] = 9;
        lGanhou = false;
        lAcabou = true;
        contaclique = 0;
        vez = 1;
    }
}

///JOGODA FORCA
var sPerguntas=[["CARAMBOLA" , "FRUTA"], ["JABUTICABA", "FRUTA"],
        ["JAMBO" ,"FRUTA"], ["CUPUAÇU" ,"FRUTA"],
        ["PITOMBA", "FRUTA"], ["FORTALEZA", "CIDADE"],
        ["HOLAMBRA", "CIDADE"], ["TERESOPOLIS", "CIDADE"],
        ["HORTOLÂNDIA", "CIDADE"], ["CARAPICUIBA", "CIDADE"],
        ["ALICATE", "FERRAMENTA"], ["MARTELO", "FERRAMENTA"],
        ["SERRA TICO-TICO", "FERRAMENTA"], ["FORMÃO","FERRAMENTA"],
        ["CHAVE DE FENDA", "FERRAMENTA"], ["ALMOFADA" ,"OBJETO"],
        ["JORNAL" ,"OBJETO"], ["BOLSA" ,"OBJETO"],
        ["PALITO DE DENTE", "OBJETO"] , ["CHURRASQUEIRA" ,"OBJETO"],["STROGONOFF", "COMIDA"], ["LASANHA", "COMIDA"],
        ["MACARRONADA", "COMIDA"], ["FRANGO XADREZ" ,"COMIDA"],
        ["CANELONE", "COMIDA"], ["AEROWILLYS" ,"CARRO"],
        ["SANTANA" ,"CARRO"], ["VARIANT" ,"CARRO"],
        ["RENEGATE" ,"CARRO"], ["VIRTUS" ,"CARRO"],
        ["ROSA", "FLOR"], ["GERBERA", "FLOR"],
        ["CALANCHUE", "FLOR"], ["ORQUIDEA", "FLOR"],
        ["LIRIO", "FLOR"], ["VIOLÃO", "INSTRUMENTO MUSICAL"],
        ["SAXOFONE", "INSTRUMENTO MUSICAL"], ["UKULELE", "INSTRUMENTO MUSICAL"],
        ["ESCALETA", "INSTRUMENTO MUSICAL"], ["TROMBONE", "INSTRUMENTO MUSICAL"],
        ["ADAM SANDLER", "ATOR"], ["WILL SMITH" ,"ATOR"],
        ["JOHNNY DEPP", "ATOR"], ["BRAD PITT" ,"ATOR"],
        ["DWAYNE JOHNSON", "ATOR"], ["JULIA ROBERTS" ,"ATRIZ"],
        ["MERYL STREEP", "ATRIZ"], ["BRIE LARSON" ,"ATRIZ"],
        ["SCARLETT JOHANSSON", "ATRIZ"], ["ZOE SALDANA" ,"ATRIZ"],
        ["PATO DONALD", "PERSONAGEM"], ["HOMEM DE FERRO", "PERSONAGEM"],
        ["CAPITÃO AMÉRICA", "PERSONAGEM"], ["CORINGA", "PERSONAGEM"],
        ["AQUAMAN", "PERSONAGEM"], ["SPACE INVADERS", "JOGOS"],
        ["PAC-MAN", "JOGOS"], ["HALF-LIFE", "JOGOS"], 
        ["CALL OF DUTY", "JOGOS"], ["MINECRAFT", "JOGOS"]];

//Matriz para fazer o shuffle 
var iSorteados = [];
//Conto a quantidade de jogadas feitas para buscar no vetor de Sorteados
var iJogada = 0;
//Armazena a palavra da vez 
var sPalavraSorteada;
//Conto as Letras certas var 
var iAcertos = 0;
//Conto as letras erradas
var iErro = 0;
//Guarda a letra clicada para poder desabilitá-la 
var cLetraClicada = "";
//Vetor com as letras do teclado para facilitar a busca do Id 
var sLetras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-'];
//Vartarets que contan os acertos erros 
var iCertas = 0, iErradas = 0;
// Função para criar os espaços das letras
function criaLetras(sPalavra){
//Busca o formulario 
var formula = document.getElementById("tenta");
var j = 0; 
console.log("PALAVRA: " + sPalavra);
//for do tamanho da palavra 
for (var i = 0; i < sPalavra.length; i++) {
//Se for diferente de espaço (32)
if(sPalavra[i].charCodeAt(0)!=32) {
//Cria um INPUT
var letra = document.createElement("input");
//Define os atributos para o INPUT
//Tipo
letra.setAttribute("type","text");
//Name
letra.setAttribute("name", "tenta" + j);
//id
letra.setAttribute("id", "tenta" + j);
//Tamanho máximo 
letra.setAttribute("maxlength", 1);
//Tamanho de exibição 
letra.setAttribute("size", 1);
//Desabilita a edição 
letra.setAttribute("disabled", true);
//Adiciona o INPUT no FORMULARIO
formula.appendChild(letra);
j++;
}else{
//Quando for espaço, ele separa 20px a esquerda
//e 1px a direita do input anterior 
document.getElementById("tenta" + (j-1)).style.margin = "0px 20px 0px 1px";
    }
}
//Remove todos os espaços e acentos
sPalavraSorteada = limpa(sPalavra);
//Exibe o tema e a quantidade de letras 
document.getElementById("tema").innerHTML = sPerguntas [iSorteados [iJogada]][1]+ " - "+sPalavraSorteada.length+" letras";
}
/*******************************************************************************/
// Função que confere a letra clicada 
function sorteia(){
//Insere os números dentro do vetor conforme a quantidade de itens da matriz 
for (var m = 0; m < sPerguntas.length; m++){ 
    iSorteados.push(m); 
}
//Faz a mistura 
iSorteados = shuffleArray(iSorteados);
//Chama a função que separa as letras das palavras
criaLetras(sPerguntas[iSorteados[iJogada]][0]);
}
/*******************************************************************************/
// Função que confere a letra clicada
function Confere(cLetra){
    //Atribui a letra a uma variável global
    cLetraClicada = cLetra;
    //Cria variável que definirá se a letra foi encontrada na palavra 
    var lAchou = false;
    //Percorre as Letras da palavra sorteada 
    for (var i = 0; i < sPalavraSorteada.length; i++){
        //Se a letra clicada, existir na palavra 
        if(cLetra == sPalavraSorteada.charAt(i)){
            //Insere a exibição da letra 
            document.getElementById("tenta" + i).value = cLetra;
            //Conta acertos
            iAcertos++;
            //Exibe acertos
            document.getElementById("acerto").innerHTML = "ACERTOS: " + iAcertos;
            //Indica que achou a letra na palavra 
            lAchou = true;
        }
    }
    //Se não achou a letra 
    if(lAchou == false) {
        //Conta o erro
        iErro++;
        //insere a imagem conforme a quantidade de erro
        document.getElementById("imagem").src="imagens/forca"+(iErro+1)+".png";
    }
}
/********************************************************************************/
/*Função que verifica se o jogo acabou*/
function acabou(){
    //Cria variável que indicará se o jogo acabou 
    var lAcabou = false;
    //se a quantidade de acertos for igual ao tamanho da palavra
    if(iAcertos == sPalavraSorteada.length) {
        //0 jogo acabou
        lAcabou = true;
        //Exibe a mensagem
        alert("PARABÉNS, VOCÊ CONSEGUIU!!!!");
        iCertas++;
    //Se a quantidade de letras erradas chegou a 6
    }else if(iErro == 6){
        //0 jogo acabou
        lAcabou = true;
        //Exibe a mensagem 
        alert("ENFORCADO!!!!!");
        //document.getElementById("forca").addEventListener(
        //"mouseover", shakeme, false); 
        iErradas++;
    }
    //Desabilita a letra clicada
    document.getElementById(cLetraClicada).disabled = true;
    //Se o Jogo acabou
    if(lAcabou) {
        //Remove todos os INPUTS
        for (var i=0; i < sPalavraSorteada.length; i++) { 
            document.getElementById("tenta" + i).remove();
        }
        //Incrementa Jogadas para ir para próxima palavra 
        iJogada++;
        //Exibe quantidade de palavras jogadas CERTAS e ERRADAS
        document.getElementById("palcerta").innerHTML= "PALAVRAS CERTAS: " +
        iCertas + "<br>PALAVRAS ERRADAS: " + iErradas
        //Chama função que criará novo jogo 
        criaLetras(sPerguntas[iSorteados[iJogada]][0]);
        //Inicializa variáveis
        iAcertos = 0;
        iErro = 0;
        document.getElementById("acerto").innerHTML="ACERTOS: " + iAcertos;
        //Volta imagem da forca        
        document.getElementById("imagem").src="imagens/forca"+(iErro+1)+".png";
        //Habilita todas as letras
        for (var i=0; i < sLetras.length; i++) {
            document.getElementById(sLetras[i]).disabled = false;
        }
    }
}
/*******************************************************************************/
    //Função que mistura os valores do Array
    function shuffleArray(d) {
    for (var c = d.length - 1; c > 0; c--) {
    var b = Math.floor(Math.random() * (c + 1));
    var a = d[c];
    d[c] = d[b];
    d[b]= a;
    }
    return d;
}
/*******************************************************************************/
    //Função para tirar espaços e acentos
    function limpa(sItem) {
    var sResultado = sItem;
    //Retira todos os espaços 
    sResultado = replaceAll(sResultado," ","");
    //Retira todos os acentos e cedilhas
    //O método normalize do JavaScript, serve para converter uma string
    //em seu formato Unicode normalizado. Neste caso utilizamos o parâmetro
    //NFD que é capaz de separar os acentos das letras e retornar seus
    //códigos Unicode.
    //Em seguida o método replace substitui todas as ocorrências de
    //caracteres diacriticos, combinando-os na sequencia Unicode \u8380 - \u836F.
    // VEJA: https://metring.com.br/javascript-substituir-caracteres-especiais
    sResultado = sResultado.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); return sResultado;
}
/*******************************************************************************/
//Função para substituir todas as ocorrências
function replaceAll(str, de, para){
    //Procura a ocorrência
    var pos = str.indexOf(de);
    //Se achou
    while (pos > -1) {
    //substitui
    str = str.replace(de, para);
    //e procura novamente a ocorrência
    pos = str.indexOf(de);
    }
    //retorna a string sem acentos e espaços
    return (str);
}

/*******************************************************************************/
function shake(e, oncomplete, distance, time) {
    var time = 500;
    var distance = 5;

    var start = (new Date()).getTime();
    animate();

    function animate() {
        var now = (new Date()).getTime();
        // Get current time
        var elapsed = now - start;
        // How long since we started
        var fraction = elapsed / time;
        // What fraction of total time?
        if (fraction < 1) {
            var x = distance * Math.sin(fraction * 4 * Math.PI);
            e.style.left = x + "px";
            // We're aiming for a smooth 40 frames/second animation.
            setTimeout(animate, Math.min(25, time - elapsed));
        } else {
            // Otherwise, the animation is complete
            if (oncomplete) oncomplete(e); 
            // Invoke completion callback
        }
    }
}
    function shakeme(event1) {
    shake(event1.target);
}