import {RouterProvider} from "react-router";
import {router} from "./shared/GlobalRouter.jsx";
import {ThemeProvider} from "@mui/material";
import {theme} from './shared/shared/themes/materialTheme.jsx'
import {CacheProvider} from "@emotion/react";
import {cacheRtl} from "./shared/shared/themes/cacheRtl.jsx";
import {useNotification} from "./shared/shared/hooks/useNotification.jsx";

function App() {
    const {ToastComponent} = useNotification();

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <ToastComponent />
                <RouterProvider router={router}/>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App;
