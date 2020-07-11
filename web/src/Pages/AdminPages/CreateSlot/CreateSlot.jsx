import React from 'react';
import styled, { css } from 'styled-components';

import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import { CreateButton } from '../../../components/Button/Button';
import { colors, fonts } from '../../../Styles/Global';
import Footer from '../../../components/Footer/Footer';
import { Container } from '../../../Styles/Elements';
import { Arrow } from '../../../svg';

const SlotContainer = styled.div`
  width: 600px;
  height: 714px;
  background: ${colors.white};
  border-radius: 6px;
  position: absolute;
  left: 420px;
  top: 140px;
  padding: 34px 100px 24px 100px;
  
  .form-box input {
    width: 400px;
    height: 50px;
    border: 1px solid #D6DAE1;
    border-radius: 3px;
    box-sizing: border-box;
    margin-bottom: 32px;
    padding: 10px;
  }

  .form-box textarea {
    width: 400px;
    height: 98px;
    border: 1px solid #D6DAE1;
    border-radius: 3px;
    box-sizing: border-box;
    margin-bottom: 32px;
    padding: 10px
  }

  .create-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .create-arrow {
    position: absolute;
    top: -5px;
    left: -50px;
  }
`

const Div = styled.div`
  font-family: ${fonts.fontFamily};
  font-style: ${fonts.fontStyle};
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: ${colors.darkGray};
  ${props => props.fill && css`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: ${colors.gray};
    margin-top: 16px;
    margin-bottom: 40px;
  `}
  ${props => props.label && css`
    font-weight: normal;
    font-size: 16px;
    line-height: 14px;
    color: ${colors.darkGray};
    margin-bottom: 10px;
  `}
`

const CreateSlot = () => {
  return (
    <div>
      <Container>
        <AdminHeader
          admin="Admin"
          wishes="Wishes"
          title="wishBox"
          fulfilment="Fulfilments"
          normalDashboard="Dashboard"
        />
        <SlotContainer>
          <div className="create-arrow">
            <Arrow />
          </div>
          <div className="create-box">
            <Div>Create a Slot</Div>
            <Div fill>Fill the form below to create a slot</Div>
          </div>
          <div>
            <form className="form-box">
              <Div label>Name of Slot</Div>
              <input type="text" placeholder="Enter the name of the slot" />
              <Div label>Slot Description</Div>
              <textarea placeholder="Write a short description of the slot" />
              <Div label>Start Slot</Div>
              <input type="date" />
              <Div label>End Slot</Div>
              <input type="date" placeholder="Select a date for slot to close" />
              <CreateButton text="Create a Slot" />
            </form>
          </div>
        </SlotContainer>
      </Container>
      <Footer />
    </div>
  );
}

export default CreateSlot;