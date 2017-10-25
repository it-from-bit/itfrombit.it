import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp } from "@phenomic/preset-react-app/lib/client";
import ReactBootstrap, { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

//import './assets/plugins/bootstrap/css/bootstrap.min.css';

const Home = () => (
  <div>
    <p>This is a homepage</p>

    <Button>Default</Button>
    <Button bsStyle="primary">Primary</Button>
    <Button bsStyle="success">Success</Button>
    <Button bsStyle="info">Info</Button>
    <Button bsStyle="warning">Warning</Button>
    <Button bsStyle="danger">Danger</Button>
    <Button bsStyle="link">Link</Button>
  </div>
);

export default createApp(() => (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
  </Router>
));