import React, { useState, useEffect } from 'react';
import { MdAddCircleOutline, MdKeyboardArrowRight } from 'react-icons/md';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import history from '~/services/history';

import { Container, Meetup } from './styles';
import api from '~/services/api';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');
      if (response.data) {
        const aux = response.data.map(meetup => {
          return {
            ...meetup,
            formattedDate: format(
              parseISO(meetup.date),
              "dd 'de' MMMM 'de' yyyy', às' HH:mm",
              {
                locale: pt,
              }
            ),
          };
        });
        setMeetups(aux);
      }
    }

    loadMeetups();
  }, []);

  function handleNewMeetup() {
    history.push('/edit');
  }

  function handleViewMeetup(meetup) {
    history.push('/details', meetup);
  }

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <button type="button" onClick={handleNewMeetup}>
          <div>
            <MdAddCircleOutline size={20} color="#fff" />
            <span>Novo meetup</span>
          </div>
        </button>
      </header>
      {meetups.length > 0 ? (
        <ul>
          {meetups.map(meetup => (
            <Meetup onClick={() => handleViewMeetup(meetup)} key={meetup.id}>
              <strong>{meetup.title}</strong>
              <div>
                <span>{meetup.formattedDate}</span>
                <MdKeyboardArrowRight size={32} color="#fff" />
              </div>
            </Meetup>
          ))}
        </ul>
      ) : (
        <h2>Você ainda não possui o seu próprio meetup :(</h2>
      )}
    </Container>
  );
}
