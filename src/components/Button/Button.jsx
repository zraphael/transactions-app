import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonDiv from './Button.styles';

function Button(props) {
  const { content, redirect, reverseStyle } = props;

  const navigate = useNavigate();

  return (
    <ButtonDiv
      style={reverseStyle ? { background: '#FFFFFF', color: '#4F46E5', border: '1px solid #4F46E5' } : null}
      onClick={redirect ? () => { navigate(redirect); } : null}
    >
      {content}
    </ButtonDiv>
  );
}

Button.propTypes = {
  content: PropTypes.string,
  redirect: PropTypes.string,
  reverseStyle: PropTypes.bool,
};

Button.defaultProps = {
  content: 'default',
  redirect: null,
  reverseStyle: false,
};

export default Button;
