import { useFormik } from 'formik';
import * as yup from 'yup';

import {
  Row,
  Col,
  Container,
  Form,
  FloatingLabel,
} from 'react-bootstrap';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('submit', values);
    },
    validationSchema: yup.object().shape({
      username: yup.string().required('Please enter username'),
      password: yup.string().required('Please enter username').min(8),
    }),
  });

  return (
    <Container fluid className="h-100">
      <Row>
        <Col>
          <Form>
            <FloatingLabel>
              <Form.Control
                type="text"
                name="username"
                value={formik.values.username}
              />
            </FloatingLabel>
          </Form>
        </Col>
      </Row>
      <h1>Hello</h1>
    </Container>
  );
};

export default Login;
