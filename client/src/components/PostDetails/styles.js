import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column-reverse',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    flex: 0.7,
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    borderRadius: '15px',
    marginTop: '30px'
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
    [theme.breakpoints.down('sm')]: {
      height: '100px',
    }
  },
  commentFormContainer: {
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  comment: {
    marginTop: '10px',
  },
  creator: {
    textDecoration: 'none',
    color: '#3f51b5',
    marginLeft: '5px',
  },
  scoreInnerContainer: {
    height: 'auto',
    overflowY: 'auto',
    marginRight: '30px',
  },
  tag: {
    textDecoration: 'none',
    color: '#3f51b5',
  },
  modalBtns: {
    width: '100%',
    paddingTop: '4%',
    textAlign: 'center'
  },
  modalQuestion: {
    padding: '5%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  modalHead: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
}));