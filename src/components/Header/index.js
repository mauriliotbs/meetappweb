import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Content } from './styles';
import logo from '~/assets/logo.svg';

export default function Header() {
  const name = useSelector(state => state.user.profile.name);

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Meetapp" />
          </Link>
        </nav>

        <aside>
          <div>
            <strong>{name}</strong>
            <Link to="/profile">Meu perfil</Link>
          </div>
          <button type="button">Sair</button>
        </aside>
      </Content>
    </Container>
  );
}
