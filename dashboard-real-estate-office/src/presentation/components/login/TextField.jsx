import React, {useState} from 'react'
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/constants/colors.jsx";

export const TextField = ({type = 'text', label, value}) => {
    const [showPassword, setShowPassword] = useState(type !== "password");

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <FormControl sx={{
            backgroundColor: BACKGROUND_COLORS['secondary2'],
            borderRadius: '15px',
            height: '60px',
            width: '470px',
        }}>
            <InputLabel htmlFor="standard-password" sx={{color: TEXT_COLORS['secondary'], fontSize: '16px'}}>
                {label}
            </InputLabel>
            <OutlinedInput
                id="standard-password"
                type={showPassword ? 'text' : 'password'}
                {...value}
                sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none'
                    },
                    fontSize: '16px',
                }}
                endAdornment={
                    type === 'password' ? (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={showPassword ? 'إخفاء كلمة السر' : 'إظهار كلمة السر'}
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    ) : null
                }
            />
        </FormControl>
    )
}
