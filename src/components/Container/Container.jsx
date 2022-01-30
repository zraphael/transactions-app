import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import {
  ContainerWrap,
  Title,
  Header,
  ChildrenComponent,
} from './Container.styles';

function Container(props) {
  const {
    title, buttonText, buttonRedirect, children,
  } = props;

  return (
    <ContainerWrap>
      <Header>
        <Title>{title}</Title>
        {
            buttonText !== 'undefined'
              ? <Button content={buttonText} redirectAddress={buttonRedirect || null} />
              : null
        }
      </Header>
      <ChildrenComponent>{ children }</ChildrenComponent>
    </ContainerWrap>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
  children: PropTypes.node,
  buttonRedirect: PropTypes.string,
};

Container.defaultProps = {
  title: 'Listagem de Transações',
  buttonText: 'undefined',
  children: '',
  buttonRedirect: null,
};

export default Container;
