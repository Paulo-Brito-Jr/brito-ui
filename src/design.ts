// Design tokens unificados — cole estas constantes em vez de escrever as classes soltas,
// ou componha com cn() quando precisar de variações locais.
// As cores semânticas (surface/soft/fg/muted/subtle/line) são variáveis CSS
// que trocam automaticamente entre light e dark.

// Cards e contêineres
export const CARD          = "bg-surface rounded-3xl p-5 shadow-sm";
export const CARD_COMPACT  = "bg-surface rounded-3xl p-4 shadow-sm";
export const CARD_TIGHT    = "bg-surface rounded-3xl p-3 shadow-sm";

// Inputs (use em <input>, <select>, <textarea>)
export const INPUT =
  "w-full px-4 py-3 bg-soft rounded-xl text-[15px] text-fg placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-accent-ring";
export const INPUT_SM =
  "w-full px-3 py-2.5 bg-soft rounded-xl text-[14px] text-fg placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-accent-ring";

// Botões
export const BTN_PRIMARY =
  "bg-accent text-accent-fg rounded-2xl font-semibold active:scale-[0.98] transition-transform disabled:opacity-50";
export const BTN_SECONDARY =
  "bg-soft text-muted rounded-2xl font-semibold";
export const BTN_DANGER =
  "bg-negative-soft text-negative rounded-2xl font-semibold";

// Sizes auxiliares pros botões
export const BTN_SIZE_LG = "px-4 py-3 text-[15px]";
export const BTN_SIZE_MD = "px-3.5 py-2 text-[13px]";
export const BTN_SIZE_SM = "px-3 py-1.5 text-[12px]";

// Títulos de seção (dentro da página, fora de um card)
export const SECTION_TITLE =
  "text-[13px] font-semibold text-fg px-1";
export const SECTION_TITLE_MUTED =
  "text-[11px] font-semibold text-subtle uppercase tracking-wider px-1";

// Label pequenos (labels de formulário em cima de inputs)
export const LABEL =
  "text-[11px] font-semibold text-muted uppercase tracking-wider";

// Chip (usado em filtros e seletores)
export const CHIP_BASE =
  "px-3 py-1.5 rounded-xl text-[12px] font-medium transition-colors";
export const CHIP_ACTIVE   = "bg-accent text-accent-fg";
export const CHIP_INACTIVE = "bg-surface text-muted shadow-sm";

// Badge (inline, menor que chip — pra status, categoria no item, etc.)
export const BADGE =
  "inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-[10px] font-medium";
