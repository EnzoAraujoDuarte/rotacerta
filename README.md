# Nexus Commerce - Gestão de TI

Sistema de apresentação institucional da Nexus Commerce, construído com Next.js 15 e React 18.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **React 18** - Biblioteca JavaScript para interfaces
- **Tailwind CSS** - Framework de CSS utilitário
- **shadcn/ui** - Componentes UI reutilizáveis
- **Lucide React** - Ícones modernos
- **Radix UI** - Componentes acessíveis e não estilizados

## 📋 Pré-requisitos

- Node.js 18.17 ou superior
- npm, yarn ou pnpm

## 🔧 Instalação

1. **Instalar dependências:**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

## 🏃 Executando o Projeto

### Modo de Desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build de Produção

```bash
npm run build
npm run start
# ou
yarn build
yarn start
# ou
pnpm build
pnpm start
```

## 📁 Estrutura do Projeto

```
GestaoDeTI/
├── app/                    # App Router do Next.js
│   ├── layout.jsx         # Layout principal
│   ├── page.jsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── ui/               # Componentes UI do shadcn
│   ├── Header.jsx        # Cabeçalho
│   ├── Hero.jsx          # Hero section
│   ├── About.jsx         # Sobre a empresa
│   ├── Organogram.jsx    # Organograma
│   ├── Services.jsx      # Serviços
│   ├── TechSolutions.jsx # Soluções tecnológicas
│   ├── Infrastructure.jsx # Infraestrutura
│   ├── Investment.jsx    # Investimentos
│   ├── Benefits.jsx      # Benefícios
│   ├── Contact.jsx       # Contato
│   └── Footer.jsx        # Rodapé
├── lib/                   # Utilitários
│   └── utils.js          # Funções auxiliares
├── public/               # Arquivos estáticos
│   ├── hero-image.jpg    # Imagem hero
│   └── nexus-logo.jpeg   # Logo da empresa
├── next.config.js        # Configuração Next.js
├── tailwind.config.js    # Configuração Tailwind
├── jsconfig.json         # Configuração JavaScript
└── package.json          # Dependências

```

## 🎨 Características

- ✅ **100% JavaScript** - Sem TypeScript
- ✅ **Next.js App Router** - Roteamento moderno do Next.js
- ✅ **Responsive Design** - Totalmente responsivo
- ✅ **SEO Otimizado** - Meta tags e estrutura otimizada
- ✅ **Performance** - Otimização de imagens e assets
- ✅ **Componentes Modulares** - Componentes reutilizáveis
- ✅ **Design System** - Sistema de design consistente com cores da marca

## 🎯 Seções do Site

1. **Hero** - Apresentação principal com estatísticas
2. **Sobre** - Informações sobre a empresa
3. **Organograma** - Estrutura organizacional
4. **Serviços** - Soluções B2B e B2C
5. **Soluções TI** - Tecnologias e sistemas recomendados
6. **Infraestrutura** - Arquitetura tecnológica
7. **Investimentos** - Plano financeiro
8. **Benefícios** - Resultados esperados
9. **Contato** - Formulário e informações de contato

## 🌈 Paleta de Cores

- **Nexus Primary**: Cyan brilhante (#00BCD4)
- **Nexus Secondary**: Azul profundo (#0D47A1)
- **Nexus Accent**: Turquesa claro (#00E5FF)
- **Nexus Dark**: Azul marinho escuro (#1A2332)

## 📦 Componentes UI Disponíveis

O projeto usa componentes do shadcn/ui incluindo:
- Accordion
- Alert Dialog
- Avatar
- Button
- Card
- Dialog
- Form
- Input
- Select
- Tabs
- Toast
- Tooltip
- E muitos outros...

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa o linter

## 📝 Notas Importantes

- As imagens devem estar na pasta `public/`
- Os componentes UI do shadcn estão em `components/ui/`
- O sistema de cores está configurado no `globals.css`
- Paths são configurados via `@/` no `jsconfig.json`

## 🤝 Contribuindo

Este é um projeto interno da Nexus Commerce. Para sugestões ou melhorias, entre em contato com a equipe de TI.

## 📄 Licença

© 2025 Nexus Commerce S.A. Todos os direitos reservados.

---
