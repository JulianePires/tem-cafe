import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: 14px;
    text-transform: uppercase;
    border: none;
    padding: 10px 16px;
    color: #ffa040;
    line-height: 1;
    font-family: 'Balsamiq Sans', cursive;
    transition: .3s;
    cursor: pointer;
    outline: 0;

    &:hover,
    &:focus {
        opacity: .5;
    }

    &:disabled{
      background: #3e2723;
      color: #6a4f4b;
      cursor: not-allowed;
    }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
