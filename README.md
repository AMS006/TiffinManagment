# TiffinManagment

![Logo](https://res.cloudinary.com/dkgoet9em/image/upload/v1690174978/TiffinManagment/TiffinWala_aa7m54.png)
TiffinManagment is a basic Tiffin Ordering Application that is build using the MERN Stack stands for MongoDB, ExpressJS, ReactJS, NodeJS.

## Live Website

- [TiffinManagment](https://tiffin-managment-client.vercel.app/)

# Features

## For Users

- Sign Up
- Sign In
- Serching For Tiffin Providers 
- Ordering Tiffing From Specific Provider
- Making Payment
- Cancelling Ordered Tiffin Before Provider Confirm it
- Making a Review after a order has delivered

## For Providers

- Sign UP
- Sign In
- Adding Tiffin Services
- Managing Orders

## Tech Stack

**Client:** React, Redux, TailwindCSS, Material UI

**Server:** Node, Express

**Database:** MongoDB

**Payment** RazorPay

**Deployment:** Vercel(Frontend), Backend(Cyclic)

## Installation Guide

To Run TiffinManagment project on local system follow the simple steps:

### Step-1

clone this project on your local system

```bash
  git clone https://github.com/AMS006/TiffinManagment
  cd TiffinManagment
```

### Step-2 Installing Dependency

Installing Dependency for client and Server both

```bash
  cd TiffinManagment
```

To Installing Dependency for client

```bash
  cd client
  npm i
```

To Installing Dependency for server

```bash
  cd server
  npm i
```

### Step-3 Adding Environment Variables


### Environment Variables for Server

`PORT` : 4000

`MONGODB_CONNECTION` : You can get it by creating database on Mongo Cloud

`SECRET_KEY` : Random combinations of characters or digits

`CLOUDINARY_CLOUD_NAME` : From Cloudinary website

`CLOUDINARY_API_KEY` : From Cloudinary Website

`CLOUDINARY_API_SECRET` : From Cloudinary Website

`KEY_ID` : Razorpay Key Id

`KEY_SECRET` : Razorpay Secret Key

`EMAIL` : Email for Email Services

`PASS` : Password of Email


### Step-4 Start the Application on local machine

#### To Start Frontend Server(or client):

Move into client Directory by

```bash
  cd client
```

start the Frontend server by

```bash
  npm start
```

after ruunning this command, It will start after some time.

#### To Start Backend Server(or server):

Move into server Directory by

```bash
  cd server
```

start the Backend server by

```bash
  npm start
```

after starting the both Frontend and Backend server you can access application on the browser.
