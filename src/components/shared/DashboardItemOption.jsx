/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material'

function DashboardItemOption({ children, title }) {
    return (
        <Box>
            <Typography
                fontSize={'.8rem'}
                fontWeight={'bold'}
                mb={1}
                sx={{
                    textTransform: 'uppercase'
                }}
            >
                {title}
            </Typography>
            <Box
                display={'flex'}
                alignItems={'center'}
            >
                {children}
            </Box>

        </Box>
    )
}

export default DashboardItemOption