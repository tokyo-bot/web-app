import React from 'react';
import firebase from 'firebase/app';
import { Container, Grid, Row, Panel, Col, Button, Icon, Alert } from 'rsuite';
import { auth, database } from '../misc/firebase';
// import logo from './images/logo.png';

const SignIn = () => {
    const signInWithProvider = async provider => {
        try {
            const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
      
            if (additionalUserInfo.isNewUser) {
              await database.ref(`/profiles/${user.uid}`).set({
                name: user.displayName,
                createdAt: firebase.database.ServerValue.TIMESTAMP,
              });
            }
      
            Alert.success('Signed in', 4000);
          } catch (err) {
            Alert.error(err.message, 4000);
    }
};
    const onGoogleSignIn = () => {
        signInWithProvider(new firebase.auth.GoogleAuthProvider());
    };
    return (
        <div className="background-slatecolor">
        <Container>
      <Grid className="mt-3">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
                <div className = "box">
              <div className="center">
                <h2 style={{ color: 'white' }}>WELCOME TO MICROSOFT TEAMS!</h2>
                <p style={{ color: 'white' }}>Progressive interactive platform for neophytes</p>
              </div>
              <div className="pt-2">
                <Button block color="green" onClick={onGoogleSignIn}>
                  <Icon icon="google" /> Continue with Google
                </Button>
              </div>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
    </div>
    )
}

export default SignIn;