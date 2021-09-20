<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>A-Dish | Asian Cuisine</title>
    <link rel="preload" href="img/springrolls.jpg" as="image">
    <link rel="preload" href="img/soup.jpg" as="image">
    <link rel="preload" href="img/phone.jpg" as="image">
    <link rel="preload" href="img/sushi.jpg" as="image">

    <link rel="preload" href="css/header.css" as="style">
    <link rel="preload" href="css/footer.css" as="style">
    <link rel="preload" href="css/home.css" as="style">

    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/home.css">
  </head>
  <body>
    <?php include 'header.php'?>
    <main>
      <div class="springrolls_txt">
        <h2>High Quality East Asian Cuisine</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
    </main>
    <section class="columns">
      <div class="column-1">
        <p>Want to try our menu?</p>
        <a href="menu.php" class="link_button">Go to Menu</a>
      </div>
      <div class="column-2">
        <p>Learn more about East Asian food</p>
        <a href="blog.php" class="link_button">Go to Blog</a>
      </div>
      <div class="column-3">
        <p>Have a question?</p>
        <a href="contact.php" class="link_button">Contact Us</a>
      </div>
    </section>
    <?php include 'footer.php'?>
  </body>
</html>
