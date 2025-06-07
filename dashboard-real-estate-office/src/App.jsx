import {RouterProvider} from "react-router";
import {router} from "./presentation/routes/router.jsx";
import {ThemeProvider} from "@mui/material";
import {theme} from './shared/themes/materialTheme.jsx'
import {CacheProvider} from "@emotion/react";
import {cacheRtl} from "./shared/themes/cacheRtl.jsx";

function App() {
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App;
