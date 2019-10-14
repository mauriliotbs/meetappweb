import React from 'react';
import { MdEdit, MdDeleteForever, MdLocationOn, MdEvent } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { Container, LocationTimeDiv, DescriptionDiv } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function Details({ location: meetup }) {
  const { id, title, description, location, formattedDate } = meetup.state;
  const banner = meetup.state.File.url;

  function handleEditMeetup() {
    history.push('/edit', meetup);
  }

  async function handleCancelMeetup() {
    if (id) {
      try {
        await api.delete(`meetups/${id}`);
        history.push('/dashboard');
        toast.success(`Meetup [${title}] removido`);
      } catch (err) {
        toast.error('Erro ao deletar um meetup');
      }
    }
  }

  return (
    <Container>
      <header>
        <h1>{title && title}</h1>
        <div>
          <button className="btn-edit" type="button" onClick={handleEditMeetup}>
            <div>
              <MdEdit size={20} color="#fff" />
              <span>Editar</span>
            </div>
          </button>
          <button
            className="btn-cancel"
            type="button"
            onClick={handleCancelMeetup}>
            <div>
              <MdDeleteForever size={20} color="#fff" />
              <span>Cancelar</span>
            </div>
          </button>
        </div>
      </header>
      <img src={banner} alt="Banner" />

      <DescriptionDiv>
        <p>{description && description}</p>
      </DescriptionDiv>

      <LocationTimeDiv>
        <div>
          <MdEvent size={20} />
          <span>{formattedDate && formattedDate}</span>
        </div>
        <div>
          <MdLocationOn size={20} />
          <span>{location && location}</span>
        </div>
      </LocationTimeDiv>
    </Container>
  );
}

Details.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
