/**
 * Tema light/dark/system da família Brito — implementação canônica
 * (extraída do financas/agenda; localStorage `theme` + classe `.dark`).
 *
 * No layout raiz do app, injete o script anti-flash ANTES da hidratação:
 *
 *   import { THEME_INIT_SCRIPT } from "@paulo-brito-jr/brito-ui/theme";
 *   <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
 */
export declare const THEME_INIT_SCRIPT = "\n(function(){\n  try {\n    var s = localStorage.getItem('theme') || 'system';\n    var dark = s === 'dark' || (s === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);\n    if (dark) document.documentElement.classList.add('dark');\n  } catch (e) {}\n})();\n";
export declare function ThemeToggle(): import("react").JSX.Element;
//# sourceMappingURL=theme.d.ts.map