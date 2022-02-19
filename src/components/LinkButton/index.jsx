import React from 'react';
import PropTypes from 'prop-types';
import ButtonLayout from './styles';

function LinkButton(props) {
  const { content, to, variant } = props;

  return (
    <ButtonLayout
      to={to}
      variant={variant}
    >
      {content}
    </ButtonLayout>
  );
}

LinkButton.propTypes = {
  content: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined']),
};

LinkButton.defaultProps = {
  variant: 'contained',
};

export default LinkButton;
