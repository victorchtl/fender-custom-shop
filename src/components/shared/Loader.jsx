import { Box, CircularProgress } from '@mui/material';
import { Html, useProgress } from '@react-three/drei'
import { useEffect } from 'react';

function Loader() {
    return (
        <Html center>
            <CircularProgress color='primary' />
        </Html>
    )
}

export default Loader