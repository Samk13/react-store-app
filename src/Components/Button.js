import styled from 'styled-components';

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4 rem;
  background: transparent;
  border: 0.05rem solid var(--green);
  border-color: ${props => (props.cart ? 'var(--orange)' : 'var(--green)')};
  color: ${props => (props.cart ? 'var(--orange)' : 'var(--green)')};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 02rem 0.5rem 0, 2rem 0;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${props => (props.cart ? 'var(--orange)' : 'var(--green)')};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;

export { ButtonContainer };
