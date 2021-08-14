import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    profilePicture: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        backgroundColor: 'white',
        borderRadius: '30%',
        marginBottom: '10px',
        marginTop: '15px',
        padding: 5,
        width: 60,
        height: 60
    },
    media: {
        width: 110,
        height: 110,
        position: 'absolute',
        top: '-40px',
        left: '50%',
        transform: 'translate(-50%)'
    },
    delivery: {
        width: '60%',
        display: 'flex',
        margin: '0 auto',
        paddingTop: 50,
        marginTop: 40,
        borderRadius: 25,
        color: '#30334E',
        position: 'relative',
        overflow: 'visible',
        boxShadow: 'none'
    }
})

export default useStyles