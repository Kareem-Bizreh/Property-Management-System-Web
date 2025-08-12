import Box from "@mui/material/Box";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../colors.jsx";
import Tab from "@mui/material/Tab";
import TabsMUI from "@mui/material/Tabs";

export function CustomTabPanel({children, value, index, ...other}) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

export const Tabs = ({tabs, minWidth, tabHeight, bgHeight, border, borderRadius, tab, setTab}) => {
    function a11yProps(index) {
        return {
            id: `tab-${index}`,
            'aria-controls': `tabpanel-${index}`,
        };
    }

    const handleTabChange = (event, newValue) => setTab(newValue);

    const tabCount = tabs?.length ?? 0;
    const width = `calc(${100 / tabCount}% - 5%)`;

    const tabSx = {
        width,
        minWidth,
        maxWidth: 'none',
        height: tabHeight,
        padding: '10px',
        borderWidth: border ? "3px" : "0px",
        borderRadius,
        whiteSpace: "nowrap",
        fontSize: '24px',
        fontWeight: 700,
        lineHeight: '100%',
        letterSpacing: '3%',
        textAlign: 'center',
        borderStyle: 'solid',
        transition: 'all 0.3s ease',
        '&.Mui-selected': {
            color: TEXT_COLORS.primary,
            backgroundColor: BACKGROUND_COLORS.app,
            borderColor: BACKGROUND_COLORS.button,
        },
        '&:not(.Mui-selected)': {
            color: TEXT_COLORS.select,
            backgroundColor: BACKGROUND_COLORS.picture,
            borderColor: TEXT_COLORS.secondary,
        },
    };

    return (
        <TabsMUI
            value={tab}
            onChange={handleTabChange}
            aria-label="tourism tabs"
            TabIndicatorProps={{style: {display: 'none'}}}
            sx={{
                width: '100%',
                minHeight: bgHeight,
                backgroundColor: BACKGROUND_COLORS.table,
                '& .MuiTabs-flexContainer': {
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '16px',
                    padding: '8px 0',
                },
            }}
        >
            {tabs?.map((tab, index) => (
                <Tab label={tab} {...a11yProps(index)} sx={tabSx}/>
            ))}
        </TabsMUI>
    )
}
