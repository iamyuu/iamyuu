---
title: "Terminal productivity: las herramientas que transformaron mi flujo de trabajo"
description: Un recorrido por las herramientas de línea de comandos modernas que reemplazan a los clásicos Unix — más rápidas, más inteligentes y con mejor DX.
pubDatetime: 2026-01-18T10:00:00Z
tags:
  - terminal
  - productividad
  - linux
  - cli
  - herramientas
draft: false
---

El ecosistema CLI vivió una revolución silenciosa. Herramientas escritas en Rust y Go reemplazaron binarios Unix con décadas de antigüedad, añadiendo colores, syntax highlighting, fuzzy search y Git-awareness casi sin sacrificar velocidad. Estas son las que uso a diario.

## Table of contents

## Shell: Zsh + Starship

[Starship](https://starship.rs) es sin duda el prompt que más mejora la experiencia con el menor esfuerzo. Funciona con cualquier shell, es increíblemente rápido (escrito en Rust) y muestra contexto relevante: branch de Git, versión de Node/Python/Rust, estado del último comando.

```toml file=~/.config/starship.toml
# Estilo minimalista pero informativo
format = """
$directory\
$git_branch\
$git_status\
$nodejs\
$rust\
$python\
$cmd_duration\
$line_break\
$character"""

[git_branch]
symbol = " "
style = "bold purple"

[git_status]
conflicted = "⚔️ "
ahead = "⇡${count}"
behind = "⇣${count}"
modified = "✎${count}"
untracked = "?${count}"

[cmd_duration]
min_time = 2_000
format = "took [$duration](bold yellow)"
```

## Reemplazos de herramientas clásicas

### `ls` → `eza` (antes `exa`)

```bash
eza --tree --level=2 --icons --git    # árbol con iconos y estado Git
eza -la --sort=modified               # lista larga, ordenada por fecha
```

### `find` → `fd`

```bash
# find: verboso y poco ergonómico
find . -name "*.ts" -not -path "*/node_modules/*"    # [!code --]

# fd: intuitivo, respeta .gitignore por defecto
fd -e ts                    # todos los .ts del proyecto    # [!code ++]
fd -e ts --exec bat {}      # abrir cada resultado con bat  # [!code ++]
```

### `grep` → `ripgrep` (`rg`)

```bash
# grep clásico
grep -r "useEffect" src/ --include="*.tsx"      # [!code --]

# rg: 5-10× más rápido, respeta .gitignore
rg "useEffect" --type ts                         # [!code ++]
rg "TODO|FIXME|HACK" --type ts --stats           # [!code ++]
rg "deprecated" -l                               # solo nombres de archivo # [!code ++]
```

### `cat` → `bat`

`bat` es `cat` con syntax highlighting, número de líneas, paginado y Git diff integrado:

```bash
bat src/components/Header.astro     # con colores y líneas
bat --diff archivo.ts               # muestra cambios Git inline
```

### `cd` → `zoxide`

Aprende a qué directorios vas con frecuencia y permite saltar a ellos con pocas letras:

```bash
z astro      # salta a ~/proyectos/mi-blog-astro si es el que más visitas
z blog src   # coincidencia múltiple
zi           # modo interactivo con fzf
```

## Multiplexor: `tmux` con configuración moderna

```bash file=~/.tmux.conf
# Prefijo más cómodo
set -g prefix C-a
unbind C-b

# Dividir paneles con teclas intuitivas
bind | split-window -h -c "#{pane_current_path}"  # [!code highlight]
bind - split-window -v -c "#{pane_current_path}"  # [!code highlight]

# Navegación con Alt+flecha (sin prefijo)
bind -n M-Left  select-pane -L
bind -n M-Right select-pane -R
bind -n M-Up    select-pane -U
bind -n M-Down  select-pane -D

# Mouse activado
set -g mouse on

# Colores 256
set -g default-terminal "tmux-256color"
```

## Fuzzy finder: `fzf` — el multiplicador de todo

`fzf` convierte cualquier lista en un buscador interactivo. Solo añade `| fzf` a cualquier comando.

```bash
# Buscar en historial de comandos
CTRL+R con fzf integrado

# Checkout de branch con preview
git branch | fzf --preview 'git log --oneline {}' | xargs git checkout

# Matar procesos
ps aux | fzf --multi | awk '{print $2}' | xargs kill

# Buscar y abrir archivo
fd -e ts | fzf --preview 'bat --color=always {}' | xargs nvim
```

## Git moderno: `lazygit`

Una TUI (Terminal UI) de Git que hace obvio lo que está pasando en tu repositorio:

```bash
lazygit   # abre la interfaz
```

Características destacadas:

- Ver diffs por archivo y por línea
- Stage selectivo (líneas individuales, no solo archivos)
- Resolver conflictos visualmente
- Rebase interactivo con drag & drop

## Mi `.zshrc` básico optimizado

```bash file=~/.zshrc
# Carga rápida con lazy loading
export PATH="$HOME/.cargo/bin:$HOME/.local/bin:$PATH"

# Aliases modernos
alias ls='eza --icons'
alias ll='eza -la --icons --git'
alias tree='eza --tree --icons'
alias cat='bat'
alias find='fd'
alias grep='rg'
alias lg='lazygit'

# fzf integración
source <(fzf --zsh)

# zoxide
eval "$(zoxide init zsh)"

# starship
eval "$(starship init zsh)"
```

> La mejor inversión de tiempo en productividad de terminal no es aprender nuevas herramientas — es dominar las que ya tienes. Pero cuando una herramienta moderna hace lo mismo 5× más rápido con mejor DX, el cambio se paga solo en la primera semana.
