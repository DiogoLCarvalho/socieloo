//script contraste	

function contraste(caminho, contraste) {
    var link_css = caminho;


    if (getCookie2() == "contraste") {
        link_css = contraste; // se o valor do cookie capturado pela function getCookie2 for contraste, a variável link_css recebe como valor a folha de estilo contraste.css
    } else if (getCookie() == "default") {
        link_css = caminho;
    }

    $(document).ready(function () {

        // Id do HTML
        $("#ccontraste").click(function () {
            setCookie("contraste");//contraste é o nome do cookie criado e consequentemente o parâmetro value da function setCookie. Ao clicar no link com id contraste, será setado o valor contraste para o cookie criado e ele irá executar a função getCookie2.
            location.reload();
        });

        $("#ssemcontraste").click(function () {
            setCookie("default")
            location.reload();
        });

    });

    //<link rel=stylesheet href="contraste.css" type=text/css>
    $("head").append("<link rel=stylesheet href=" + " " + link_css + " " + "type=text/css>");//altera a folha de estilo da página

    function setCookie(value) {
        var data = new Date(); //new Date()cria um novo objeto de data com a data e hora atuais :
        data.setTime(data.getTime() + 600000);//O método setTime () define uma data e hora adicionando ou subtraindo um número especificado de milissegundos. getTime() retorna o número de milissegundos

        //cookies structure
        document.cookie = "contraste=" + value + "; expires=" + data.toUTCString() + "; path=/"; //path - caminho do cookie. path=/ - cookie disponível em todo o domínio.


    }
    //O método toUTCString () retorna um objeto de data como uma string, de acordo com o UTC.
    //Dica: o Universal Coordinated Time (UTC) é o horário definido pelo World Time Standard.
    //Observação: o horário UTC é igual ao horário GMT.

    function getCookie() {
        var cookie = document.cookie.split("=");

        return cookie[1];
    }

    function getCookie2() {
        var nameEQ = "contraste=";
        var ca = document.cookie.split(';');//armazena na variável ca um vetor ou matriz contendo a string do cookie, ignorando o ponto-e-virgula. A saída (eu acho) seria mais ou menos isso: ca = ["contraste=contraste", expires="valor que corresponda à data e tempo que o cookie expira", path=/]
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i]; //cria um loop na matriz ca (i = 0; i <ca.length; i ++) e lê cada valor c = ca [i]).
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return undefined;

    }


    //fim script contraste
}


export default {
    contraste: contraste
};
