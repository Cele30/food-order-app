import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 170,
        margin: '40px 0',
        borderRadius: 20,
        background: 'transparent',
        overflow: 'visible',
    },
    media: {
        mixBlendMode: 'multiply',
        marginTop: '-40px',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '1px solid #999'
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 0,
    },
    cardActions: {
        '&:hover': {
            background: 'transparent',
            borderRadius: 20
        }
    }
});

export default useStyles