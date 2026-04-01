const url = "https://www.gov.br/secom/pt-br/acompanhe-a-secom/noticias/2026/03/governo-do-brasil-publicara-orientacoes-para-garantir-implementacao-do-eca-digital";
const html = await fetch(url).then(r => r.text());
const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
console.log(text.slice(0, 2000));