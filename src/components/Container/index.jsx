import React from 'react';
import PropTypes from 'prop-types';
import ContainerWrap from './styles';

function Container(props) {
  const { children } = props;

  return (
    <ContainerWrap>
      { children }
    </ContainerWrap>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
