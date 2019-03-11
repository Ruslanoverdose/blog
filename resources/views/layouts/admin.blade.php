<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('/css/admin.css') }}">

</head>
<body>
    <div id="wrapper">
        <header id="header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        <h3>Админ-панель</h3>
                    </div>
                    <div class="col-md-6">
                        <button class="headerButton">
                            <div class="headerButton__block">
                                <div class="avatar">
                                    <img src="/images/noimg.png" alt=""> 
                                </div>
                                <img src="/images/down.png" alt=""> 
                            </div>
                        </button>
                    </div>
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </header>
        <!-- /#header -->
        <section id="sidebar"></section>
        <!-- /#sidebar -->
        <section id="main"></section>
        <!-- /#main -->
    </div>
    <!-- /#wrapper -->
</body>
</html>