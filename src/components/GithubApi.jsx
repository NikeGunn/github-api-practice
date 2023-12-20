import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const GitHubCard = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchGitHubData = async () => {
        //Fetch data from GitHub API
            const username = 'NikeGunn';
            const apiUrl = `https://api.github.com/users/${username}`;
        // Handling errors with try/catch
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            // console.log(data);
            setUserData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchGitHubData();
  }, []);




// Mapping all the data from the API and showing to the page
  // return (
  //   <div>
  //      {
  //     userData.map((user) => {
  //       return (
          
  //         <div key={user.id}>
  //           <h1>GitHub User Card</h1>
  //           <Card.Img variant="top" src={user.avatar_url} alt="GitHub Avatar" />
  //           <Card.Body>
  //             <Card.Title>{user.login}</Card.Title>
  //             <Card.Text>{user.bio || 'No bio available.'}</Card.Text>
  //             <Card.Text>Followers: {user.followers}</Card.Text>
  //             <Card.Text>Following: {user.following}</Card.Text>
  //             <Card.Text>Type: {user.type}</Card.Text>
  //           </Card.Body>
  //         </div>
  //       )
  //     })  
  //   }
  //   </div>
  // );



  return (
    <Card style={{ width: '18rem' }}>
      {userData && (
        <>
          <Card.Img variant="top" src={userData.avatar_url} alt="GitHub Avatar" />
          <Card.Body>
            <Card.Title>{userData.login}</Card.Title>
            <Card.Text>{userData.bio || 'No bio available.'}</Card.Text>
            <Card.Text>Followers: {userData.followers}</Card.Text>
            <Card.Text>Following: {userData.following}</Card.Text>
            <Card.Text>Type: {userData.type}</Card.Text>
          </Card.Body>
        </>
      )}
    </Card>
  );
};


export default GitHubCard;
