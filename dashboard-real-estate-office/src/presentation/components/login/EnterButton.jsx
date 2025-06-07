import React from 'react'
import Button from "@mui/material/Button";
import {BACKGROUND_COLORS} from "../../../shared/constants/colors.jsx";


export const EnterButton = ({ onPress }) => {
    return (
        <Button variant="contained"
                onClick={onPress}
                sx={{
                    height: '70px',
                    width: '327px',
                    top: '317px',
                    backgroundColor: BACKGROUND_COLORS['primary'],
                    borderRadius: '25px',
                    fontSize: '24px',
                }}>
            دخول
        </Button>
    )
}
