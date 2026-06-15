# Ana Carolina Miranda — Portfólio de Arquitetura & Interiores

Um portfólio digital minimalista, elegante e altamente interativo desenvolvido para apresentar o trabalho de arquitetura e design de interiores de Ana Carolina Miranda. 

O projeto conta com uma estética editorial premium, animações fluidas de revelação ao rolar a página, um visualizador interativo em 3D e a documentação integrada de seu próprio Design System.

---

## 🎨 Características Principais

* **Design Minimalista & Editorial:** Foco total na harmonia visual, tipografia refinada (Cormorant Garamond + DM Sans) e espaçamento equilibrado.
* **Visualizador 3D Interativo:** Espaços tridimensionais simplificados renderizados em tempo real no navegador utilizando **Three.js**.
* **Design System Integrado:** Painel documentando a paleta de cores (Noir, Linho, Cobre, Areia), escala tipográfica, escala de espaçamento e radius.
* **Animações Fluidas:** Efeitos de scroll reveal customizados e transições suaves de hover nos elementos interativos.
* **100% Responsivo:** Layout adaptável para qualquer tamanho de tela, garantindo uma excelente experiência de visualização tanto em celulares quanto em desktops.

---

## 🛠️ Tecnologias Utilizadas

* **React** (Biblioteca principal de UI)
* **Vite** (Ambiente de desenvolvimento rápido)
* **TypeScript** (Tipagem estática e segurança de código)
* **Tailwind CSS v4** (Estilização moderna)
* **Three.js** (Renderização gráfica 3D)

---

## 📂 Estrutura de Diretórios Importante

```bash
src/
├── app/                  # Entrada principal e roteamento (App.tsx)
├── assets/
│   └── private/          # Pasta segura e ignorada pelo Git para fotos/recursos confidenciais
├── components/
│   ├── layout/           # Elementos de layout global (ex: Navbar)
│   └── *.tsx             # Seções da página (Hero, Sobre, Projetos, Experiência, Contato, etc.)
├── hooks/                # Custom hooks (ex: useScrollReveal)
├── lib/                  # Utilitários compartilhados (ex: utils.ts)
└── styles/               # Arquivos de estilização global, fontes e variáveis de tema
```

> 🔒 **Nota sobre arquivos privados:** A pasta `src/assets/private/` está configurada no `.gitignore`. Arquivos de imagem pesados ou confidenciais colocados nesta pasta nunca serão enviados para o repositório público do GitHub.

---

## 🚀 Como Executar Localmente

### 1. Clonar o repositório
```bash
git clone https://github.com/Gpeder/Portif-lio---ACM.git
cd Portif-lio---ACM
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
O projeto estará disponível por padrão em `http://localhost:5173`.

### 4. Compilar para produção
```bash
npm run build
```
Os arquivos otimizados para publicação serão gerados dentro da pasta `dist/`.