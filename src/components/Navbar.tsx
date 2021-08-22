import {Container} from 'reactstrap';
import icon  from '../icons/icon.png';
import icon1  from '../icons/icon1.png';
import Search from '../icons/Search.png';
import Popover from '@material-ui/core/Popover';
import {useState} from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
  }),
);


export default function Navbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };

    const handleClose = () => {
        setAnchorEl(null);
    };
      
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;

    return (
        <div className="fullDisplay"> 
            <div className="navTitle" >
                <h4>Faturalar</h4>
            </div>
            <Container>
            <div className="navbar1">
                    <img className="searchIcon" src={Search} alt="" />
                    <div className="icons">
                        <button className="popoverIcon" onClick={handleClick}><img src={icon1}/></button>
                        <img src={icon} />
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                            }}
                        >
                            <Typography className={classes.typography}>
                                <p>Filtre Ekle</p>
                                <hr />
                                <div className="flex">
                                    <p>Baslik</p>
                                    <p>Kosul</p>
                                    <p>Deger</p>
                                </div>
                                <div className="flex">
                                   <select name="" id="">
                                       <option value="">Servis Adi</option>
                                   </select>
                                   <select name="" id="">
                                       <option value="">Esittir</option>
                                   </select>
                                   <select name="" id="">
                                       <option value="">DMP</option>
                                   </select>
                                </div>
                                <div className="popoverButton" >
                                    <button className="popoverCancel" >Iptal</button>
                                    <button className="popoverAdd" >Ekle</button>
                                </div>
                                
                            </Typography>
                        </Popover>
                    </div>         
            </div>
            </Container>
            </div>
    )
}

