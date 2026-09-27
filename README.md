# @paulo-brito-jr/brito-ui

Design system da **família Brito** — a fonte canônica do design "Geist família"
(redesign 2026-04, pilotado no financas e replicado na agenda). Três exports:

| Export | O quê |
|---|---|
| `@paulo-brito-jr/brito-ui/tokens.css` | Tokens semânticos light+dark (`--app`, `--surface`, `--fg`, `--accent*`, `--positive/negative*`) + `@theme inline` do Tailwind v4 + `@custom-variant dark` + utilitários (`.tabular`, `.no-scrollbar`) + wrappers `.area-finance`/`.area-agenda` |
| `@paulo-brito-jr/brito-ui/theme` | `ThemeToggle` (segmented Claro/Auto/Escuro) + `THEME_INIT_SCRIPT` (anti-flash, injetar no layout) |
| `@paulo-brito-jr/brito-ui/design` | Constantes de classe canônicas (`CARD`, `INPUT`, `BTN_PRIMARY`, `CHIP_*`, `BADGE`…) |

## Adoção (padrão vendor da casa)

```bash
git submodule add https://github.com/Paulo-Brito-Jr/brito-ui vendor/brito-ui
# package.json:  "@paulo-brito-jr/brito-ui": "file:vendor/brito-ui"
pnpm install
```

`globals.css` do app (Tailwind v4):

```css
@import "tailwindcss";
@import "@paulo-brito-jr/brito-ui/tokens.css";

/* identidade do app: sobrescrever só o accent */
:root  { --accent: #D97706; --accent-soft: rgb(217 119 6 / 0.10); --accent-ring: rgb(217 119 6 / 0.30); }
.dark  { --accent: #F2A744; --accent-soft: rgb(242 167 68 / 0.16); --accent-fg: #1A0F00; --accent-ring: rgb(242 167 68 / 0.35); }
```

Layout raiz:

```tsx
import { THEME_INIT_SCRIPT } from "@paulo-brito-jr/brito-ui/theme";
<script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
```

Toggle (menu/nav): `import { ThemeToggle } from "@paulo-brito-jr/brito-ui/theme";`

## Tema "padrão Apple" (opcional, desde 0.2.0)

`apple.css` remapeia os mesmos tokens para os valores do Human Interface
Guidelines (fundo agrupado, card branco, um acento azul do sistema, cores de
status do sistema, SF Pro). É aditivo e opt-in por app:

```css
@import "tailwindcss";
@import "@paulo-brito-jr/brito-ui/tokens.css";
@import "@paulo-brito-jr/brito-ui/apple.css";   /* depois do tokens.css */
```

Regras que vêm junto (manual `design-apple` da Skynet): um acento por app,
cor só para status, caixa de frase (nada de `uppercase tracking-wider` em
rótulo), alvos de 44 px, hairline em vez de borda, vidro (`.apple-glass`) só
em barras. Piloto em produção: skynet.britos.app (26–27/set/2026).

## Regras da casa

- Cores de superfície/texto **só** pelas classes semânticas (`bg-surface`, `text-fg`,
  `text-muted`…). `bg-white`/`bg-gray-*` proibidos.
- Status financeiro: `text-positive` / `text-negative` (nunca green/red cru).
- Dark mode obrigatório em todo app da família (toggle no header/nav).
- Editou aqui? `pnpm build` (dist commitado) + push; consumidores dão bump no
  submodule + `pnpm install`.
