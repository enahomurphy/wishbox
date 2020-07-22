import styled from 'styled-components';
import { Fonts, colors } from '../../../Styles/Global';

export const Div = styled.div`
  width: 740px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 480px;
  left: 224px;

  a {
    font-family: ${Fonts.primary};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-decoration: underline;
    color: ${colors.navy};
  }
`
export const P = styled.p`
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.darkGray};
  text-transform: uppercase;
`

export const TableContainer = styled.div`
  position: absolute;
  top: 531px;
  left: 224px; 

  table {
    width: 760px;
    border-collapse: collapse;
    margin-top: 20px;
}

.table-title {
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.lighterGray};
}

.table-content, .primary {
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.darkGray};
}

.table-content td {
  padding-top: 35px;
}

.exchange td  {
  background: ${colors.white};
  padding: 10px 0px;
  box-shadow: 0px 0px  0px rgba(0, 0, 0, 0.5); 
}

.december td {
  padding-bottom: 20px;
}

.d {
  width: 18px;
  height: 29px;
  font-family:${Fonts.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #5B64D8;
  background: rgba(91, 100, 216, 0.2);
  padding:2px 6px;
  border-radius: 100%;
  text-align: center;
}

.n {
  width: 18px;
  height: 29px;
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #F5CF08;
  background: rgba(245, 207, 8, 0.2);
  padding:2px 6px;
  border-radius: 100%;
  text-align: center;
}

.j {
  width: 18px;
  height: 29px;
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #F02687;
  background: rgba(240, 38, 135, 0.2);
  padding:2px 6px;
  border-radius: 100%;
  text-align: center;
}

span {
  margin-right: 10px;
}
`

export const RecentWishesContainer = styled.div`
  width: 360px;
  height: 451px;
  background: ${colors.white};
  box-shadow:0px 4px 15px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  padding: 15px;
  position: absolute;
  left: 1000px;
  top: 486px;

  h2 {
    font-family: ${Fonts.primary};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.darkGray};
    text-transform: uppercase;
    padding-left: 10px;
    margin-bottom: 40px;
  }
`