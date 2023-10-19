import api from '../api';
import React,{useState,useEffect} from 'react';
import { Container, Row ,Col} from 'react-bootstrap';
import SpiderChart from 'react-spider-chart';

function Home() {

    const [users, setUsers] = useState({
        name: "",
        skills: [],
        position:""
      });
    
      const fetch_users = async () => {
        const response = await api.get("/users");
        return response.data;
      }
    
      useEffect(() => {
        fetch_users().then((res) => {
          setUsers(res);
        });
      }, []);

      const chartData = {
        labels: ['Strength', 'Speed', 'Agility', 'Stamina', 'Intelligence'],
        datasets: users.map((user) => ({
          label: user.name,
          data: user.skills,
        })),
      };
  return (
    <div>
        <Container>
            <Col>
            <Row> <h1> {users.name} </h1> </Row>
            <Row> <h2> {users.position} </h2> </Row>
            </Col>
            <Row> 
            <SpiderChart data={chartData} /> 
            </Row>
        </Container>
      
    </div>
  );
}
export default Home;