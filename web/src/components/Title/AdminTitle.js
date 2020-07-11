import React from 'react';
import styled, {css} from 'styled-components';
import { fonts, colors } from '../../Styles/Global';
import { SearchIcon } from '../../svg'

const InputBox = styled.div`
  width: 837px;
  height: 80px;
  background: ${colors.white};
  margin-bottom: 24px;
`

const NewTitle = styled.div`
font-family: ${fonts.fontFamily};
font-weight: bold;
font-size: 24px;
line-height: 29px;
color: ${colors.darkGray};

.input-box {
  display: flex;
  align-items: center;
  width: 250px;
  height: 50px;
  border-radius: 6px;
  background: #F7F7F7;
  padding: 0 10px;
  cursor: pointer;
  position: absolute;
  left: 610px;
  top: 25px;
}

.input-box input {
  border: none;
  outline: none;
  margin-left: 10px;
  background: #F7F7F7;
  cursor: pointer;
}

.input-box input::placeholder {
  font-family: ${fonts.fontFamily};
  font-weight: bold;
  font-style: ${fonts.fontStyle};
  font-size: 15px;
  line-height: 14px;
  color: rgba(43, 48, 52, 0.4);
}

.arrow {
  position: absolute;
  left: 140px;
  top: 1px;
}

.shape{
  padding-left: 12px;
}

${props => props.primary && css`
  color:${colors.gray};
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  margin-top: 11px;
`}

${props => props.secondary && css`
  color:${colors.lightblue};
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  position: absolute;
  left: 410px;
  top: 50px;
`}
${props => props.filter && css`
  color:${colors.darkGray};
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  position: absolute;
  left: 490px;
  top: 50px;
`}
`

const Title = (props) => {
  return (
    <div>
      <InputBox>
      <NewTitle>{props.text}</NewTitle>
      <NewTitle primary>{props.label}</NewTitle>
      <div className="input-wrapper">
          <NewTitle secondary>{props.choice}<span className="arrow">{props.arrow}</span> </NewTitle>
          <NewTitle filter>{props.filter}<span className="shape" >{props.shape}</span> </NewTitle>
        <NewTitle>
          <div className="input-box">
            <SearchIcon />
            <input type="search" placeholder="Find..." />
          </div>
        </NewTitle>
       
        </div>
        </InputBox>
    </div>
  );
}

export default Title;