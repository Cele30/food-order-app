import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 90,
        borderRadius: 50,
        marginTop: 10,
        backgroundColor: '#F3F5F7',
        color: '#BEBFC4',
        padding: '12px 10px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        padding: '45%',
        backgroundColor: 'transparent',
        mixBlendMode: 'multiply'

    },
    active: {
        backgroundColor: '#FFFFFF',
        color: '#555462'
    }
}));

export default useStyles