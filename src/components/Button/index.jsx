import React from 'react';
import PropTypes from 'prop-types';
import ButtonLayout from './styles';

function Button(props) {
  const { content, variant, onClick } = props;

  return (
    <ButtonLayout
      variant={variant}
      onClick={onClick}
    >
      {content}
    </ButtonLayout>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['contained', 'outlined']),
};

Button.defaultProps = {
  onClick: null,
  variant: 'contained',
};

export default Button;
