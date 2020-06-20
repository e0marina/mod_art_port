import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const ContactModal = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const printValues = (e) => {
    e.preventDefault();
    console.log(email, subject, text);

    const post = {
      email: email,
      subject: subject,

      text: text,
    };

    axios.post("/email", post).then((res) => {
      console.log(res.data);
      toggle();
      // window.location.reload();
    });
  };

  return (
    <div>
      <Button
        color="link"
        style={{
          color: "gray",
          textDecoration: "none",
          position: "fixed",
          right: "20px",
          top: "15px",
        }}
        onClick={toggle}
      >
        Contact
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Send an Email</ModalHeader>
        <ModalBody>
          <Form onSubmit={printValues}>
            <FormGroup>
              <Label for="userEmail">Email</Label>
              <Input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                name="email"
                id="userEmail"
                placeholder="your email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="userSubj">Subject</Label>
              <Input
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                type="text"
                name="text"
                id="userSubj"
                placeholder="subject"
              />
            </FormGroup>

            <FormGroup>
              <Label for="usertext">text</Label>
              <Input
                value={text}
                onChange={(event) => setText(event.target.value)}
                type="textarea"
                name="text"
                id="usertext"
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ContactModal;
