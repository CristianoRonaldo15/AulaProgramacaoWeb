# Conecta+ — Plataforma para ONGs (Unidade I)

## Visão Geral
Conecta+ é uma plataforma web protótipo destinada a organizações não-governamentais (ONGs), com objetivo de facilitar a divulgação de projetos, o engajamento de voluntários e a captação de recursos. Esta entrega corresponde à **Unidade I — Fundamentos da Web e Estruturação de Interfaces** do projeto integrador.

## O que foi entregue
- Três páginas HTML5 semânticas: `index.html`, `projetos.html` e `cadastro.html`.
- Arquivos de estilo e comportamento: `assets/css/style.css` e `assets/js/main.js`.
- Estrutura de pastas organizada para publicação no GitHub Pages.
- Imagens otimizadas.
- Formulário com validação HTML5 e máscaras simples para CPF, telefone e CEP.
- Boas práticas de acessibilidade (skiplinks, roles, labels, aria attributes).
- Metatags básicas para SEO.

## Requisitos técnicos (como foram atendidos)
- **Estrutura HTML5 semântica:** Uso de `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`, e `fieldset` para agrupamento de formulários.
- **Páginas obrigatórias:** `index.html` (institucional), `projetos.html` (lista de projetos) e `cadastro.html` (formulário).
- **Formulários complexos:** Campos para nome, e-mail, CPF, telefone, data de nascimento, endereço, CEP, cidade e estado; validação nativa e feedback via Constraint Validation API; máscaras implementadas em JavaScript.
- **Responsividade:** Layout mobile-first e breakpoints para telas maiores (CSS simples com grid).
- **Acessibilidade:** Links de pular conteúdo, estrutura de cabeçalhos, labels em inputs e atributos ARIA onde aplicável.
- **SEO:** Metatags de descrição e Open Graph básicos; hierarquia lógica de títulos.
- **Performance:** Uso de `loading="lazy"` para imagens; recomenda-se otimizar imagens para WebP e minificar CSS/JS ao publicar.
- **Segurança (básica):** O projeto é estático — recomenda-se publicar via HTTPS (Github Pages já habilita HTTPS).

## Como executar localmente
1. Clone o repositório:
2. Abra `index.html` no navegador (duplo clique) ou sirva com um servidor estático (recomendado):
- Com Python 3:
  ```
  python -m http.server 8000
  ```
  Em seguida abra `http://localhost:8000`.


## Boas práticas / próximos passos sugeridos
- Substituir imagens placeholder por imagens otimizadas (.webp) e fornecer `srcset` para diferentes resoluções.
- Implementar lazy-loading avançado e minificação de CSS/JS para reduzir tempo de carregamento.
- Adicionar testes de contraste e ferramentas de verificação de acessibilidade (ex.: axe).
- Implementar integração com back-end (API) para persistência de inscrições e doações.
- Versionamento com GitHub Actions para deploy automático no GitHub Pages.

