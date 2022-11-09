import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      margin: 10,
    },
  },
  paper: {
    padding: "20px",
    borderRadius: '20px', 
    maxWidth: "600px"
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: '10px',
    backgroundColor: '#2a72d0'
  },
  heading: {
    fontWeight: 'bolder'
  }
}));