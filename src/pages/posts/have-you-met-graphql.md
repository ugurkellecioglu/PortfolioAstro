---
layout: '@/templates/BasePost.astro'
title: Haaave you met GraphQL?
description: What is GraphQL? When to use it? Pros and Cons? REST or GraphQL?
pubDate: 2022-07-17T00:00:00Z
imgSrc: '/assets/images/post/have-you-met-graphql/graphql.png'
imgAlt: 'GraphQL logo'
---

**GraphQL**

I have heard the name ***GraphQL*** a lot but I didn’t quite research what ***GraphQL*** does? I knew that it is some kind of tech like REST that you can GET, POST, DELETE, PUT data but in a more simplistic manner. 

So here we are to clarify, w*hat is it? why we use it? when to use it?*

## What is GraphQL?

**GraphQL** is a querying language where you can **retrieve data or modify data.**
 
*Graph stands for Graph data structure. GraphQL best If you have graph kind of data (like friends, subscriptions etc.) but works for other data types as well.
 QL stands for Query Language*

> *SQL is also known as a querying language, so that may help you to understand what a querying language*

A GraphQL API gives you the **exact data you want.** ***No more, no less***.

    ~~~js
 query getProductsSummary {
		name,
		price,
		images    
	}
    ~~~

    This how a query looks in GraphQL. If you execute getProductsSummary query, you will get something like this:

    ~~~js 
data: [{ 
			    name:"Rose dress",
			    price: "67.99",
			    images: ["url1","url2",...]
			 },...]
~~~

If you had an experience working with REST API, sometimes you may get data that is a bunch of crap that you don’t use ever.  That is called
**over fetching**. You get the things you don't need to. That may create a performance issue in larger applications.

Another issue with the REST **under fetching**. That means that you had to hit another end point to get the data you need.

These problems arise as your application grows. Moreover, let's say you have an e-commerce web app and you are showing the basics infos of products. 

   ~~~js 
 GET /api/product/summary
    [
	 {
		 name:"Rose dress",
		 price: "67.99",
		 images: ["url1","url2",...]
	 },
	 ...
	 ...
    ]
~~~

But then you wanted to show the seller name as well. You can do three things.

 1. Hit another end-point to get seller names and modify the data you have, which is not ideal. ***under fetching***
 2. You can add seller name to your ProductSummary DTO, ***must be careful because it may cause over fetching in the future.*** 
 3. You can create another end-point that includes seller name. ***Unnecessary workload to developers***

In GraphQL, you would change the query 

    ~~~js 
query getProductsSummary {
    	name,
    	price,
    	images,
    	seller 
    }
~~~
and you got the seller :) 

## Which one is faster? REST  or GraphQL?
As I dig the internet, I always found that the GraphQL is faster but then I wanted to see on my own. 
I created an express server with a rest api and graphql api with apollo client and hit the same end point here is the result.

 I don't think that the result is healthy as I tested those on my local computer but whatever. I will give a scientific article later.


 Local test
|Rest API Response| GraphQL API Response  |
|--|--|
|Mean is 11ms! <img src="/assets/images/post/have-you-met-graphql/rest-api-response.png" /> | Mean is 54.6ms! <img src="/assets/images/post/have-you-met-graphql/graphql-response.png" /> |

My tests was simple and they were just returning the json. Based on my tests, GraphQL is dramatically slower than the rest api. ***About %500.***

| *page:13* | I wasn't sure that my tests are valid so I tried to find some article that compares the performance of those two API services. 
As reported by [Evaluating GraphQL and REST API Services Performance in a Massive and Intensive Accessible Information System](https://www.mdpi.com/2073-431X/10/11/138/pdf?version=1635325811) 

REST API's are faster than GraphQL apis. 
<img src="/assets/images/post/have-you-met-graphql/comparison.png"/> |

Nevertheless, GraphQL's concern is not speed at all. GraphQL is built for mobile devices at first. So Memory and CPU usage is more important (I guess).
Most probably, If you would use GraphQL, you won't get the all data so I am not still sure %100 those tests are valid.
I guess, GraphQL can be faster in real world scenarios. 

## Why GraphQL?
 - No overfetching or underfetching.
 - Strongly typed which makes GraphQL less error-prone
 - Time  and bandwith saving
 - No need to versioning like api/v1 api/v2 ..
## When to use?
 - If you will develop an app for different devices like mobile phones, tablets, IoT devices
 - If you have a lot of nested data (can be fetched in one request)
 - If you will develop social media kind of apps. (friendships, posts, comments, likes easier to store)
- If you collect data from different sources. Databases, web pages, documents etc. ( GraphQL )

Sources
- [Getting Started With GraphQL.js | GraphQL](https://graphql.org/graphql-js/)
- [What is GraphQL? GraphQL introduction - Apollo GraphQL Blog](https://www.apollographql.com/blog/graphql/basics/what-is-graphql-introduction/)
- [GraphQL FAQ - Apollo GraphQL Docs](https://www.apollographql.com/docs/resources/faq/)
- [What is GraphQL? (redhat.com)](https://www.redhat.com/en/topics/api/what-is-graphql)
- [GraphQL - Wikipedia](https://en.wikipedia.org/wiki/GraphQL#cite_note-graphql-website-2)
- [Why you shouldn't use GraphQL - LogRocket Blog](https://blog.logrocket.com/why-you-shouldnt-use-graphql/)
- [GraphQL vs REST: putting REST to rest (imaginarycloud.com)](https://www.imaginarycloud.com/blog/graphql-vs-rest/#Graph)
- [GraphQL vs. REST: What You Didn’t Know - mobileLIVE](https://www.mobilelive.ca/blog/graphql-vs-rest-what-you-didnt-know#:~:text=GraphQL%20data%20fetching%20specific%20data,rapid%20and%20Rest%20are%20slower.)
- [Why and When to Use GraphQL - DZone Integration](https://dzone.com/articles/why-and-when-to-use-graphql-1)