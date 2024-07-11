import { useState,useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useNewsData from "../hooks/useNewsData";
import CustomPagination from "./CustomPagination";
import defaultImg from '../assests/defaultImage.png'
import '../styles/NewsList.css'
import SubscriptionPopup from "./SubscriptionPopup";
const NewsList = ({category, searchTerm, country}) => {

  const [showPopup, setShowPopup] = useState(false);
  const [dontShowAgain,setDontShowAgain] = useState(localStorage.getItem('dontShowAgain')=== 'true');

  useEffect(()=>{
    if(!dontShowAgain){
      const timer = setTimeout(()=>{
        setShowPopup(true);
      },5000);
      return () => clearTimeout(timer); 
    }
  },[dontShowAgain]);

  function handleReadMoreClick(){
    setShowPopup(true);
  }
  function handleDontShowMeAgain(){
    setDontShowAgain(true);
    localStorage.setItem('dontShowAgain','true');
    setShowPopup(false);
  }

  
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  const { newsData, loading, error } = useNewsData(category, searchTerm, country);           //custom hook

  if (loading) {
    return <div>Loading...⏳</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const totalArticles = newsData.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = newsData.slice(startIndex, endIndex);

  return (
    <>
    <Container>
      <Row>
        {currentArticles?.map((article) => (
          <Col xs={12} md={5} lg={4} key={article.url}>
            <Card className="card" style={{height:'350px', borderRadius:'20px'}}>
              <Card.Img style={{height:'165px',borderRadius:'20px'}} className="cardimage" src={article.urlToImage || defaultImg} variant="top"/>
              <Card.Body>
                <Card.Title style={{fontSize:'19px'}}>{`${article.title?.slice(0, 40) || 'No title available'}...`}</Card.Title>
                <Card.Text>{`${article.description?.slice(0, 40) || 'No description available'}...`}</Card.Text>
                <a href={article.url} target='_blank' rel="noopener noreferrer" className="btn btn-outline-primary read-more-btn">
                  Read More
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />

    </Container>
    <SubscriptionPopup show={showPopup} onHide={()=>setShowPopup(false)} onDontShowAgain={handleDontShowMeAgain}/>
    </>
  );
};

export default NewsList;
