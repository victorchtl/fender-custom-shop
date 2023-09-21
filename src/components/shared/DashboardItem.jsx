/* eslint-disable react/prop-types */
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Stack, Typography } from '@mui/material'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

export function DashboardItem({ children, title }) {
    return (
        <Box>
            <Accordion elevation={0}>
                <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                    <Typography
                        fontWeight={'bold'}
                        sx={{ textTransform: 'uppercase' }}
                    >
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack direction={'row'} spacing={5}>
                        {children}
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <Divider />
        </Box>
    )
}
