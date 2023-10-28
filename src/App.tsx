import { BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Container } from 'react-bootstrap';

const NavBar = React.lazy(() => import('./components/layout/NavBar'));
const Router = React.lazy(() => import('./components/Router'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container style={{minHeight:'100vh', minWidth:'100%', padding: '0'}}>
        <React.Suspense fallback={<Spinner animation="border" />}>
          <Router />
        </React.Suspense>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App
