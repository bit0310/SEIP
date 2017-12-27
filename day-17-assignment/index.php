<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>day-17-assignment</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/css.css">
</head>
<body>

<?php
$finalResult = ' ';
if(isset($_POST['btn'])){
    require_once 'NumberRange.php';
    $numberRange = new NumberRange();
    $finalResult = $numberRange->Range($_POST['first_number'], $_POST['last_number']);
    $finalResult = $numberRange->EvenNum($_POST['first_number'], $_POST['last_number']);
    $finalResult = $numberRange->EvenNum1($_POST['first_number'], $_POST['last_number']);
    $finalResult = $numberRange->OddNum($_POST['first_number'], $_POST['last_number']);
    $finalResult = $numberRange->OddNum1($_POST['first_number'], $_POST['last_number']);

}

?>

<div class="jumbotron">
    <div class="container">
        <div class="row">
            <div class="col-sm-8 m-auto">
                <div class="card">
                    <div class="card-header text-center"><h3>User input chart</h3></div>

                    <div class="card-body">


                        <form action="" method="post">
                            <table>
                                <tr>
                                    <th>First Number</th>
                                    <th>
                                        <input type="text" name="first_number"  value="<?php echo $_POST['first_number']; ?>"/>
                                    </th>
                                </tr>

                                <tr>
                                    <th>Last Number</th>
                                    <th>
                                        <input type="text" name="last_number" value="<?php echo $_POST['last_number']; ?>"/>
                                    </th>
                                </tr>

                                <tr>
                                    <th>Result</th>
                                    <th>
                                        <input type="text" name="result" value="<?php echo $finalResult; ?>"/>
                                    </th>
                                </tr>

                                <tr>
                                    <th></th>
                                    <th>
                                        <input type="submit" name="btn" value="submit"/>

                                    </th>
                                </tr>
                            </table>
                        </form>

            </div>

        </div>
    </div>
</div>




<script src="js/jquery-3.2.1.js"></script>
<script src="js/Proper.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/java-script.js"></script>
</body>
</html>