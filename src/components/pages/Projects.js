import React from 'react';

export default function Projects() {
  return (
    <div>
      <br></br>
      <h1 className='centered'>My Projects</h1>
      <br></br>

      <p>Here is a list of my most recent projects. Click the picture above each label to be directed to the deployed application (if applicable). Click on the label to be directed to the application's Github repository.</p>

      <div className = "row">
            <figure className = "card">
                <a href = "https://github.com/Honsumal/social-network-api"><img src="../../images/socnet-api.png" alt="Social network api" className = "norm"/></a>
                <a href = "https://github.com/Honsumal/social-network-api"><h3>Social Networking API</h3></a>
            </figure>
            
            <figure className = "card">
                <a href = "https://the-lending-station.herokuapp.com/"><img src='../../images/the-lending-station' alt="the lending station" className = "norm"/></a>
                <a href = "https://github.com/sashdc/the-lending-station"><h3>The Lending Station</h3></a>
            </figure>
            
            <figure className = "card">
                <a href = "https://techjack.herokuapp.com/"><img src="../../images/tech-jack.png" alt="tech jack" className = "norm"/></a>
                <a href = "https://github.com/Honsumal/tech-blog"><h3>Tech Blog</h3></a>
            </figure>

            <figure className = "card">
                <a href = "https://github.com/Honsumal/employee-tracker"><img src="../../images/employee-tracker.png" alt="employee tracker" className = "norm"/></a>
                <a href = "https://github.com/Honsumal/employee-tracker"><h3>Employee Tracker</h3></a>
            </figure>

            <figure className = "card">
                <a href = "https://github.com/Honsumal/team-profile-generator"><img src="../../images/team-profile-builder.png" alt="team profile generator" className = "norm"/></a>
                <a href = "https://github.com/Honsumal/team-profile-generator"><h3>Team Profile Generator</h3></a>
            </figure>

            <figure className = "card">
                <a href = "https://honsumal.github.io/news-headline-aggregator/"><img src="../../images/news-aggregator.png" alt="news aggregator" className = "norm"/></a>
                <a href = "https://github.com/Honsumal/news-headline-aggregator"><h3>News Aggregator</h3></a>
            </figure>
          </div>
    </div>
  );
}
