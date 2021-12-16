import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contact = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  const getContactList = (contactArray) => {
    return (
      <TransitionGroup className='contact-list'>
        {contactArray.map((contact) => {
          const itemRef = React.createRef();
          return (
            <CSSTransition nodeRef={itemRef} key={contact.id} classNames='item' timeout={400}>
              <div ref={itemRef}>
                <ContactItem contact={contact} />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  };

  return <Fragment>{filtered ? getContactList(filtered) : getContactList(contacts)}</Fragment>;
};

export default Contact;
