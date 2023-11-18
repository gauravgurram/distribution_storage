<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDF Template</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .content {
            margin: 20px;
        }
    </style>
</head>
<body>
    <div class="content">
        <h2>Your Application details are as follows:-</h2>
        <h5>First Name: {{ $user_firstname }}</h5>
        <h5>Last Name: {{ $user_lastname }}</h5>
        <h5>Email: {{ $login }}</h5>
        <h5>Password: {{ $password }}</h5>
        <h5>id_role: {{ $id_role }}</h5>
        <!-- You can add more dynamic content here as needed -->
    </div>
</body>
</html>
