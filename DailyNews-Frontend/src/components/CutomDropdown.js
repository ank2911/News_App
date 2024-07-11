import React, { useState, useEffect } from 'react';
import { Form, Button, Dropdown, Container, Row, Col } from 'react-bootstrap';
import '../styles/CustomDropdown.css'
const categories = [
  { name: 'General', price: 79 },
  { name: 'Business', price: 39 },
  { name: 'Technology', price: 39 },
  { name: 'Sports', price: 39 },
  { name: 'Entertainment', price: 29 },
  { name: 'Health', price: 29 },
  { name: 'Science', price: 29 }
];

const subscriptionOptions = {
  online: 30,
  hardcopy: 50,
  both: 65,
};
function CustomDropdown() {
    const [subscriptionType, setSubscriptionType] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showDropdown,setShowDropdown] = useState(true);
    useEffect(() => {
      const categoriesPrice = selectedCategories.reduce((acc, category) => acc + category.price, 0);
      const subscriptionPrice = subscriptionOptions[subscriptionType] || 0;
      setTotalPrice(categoriesPrice + subscriptionPrice);
    }, [selectedCategories, subscriptionType]);
  
    const handleCategoryChange = (category) => {
      setSelectedCategories((prev) =>
        prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
      );
    };
  
  return (
    <Container>
    <Row>
      <Col>
        <Dropdown onSelect={(key) => setSubscriptionType(key)}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select Subscription Type
          </Dropdown.Toggle>
          <Dropdown.Menu onClick={()=>setShowDropdown(true)}>
            <Dropdown.Item eventKey="online">Online - ₹30/month</Dropdown.Item>
            <Dropdown.Item eventKey="hardcopy">Hardcopy - ₹50/month</Dropdown.Item>
            <Dropdown.Item eventKey="both">Both - ₹65/month</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
    {subscriptionType && showDropdown && (
      <Row className="custom-dropdown">
        <Col>
          <Form.Group controlId="formCategories">
            <Form.Label className="mt-3">Select Categories</Form.Label>
            <Button style={{marginLeft:'70px'}} className='close-btn' onClick={()=>setShowDropdown(false)}>
              X 
            </Button>
            {categories.map((category) => (
              <Form.Check
                key={category.name}
                type="checkbox"
                label={`${category.name} - ₹${category.price} `}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
            ))}
          </Form.Group>
          <div className="mt-3">
            <strong>Total Price: ₹{totalPrice} </strong>
          </div>
          <Button variant="primary" className="mt-3">
            Proceed to Payment
          </Button>
        </Col>
      </Row>
    )}
  </Container>
  )
}

export default CustomDropdown