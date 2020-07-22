import styled from 'styled-components'
import { Fonts, colors } from '../../../Styles/Global';

export const FilterContainer = styled.div`
  width: 354px;
  height: 790px;
  position: absolute;
  top: 186px;
  left: 199px;
  background: ${colors.white};
  border-radius: 6px;
  padding-left: 15px;
  margin-top: 19px;

  h3 {
    font-family: ${Fonts.primary};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.darkGray};
    margin-bottom: 24px;
  }
`
export const FilterInput = styled.div`
  display: flex;
  align-items: center;
  width: 306px;
  height: 50px;
  border-radius: 6px;
  background: #FAFAFA;
  padding: 0 10px;
  cursor: pointer;
  margin-bottom: 24px;

  input {
    border: none;
    outline: none;
    margin-left: 10px;
    background: #FAFAFA;
    cursor: pointer;
  }
  
  input::placeholder {
    font-family: ${Fonts.primary};
    font-weight: bold;
    font-style: normal;
    font-size: 15px;
    line-height: 14px;
    color: rgba(43, 48, 52, 0.4);
  }
`
export const FilterOption = styled.div`
  width: 306px;
  background: ${colors.white};
  height: 500px;
  box-sizing: border-box;
  border-radius: 3px;
  outline: none;
  margin-top: 20px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    background: #F9F9F9;
    width: 6px;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    width: 4px;
    height: 100px;
    background: #E1E1E1;
    border-radius: 6px;
    outline: 0;
  }

  .option {
    font-family: ${Fonts.primary};
    font-weight: 500;
    font-style: normal;
    font-size: 18px;
    line-height: 22px;
    color: ${colors.darkGray};
    cursor: pointer;
    margin-bottom: 30px;
}

  p {
    margin-top: 15px;
    font-family: ${Fonts.primary};
    font-weight: 500;
    font-style: normal;
    font-size: 18px;
    line-height: 22px;
    color: ${colors.gray};
    cursor: pointer;
  }

  p:hover {
    color: ${colors.lightBlue};
  }

  .blue-text {
    color: ${colors.lightBlue};
  }
`

export const StatusWrapper = styled.div`
  width: 768px;
  height: 790px;
  position: absolute;
  top: 186px;
  left: 593px;
  background:${colors.white};
  border-radius: 6px;
  margin-top: 19px;
  padding: 0 10px;

  h3 {
    font-family: ${Fonts.primary};
    font-weight: bold;
    font-style: normal;
    font-size: 24px;
    line-height: 29px;
    color:${colors.darkGray};
    margin-bottom: 10px;
  }

  p {
    font-family: ${Fonts.primary};
    font-weight: 500;
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.gray};
    margin-bottom: 33px;
  }
`
export const StatusContainer = styled.div`
  display: flex;
  width: 760px;
  justify-content: space-between;
  margin-bottom: 40px;
`
export const Plus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 30px;
  padding-bottom: 7px;
  width: 30px;
  height: 25px;
  border-radius: 100%;
  background:${colors.lightBlue};
  color: ${colors.white};
  margin: 0 auto;
`