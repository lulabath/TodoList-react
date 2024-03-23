import { VerticalAlignBottom } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Footer () {
    return (
        <footer style={{
            backgroundColor: 'black',
            color: '#ffff99',
            padding: '20px',
            position: 'fixed',
            bottom: '0px',
            width: '100vw',
            textAlign: 'center',
        }}>
           <p >HECHO POR LUNA AGUSTINA BATH <FavoriteBorderIcon style={{verticalAlign: 'middle'}} /></p>
        </footer>
    );
}
