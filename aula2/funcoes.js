var ctxCabecalho;
var ctxLinks;
var ctxConteudo;
var ctxRodape;

function configEstiloCabecalho()
{
    bg = document.getElementById("corFundo").value;
    corFonte = getElementById("corFonte").value;
    tamFonte = getElementById("tamFonte").value;
    ctxCabecalho = "#cabecalho{\n background-color:"+bg+";\n";
    ctxCabecalho += "color:"+corFonte+";\n";
    ctxCabecalho += "font-size:"+tamFonte+"pt;\n}\n";
    return ctxCabecalho;
}

function configEstiloLinks()
{
    corLink = document.getElementById("corLinks").value;
    estiloLinks = document.querySelector('input[name="estiloLinks"]:checked').value;
    ctxLinks = "a{\n color:"+corLink+";\n";
    let aux = estiloLinks=="0"?"none":"underline";
    ctxLinks += "text-decoration:"+aux+";\n}\n";
    return ctxLinks;
}

function configHTMLCabecalho()
{
    let aux = document.querySelector("#textoCabecalho").value;
    ctxCabecalho = '<h1>'+aux+'</h1>';
    return ctxCabecalho;
}

function gerarCodigo()
{
    //codigo css
    let codeCSS = document.querySelector("#codeCSS");
    let css = configEstiloCabecalho();
    css += configEstiloLinks();
    codeCSS.value = css;
    
    //codigo html
    let codeHTML = document.querySelector("#codeHTML");
    ctxHTML = "<html>\n<head>\n" +
            "<link rel='stylesheet' href = 'estilo.css'>\n" +
            "<title>Minha Página</title>\n" +
            "</head>\n<body>" +
            "<div id='cabecalho'>"+configHTMLCabecalho()+"</div>\n" +
            "<nav id='links'>\n"+configHTMLLinks()+"\n</nav>\n" +
            "<div id='conteudo'></div>\n" +
            "</body>\n</html>";
    codeHTML.value = ctxHTML;
}