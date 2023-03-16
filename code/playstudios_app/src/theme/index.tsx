import { useMemo } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import {
    createTheme,
    ThemeOptions,
    StyledEngineProvider,
    ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
//
import palette from './palette';
import typography from './typography';
import componentsOverride from './overrides';
import GlobalStyles from './globalStyles';

// ----------------------------------------------------------------------

type Props = {
    children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {

    const themeOptions = useMemo(
        () => ({
            palette: palette('light'),
            typography,
        }),
        []
    );

    const theme = createTheme(themeOptions as any);

    theme.components = componentsOverride(theme);

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
}
