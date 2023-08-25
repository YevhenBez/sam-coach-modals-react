import MaterialUI from '../../components/MaterialUI';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Home = () => {
  return (
    <>
      <MaterialUI.Typography
        color="primary"
        variant="h2"
        sx={{ fontSize: '10vw', textAlign: 'center' }}
      >
        This is Phonebook
      </MaterialUI.Typography>
      <AutoStoriesIcon color="primary" sx={{ width: '100%', height: '70vh' }} />
    </>
  );
};

export default Home;
