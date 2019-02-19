import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`

`;

class SinglePhotoScreen extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        <Text>Single Photo Screen</Text>
      </Container>
    );
  }
}

export default SinglePhotoScreen;
