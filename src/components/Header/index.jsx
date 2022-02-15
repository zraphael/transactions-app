import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Header(props) {
  const {
    title, children,
  } = props;

  return (
    <S.Header>
      <S.Title>{title}</S.Title>
      { children }
    </S.Header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: 'Listagem de Transações',
  children: null,
};

export default Header;
