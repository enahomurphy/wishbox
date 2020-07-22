import React from 'react';

import Button from '../Button/Button';
import { Sidebar, Div, FormContainer  } from './SlotStyled';

const SideBar = () => {
  return (
    <div>
      <Sidebar>
        <div>
          <h2>Edit Slot Info</h2>
        </div>
        <FormContainer className="slot-form">
          <form>
            <label>Name of Slot</label>
            <input type="text" placeholder="December Wishbox" />
            <label>Slot Description</label>
            <textarea placeholder=" Lorem Khaled Ipsum is a major key to success. 
             Celebrate success right, the only way, apple. The other day the grass was." />
            <label>Start Slot</label>
            <input type="text" placeholder="13 Friday, May 2019" />
            <label>End Slot</label>
            <input type="text" placeholder="16 Monday, May 2019" />
            <div className="form-btn">
              <Button text="Update" />
            </div>
          </form>
        </FormContainer>
        <div className="delete">
          <Div primary>No longer interested in this slot?</Div>
          <Div delete>Delete Slot</Div>
        </div>
      </Sidebar>
    </div>
  );
}

export default SideBar;