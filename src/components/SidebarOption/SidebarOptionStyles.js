import styled from 'styled-components';

export const SidebarOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #fff;
  font-size: 0.75rem;
  cursor: pointer;
  padding-left: 10px;
  margin-top: -8px;
  :hover {
    opacity: 0.9;
    background: #340e36;
  }
  svg {
    font-size: 1rem;
  }
  > h3 {
    font-weight: 500;
  }
`;

export const SidebarOptionChannel = styled.div`
  margin-top: 10px;
  > span {
    display: inline-block;
    /* padding: 15px; */
    margin-bottom: 10px;
    margin-left: 1.5rem;
  }
`;
