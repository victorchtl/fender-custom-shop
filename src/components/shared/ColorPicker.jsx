/* eslint-disable react/prop-types */
import { Box, Menu, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { SketchPicker } from "react-color"

function ColorPicker({ color, target }) {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleColorChange = (newColor) => {
        target(newColor.hex);
    };

    const theme = useTheme()

    return (
        <Box>
            <Box display={'flex'} alignItems={'center'}>
                <Box
                    sx={{
                        bgcolor: color,
                        width: '30px',
                        aspectRatio: '1',
                        borderRadius: '50%',
                        border: 'solid 1px grey',
                        cursor: 'pointer',
                        '&:hover': {
                            border: `solid 1.5px ${theme.palette.primary.main}`,
                        }
                    }}
                    onClick={handleClick}
                >
                </Box>
                <Typography fontSize={'.7rem'} ml={1}>{color}</Typography>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <SketchPicker color={color} onChange={handleColorChange} />
                </Menu>
            </Box>

        </Box>
    )
}

export default ColorPicker