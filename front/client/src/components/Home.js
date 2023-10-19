import api from '../api';
import React,{useState,useEffect} from 'react';
import { Container, Row ,Col} from 'react-bootstrap';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, RadialLinearScale } from 'chart.js';
import ProfileAvatar from './ProfileAvatar';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title,RadialLinearScale);



function Home() {

    const [users, setUsers] = useState({
        name: "",
        skills: {},
        position:""
      });

      const [avatarUrl, setAvatarUrl] = useState('');
    
      const fetch_users = async () => {
        const response = await api.get("/users");
        return response.data;
      }
    
      useEffect(() => {
        fetch_users().then((res) => {
          setUsers(res);
        });
      }, []);

      const skillNames = Object.keys(users.skills);
      const skillValues = Object.values(users.skills);


      const data = {
        labels: skillNames,
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
            data: skillValues,
          },
        ],
      };
    
      const options = {
        scales: {
          r: {
            min: 0,
            max: 10,
            stepSize: 20,
          },
        },
      };

      useEffect(() => {
        let avatarId = 'Binx Bond'
        fetch('https://api.multiavatar.com/'+JSON.stringify(avatarId))
        .then(res => res.text())
        .then(svg => setAvatarUrl(svg))
      }, []);


  return (
    <div>
      <Container>
        <Row>
          <Col >
            <img src={'https://api.multiavatar.com/Binx'}></img>
            <h1>{users.name}</h1>
            <h2>{users.position}</h2>
          </Col>
          <Col >
            <Radar data={data} options={options} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Home;