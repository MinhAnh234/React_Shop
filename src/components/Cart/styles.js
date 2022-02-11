import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto/400.css';
export default makeStyles((theme) => ({
  bg:{
    backgroundColor: 'white',
    marginTop:'90px',
    minHeight:'800px'
  },
  bt_bottom: {
    margin:'30px 0px'
  },
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
    color:'purple',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  subTotal : {
    color: '#424242'
  },
  image: {
   paddingTop: '5px'
  }
  
}));