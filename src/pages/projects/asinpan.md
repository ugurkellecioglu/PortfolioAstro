---
layout: '@/templates/BasePost.astro'
title: Asinpan
description: Asinpan.com is a web application that provides automation for searching skus on Amazon. I built the whole front end infrastructure and implemented highly scalable and performant components."
pubDate: 2022-04-05T00:00:00Z
imgSrc: '/assets/images/project-asinpan.png'
imgAlt: 'Asinpan Logo'
href: 'https://asinpan.com'
---

## Introduction

Asinpan.com is a web application that provides automation for searching skus on Amazon.com

I have been working on this project as an front-end developer. Even though, It is in the production, I am responsible for implementing new features, performance optimizations, bug-fix.

There is a chrome extension behind of the Asinpan. It extracts the skus from amazon automatically. I implemented it as well.

## Development Process
Since, It is not a complicated app, in other words, It has simple user interfaces and product owner wanted that app to be released as quick as possible, I decided to use a template named Vuexy and decide to use server-side rendering with Nuxt JS. 

 1. Releasing the project swiftly wasn't the only reason that I choose
    nuxt js. You might know that server-side rendered applications have
    less initial load time comparing to client-side apps.
    
  2. SSR is perfect for SEO, that was exactly what I want. If you release
    an app, a service to the public, you have to somehow, grasp the
    peoples attention, more important, browsers.
    
  3. Lastly, nuxt makes the developement process easier for developers,
    not being concerned about configurations was a life saver for me.

The total time that product is released was 2-3 week.
##  Optimizations
Since I have used a template, there were tons of things that we don't need to use. These were burden to project and made it slower. 
1. First step is always analyze the project's weak sides. There are tons of websites to analyze it for you. 
2. After analyzing, you can draw a roadmap to optimize the page.
3. I don't want to get in to details, let's see the results.
4. I have made huge progress but there are still parts that I can improve and make the app way faster.

<img alt="Performance Optimization Before After Comparison" src='/assets/images/project/asinpan/before-after.png' />

## Photos
We have an admin panel but I didn't want to reveal that part of the app but I am glad to find an opportunity an admin panel from scratch.
1. Landing Page
<img alt="Asinpan Landing Page" src='/assets/images/project/asinpan/landing-page.jpeg' />
2. Home page
<img alt="Asinpan Home Page" src='/assets/images/project/asinpan/home-page.jpeg' />
3. Payment Page
<img alt="Asinpan Payment Page" src='/assets/images/project/asinpan/payment-page.jpeg' />
4. Card component
<img alt="Asinpan Card Component" src='/assets/images/project/asinpan/card-component.jpg' />
5. Invoice
<img alt="Asinpan Invoice Page" src='/assets/images/project/asinpan/invoice-page.jpeg' />