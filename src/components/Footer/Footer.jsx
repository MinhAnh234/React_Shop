import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './styles.css'
function appBarLabel() {
 
  return (
    <Toolbar className="toolBarStyle" >
    <Typography component="div"  className="block" gutterBottom> 
        <BookmarkIcon style={{'vertical-align': 'middle' }} sx={{ fontSize: 30 }}/> Follow me: 
        <IconButton><FacebookIcon style={iconStyle} sx={{ fontSize: 30 }}/></IconButton>
        <IconButton><TwitterIcon style={iconStyle} sx={{ fontSize: 30 }}/></IconButton>
        <IconButton><InstagramIcon style={iconStyle} sx={{ fontSize: 30 }}/></IconButton>
    </Typography>
 
    <Typography component="div"  className="block"  gutterBottom >ACCEPTED PAYMENT METHODS</Typography>
    <Typography component="div"  className="block" gutterBottom >
               <img className="payment" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png"  alt="visa" width="60px" height="30px" />
               <img className="payment" src="https://play-lh.googleusercontent.com/SQdKNpgn0xyILDOek1wx8luqqwB5fVHtoRqr_IUo695Ulb1wAVToyVyCxnczS2Tc7Q" margin="normal" alt="masterCard" width="60px" height="30px" />
               <img className="payment" src="https://images-na.ssl-images-amazon.com/images/G/09/credit/img17/CBCC/cardart/asin_card_ap_mini._CB660571132_.png" margin="normal" alt="amazon" width="60px" height="30px" />
               <img className="payment" src="https://k-tai.watch.impress.co.jp/img/ktw/list/1363/433/paypay.jpg" margin="normal" alt="England" width="60px" height="30px" />
    </Typography>
    </Toolbar>
  );
}
const iconStyle= {
        'vertical-align': 'sub'
}

const darkTheme = createTheme({
    
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function Footer() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          {appBarLabel()}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}