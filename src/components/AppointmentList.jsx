import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { TiDelete } from "react-icons/ti";


const AppointmentList = ({appointments}) => {

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "salmon"}}>
        Appointment List
      </h3>
      
      {
        appointments.map(({id, patient, consulted, doctor, day})=>(
          <div key={id} className ="appointments">
            <Row>
              <Col>
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
              </Col>
              <Col>
              <h5>Date: {day.toLocaleDateString()}</h5>
              <h5>Time: {day.toLocaleTimeString()}</h5>
              </Col>
              <Col>
              <TiDelete className = "text-danger fs-1" type= "button" />

            

              </Col>
            </Row>

          </div>
        ))
      }
    </Container>
  )
}

export default AppointmentList
