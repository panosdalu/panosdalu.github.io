# Lu Panos de Pratos Bordados

Site de catálogo dos panos de prato bordados à mão, com barrado em crochê, feitos pela Lu.

🔗 **https://panosdalu.github.io**

Os pedidos são feitos pelo WhatsApp: cada pano tem um botão **"Quero este"** que abre a conversa já com o nome e o código do pano escolhido. Também dá para juntar vários panos na sacola e mandar o pedido inteiro de uma vez. O pagamento pelo site ainda não existe e aparece como **"em breve"**.

## O que tem no site

- Catálogo com 17 panos, filtro por tema e foto ampliada de cada peça
- Seção "Sob encomenda" com 9 modelos de panos com aplicação em crochê
- Botão de WhatsApp em cada pano, com a mensagem pronta
- Sacola que monta um único pedido para o WhatsApp
- Seções "Como fazer seu pedido", "Cuidados com seu pano", "Dúvidas" e "Contato"
- Layout pensado para celular

## Arquivos

```
index.html   página e textos fixos (seções, dúvidas, contato)
style.css    visual (cores, fontes, layout)
script.js    catálogo, sacola e links do WhatsApp
img/         fotos dos panos
```

Não tem dependências nem etapa de build: é HTML, CSS e JavaScript puros.

## Como editar

As configurações ficam no começo do `script.js`.

**Número do WhatsApp:** com o 55 do Brasil e o DDD, só números.

```js
const WHATSAPP = "55DDDNUMERO"; // ex.: 55 + DDD + número
```

**Preço padrão** (aparece como "a partir de"):

```js
const PRECO_BASE = 25;
```

**Adicionar um pano:**

1. Coloque a foto em `img/` (de preferência JPG com até ~1100px no lado maior).
2. Acrescente um item na lista `PRODUTOS`:

```js
{ cod: "P18", nome: "Nome do Pano", cat: "cozinha", croche: "Rosa", cor: ["rosa"],
  fotos: ["minha-foto.jpg"], desc: "Descrição curta do pano." },
```

| Campo    | O que é |
|----------|---------|
| `cod`    | Código que aparece no card e na mensagem do WhatsApp |
| `cat`    | Tema: `fofinhos`, `cozinha`, `natureza` ou `retro` |
| `croche` | Cor do crochê, em texto |
| `cor`    | Bolinhas de cor: `rosa`, `vermelho`, `amarelo`, `azul`, `marrom`, `cru`, `verde`, `verde-agua`, `vinho`, `pink`, `azul-claro`, `marinho`, `branco` |
| `fotos`  | Uma ou mais fotos; a primeira é a capa |
| `preco`  | Opcional. Ex.: `preco: 30` para um pano mais caro |
| `pos`    | Opcional. Ajusta o enquadramento da capa. Ex.: `pos: "60% 50%"` |

**Remover um pano** (vendido, por exemplo): apague o item correspondente em `PRODUTOS`.

**Modelos sob encomenda** (panos com aplicação em crochê): ficam na lista `ENCOMENDAS`, logo abaixo de `PRODUTOS`, com os mesmos campos, menos `cat` e `preco`. Eles aparecem na seção "Sob encomenda", com valor "sob consulta" e botão "Encomendar", que já pede valor e prazo no WhatsApp. Use códigos começando com `E` (E10, E11…).

## Ver no computador

```bash
python3 -m http.server 8000
```

Depois abra http://localhost:8000. Para parar, aperte `Ctrl+C`.

## Publicar

O site é publicado pelo GitHub Pages a partir da branch `main`. Toda alteração enviada aparece no ar em 1 ou 2 minutos:

```bash
git add .
git commit -m "Descrição da alteração"
git push
```
