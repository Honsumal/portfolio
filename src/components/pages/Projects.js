import React from 'react';

export default function Projects() {
  return (
    <div>
      <br></br>
      <h1 className='centered'>My Projects</h1>
      <br></br>

      <p>Here is a list of my most recent projects. Click the picture above each label to be directed to the deployed application (if applicable). Click on the label to be directed to the application's Github repository.</p>

      <div className = "row">
            <figure className = "proj-box">
                <a href = "http://swiftbank.herokuapp.com/"><img src={require("../../images/swift.png")} alt="Swift Bank" className = "norm"/></a>
                <a href = "https://github.com/pav1593/swift-bank"><h3>Social Networking API</h3></a>
                <p>This application is a sample web application for a online bank that allows users to view their accounts, make transactions, and open accounts. Uses: Materials UI, MongoDB, ExpressJS, REACT, NodeJS, Apollo GraphQL, JWT Webtoken</p>
            </figure>
            <figure className = "proj-box">
                <a href = "https://github.com/Honsumal/social-network-api"><img src={require("../../images/socnet-api.png")} alt="Social network api" className = "norm"/></a>
                <a href = "https://github.com/Honsumal/social-network-api"><h3>Social Networking API</h3></a>
                <p>This is a social networking API designed for an easy-to-navigate system between users, their thoughts, and reactions. Uses: JavaScript, NodeJS, ExpressJS, MongoDB</p>
            </figure>
            
            <figure className = "proj-box">
                <a href = "https://the-lending-station.herokuapp.com/"><img src={require('../../images/the-lending-station.png')} alt="the lending station" className = "norm"/></a>
                <a href = "https://github.com/sashdc/the-lending-station"><h3>The Lending Station</h3></a>
                <p>This application is a database for a library that allows librarians to keep track of, add, update, and delete books, users, and reviews from their database. Uses: JavaScript, NodeJS, ExpressJS, SQL</p>
            </figure>
            
            <figure className = "proj-box">
                <a href = "https://techjack.herokuapp.com/"><img src={require("../../images/tech-jack.png")} alt="tech jack" className = "norm"/></a>
                <a href = "https://github.com/Honsumal/tech-blog"><h3>Tech Blog</h3></a>
                <p>This application is a blog meant to include up-to-date information on tech news and related topics. Uses: JavaScript, NodeJS, ExpressJS, SQL</p>
            </figure>

            <figure className = "proj-box">
                <a href = "https://github.com/Honsumal/employee-tracker"><img src={require("../../images/employee-tracker.png")} alt="employee tracker" className = "norm"/></a>
                <a href = "https://github.com/Honsumal/employee-tracker"><h3>Employee Tracker</h3></a>
                <p>This application is an employee tracker that runs through the CLI and uses user input to create a database that stores all the important information about each employee, role, and department in a company. Uses: JavaScript, NodeJS, SQL</p>
            </figure>

            <figure className = "proj-box">
                <a href = "https://github.com/Honsumal/team-profile-generator"><img src={require("../../images/team-profile-builder.png")} alt="team profile generator" className = "norm"/></a>
                <a href = "https://github.com/Honsumal/team-profile-generator"><h3>Team Profile Generator</h3></a>
                <p>This application is a team profile generator that works from the command line. Using user input, it creates short profiles of employees with their name, ID, and email.Uses: JavaScript, NodeJS</p>
            </figure>

            <figure className = "proj-box">
                <a href = "https://honsumal.github.io/news-headline-aggregator/"><img src={require("../../images/news-aggregator.png")} alt="news aggregator" className = "norm"/></a>
                <a href = "https://github.com/Honsumal/news-headline-aggregator"><h3>News Aggregator</h3></a>
                <p>This application aggregates top news stories and statistical metrics from StatsCAN based on user query. Uses: HTML, CSS, JavaScript, jQuery</p>
            </figure>
          </div>
    </div>
  );
}
