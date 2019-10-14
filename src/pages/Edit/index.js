import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';

import { Container, Description, DateDiv, ButtonDiv } from './styles';
import BannerInput from './BannerInput';
import DateInput from './DateInput';
import api from '~/services/api';
import history from '~/services/history';

export default function Edit({ location: meetup }) {
  console.log('teste', meetup);
  let initialData;
  if (meetup.state) {
    initialData = {
      image_id: meetup.state.state.File,
      title: meetup.state.state.title,
      description: meetup.state.state.description,
      date: new Date(meetup.state.state.date),
      location: meetup.state.state.location,
      meetup_id: meetup.state.state.id,
    };
  }
  console.log(initialData);

  async function handleSubmit(data) {
    console.log(data.date);
    const meetupData = {
      ...data,
      date: JSON.stringify(data.date),
    };
    console.log(meetupData);
    try {
      if (meetup.state) {
        await api.put(`/meetups/${initialData.meetup_id}`, data);
        toast.success('Meetup atualizado com sucesso!');
      } else {
        await api.post('/meetups', data);
        toast.success('Meetup criado com sucesso!');
      }
      history.push('/dashboard');
    } catch (err) {
      toast.error('Erro ao enviar dados do Meetup');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={initialData}>
        <BannerInput name="image_id" />
        <Input name="title" placeholder="Título do Meetup" />
        <Description
          name="description"
          multiline
          placeholder="Descrição completa"
        />

        <DateDiv>
          <DateInput name="date" />
        </DateDiv>
        <Input name="location" placeholder="Localização" />
        <ButtonDiv>
          <button type="submit">
            <div>
              <MdAddCircleOutline size={20} color="#fff" />
              <span>Salvar meetup</span>
            </div>
          </button>
        </ButtonDiv>
      </Form>
    </Container>
  );
}

Edit.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
