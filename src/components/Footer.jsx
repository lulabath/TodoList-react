import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: 'black',
            color: '#ffff99',
            padding: '20px',
            marginTop: 'auto',
            width: '100vw',
            textAlign: 'center',
        }}>
            <p >Hecho por Luna Agustina Bath <FavoriteBorderIcon sx={{ verticalAlign: 'middle' }} /></p>
        </footer>
    );
}
