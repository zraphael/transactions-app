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
    title, buttonText, redirect, children,
  } = props;

  return (
    <ContainerWrap>
      <Header>
        <Title>{title}</Title>
        {
            buttonText
              ? <Button style={{ width: '20%' }} content={buttonText} redirect={redirect || null} />
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
  redirect: PropTypes.string,
};

Container.defaultProps = {
  title: 'Listagem de Transações',
  buttonText: null,
  children: '',
  redirect: null,
};

export default Container;
