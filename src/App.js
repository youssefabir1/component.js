import Name from './Name';
import Price from './price';
import Description from './description';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function App() {
  return (
    <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/Theramag375.png" />
      <Card.Body>
        <Name />
        <Description />
        <Price />
        <Button variant="primary">Add to Card</Button>
      </Card.Body>
    </Card>

    <div style={{ textAlign : 'center', fontFamily: 'times new roman', fontSize: '4em', color: '#c70404' }}>
    <p>
      <strong>Hello, there!</strong>
    </p>
    </div>

    </>
  );
}

export default App;
