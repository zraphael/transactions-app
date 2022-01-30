import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonDiv from './Button.styles';

function Button(props) {
  const { content, buttonRedirect } = props;

  return (
    <ButtonDiv
      onClick={buttonRedirect ? useNavigate(buttonRedirect) : null}
    >
      {content}
    </ButtonDiv>
  );
}

Button.propTypes = {
  content: PropTypes.string,
  buttonRedirect: PropTypes.string,
};

Button.defaultProps = {
  content: 'default',
  buttonRedirect: null,
};

export default Button;
