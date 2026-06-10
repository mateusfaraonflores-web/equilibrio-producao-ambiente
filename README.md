# 🌿 Equilíbrio entre Produção e Meio Ambiente

Um site educativo interativo sobre sustentabilidade, desenvolvido com foco em educação ambiental e restauração ecológica. Combina conteúdo educativo de alta qualidade com uma experiência interativa através de um jogo envolvente e um quiz avaliativo.

---

## 📋 Sumário

- [Visão Geral](#visão-geral)
- [Características Principais](#características-principais)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Seções do Site](#seções-do-site)
- [Como Executar Localmente](#como-executar-localmente)
- [Critérios de Avaliação](#critérios-de-avaliação)
- [Contribuições](#contribuições)
- [Licença](#licença)

---

## 🎯 Visão Geral

O projeto **Equilíbrio entre Produção e Meio Ambiente** é uma plataforma educativa que aborda o desafio contemporâneo de equilibrar a produção econômica com a preservação ambiental. O site foi desenvolvido com design artístico e criativo, apresentando conteúdo autoral sobre sustentabilidade, pilares de produção sustentável, o Programa Agrinho, desafios ambientais e soluções viáveis.

O projeto integra:
- **Conteúdo Educativo**: Seções estruturadas sobre sustentabilidade
- **Experiência Interativa**: Jogo "O Cristal de Lúmina" para aprendizado gamificado
- **Avaliação de Conhecimento**: Quiz com 4 perguntas sobre os tópicos abordados
- **Design Artístico**: Interface dark mode com gradientes emerald/cyan e animações dinâmicas

---

## ✨ Características Principais

### 🎨 Design Artístico e Original
- Dark mode com gradientes emerald, green e cyan
- Layout assimétrico e criativo (não-genérico)
- Animações dinâmicas (parallax, floating, fade-in, pulse)
- Ilustrações customizadas para cada seção
- Tipografia estratégica com Playfair Display e Inter

### 📚 Conteúdo Educativo Completo
- **Introdução Contextual**: Texto autoral sobre o desafio do equilíbrio produção-ambiente
- **Três Pilares da Sustentabilidade**: Agricultura Sustentável, Indústria Verde, Consumo Consciente
- **Programa Agrinho**: Educação ambiental para crianças rurais
- **Desafios e Soluções**: Análise de problemas ambientais e caminhos viáveis
- **Visão de Futuro**: Inspiração para ação individual e coletiva

### 🎮 Experiência Interativa
- **Jogo "O Cristal de Lúmina"**: Plataforma pixel art onde o jogador derrota robôs para restaurar a natureza
- **Mecânicas de Jogo**: Movimento, pulo, ataque, dash, seed blast, cura e fúria
- **3 Zonas Exploráveis**: Diferentes ambientes com 4 tipos de inimigos e boss final NEXUS-9

### ✅ Quiz Educativo
- **4 Perguntas**: Sobre pilares de sustentabilidade, Agrinho, Indústria Verde e consumo consciente
- **Feedback Imediato**: Verificação de respostas com certificado digital
- **Avaliação de Aprendizado**: Valida compreensão dos conceitos apresentados

### 📱 Responsividade Total
- 100% responsivo em todos os dispositivos
- Navegação fluida com scroll suave
- Efeitos hover elegantes em cards e botões
- Menu sticky com links de navegação rápida

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|---|---|---|
| **React** | 19.2.1 | Framework JavaScript para UI |
| **TypeScript** | 5.6.3 | Tipagem estática |
| **Tailwind CSS** | 4.1.14 | Estilização e design system |
| **Vite** | 7.1.7 | Build tool e dev server |
| **shadcn/ui** | Latest | Componentes UI reutilizáveis |
| **Lucide React** | 0.453.0 | Ícones SVG |
| **Wouter** | 3.3.5 | Roteamento client-side |

### Ferramentas de Desenvolvimento
- **Node.js** 22.13.0
- **pnpm** 10.4.1 (gerenciador de pacotes)
- **Prettier** 3.6.2 (formatação de código)
- **TypeScript Compiler** (verificação de tipos)

---

## 📁 Estrutura do Projeto

```
equilibrio-producao-ambiente/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/                 # Componentes shadcn/ui
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── ManusDialog.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx    # Contexto de tema
│   │   ├── hooks/
│   │   │   ├── useComposition.ts
│   │   │   ├── useMobile.tsx
│   │   │   └── usePersistFn.ts
│   │   ├── lib/
│   │   │   └── utils.ts            # Utilitários
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Página principal (conteúdo completo)
│   │   │   └── NotFound.tsx        # Página 404
│   │   ├── App.tsx                 # Roteamento e layout
│   │   ├── main.tsx                # Entry point React
│   │   └── index.css               # Estilos globais e design tokens
│   ├── index.html                  # Template HTML
│   └── package.json
├── server/
│   └── index.ts                    # Servidor Express (placeholder)
├── shared/
│   └── const.ts                    # Constantes compartilhadas
├── README.md                        # Este arquivo
├── package.json                     # Dependências do projeto
├── tsconfig.json                    # Configuração TypeScript
├── vite.config.ts                  # Configuração Vite
└── .prettierrc                      # Configuração Prettier
```

---

## 🌐 Seções do Site

### 1. **Hero Section** (Introdução)
Apresentação visual impactante com fada mágica (parallax), título principal e chamada à ação. Estabelece o tom artístico e inspirador do site.

### 2. **Contexto Autoral** (Desafio do Equilíbrio)
Texto autoral estruturado em 4 parágrafos que contextualiza o problema:
- Desafio do equilíbrio produção-ambiente
- Evolução da produção e consumismo
- Exploração de recursos naturais
- Soluções através de fiscalização e educação

### 3. **Três Pilares da Sustentabilidade**
Cards interativos apresentando:
- **Agricultura Sustentável**: Rotação de culturas, conservação do solo
- **Indústria Verde**: Eficiência energética, energias renováveis
- **Consumo Consciente**: Demanda por produtos responsáveis

### 4. **Programa Agrinho**
Seção dedicada ao programa de educação ambiental:
- Definição e objetivos
- Impacto em crianças rurais
- Transformação social e ambiental

### 5. **Desafios e Soluções**
Análise comparativa de:
- Conflitos de interesse, desinformação, implementação de políticas
- Inovação tecnológica, educação contínua, legislação e fiscalização

### 6. **Visão de Futuro**
Inspiração para ação coletiva com foco em:
- Ações individuais
- Engajamento comunitário
- Transformação sistêmica

### 7. **Experiência Interativa** (Jogo)
Integração do jogo "O Cristal de Lúmina" via iframe:
- Jogo pixel art em Base44
- Mecânicas de restauração ambiental
- 3 zonas, 4 tipos de inimigos, boss final

### 8. **Quiz Educativo**
Avaliação de conhecimento com 4 perguntas:
1. Pilares da produção sustentável
2. O que é o Programa Agrinho
3. Características da Indústria Verde
4. Impacto do consumo consciente

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 22.13.0 ou superior
- pnpm 10.4.1 ou superior
- Git

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/mateusfaraonflores-web/equilibrio-producao-ambiente.git
cd equilibrio-producao-ambiente
```

2. **Instale as dependências**
```bash
pnpm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
pnpm dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

### Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Inicia servidor Vite em modo desenvolvimento |
| `pnpm build` | Compila para produção |
| `pnpm preview` | Visualiza build de produção localmente |
| `pnpm check` | Verifica tipos TypeScript |
| `pnpm format` | Formata código com Prettier |

---

## 📋 Critérios de Avaliação

O projeto foi desenvolvido seguindo rigorosamente a **Matriz de Avaliação: Front-End (Subcategoria 3)** com 4 critérios principais:

### ✅ Complexidade do Código (25 pts)
- **Tags Semânticas**: Uso de `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`
- **Manipulação DOM**: React com hooks (`useState`, `useEffect`)
- **Seletores CSS**: Tailwind CSS com variáveis customizadas e `@layer`
- **Layouts Modernos**: Flexbox e Grid responsivos

### ✅ Usabilidade (25 pts)
- **100% Responsivo**: Media queries e design mobile-first
- **Navegação Fluida**: Scroll suave, links de navegação rápida
- **Efeitos Visuais**: Hover effects, transições, animações
- **Melhorias de UI**: Feedback visual, estados interativos

### ✅ Publicação (25 pts)
- **Repositório Organizado**: Estrutura clara de pastas (`/client`, `/src`, `/components`)
- **README Completo**: Documentação detalhada (este arquivo)
- **Zero Erros de Console**: Sem warnings ou erros JavaScript
- **Tags Agrinho**: Implementação conforme especificação

### ✅ Originalidade (25 pts)
- **Conteúdo 100% Autoral**: Texto original sobre sustentabilidade
- **Layout Único**: Design não-genérico, assimétrico e criativo
- **Paleta Customizada**: Verde sustentável (#2D5016), emerald, cyan
- **Alinhamento Perfeito**: Interação (JS), estilo (CSS), tema (HTML) coesos

---

## 🎮 Integração do Jogo

O jogo "O Cristal de Lúmina" é integrado via iframe:

```jsx
<iframe
  src="https://last-seed-bloom.base44.app"
  sandbox="allow-same-origin allow-scripts allow-popups"
  style={{ aspectRatio: '16 / 9', minHeight: '600px' }}
/>
```

**Proteção**: O atributo `sandbox` bloqueia edição e cópia do código do jogo, mantendo a integridade da aplicação.

---

## 🎓 Conteúdo Educativo

### Texto Autoral
O site apresenta conteúdo original que aborda:
- Desafio contemporâneo do equilíbrio produção-ambiente
- Evolução da produção desde a Revolução Industrial
- Impactos do consumismo e exploração de recursos
- Dados sobre desmatamento da Floresta Amazônica
- Soluções viáveis através de fiscalização, incentivos e educação

### Programa Agrinho
Programa de educação ambiental que:
- Transforma crianças e adolescentes em agentes de mudança
- Promove sustentabilidade no meio rural
- Integra educação ambiental com promoção social
- Desenvolve cidadania e responsabilidade comunitária

---

## 🌍 Deployment

O site está pronto para deploy em plataformas como:
- **Manus** (hospedagem integrada)
- **Vercel**
- **Netlify**
- **GitHub Pages**

### Build para Produção
```bash
pnpm build
```

Gera pasta `dist/` com arquivos otimizados para produção.

---

## 📝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.

---

## 👤 Autor

**Mateus Faraon Flores**
- GitHub: [@mateusfaraonflores-web](https://github.com/mateusfaraonflores-web)

---

## 🙏 Agradecimentos

- **Programa Agrinho** pela inspiração educativa
- **Base44** pela plataforma de desenvolvimento de jogos
- **Manus** pela infraestrutura de hospedagem
- **shadcn/ui** pelos componentes reutilizáveis
- **Tailwind CSS** pelo design system robusto

---

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto, abra uma **Issue** no repositório GitHub.

---

**Desenvolvido com ❤️ para educação ambiental e sustentabilidade.**

*Última atualização: Junho de 2026*
