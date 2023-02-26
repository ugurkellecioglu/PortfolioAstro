---
layout: '@/templates/BasePost.astro'
title: Optimizing Web Performance; The Benefits of Using SVGs Over PNGs
description: In this article, we will explore the reasons why PNGs may not be suitable for some cases.
pubDate: 2023-02-26T00:00:00Z
imgSrc: '/assets/images/post/optimizing-web-performance/svg.svg'
imgAlt: 'SVG logo'
---

PNGs are popular image files that are widely used and recognized by many. However, there are certain cases where using PNGs in an app may not be the best choice. In this article, we will explore the reasons why PNGs may not be suitable for some cases.

## TL;DR:

1. SVG files can save up to 60% of network bandwidth compared to PNG.
2. SVG offers lossless compression, while PNG only offers 5-20% lossless compression.
3. SVGs can be scaled infinitely without losing quality.
4. SVGs are beneficial for search engine optimization (SEO).
5. Animation with SVG is straightforward.

In the past, I used PNGs in my apps because it was easy to manage. All I had to do was insert an "img" tag with a source, and the image would appear. However, I didn't pay much attention to the fact that the image's quality decreased significantly when zoomed in, zoomed out, or scaled up or down. I was more focused on building my dream project quickly and having fun with it.

At some point, it becomes essential to optimize your application for optimal performance. Here's a valuable tip: AVOID USING PNGs IN YOUR APPLICATION.

First of all, what is svg?

SVG stands for Scalable Vector Graphics, which is a format used to create and display vector-based graphics on the web. Vector graphics are created using mathematical formulas instead of pixels.

Ok, now we are ready.

### 1. File size

Do you want your application to load slowly? According to research from Google, 53% of people leave a webpage if it doesn't load in three seconds. That's why you need to care about your site's performance, and switching from PNGs to SVGs is the easiest way to achieve this!

In general, PNGs are much larger than SVGs. Even this information alone should convince you not to use PNGs. SVGs provide a minimum of 60% network savings, which means your application will load faster automatically! You can read this article to see experiments comparing SVG and PNG file sizes.
![Performance](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qplgvo16gwdmc3x8datr.jpg)

### 2. Compression

Compression is a way of reducing the size of a file by eliminating redundant or unnecessary data, while maintaining the file's overall quality and integrity. There are two types of compression: lossless and lossy.

Whether you use PNG or SVG, compressing your assets is a good idea to optimize your app's performance. Fortunately, there are many compression tools available online. For PNG, JPG, and WebP files, I recommend using [TinyPNG](https://tinypng.com/). For SVG files, you can use [SVG minify](https://www.svgminify.com/).

One advantage of SVG is that it can be compressed without any loss of data. In contrast, compressing PNG files may result in a decrease in quality.

### 3. Scalability

SVGs offer infinite scalability without losing quality, thanks to their mathematical equation-based creation. You don't have to worry about blurry or pixelated images when scaling up or down SVGs. On the other hand, PNGs are created with bits, which means that as you scale them up, the pixels stretch and lose quality. Just take a look at the comparison below:

![raster vs vector](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h87ptk5d5dnw31bxlsek.png)
[taken from](https://www.perfectsearchmedia.com/blog/why-you-should-use-svg-images-your-website-and-how-itll-help-your-seo).

### 4. SEO
Search Engine Optimization is a crucial aspect of any website, and using SVGs can help improve it. Unlike PNGs, SVGs are text-based vectors, which means they can be easily crawled by search engine robots, providing more information about the content on your website. Additionally, as mentioned earlier, SVGs are smaller in size and can lead to faster loading times, which is another factor that can boost your website's SEO ranking.

### 5. Animation
Animation becomes a breeze with SVGs, whereas it can be quite a hassle with PNGs since you don't have access to specific elements within the image. Take a look at this example SVG, which consists of two elements: a red wrapper and a triangle. With SVG, I can explicitly access and animate each of them individually. If it were a PNG, it wouldn't be possible.

![Animation](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2aeufyk9wqmzkthsro7j.gif)

I have listed several reasons why SVGs are generally preferred over PNGs. However, there are certain cases where PNGs may be more appropriate: 
1. If you need to support older browsers, such as IE versions prior to v9 (which have a usage of only 0.07%) or Android versions prior to v3 (which have a usage of 0%), PNGs may be a better choice as they are more widely supported. 
2. You have an image with a lot of photographic detail, such as a high-resolution photograph, PNG or JPEG formats may be better suited for it than SVGs. This is because SVGs are not designed for photographic elements and may lose detail when converted from raster formats. In such cases, WebP can be a better option for efficient image compression.

In conclusion, while PNGs are a popular and widely recognized image format, they may not be the best choice in certain cases. SVGs offer numerous benefits, such as smaller file sizes, lossless compression, infinite scalability, better SEO, and more straightforward animation. Compressing images is always a good idea to optimize app performance, but PNGs may lose quality when compressed. However, there are some cases where PNGs may be more appropriate, such as supporting older browsers or using high-resolution photographs. In general, it is advisable to use SVGs to optimize the performance of your application and provide a better user experience.

If you want to add more points or correct any errors, please let me know in the comments. Thanks for reading :)


References: 
https://www.adobe.com/creativecloud/file-types/image/comparison/png-vs-svg.html#:~:text=SVGs%20are%20far%20smaller%20in,without%20any%20loss%20in%20quality.
https://www.adobe.com/creativecloud/file-types/image/vector/svg-file.html
https://vecta.io/blog/comparing-svg-and-png-file-sizes
https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-site-load-time-statistics/
https://www.marketingdive.com/news/google-53-of-mobile-users-abandon-sites-that-take-over-3-seconds-to-load/426070/



