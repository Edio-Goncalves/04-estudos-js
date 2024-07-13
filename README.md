# 04-estudos-js

### ÍNDICE

- [VARIAVEIS](#variaveis)
- [OPERADORES](#operadores)

### LINKS DE VÍDEOS CURSOS E DOCUMENTAÇÃO

- <a href="https://www.youtube.com/watch?v=E4DBTqgxHGM&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T">Javascript Referência em Vídeo do Professor Bruno (CFB) </a>

#

### CONSOLE

- `Console.log()` //para imprimir no console, vamos usar para debugar

#

### VARIAVEIS

Variaveis var, let e const (declaração de variáveis e escopo de uso)  
`var nome = "Edio";` // Escopo global e pode ser alterada  
`let sobrenome = "Gonçalves";` // Escopo de bloco e pode ser alterada  
`const agnome = "Junior";` // Escopo de bloco e NÃO pode ser alterada

#

### OPERADORES

<p class="separador">ATRIBUTOS GLOBAIS (usado em qualquer TAG)</p>

- `class=""` / para adicionar classe do CSS (.)
- `id=""` / para adicionar ID do CSS (#)
- `accesskey=""` / define uma tecla para focar elemento, tecla de atalho
- `contenteditable=""` / conteudo pode ou nao ser editavel (true, false)
- `data-=""` / armazenar dados de um elemento, resgistros invisiveis ao usuario
- `dir=""` / direção do conteudo (auto, ltr, rtl (x to x))
- `draggable=""` / elemento pode ser arrastado (false, true) ex: rrastar arquivos
- `dropzone=""` / aceita elemento draggable (false, true), ex: campo onde recebe arquivos;
- `hidden` / oculta o elemento
- `lang=""` / linguagem do conteudo do elemento, para buscador e tradutor
- `spellcheck=""` / verificar ortografia do elemento escrito pelo usuario
- `translate=""` / se o conteudo pode ou nao ser traduzido
- `tabindex=""` / organiza a tabulação dos formularios (form tabindex="1")
- `title=""` / box informativo que abre com o mouse em cima

<p class="separador">EVENTOS DO ELEMENTO - TODOS COM PREFIXO "on"</p>
<p class="separador">EVENTOS DE JANELA DO ELEMENTO</p>

- `afterprint=""` / Disparado quando manda a página ser impressa.
- `beforeprint=""` / Disparado antes de mandar a página ser impressa.
- `beforeunload=""` / Disparado antes do navegador carregar outra página. (o que paginas de anuncios usam para te deixar preso...)
- `error=""` / Disparado quando ocorrer um erro.
- `hashchange=""` / Disparado quando o hash da url da página é alterado (.com.br#alterado).
- `load=""` / Disparado quando toda a página for carregada (a janela carregada).
- `message=""` / Disparado quando ocorrer uma mensagem.
- `offline=""` / Disparado quando o navegador é desconectado da internet.
- `online=""` / Disparado quando o navegador é conectado com a internet.
- `pagehide=""` / Disparado quando a página é ocultada do usuario.
- `pageshow=""` / Disparado quando a página é mostrada ao usuario, inicia apos "onload".
- `popstate=""` / Disparado quando a ocorrência no histórico do navegador é alterada.
- `resize=""` / Disparado quando a janela é redimensionada, largura e altura.
- `storage=""` / Disparado quando o armazenamento do navegador é alterado.
- `unload=""` / Disparado quando o usuário atualiza a página ou fecha a janela.

<p class="separador">EVENTOS DE FORMULARIO DO ELEMENTO</p>

- `blur=""` / Disparado quando o foco do elemento é removido.
- `change=""` / Disparado quando termina de altera o valor do elemento, apos prencher um campo do formulario e tirar o foco, o "blur" tambem acontece antes do change
- `contextmenu=""` / Disparado quando o usuário abre o menu de contexto, ex: clicar com botao direito em cima do elemento com "contextmenu".
- `focus=""` / Disparado quando o elemento é focado.
- `input=""` / Disparado quando o elemento recebe uma entrada de valor, sempre que entra dados dentro do elemento
- `invalid=""` / Disparado quando o valor do elemento é inválido.
- `reset=""` / Disparado quando o valor do elemento é redefinido ao estado inicial. ex: button type="reset"
- `search=""` / Disparado quando o elemento input do tipo search é enviado. Escrever em um campo e apertar enter. ex: input="search"
- `select=""` / Disparado quando o valor do elemento é selecionado
- `submit=""` / Disparado quando o formulário é enviado.

<p class="separador">EVENTOS DE TECLADO</p>

- `keydown=""` / Disparado quando a tecla vai para baixo.
- `keypress=""` / Disparado quando a tecla é pressionada.
- `keyup=""` / Disparado quando a tecla é solta.

<p class="separador">EVENTOS DE MOUSE DO ELEMENTO</p>

- `click=""` / Disparado quando o elemento recebe um clique.
- `dblclick=""` / Disparado quando o elemento recebe um clique duplo.
- `mousedown=""` / Disparado quando o botão do clique vai para baixo.
- `mousemove=""` / Disparado quando o cursor do mouse se move sobre o elemento.
- `mouseout=""` / Disparado quando o cursor do mouse NÃO ESTÁ em cima do elemento.
- `mouseover=""` / Disparado quando o cursor do mouse ESTÁ em cima do elemento.
- `mouseup=""` / Disparado quando o botão do clique é solto.
- `wheel=""` / Disparado quando a roda do mouse é rodada.
- `mouseenter=""` / Disparado quando o cursor do mouse entra em cima do elemento.
- `mouseleave=""` / Disparado quando o cursor do mouse sai de cima do elemento.

<p class="separador">EVENTOS DE ARRASTO DO ELEMENTO</p>

- `drag=""` / Disparado quando o elemento é arrastado, é preciso que o elemento seja "draggable".
- `dragend=""` / Disparado quando o elemento para de ser arrastado.
- `dragenter=""` / Disparado quando o elemento arrastado entra em um elemento que permite soltar.
- `dragleave=""` / Disparado quando o elemento arrastado sai de cima de um elemento que permite soltar.
- `dragover=""` / Disparado quando o elemento arrastado passa em um elemento que permite soltar.
- `dragstart=""` / Disparado quando o elemento começa a ser arrastado.
- `drop=""` / Disparado quando o elemento é solto dendro do elemento selecionado.
- `scroll=""` / Disparado quando o scroll é rolado

<p class="separador">EVENTOS DE TRANSFERENCIA</p>

- `copy=""` / Disparado quando o conteúdo do elemento é copiado.
- ` cut=""` / Disparado quando o conteúdo do elemento é recortado.
- `paste=""` / Disparado quando o conteúdo do elemento é colado.

<p class="separador">EVENTOS DE MIDIA DO ELEMENTO</p>

- `abort=""` / Disparado quando o carregamento da mídia é cancelado.
- `canplay=""` / Disparado quando a mídia carregou o suficiente para começar.
- `canplaythrough=""` / Disparado quando a mídia carregou e pode ser reproduzido até o final.
- `cuechange=""` / Disparado quando o texto de uma trilha é alterado.
- `durationchange` / Disparado quando o tamanho total da mídia é alterado.
- `emptied=""` / Disparado quando acontece algum problema e a mídia fica indisponível.
- `ended=""` / Disparado quando a mídia foi consumida até o fim.
- `error=""` / Disparado quando um erro acontece.
- `loadeddata=""` / Disparado quando os dados da mídia são carregados.
- `loadedmetadata=""` / Disparado quando os metadados da mídia são carregados.
- `loadstart=""` / Disparado quando os dados da mídia começam a ser carregados.
- `pause=""` / Disparado quando a mídia é pausada.
- `play=""` / Disparado quando a mídia é começada.
- `playing=""` / Disparado quando depois que a mídia realmente começou.
- `progress=""` / Disparado enquanto o navegador obtém os dados da mídia.
- `ratechange=""` / Disparado quando a taxa de reprodução é alterada.
- `seeked=""` / Disparado quando a busca de dados da mídia terminou.
- `seeking=""` / Disparado quando a busca de dados da mídia está acontecendo.
- `stalled=""` / Disparado quando o navegador não pode buscar os dados de mídia por qualquer motivo.
- `suspend=""` / Disparado quando a busca de dados da mídia é parado antes de ser completamente carregado.
- `timeupdate=""` / Disparado quando a posição da reprodução é alterada.
- `volumechange=""` / Disparado quando o volume do áudio da mídia é alterado.
- `waiting=""` / Disparado quando a mídia é pausada para armazenar mais dados em buffer.

<p class="separador">OUTROS</p>

- `toggle=""` / Disparado quando o usuário abre ou fecha o elemento details.

#

### LINKS E IMAGENS

<a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks">Documentação Hiperlinks AQUI</a> <br />  
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img">Documentação de Imagens AQUI</a>

- `<a href="../localArquivo">` Link para um arquivo, como para um outro index.html
- `<img src="https://linkdaimagemonline.com" alt="identificadorDaImagem" width="400px" />` Para pegar um link online, onde identificamos um nome se para ele caso não carregue e também já damos um tamanho como opção
- `<img src="../localArquivo" alt="id" width="250px"/>` Buscar imagem dentro de um local no projeto
- `<a href="https://linkDoLocalOnline.com"> <img src="../localArquivo" alt="sorvete" width="250px"> </a>` Vamos pegar um link online e agregar a um arquivo que estamos usando no projeto
- Para criar um link ancora:

```
    <a href="#ancora" id="ancora02"> clique aqui 01 </a>

    <a href="#ancora02"> <img id="ancora" src="../localDaImagem"/> clique aqui 02 </a>

<!-- Quando clicamos no link "clique aqui 01" vamos ser jogados diretamente ao "id='ancora'" e quando clicarmos no
"clique aqui 02" vamos ser levamos até o " id='ancora02'"-->
```

#

### TRABALHANDO COM LISTAS

<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol">Documentação de Listas AQUI</a>

#### Lista não ordenada

```
Exemplo de construção:

    <ul>
      <li>arroz</li>
      <li>feijão</li>
      <li>agua</li>
    </ul>

<!-- Na lista não ordenada vamos ter uma bolinha na frente -->
```

#### Lista ordenada de um ranking

```
Exemplo de construção:

    <ol>
      <li>João</li>
      <li>Julia</li>
      <li>Matheus</li>
    </ol>

<!-- Na lista ordenada vamos ter uma numeração na frente -->
```
