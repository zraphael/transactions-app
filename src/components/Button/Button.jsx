import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonDiv from './Button.styles';

function Button(props) {
  const { content, redirect } = props;

  const navigate = useNavigate();

  return (
    <ButtonDiv
      onClick={redirect ? () => { navigate(redirect); } : null}
    >
      {content}
    </ButtonDiv>
  );
}

Button.propTypes = {
  content: PropTypes.string,
  redirect: PropTypes.string,
};

Button.defaultProps = {
  content: 'default',
  redirect: null,
};

export default Button;
