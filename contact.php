<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>A-Dish | Contact Us</title>
    <link rel="preload" href="css/header.css" as="style">
    <link rel="preload" href="css/footer.css" as="style">
    <link rel="preload" href="css/contact.css" as="style">

    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/contact.css">
  </head>
  <body>
    <?php include 'header.php'?>
    <main>
      <div class="container">
        <h3>Have a Question?</h3>
        <h4>Please fill the form below</h4>
      </div>
      <form>
        <table>
          <tr>
            <td><span>Name: </span></td>
            <td><input type="text" name="name" class="info" value=""></td>
          </tr>
          <tr>
            <td><span>E-mail:</span></td>
            <td><input type="text" name="email" class="info" value=""></td>
          </tr>
          <tr>
            <td><span>Question:</span></td>
            <td><textarea name="Question" class="question"></textarea></td>
          </tr>
          <tr>
            <td></td>
            <td><input type="submit" name="submit" value="Submit"></td>
          </tr>
        </table>
      </form>
    </main>
    <?php include 'footer.php'?>
  </body>
</html>
