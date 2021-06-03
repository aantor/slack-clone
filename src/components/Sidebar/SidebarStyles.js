import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  background: ${({ theme }) => theme.colors.primary};
  flex: 0.3;
  max-width: 16.25rem;
  height: 100vh;
  border-top: 2px solid #49274b;
  > hr {
    border: 1px solid #47274b;
    margin: 10px 0;
  }
`;
export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #49274b;
  padding: 0 0.625rem;

  > div {
    h2 {
      text-transform: uppercase;
      font-weight: bold;
      color: #fff;
      font-size: 0.875rem;
    }
    h3 {
      margin-top: -0.6rem;
      color: gray;
      display: flex;
      align-items: center;
      gap: 2px;
      font-size: 0.75rem;
      svg {
        color: green;
      }
    }
  }
  > svg {
    background: #fff;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    padding: 3px;
    cursor: pointer;
  }
`;
