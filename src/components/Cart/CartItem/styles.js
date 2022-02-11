import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  img :{
    maxWidth: '10%'
  },
  listItemText: {
    paddingLeft:20,
    height:'auto',
    textAlign:'center',
    width:'33%'
   
  },
  circleButton : {
    borderRadius:'80%',
    width:'50px !important'
  },
  grow: {
    margin:'0 20px',
    display: 'inline-block'
  },
 
}));