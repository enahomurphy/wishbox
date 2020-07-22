import React from 'react';

import { Header } from '../../../components/AdminHeader/AdminHeaders';
import { CreateButton } from '../../../components/Button/Button';
import AdminFooter from '../../../components/Footer/AdminFooter';
import { Container } from '../../../Styles/Elements';
import { Arrow } from '../../../svg';
import {
  SlotContainer,
  ActiveArrow,
  TitleBox,
  FormContainer
} from './Styled';

const CreateSlot = () => {
  return (
    <>
      <Container>
        <Header />
        <SlotContainer>
          <ActiveArrow> <Arrow /> </ActiveArrow>
          <TitleBox>
            <h2>Create a Slot</h2>
            <p>Fill the form below to create a slot</p>
          </TitleBox>
          <FormContainer>
            <form className="form-box">
              <label>Name of Slot</label>
              <input type="text" placeholder="Enter the name of the slot" />
              <label>Slot Description</label>
              <textarea placeholder="Write a short description of the slot" />
              <label>Start Slot</label>
              <input type="date" />
              <label>End Slot</label>
              <input type="date" placeholder="Select a date for slot to close" />
              <CreateButton text="Create a Slot" />
            </form>
          </FormContainer>
        </SlotContainer>
        <AdminFooter />
      </Container>
    </>
  );
}

export default CreateSlot;