import { makeStyles } from "@material-ui/core/styles";   
export default makeStyles(()=>({
    root: {
        position:'relative',
        maxWidth: '100%',
        height:'100%'
    },
    media: {
        height:0,
        paddingTop: '110%',
    },
   
    cardContent : {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    cardActions: {
        position: 'absolute',
        bottom: 0,
        right:0,
        display:'block'
    },
    cardDescription: {
        height:'100px'
    }
    
}));