import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome completo é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword
      ? field
          .min(6, 'A nova senha deve conter pelo menos 6 dígitos')
          .required('Você deve digitar um nova senha para modificar a antiga')
      : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .oneOf(
            [Yup.ref('password')],
            'Por favor, confirme a sua nova senha de forma exata'
          )
          .min(6, 'A nova senha deve conter pelo menos 6 dígitos')
          .required('É obrigatório confirmar a nova senha')
      : field
  ),
});

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data, { resetForm }) {
    dispatch(updateProfileRequest(data));
    resetForm({
      name: data.name,
      email: data.email,
    });
  }

  return (
    <Container>
      <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />
        <hr />
        <Input name="oldPassword" type="password" placeholder="Senha atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />
        <div>
          <button type="submit">
            <div>
              <MdAddCircleOutline size={20} color="#fff" />
              <span>Salvar perfil</span>
            </div>
          </button>
        </div>
      </Form>
    </Container>
  );
}
