import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button } from 'reactstrap';

export default function CustomLink(props) {
  if (props.isLink) {
    return <a onClick={(e) => { e.preventDefault(); props.toggle(); }} href="#" style={{ textDecoration: 'underline' }}>
      <h4><Badge pill color={props.color}>1</Badge> Contacts</h4>
    </a>;
  } else {
    return <h4><Badge pill color={props.color}>1</Badge> Contacts</h4>;
  }
}