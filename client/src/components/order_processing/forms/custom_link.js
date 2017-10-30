import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge } from 'reactstrap';

export default function CustomLink(props) {
  if (props.isLink) {
    return <a href="#" onClick={props.toggle} style={{ textDecoration: 'underline' }}>
      <h4><Badge pill color={props.color}>1</Badge> Contacts</h4>
    </a>;
  } else {
    return <h4><Badge pill color={props.color}>1</Badge> Contacts</h4>;
  }
}