import head from 'next/head';


export default function Head() {
    return (
      <head>
        <title>Star Wars</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Initial page" />
        <link rel="icon" href="/r2d2.png" />
        <link href={`https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=auto`} rel="stylesheet"/>
      </head>
    );
  }