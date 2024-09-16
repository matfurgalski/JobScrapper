# Job Scrapper 
<p align="center">
  <img width="400" height="400" src="https://i.postimg.cc/VkQwJ6Ds/job-scraper.png">
</p>
JobScraper is an application created to aggregate offers from popular Polish job portals. It currently has a filtering option by city (other options are under development).

### Currently aggregated portals:
- pracuj.pl
- justjoin.it

# Preview 
![](https://i.gyazo.com/172b3d066d511cfb7371dbde7b1b3057.gif)

# How it works 
The application retrieves data from the portals api and stores it in a MySQL database as one entity. The offers are refreshed every 15 minutes. 

# Get Started
### Prerequisites
Before you begin, make sure you have the following installed on your machine:
- Docker: <a href="https://www.docker.com/products/docker-desktop/">Download and install Docker</a>
- Docker Compose: Docker Compose is included with Docker Desktop
### Build and Run the Application
 After clone JobScrapper you can build and start the application using Docker Compose:
 ```
docker-compose up --build
 ```
### Access the Application
Once the application is running, you can access it by navigating to http://localhost:3000 in your web browser.
