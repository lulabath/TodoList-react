import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Header() {
    return (
        <Box>
           <Typography variant="h2" gutterBottom style={{ color:'black', fontWeight:'bold', textShadow: '#FFFF99' }}>Todo List</Typography>
        </Box>
    )
}
