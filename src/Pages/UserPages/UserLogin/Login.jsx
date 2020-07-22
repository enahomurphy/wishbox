import React from 'react';
import { Link } from 'react-router-dom';

import { MusicIcon, ProfileIcon } from '../../../svg';
import { CreateButton } from '../../../components/Button/Button';

import {
  Container,
  TextWrapper,
  Text, IconBox,
  Content,
  ContentForm
} from '../UserSignUp/Styled';

const Login = () => {
  return (
    <>
      <Container>
        <Container primary>
          <Text>wishBox</Text>
          <TextWrapper>
            <p className="music-icon"><MusicIcon /></p>
            <Text primary>I love using this, my wishes were met seamlessly and on time</Text>
            <Text initial>Funmilola Akingbade</Text>
            <IconBox>
              <ProfileIcon />
              <ProfileIcon />
              <ProfileIcon />
            </IconBox>
          </TextWrapper>
        </Container>
        <Container secondary>
          <Content>
            <Content header>Welcome to wishBox</Content>
            <Content primary>Fill out the form to make your wish</Content>
            <ContentForm>
              <form>
                <label>Email Address</label>
                <br />
                <input
                  type="email"
                  placeholder="egjondoe@example.com"
                  className="input-box"
                />
                <label>Password</label>
                <br />
                <input
                  type="password"
                  placeholder="Enter your preferred password"
                  className="input-box"
                />
                <Link to="/users/Home" >
                  <CreateButton text="Log In" />
                </Link>
              </form>
            </ContentForm>
            <ContentForm checkBox left >
              <p> Don't have account?<Link to="/"> Sign Up here</Link></p>
            </ContentForm>
          </Content>
        </Container>
      </Container>
    </>
  );
}

export default Login;