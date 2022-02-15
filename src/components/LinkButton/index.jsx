import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonLayout from './styles';

function Button(props) {
  const { content, redirect, variant } = props;

  const navigate = useNavigate();

  return (
    <ButtonLayout
      onClick={redirect ? () => { navigate(redirect); } : null}
      variant={variant}
    >
      {content}
    </ButtonLayout>
  );
}

Button.propTypes = {
  content: PropTypes.string,
  redirect: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outlined']),
};

Button.defaultProps = {
  content: 'default',
  redirect: null,
  variant: 'contained',
};

export default Button;
