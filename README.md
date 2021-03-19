# image-processing-api

A fast and scalable API to process (resize/format/convert) images

> GET: "/resize?name={NAME}&width={WIDTH}&height={HEIGHT}&fileExtension=jpg"

## What is this project?

This is a node JS application built with typescript consisting of an image processing API that takes an image file name and its dimension (width and height) as input. On the server it checks if the image with the requested dimensions is available or not. if the image is available then it returns it otherwise it converts the image to the requested size using the sharp.js library and then cache it on the server so that it can be sent back to the client when next time the same image is requested without having to process it again.

### Tech Stack used

> Backend: Node.js + Express.js + TypeScript

> Unit Testing: Jest + Supertest

## How to get started locally

1. Install dependecies:

```
    yarn install
```

2. Build

```
    yarn run build
```

3. Start the server

```
    yarn start
```

> Note: Before starting the server from the dist folder using above command, make sure that the dist folder contain /images and /public directoy including all the static assets (default image files and a index.html file). This is important because I have not used webpack to automatically move these static files into the dist folder. The build command, in this project, only converts ts into js and put them in the dist folder. So you may have to manually copy these static file from src to dist.

4. Develop locally

```
    yarn run dev
```

5. Run unit tests

```
    yarn run test
```

6. Run ESlint to fix linting issues

```
    yarn run lint
```

After you successfully run the server, open this URL in your browser

```
    http://localhost:5000
```

## How to Use the API?

Currently there are five different sample images available to get in any size. (uploading feature is coming soon). You need to choose an image out of these five, specify the dimention (width and height) and make a GET request to the following endpoint with the given format:

### Available images (file names):

 <div class="row">
    <div class="col col-12 col-md-6 col-lg-2">
    <div class="card">
        <img
        class="card-img-top"
        src="./src/public/thumbnails/encenadaport_200x200.jpg"
        alt="encenadaport image"
        />
        <div class="card-body">
        <p class="card-text"><small>encenadaport</small></p>
        </div>
    </div>
    </div>
    <div class="col col-12 col-md-6 col-lg-2">
    <div class="card">
        <img
        class="card-img-top"
        src="./src/public/thumbnails/fjord_200x200.jpg"
        alt="fjord image"
        />
        <div class="card-body">
        <p class="card-text"><small>fjord</small></p>
        </div>
    </div>
    </div>
    <div class="col col-12 col-md-6 col-lg-2">
    <div class="card">
        <img
        class="card-img-top"
        src="./src/public/thumbnails/icelandwaterfall_200x200.jpg"
        alt="icelandwaterfall image"
        />
        <div class="card-body">
        <p class="card-text"><small>icelandwaterfall</small></p>
        </div>
    </div>
    </div>
    <div class="col col-12 col-md-6 col-lg-2">
    <div class="card">
        <img
        class="card-img-top"
        src="./src/public/thumbnails/palmtunnel_200x200.jpg"
        alt="palmtunnel image"
        />
        <div class="card-body">
        <p class="card-text"><small>palmtunnel</small></p>
        </div>
    </div>
    </div>
    <div class="col col-12 col-md-6 col-lg-2">
    <div class="card">
        <img
        class="card-img-top"
        src="./src/public/thumbnails/santamonica_200x200.jpg"
        alt="santamonica image"
        />
        <div class="card-body">
        <p class="card-text"><small>santamonica</small></p>
        </div>
    </div>
    </div>
</div>

## API documentation:

> Endpoint: /resize

> Method: GET

### Query Parameters:

> name: string

> width: number

> height: number

> fileExtension: string [Optional]

### Example requests:

> http://localhost:5000/resize?name=encenadaport&width=1000&height=1200

> http://localhost:5000/resize?name=fjord&width=300&height=300

> http://localhost:5000/resize?name=icelandwaterfall&width=800&height=1500

> http://localhost:5000/resize?name=palmtunnel&width=800&height=1500

> http://localhost:5000/resize?name=santamonica&width=800&height=1500

Tip: If you are running the project locally then you can directly open the above links in a browser to test. Change the size in the address bar to get different sized images.

### Demo

[![Demo](https://img.youtube.com/vi/svoagx8R2sA/0.jpg)](https://www.youtube.com/watch?v=svoagx8R2sA)

## Author

[Shubham Prakash](https://shubhamprakash.dev)
