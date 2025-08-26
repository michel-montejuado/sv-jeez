import type { Theme } from "@mui/material/styles";

import { alpha } from "@mui/material/styles";

export default (theme: Theme) => `linear-gradient(${alpha(theme.palette.primary.main, 0.6)}, ${alpha(theme.palette.secondary.main, 0.6)}),url('https://picsum.photos/seed/index/1600/900')`