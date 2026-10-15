# OperaFlix

SPA de catálogo de vídeos com temática católica (hinos, música sacra e coral), inspirada na interface da Netflix. Desenvolvida em React com navegação por rotas e carrosséis de conteúdo.

## O que é

Um clone visual da Netflix para organizar e exibir vídeos de música litúrgica e católica (YouTube embeds). A interface tem:
- Banner principal com vídeo destacado
- Carrosséis por categoria (Salve Maria, Cristo Rei, Santos Luminosos, etc.)
- Páginas de cadastro (ainda sem backend, apenas estrutura visual)
- Navegação SPA com React Router

## Stack

- **React 16** com Create React App
- **React Router DOM 5** para navegação
- **styled-components** para estilização
- **react-slick** para os carrosséis
- Dados mockados em JSON local (`src/data/dados_iniciais.json`)

## Como rodar

```bash
npm install
npm start
```

Abre em `http://localhost:3000`. Para build de produção: `npm run build`.

## Estrutura

```
src/
├── components/components/      # Componentes reutilizáveis
│   ├── BannerMain/            # Banner com vídeo principal
│   ├── Carousel/              # Carrossel de vídeos por categoria
│   ├── Menu/                  # Header com navegação
│   ├── Footer/                # Rodapé
│   └── Button/                # Botões e links estilizados
├── pages/Home/cadastro/       # Páginas de cadastro (vídeo, categoria, 404)
├── data/dados_iniciais.json   # Dados mockados (categorias e vídeos)
├── App.js                     # Componente raiz com categorias
└── index.js                   # Entry point e configuração de rotas
```

## Próximos passos

- Conectar backend para cadastro real de vídeos/categorias
- Implementar autenticação/login
- Adicionar busca e filtros
- Melhorar responsividade mobile
- Testes automatizados

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm start` | Servidor de desenvolvimento (porta 3000) |
| `npm test` | Testes em modo watch |
| `npm run build` | Build otimizado para produção |
| `npm run eject` | Ejeta configuração do CRA (irreversível) |

## Licença

MIT - veja [LICENSE](LICENSE)
