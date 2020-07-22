import React from 'react';
import styled from 'styled-components';

import { colors, Fonts } from '../../Styles/Global';
import { LeftArrow, RightArrow } from '../../svg';

const Button = styled.div`
  position: absolute;
  top: 950px;
  left: 1120px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Prev = styled.div`
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 12px;
  color: ${colors.white};
  position: absolute;
  right: ${props => props.Next ? "21px" : "210px"};
`

const Span = styled.p`
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.red ? "red" : "#4A4A4A"};
  padding: 0 8px;
`

const PrevNext = () => {
  return (
    <Button>
      <LeftArrow />
      <Prev className="prev">Prev</Prev>
      <Span>1</Span>
      <Span red>2</Span>
      <Span>3</Span>
      <Span>4</Span>
      <Span>...</Span>
      <Span>18</Span>
      <RightArrow />
      <Prev Next className="next">Next</Prev>
    </Button>
  );
}

export default PrevNext;