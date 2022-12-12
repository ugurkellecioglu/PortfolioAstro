---
layout: '@/templates/BasePost.astro'
title: Find If You Can
description: How I Created a Secure Web Application with Nuxt, Express, and nginx"
pubDate: 2022-12-12T00:00:00Z
imgSrc: '/assets/images/project-findifyoucan.png'
imgAlt: 'Find If You Can Logo'
---

## Introduction

As a web developer, I recently created a web application called findifyoucan.com where people can share and look for treasures. The application is built using Nuxt for the frontend and Express for the backend, with Node.js as the runtime environment. I used Prisma as the ORM and MySQL as the database. In this blog post, I will share my experience of deploying the application, securing it with SSL, and overcoming the challenges I faced along the way.

## Creating and Deploying the Application:

I was responsible for buying the hosting and deploying the Nuxt application to the host, as well as deploying the Express server to a VPS. This involved setting up the server, installing all the necessary dependencies, and configuring the application to run properly.

## Securing the Application with SSL:

Once the application was up and running, I wanted to make it secure by adding an SSL certificate. However, I didn't have an SSL certificate, so I bought one for the frontend. This worked well for the frontend, but since the backend didn't have an SSL certificate, all requests were failing. This is where nginx came to the rescue.

## Using nginx to Secure the Backend:

I did some research and learned about nginx, which is a popular web server used for proxying and load balancing. I applied a reverse proxy that gets a HTTPS request, turns it into HTTP, and bypasses the Express app. This solved my issue and requests were successful. However, since the SSL certificate was self-signed, my site was still insecure.

## Getting a Free SSL Certificate with Let's Encrypt:

I then learned about Let's Encrypt, which is a free, automated, and open certificate authority. I was able to use Let's Encrypt to get a free SSL certificate for my website. This made my site secure and all requests were successfully served over HTTPS.

## Conclusion:

In conclusion, I created a web application called findifyoucan.com using Nuxt and Express. I used Prisma as the ORM and MySQL as the database. I was also responsible for buying hosting and deploying the application to the host and VPS. To make the application secure, I used nginx to apply a reverse proxy and obtained a free SSL certificate from Let's Encrypt. This allowed me to serve all requests over HTTPS, making the website secure.