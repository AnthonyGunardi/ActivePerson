import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    gap: '0.5rem',
    padding: '16px',
  },
  card: {
    borderRadius: 15,
    borderRadius: 15,
    margin: '30px 0',
    padding: '10px 50px'
  },
  description: {
    margin: '10px',
    fontWeight: 'bold',
    fontFamily: 'SansSerif'
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  table: {
    overflowX: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  divider: {
    margin: '20px 0',
    textTransform: 'capitalize'
  },
  userName: {
    textDecoration: 'none',
    color: 'black'
  },
  postsButton: {
    marginTop: '30px',
    marginBottom: '10px',
    fontSize: 20,
    backgroundColor: '#2a72d0'
  },
  searchButton: {
    backgroundColor: '#2a72d0'
  },
  viewButton: {
    display: 'flex'
  }
}));