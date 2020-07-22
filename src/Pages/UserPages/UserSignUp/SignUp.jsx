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

} from './Styled';

const SignUp = () => {
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
                <label>Full Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your first name and last name"
                  className="input-box"
                />
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
                <label>Confirm Password</label>
                <br />
                <input
                  type="password"
                  placeholder="Repeat password"
                  className="input-box"
                />
                <ContentForm checkBox>
                  <input type="checkbox" />
                  <p>I agree to the terms and conditions</p>
                </ContentForm>
                <CreateButton text="Sign Up" />
              </form>
            </ContentForm>
            <ContentForm checkBox left >
              <p> Already have an account?<Link to="users/Login"> Login</Link></p>
            </ContentForm>
          </Content>
        </Container>
      </Container>
    </>
  );
}

export default SignUp;