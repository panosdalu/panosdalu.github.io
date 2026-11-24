/* ==========================================================
   Lu Panos de Pratos Bordados — catálogo, sacola e WhatsApp
   ========================================================== */

// ---- Configurações (edite aqui) ----
const WHATSAPP = "5518996741755"; // (18) 99674-1755 com DDI 55
const PRECO_BASE = 25; // "a partir de" R$ 25,00

const CATEGORIAS = {
  fofinhos: "Fofinhos",
  cozinha: "Cozinha & Café",
  natureza: "Flores & Bichos",
  retro: "Mar & Retrô",
};

// Cores das bolinhas do crochê
const CORES = {
  rosa: "#e9a3b4",
  vermelho: "#c0283a",
  amarelo: "#e2b23d",
  azul: "#2d4fa3",
  marrom: "#8a5a3c",
  cru: "#e8dcc4",
  verde: "#2f7d4a",
  "verde-agua": "#2a9a8a",
  vinho: "#7a1f35",
  pink: "#d6336c",
  "azul-claro": "#7fb0dd",
  marinho: "#1f2f5c",
  branco: "#ffffff",
};

// Para adicionar um pano: coloque a foto em img/ e acrescente um item aqui.
// "preco" é opcional — se não informado, usa PRECO_BASE.
const PRODUTOS = [
  { cod: "P01", nome: "Menina do Campo", cat: "fofinhos", croche: "Rosa", cor: ["rosa"], fotos: ["pano-00.jpg"],
    desc: "Menininha de chapéu passeando com seu carneirinho, com barrado de crochê rosa delicadíssimo." },
  { cod: "P02", nome: "Galinhas d'Angola", cat: "natureza", croche: "Vermelho e amarelo", cor: ["vermelho", "amarelo"], fotos: ["pano-01.jpg"],
    desc: "Casal de galinhas d'angola num jardim florido. Barrado em crochê com florzinhas vermelhas e acabamento amarelo." },
  { cod: "P03", nome: "Tucano Tropical", cat: "natureza", croche: "Azul", cor: ["azul"], fotos: ["pano-02.jpg"], pos: "62% 50%",
    desc: "Tucano colorido entre flores, com barrado de crochê azul royal — alegria brasileira na cozinha." },
  { cod: "P04", nome: "Coruja Florida", cat: "natureza", croche: "Amarelo", cor: ["amarelo"], fotos: ["pano-03.jpg", "pano-07.jpg"],
    desc: "Corujinha de bolinhas no galho cheio de flores, com barrado de crochê amarelo em arcos." },
  { cod: "P05", nome: "Cãozinho Feliz", cat: "fofinhos", croche: "Marrom", cor: ["marrom"], fotos: ["pano-04.jpg"],
    desc: "Cachorrinho de lencinho brincando no campo, com barrado de crochê marrom." },
  { cod: "P06", nome: "Menina no Banquinho", cat: "fofinhos", croche: "Marrom", cor: ["marrom"], fotos: ["pano-05.jpg"],
    desc: "Menininha de cabelo rosa sentada no banquinho do jardim, com barrado de crochê marrom." },
  { cod: "P07", nome: "Ursinhos Pescadores", cat: "fofinhos", croche: "Vermelho", cor: ["vermelho"], fotos: ["pano-06.jpg"],
    desc: "Família de ursinhos pescando à beira do lago, com barrado de crochê vermelho." },
  { cod: "P08", nome: "Vinho & Flores", cat: "cozinha", croche: "Vermelho", cor: ["vermelho"], fotos: ["pano-09.jpg", "pano-08.jpg"],
    desc: "Taça, garrafa de vinho e uvas sobre a bandeja, rodeadas de flores. Barrado de crochê vermelho." },
  { cod: "P09", nome: "Bom Dia na Rede", cat: "fofinhos", croche: "Cru", cor: ["cru"], fotos: ["pano-10.jpg"],
    desc: "“Aproveite seu dia hoje — Bom dia!” Menino descansando na rede, com barrado de crochê cru." },
  { cod: "P10", nome: "Farol à Beira-Mar", cat: "retro", croche: "Azul", cor: ["azul"], fotos: ["pano-14.jpg", "pano-11.jpg"],
    desc: "Farol, veleiros e peixinhos num cenário marítimo, com barrado de crochê azul." },
  { cod: "P11", nome: "Vaso de Rosas", cat: "natureza", croche: "Verde", cor: ["verde"], fotos: ["pano-12.jpg"],
    desc: "Vaso com rosas vermelhas e uma mensagem de carinho, com barrado de crochê verde." },
  { cod: "P12", nome: "Menina Joaninha", cat: "fofinhos", croche: "Azul", cor: ["azul"], fotos: ["pano-13.jpg"],
    desc: "Menininha de óculos com sua joaninha na cerquinha florida, com barrado de crochê azul." },
  { cod: "P13", nome: "Frutas & Taça", cat: "cozinha", croche: "Vinho", cor: ["vinho"], fotos: ["pano-15.jpg"],
    desc: "Taça, jarra e cerejas fresquinhas, com barrado de crochê cor de vinho." },
  { cod: "P14", nome: "Kombi Tropical", cat: "retro", croche: "Verde-água", cor: ["verde-agua"], fotos: ["pano-16.jpg"],
    desc: "Kombi retrô com coqueiros e flores tropicais, com barrado de crochê verde-água." },
  { cod: "P15", nome: "Chá da Tarde", cat: "cozinha", croche: "Vermelho e verde", cor: ["vermelho", "verde"], fotos: ["pano-17.jpg"],
    desc: "Bule, xícaras e um lindo vaso de lírios na toalha xadrez. Barrado de crochê vermelho e verde." },
  { cod: "P16", nome: "Talheres & Morangos", cat: "cozinha", croche: "Vermelho (corações)", cor: ["vermelho", "verde"], fotos: ["pano-18.jpg"],
    desc: "Garfo, colher e faca enfeitados com morangos, e barrado de crochê em coraçõezinhos vermelhos." },
  { cod: "P17", nome: "Cafezinho Colonial", cat: "cozinha", croche: "Vinho", cor: ["vinho"], fotos: ["pano-19.jpg"],
    desc: "Bule, pote e prato xadrez num cantinho de cozinha colonial, com barrado de crochê vinho." },
];

// Panos com aplicação em crochê, feitos sob encomenda (sem preço fixo: valor e prazo pelo WhatsApp).
const ENCOMENDAS = [
  { cod: "E01", nome: "Cestinha Azul", croche: "Azul e branco", cor: ["azul", "branco"], fotos: ["croche-00.jpg", "croche-04.jpg"],
    desc: "Cestinha de crochê azul com florzinhas brancas aplicadas no pano, e barrado de crochê azul." },
  { cod: "E02", nome: "Cestinha com Borboleta", croche: "Vermelho e branco", cor: ["vermelho", "branco"], fotos: ["croche-06.jpg", "croche-04.jpg"],
    desc: "Cestinha vermelha com flor branca e uma borboletinha de crochê, com barrado vermelho." },
  { cod: "E03", nome: "Cesta Verde Rendada", croche: "Verde e branco", cor: ["verde", "branco"], fotos: ["croche-03.jpg"], pos: "50% 75%",
    desc: "Cesta de crochê verde e branca que forma o próprio barrado do pano — um charme rendado." },
  { cod: "E04", nome: "Rosas Pink", croche: "Pink e verde", cor: ["pink", "verde"], fotos: ["croche-01.jpg"],
    desc: "Três rosas pink de crochê com botões e cabinhos, barrado pink com acabamento verde." },
  { cod: "E05", nome: "Jardim Azul", croche: "Azul claro", cor: ["azul-claro", "azul", "branco"], fotos: ["croche-02.jpg"],
    desc: "Flores de crochê em tons de azul e branco com folhagens verdes, e barrado azul clarinho." },
  { cod: "E06", nome: "Buquê Azul e Branco", croche: "Azul claro", cor: ["azul-claro", "azul"], fotos: ["croche-07.jpg"],
    desc: "Buquê de flores azuis e branca de crochê, com barrado azul claro em leques." },
  { cod: "E07", nome: "Flores Marinho", croche: "Marinho e branco", cor: ["marinho", "branco"], fotos: ["croche-05.jpg"],
    desc: "Florzinhas azul-marinho e brancas com miolo de pérola, e barrado de crochê marinho e branco." },
  { cod: "E08", nome: "Rosas Vinho", croche: "Vinho", cor: ["vinho", "vermelho", "pink"], fotos: ["croche-08.jpg", "croche-10.jpg"],
    desc: "Rosa vermelha no centro, com flores vinho e pink de crochê e um barrado vinho bem trabalhado." },
  { cod: "E09", nome: "Galinha d'Angola", croche: "Vermelho", cor: ["vermelho"], fotos: ["croche-09.jpg"],
    desc: "Galinha d'angola de bolinhas no ninho, com florzinhas e barrado de crochê vermelho em relevo." },
].map((p) => ({ ...p, encomenda: true }));

// ---- Utilidades ----
const $ = (s, el = document) => el.querySelector(s);
const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const precoDe = (p) => p.preco ?? PRECO_BASE;
const linkWhats = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
const bolinhas = (p) => p.cor.map((c) => `<span class="bolinha" style="background:${CORES[c]}"></span>`).join("");

const msgProduto = (p) => p.encomenda
  ? `Olá, Lu! 💕 Vi no site o modelo *${p.nome}* (código ${p.cod}), com aplicação em crochê, e gostaria de encomendar. Pode me passar o valor e o prazo?`
  : `Olá, Lu! 💕 Vi no site e me apaixonei pelo pano de prato *${p.nome}* (código ${p.cod}). Ainda está disponível?`;

// ---- Links gerais de WhatsApp ----
document.querySelectorAll(".js-whats-geral").forEach((a) => {
  a.href = linkWhats("Olá, Lu! 💕 Vi seu site e gostaria de saber mais sobre os panos de prato bordados.");
  a.target = "_blank";
  a.rel = "noopener";
});
document.querySelectorAll(".js-whats-encomenda").forEach((a) => {
  a.href = linkWhats("Olá, Lu! 💕 Gostaria de encomendar um pano de prato personalizado. Posso te contar o que imaginei?");
  a.target = "_blank";
  a.rel = "noopener";
});
$("#ano").textContent = new Date().getFullYear();

// ---- Menu mobile ----
const hamburguer = $("#hamburguer");
const menu = $("#menu");
hamburguer.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  hamburguer.setAttribute("aria-expanded", aberto);
});
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("aberto");
    hamburguer.setAttribute("aria-expanded", "false");
  }
});

// ---- Sacola (guardada no navegador) ----
let sacola = {};
try { sacola = JSON.parse(localStorage.getItem("lu-sacola")) || {}; } catch { sacola = {}; }
const salvarSacola = () => { try { localStorage.setItem("lu-sacola", JSON.stringify(sacola)); } catch {} };
const porCodigo = (cod) => PRODUTOS.find((p) => p.cod === cod) || ENCOMENDAS.find((p) => p.cod === cod);

function adicionar(cod) {
  sacola[cod] = (sacola[cod] || 0) + 1;
  salvarSacola();
  atualizarSacola();
  const badge = $("#qtdSacola");
  badge.classList.remove("pulse");
  void badge.offsetWidth;
  badge.classList.add("pulse");
  toast(`“${porCodigo(cod).nome}” foi para a sacola 💕`);
}

function alterarQtd(cod, delta) {
  sacola[cod] = (sacola[cod] || 0) + delta;
  if (sacola[cod] <= 0) delete sacola[cod];
  salvarSacola();
  atualizarSacola();
}

function atualizarSacola() {
  const itens = Object.entries(sacola).filter(([cod]) => porCodigo(cod));
  const totalQtd = itens.reduce((s, [, q]) => s + q, 0);
  const badge = $("#qtdSacola");
  badge.hidden = totalQtd === 0;
  badge.textContent = totalQtd;

  document.querySelectorAll(".card__add").forEach((b) => {
    const na = !!sacola[b.dataset.cod];
    b.classList.toggle("na-sacola", na);
    b.title = na ? "Na sacola — adicionar mais um" : "Adicionar à sacola";
  });

  const lista = $("#sacolaLista");
  const rodape = $("#sacolaRodape");
  if (!itens.length) {
    lista.innerHTML = `<div class="sacola__vazia"><svg><use href="#i-bag"/></svg><p>Sua sacola está vazia.<br>Escolha seus panos favoritos no catálogo!</p></div>`;
    rodape.hidden = true;
    return;
  }
  rodape.hidden = false;
  lista.innerHTML = itens.map(([cod, q]) => {
    const p = porCodigo(cod);
    return `<div class="item-sacola">
      <img src="img/${p.fotos[0]}" alt="">
      <div>
        <b>${p.nome}</b>
        <small>${p.cod} · ${p.encomenda ? "sob encomenda" : brl(precoDe(p))}</small>
        <div class="item-sacola__qtd">
          <button data-menos="${cod}" aria-label="Diminuir">−</button>
          <span>${q}</span>
          <button data-mais="${cod}" aria-label="Aumentar">+</button>
        </div>
      </div>
      <button class="item-sacola__remover" data-remover="${cod}" aria-label="Remover ${p.nome}"><svg><use href="#i-close"/></svg></button>
    </div>`;
  }).join("");

  const prontos = itens.filter(([cod]) => !porCodigo(cod).encomenda);
  const sobEncomenda = itens.filter(([cod]) => porCodigo(cod).encomenda);
  const total = prontos.reduce((s, [cod, q]) => s + precoDe(porCodigo(cod)) * q, 0);
  $("#sacolaTotal").textContent = !prontos.length
    ? "a combinar"
    : `a partir de ${brl(total)}${sobEncomenda.length ? " + encomendas" : ""}`;

  const linhas = (lista) => lista.map(([cod, q]) => `• ${q}x *${porCodigo(cod).nome}* (${cod})`).join("\n");
  let msg = "Olá, Lu! 💕 Vi no site e gostaria de pedir:\n";
  if (prontos.length) msg += `\n*Panos de prato bordados:*\n${linhas(prontos)}\n`;
  if (sobEncomenda.length) msg += `\n*Sob encomenda (aplicação em crochê):*\n${linhas(sobEncomenda)}\n`;
  msg += sobEncomenda.length ? "\nPode me confirmar disponibilidade, valores e prazo?" : "\nAinda estão disponíveis?";
  $("#sacolaEnviar").href = linkWhats(msg);
}

$("#sacolaLista").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  if (b.dataset.mais) alterarQtd(b.dataset.mais, 1);
  if (b.dataset.menos) alterarQtd(b.dataset.menos, -1);
  if (b.dataset.remover) { delete sacola[b.dataset.remover]; salvarSacola(); atualizarSacola(); }
});

const painelSacola = $("#sacola");
const fundoSacola = $("#sacolaFundo");
function abrirSacola() {
  painelSacola.classList.add("aberta");
  painelSacola.setAttribute("aria-hidden", "false");
  fundoSacola.hidden = false;
  document.body.style.overflow = "hidden";
  $("#fecharSacola").focus();
}
function fecharSacola() {
  painelSacola.classList.remove("aberta");
  painelSacola.setAttribute("aria-hidden", "true");
  fundoSacola.hidden = true;
  document.body.style.overflow = "";
}
$("#abrirSacola").addEventListener("click", abrirSacola);
$("#fecharSacola").addEventListener("click", fecharSacola);
fundoSacola.addEventListener("click", fecharSacola);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && painelSacola.classList.contains("aberta")) fecharSacola();
});

// ---- Filtros ----
let filtroAtual = "todos";
function renderFiltros() {
  const cont = { todos: PRODUTOS.length };
  PRODUTOS.forEach((p) => (cont[p.cat] = (cont[p.cat] || 0) + 1));
  const opcoes = [["todos", "Todos"], ...Object.entries(CATEGORIAS)];
  $("#filtros").innerHTML = opcoes.map(([k, nome]) =>
    `<button class="filtro" role="tab" data-filtro="${k}" aria-selected="${k === filtroAtual}">${nome} <small>${cont[k] || 0}</small></button>`
  ).join("");
}
$("#filtros").addEventListener("click", (e) => {
  const b = e.target.closest("[data-filtro]");
  if (!b) return;
  filtroAtual = b.dataset.filtro;
  renderFiltros();
  renderGrade();
});

// ---- Grade de produtos ----
const cardHTML = (p, i) => `
    <article class="card${p.encomenda ? " card--encomenda" : ""}" style="animation-delay:${i * 40}ms">
      <button class="card__foto" data-abrir="${p.cod}" aria-label="Ver detalhes de ${p.nome}">
        <span class="card__cod">${p.cod}</span>
        ${p.fotos.length > 1 ? `<span class="card__fotos-qtd">${p.fotos.length} fotos</span>` : ""}
        <img src="img/${p.fotos[0]}" alt="Pano de prato ${p.nome}" loading="lazy"${p.pos ? ` style="object-position:${p.pos}"` : ""}>
        ${p.encomenda ? `<span class="card__selo">Sob encomenda</span>` : ""}
        <span class="card__zoom">Ver de pertinho</span>
      </button>
      <div class="card__corpo">
        <h3 class="card__nome">${p.nome}</h3>
        <span class="card__croche">${bolinhas(p)} Crochê ${p.croche.toLowerCase()}</span>
        ${p.encomenda
          ? `<p class="card__preco card__preco--consulta"><small>valor</small>sob consulta</p>`
          : `<p class="card__preco"><small>a partir de</small>${brl(precoDe(p))}</p>`}
        <div class="card__acoes">
          <a class="btn btn--whats" href="${linkWhats(msgProduto(p))}" target="_blank" rel="noopener"><svg><use href="#i-whats"/></svg> ${p.encomenda ? "Encomendar" : "Quero este"}</a>
          <button class="card__add" data-cod="${p.cod}" aria-label="Adicionar ${p.nome} à sacola"><svg><use href="#i-plus"/></svg></button>
        </div>
      </div>
    </article>`;

function renderGrade() {
  const lista = filtroAtual === "todos" ? PRODUTOS : PRODUTOS.filter((p) => p.cat === filtroAtual);
  $("#grade").innerHTML = lista.map(cardHTML).join("");
  atualizarSacola();
}
function renderEncomendas() {
  $("#gradeEncomenda").innerHTML = ENCOMENDAS.map(cardHTML).join("");
  atualizarSacola();
}
[$("#grade"), $("#gradeEncomenda")].forEach((g) => g.addEventListener("click", (e) => {
  const abrir = e.target.closest("[data-abrir]");
  if (abrir) return abrirModal(abrir.dataset.abrir);
  const add = e.target.closest(".card__add");
  if (add) adicionar(add.dataset.cod);
}));

// ---- Modal do produto ----
const modal = $("#modal");
let produtoModal = null;
function trocarFoto(i) {
  const p = produtoModal;
  $("#modalImg").src = `img/${p.fotos[i]}`;
  $("#modalImg").alt = `Pano de prato ${p.nome} — foto ${i + 1}`;
  document.querySelectorAll("#modalMinis button").forEach((b, j) => b.setAttribute("aria-current", i === j));
}
function abrirModal(cod) {
  const p = porCodigo(cod);
  produtoModal = p;
  $("#modalCod").textContent = `CÓDIGO ${p.cod}`;
  $("#modalTitulo").textContent = p.nome;
  $("#modalDesc").textContent = p.desc;
  $("#modalCat").textContent = p.encomenda ? "Aplicação em crochê" : CATEGORIAS[p.cat];
  $("#modalCroche").innerHTML = `${bolinhas(p)} ${p.croche}`;
  $("#modalPrecoRotulo").textContent = p.encomenda ? "valor" : "a partir de";
  $("#modalPreco").textContent = p.encomenda ? "Sob consulta" : brl(precoDe(p));
  $("#modalWhats").href = linkWhats(msgProduto(p));
  $("#modalWhatsTxt").textContent = p.encomenda ? "Encomendar este" : "Quero este";
  $("#modalSelo").hidden = !p.encomenda;
  modal.classList.toggle("modal--encomenda", !!p.encomenda);
  $("#modalObs").innerHTML = p.encomenda
    ? "Feito <b>sob encomenda</b>, especialmente para você. Valor e prazo são combinados pelo WhatsApp."
    : "Pagamento pelo site <b>em breve</b>. Por enquanto, tudo é combinado pelo WhatsApp.";
  $("#modalMinis").innerHTML = p.fotos.length > 1
    ? p.fotos.map((f, i) => `<button data-foto="${i}" aria-label="Foto ${i + 1}"><img src="img/${f}" alt=""></button>`).join("")
    : "";
  trocarFoto(0);
  modal.showModal();
}
$("#modalMinis").addEventListener("click", (e) => {
  const b = e.target.closest("[data-foto]");
  if (b) trocarFoto(+b.dataset.foto);
});
$("#modalSacola").addEventListener("click", () => adicionar(produtoModal.cod));
modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.closest("[data-fechar]")) modal.close();
});

// ---- Toast ----
let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("visivel");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("visivel"), 2400);
}

// ---- Início ----
renderFiltros();
renderGrade();
renderEncomendas();
