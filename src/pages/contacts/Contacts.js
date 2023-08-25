import ContactForm from '../../components/contactForm/ContactForm';
import ContactList from '../../components/contactList/ContactList';
import Filter from '../../components/Filter/Filter';
import Loader from '../../components/loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/selectors';

const Contacts = () => {
  const isLoadingApp = useSelector(selectIsLoading);

  console.log(`Проверка isLoading ${isLoadingApp}`);

  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* React homework template */}
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoadingApp && <Loader />}
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
