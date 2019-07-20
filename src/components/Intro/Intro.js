import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import Icon from '../Icon';
import Logo from '../Logo';
import Text from '../Text';
import { H1 } from '../Heading';
import { AnimationSt, ContainerSt } from './Intro.styles';

const Intro = ({ hasIntro, ...rest }) => {
  return (
    <ContainerSt {...rest}>
      {hasIntro ? (
        <AnimationSt>
          <H1 textAlign="center" color="white" mb={['16px', '32px']}>
            Offizielle Mäxchen Meisterschaft
          </H1>
          <Text textAlign="center" color="white">
            A justo, porta faucibus morbi non nibh arcu accumsan interdum at aenean col Eleifend sed accumsan cep cras augue
            dui Eleifend Aliquam pharetra.
          </Text>
          <Button unstyled>
            <Icon type="ARROWCIRLE" fill="white" height="64px" width="64px" rotation="180deg" aria-labelledby="Arrow" />
          </Button>
          <Logo />
        </AnimationSt>
      ) : (
        <Logo />
      )}
    </ContainerSt>
  );
};

Intro.defaultProps = {
  hasIntro: false,
};

Intro.propTypes = {
  hasIntro: PropTypes.bool,
};

export default Intro;
