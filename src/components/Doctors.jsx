import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import {doctorData} from "../helper/data"

const Doctors = () => {
  console.log(doctorData)
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
      </h3>
      <Row>
        {doctorData.map(({id, name, dep, img}) =>(
           <Col>
           <img src = {img} alt = {name}/>
           <h5>{name}</h5> 
           <h5>{dep}</h5> 
           </Col>
          
        ))}
         

      </Row>
    </Container>
  )
}

export default Doctors
