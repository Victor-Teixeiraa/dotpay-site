# 🚀 DOTPAY - Landing Page Estilo Aviva Fintech

![DOTPAY](https://img.shields.io/badge/DOTPAY-Fintech-5B4FE6?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Pronto-success?style=for-the-badge)

## 📋 Sobre o Projeto

Landing page da **DOTPAY** desenvolvida com design **clean e moderno**, inspirado diretamente no site da [Aviva Fintech](https://www.avivafintech.com.br/). O projeto prioriza **conversão**, **performance** e **experiência do usuário**.

---

## ✨ Características do Design

### 🎨 Design System
- **Cor Principal**: `#5B4FE6` (Roxo/Azul vibrante)
- **Tipografia**: Inter (corpo) + Poppins (títulos)
- **Layout**: Clean, espaçado e moderno
- **Componentes**: Cards com bordas arredondadas e sombras suaves
- **Hover Effects**: Micro-interações em todos os elementos clicáveis

### 📱 Estrutura da Página

1. **Header Fixo**
   - Logo DOTPAY
   - Menu: Início, Soluções, Funcionalidades, Benefícios, Planos, Contato
   - Botão CTA "Começar Agora"
   - Menu hamburger responsivo

2. **Hero Section**
   - Tag "Plataforma Completa de Pagamentos"
   - Título grande: "Simplifique seus **pagamentos** e acelere suas **vendas**"
   - Descrição da proposta de valor
   - Botões: "Criar Conta Grátis" + "Ver Como Funciona"
   - Ilustração de cartão de crédito em card roxo
   - Estatísticas: 10 empresas ativas / 1 transacionado / 999 disponibilidade

3. **Soluções de Pagamento**
   - Grid 3x2 de cards com ícones
   - Pix, Cartão de Crédito, Boleto, Link de Pagamento, Financiamento, Cartão de Débito

4. **Funcionalidades**
   - 4 features principais em grid 2x2
   - Gestão Financeira, Cobrança Automatizada, Análise de Crédito, API e Webhooks

5. **Benefícios**
   - 6 vantagens em grid 3x2
   - Taxas competitivas, Recebimento rápido, Mobile first, etc.

6. **Planos e Preços**
   - 3 planos: Starter (Gratuito), Business (R$ 99/mês - Destaque), Enterprise (Custom)
   - Plano Business com badge "Mais Popular"

7. **CTA Final**
   - Background roxo com gradiente
   - "Pronto para começar?"
   - Botão "Criar Conta Grátis"

8. **Footer**
   - Background escuro
   - Logo branca + 4 colunas de links
   - Copyright

---

## 🛠️ Tecnologias

### Front-end Core
- **HTML5** - Estrutura semântica
- **CSS3** - Design system moderno com variáveis
- **JavaScript Vanilla** - Interatividade leve

### Bibliotecas Externas
- **[Phosphor Icons](https://phosphoricons.com/)** - Ícones modernos
- **[Google Fonts](https://fonts.google.com/)** - Inter & Poppins

---

## 📁 Estrutura de Arquivos

```
lp_DotPay/
│
├── index.html              # HTML principal (~540 linhas)
├── styles.css              # CSS completo (~960 linhas)
├── script.js               # JavaScript (~125 linhas)
├── README.md               # Documentação
│
└── images/
    ├── logo.png.jpg        # Logo principal (header)
    └── logo dottech branca.jpg  # Logo branca (footer)
```

---

## 🚀 Como Usar

### Método 1: Abrir Diretamente
1. Navegue até: `c:\Users\Dottech\Downloads\lp_DotPay\`
2. Clique duplo em [index.html](c:\Users\Dottech\Downloads\lp_DotPay\index.html)

### Método 2: Servidor Local (Recomendado)

#### Com Python
```bash
cd "c:\Users\Dottech\Downloads\lp_DotPay"
python -m http.server 8000

# Acesse: http://localhost:8000
```

#### Com Node.js
```bash
npx http-server

# Acesse: http://localhost:8080
```

#### Com VS Code Live Server
1. Abra a pasta no VS Code
2. Instale "Live Server" extension
3. Clique direito no index.html > "Open with Live Server"

---

## 🎨 Paleta de Cores

```css
/* Cores Principais */
--primary-color: #5B4FE6      /* Roxo vibrante */
--primary-dark: #4840C7       /* Roxo escuro */
--primary-light: #7B6FF4      /* Roxo claro */

/* Cinzas */
--gray-50: #F9FAFB            /* Background claro */
--gray-900: #111827           /* Texto escuro */

/* Status */
--success: #10B981            /* Verde */
--warning: #F59E0B            /* Laranja */
```

---

## 🖼️ Componentes Principais

### Cards de Solução
```html
<div class="solution-card">
    <div class="solution-card__icon solution-card__icon--pix">
        <i class="ph ph-qr-code"></i>
    </div>
    <h3 class="solution-card__title">Pix</h3>
    <p class="solution-card__description">...</p>
</div>
```

### Botões
```html
<!-- Primário -->
<a href="#" class="button button--primary">Começar Agora</a>

<!-- CTA Grande -->
<a href="#" class="button button--cta">Criar Conta Grátis</a>

<!-- Ghost -->
<button class="button button--ghost">Ver Como Funciona</button>

<!-- Outline -->
<a href="#" class="button button--outline">Falar com Vendas</a>
```

### Hero Card (Cartão Roxo)
```html
<div class="hero__card">
    <div class="card__illustration">
        <div class="card__chip"></div>
        <div class="card__wave">
            <i class="ph ph-credit-card"></i>
        </div>
    </div>
</div>
```

---

## 📱 Responsividade

### Breakpoints

| Dispositivo | Largura | Ajustes |
|------------|---------|---------|
| **Desktop** | 1200px+ | Layout padrão |
| **Tablet** | 768px - 1024px | Grid 2 colunas, menu hamburger |
| **Mobile** | 480px - 767px | Grid 1 coluna, botões full-width |
| **Mobile Pequeno** | < 480px | Fontes reduzidas, espaçamento otimizado |

### Testado Em:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile iOS e Android

---

## ⚙️ Funcionalidades JavaScript

### 1. Menu Mobile
- Abre/fecha ao clicar no hamburger
- Fecha ao clicar em link
- Animação suave

### 2. Scroll Ativo
- Destaca automaticamente o link da seção visível
- Atualiza conforme scroll

### 3. Smooth Scroll
- Rolagem suave ao clicar em links âncora
- Considera altura do header fixo

### 4. Botão "Ver Como Funciona"
- Rola para seção de soluções
- Pode ser customizado para modal/vídeo

---

## 🎯 Comparação com Aviva Fintech

| Elemento | Aviva Fintech | DOTPAY |
|----------|--------------|--------|
| **Cor Principal** | Roxo/Azul | ✅ `#5B4FE6` (Idêntico) |
| **Layout Hero** | 2 colunas + card | ✅ Implementado |
| **Tipografia** | Inter + Poppins | ✅ Idêntica |
| **Estatísticas** | 3 números | ✅ 10 / 1 / 999 |
| **Cards de Solução** | 6 cards em grid | ✅ Implementado |
| **Planos** | 3 opções | ✅ Starter / Business / Enterprise |
| **CTA Final** | Background roxo | ✅ Gradiente roxo |
| **Footer** | Background escuro | ✅ Gray-900 |

---

## 🔧 Customização Rápida

### Alterar Cor Principal
Edite no [styles.css](c:\Users\Dottech\Downloads\lp_DotPay\styles.css):
```css
:root {
    --primary-color: #SUA_COR_AQUI;
}
```

### Alterar Estatísticas
Edite no [index.html](c:\Users\Dottech\Downloads\lp_DotPay\index.html) (linhas 145-158):
```html
<div class="stat">
    <h3 class="stat__number">10k</h3>
    <p class="stat__label">Empresas ativas</p>
</div>
```

### Adicionar Nova Solução
```html
<div class="solution-card">
    <div class="solution-card__icon solution-card__icon--custom">
        <i class="ph ph-seu-icone"></i>
    </div>
    <h3 class="solution-card__title">Seu Título</h3>
    <p class="solution-card__description">Sua descrição</p>
</div>
```

E adicione no CSS:
```css
.solution-card__icon--custom {
    background: rgba(255, 0, 0, 0.1);
    color: #FF0000;
}
```

---

## 📊 Performance

### Métricas Esperadas (Lighthouse)
- 🟢 **Performance**: 95-100
- 🟢 **Accessibility**: 95-100
- 🟢 **Best Practices**: 95-100
- 🟢 **SEO**: 95-100

### Otimizações Implementadas
- ✅ CSS com variáveis (rápido de carregar)
- ✅ JavaScript mínimo (125 linhas)
- ✅ Ícones via CDN (cache)
- ✅ Fontes otimizadas (display=swap)
- ✅ Código semântico (SEO)

---

## 🆕 Diferenças da Versão Anterior

| Aspecto | Versão Anterior | Nova Versão (Aviva Style) |
|---------|----------------|---------------------------|
| **Estrutura** | 12 seções complexas | 7 seções focadas |
| **Design** | Múltiplos gradientes | Clean, roxo único |
| **Tipografia** | Vários tamanhos | Sistema consistente |
| **Ícones** | Font Awesome | Phosphor Icons |
| **JavaScript** | 400+ linhas | 125 linhas |
| **CSS** | 2000+ linhas | 960 linhas otimizadas |
| **Foco** | Feature-rich | Conversion-focused |

---

## 📈 Próximos Passos Sugeridos

### Fase 1 - Conteúdo
- [ ] Substituir textos placeholder por conteúdo real
- [ ] Adicionar imagens/screenshots dos produtos
- [ ] Criar vídeo demonstrativo
- [ ] Adicionar depoimentos reais de clientes

### Fase 2 - Funcionalidades
- [ ] Integrar formulário com backend
- [ ] Adicionar modal de vídeo no botão "Ver Como Funciona"
- [ ] Implementar chat ao vivo
- [ ] Criar calculadora de taxas interativa

### Fase 3 - Marketing
- [ ] Configurar Google Analytics
- [ ] Adicionar pixels de conversão
- [ ] Implementar A/B testing
- [ ] Criar landing pages específicas por canal

### Fase 4 - SEO
- [ ] Otimizar meta tags
- [ ] Adicionar schema.org markup
- [ ] Criar sitemap.xml
- [ ] Configurar robots.txt

---

## 🐛 Troubleshooting

### Problema: Ícones não aparecem
**Solução**: Verifique se o CDN do Phosphor Icons está carregando:
```html
<script src="https://unpkg.com/@phosphor-icons/web"></script>
```

### Problema: Fontes não carregam
**Solução**: Verifique conexão com Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:...&family=Poppins:...&display=swap" rel="stylesheet">
```

### Problema: Menu mobile não abre
**Solução**: Verifique se o script.js está carregando:
```html
<script src="script.js"></script>
```

### Problema: Logos não aparecem
**Solução**: Verifique os caminhos das imagens:
- Header: `images/logo.png.jpg`
- Footer: `images/logo dottech branca.jpg`

---

## 📞 Suporte

**DOTPAY - Plataforma de Pagamentos**

- 🌐 Website: Em desenvolvimento
- 📧 Email: contato@dotpay.com.br
- 📱 WhatsApp: (11) 99999-9999
- 📞 Telefone: (11) 3000-0000

---

## 📝 Licença

Este projeto está sob a licença MIT.

---

## 🙏 Créditos

- **Design Inspirado**: [Aviva Fintech](https://www.avivafintech.com.br/)
- **Ícones**: [Phosphor Icons](https://phosphoricons.com/)
- **Fontes**: [Google Fonts](https://fonts.google.com/)

---

## 📚 Documentação Técnica

### Estrutura CSS

```
styles.css
├── Variáveis (linhas 1-91)
├── Reset (linhas 93-145)
├── Utilitários (linhas 147-261)
├── Header (linhas 263-337)
├── Hero (linhas 339-449)
├── Soluções (linhas 451-532)
├── Funcionalidades (linhas 534-587)
├── Benefícios (linhas 589-625)
├── Planos (linhas 627-735)
├── CTA (linhas 737-773)
├── Footer (linhas 775-836)
└── Responsividade (linhas 838-962)
```

### Estrutura HTML

```
index.html
├── Head (linhas 1-34)
├── Header (linhas 41-87)
├── Hero (linhas 99-159)
├── Soluções (linhas 165-245)
├── Funcionalidades (linhas 251-321)
├── Benefícios (linhas 327-377)
├── Planos (linhas 383-450)
├── CTA (linhas 456-471)
└── Footer (linhas 479-529)
```

---

<div align="center">

### ⭐ Projeto Concluído e Pronto para Uso!

**Desenvolvido seguindo o design da Aviva Fintech**

[⬆ Voltar ao topo](#-dotpay---landing-page-estilo-aviva-fintech)

</div>
