<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"> <!-- Booststrap css -->
    <link rel="stylesheet" type="text/css" href="css/style2.css">
</head>
<body>
    <div class="container-fluid" id="container">

        <!-- Menu -->
        <div id="Menudiv">
            <ul class="navigation">
                <li class="orangeNav"><a href="#container"><span class="glyphicon glyphicon-download-alt"></span> Download</a></li>
                <li class="yellowNav"><a href="#TheTeam"><span class="glyphicon glyphicon-user"></span> The Team</a></li>
                <li class="greenNav"><a href="#Contact"><span class="glyphicon glyphicon-star"></span> Contact </a></li>
            </ul>
        </div>
        <span class="glyphicon glyphicon-list" id="Menu"><br>Menu</span>
        <div class="index col-xs-6" id="Download">
            <h1 class="Twitchh1">TwitchHeroes in App stores now!</h1>
            <p>TwitchHeroes is now in App stores free to download. <br>
            Are you ready for endless fun?
            Then TwitchHeroes is for you! <br>
                Bacon ipsum dolor amet frankfurter hamburger shoulder beef <br> ribs beef. Shankle chicken meatloaf sausage landjaeger tri-tip.<br> Ground round swine brisket, drumstick porchetta ball tip ribeye<br> cupim tenderloin pancetta short loin sausage.<br> Chuck drumstick tongue andouille </p>

            <!-- --------------------------------------------------MAKE DOWNLOAD - REMEMBER------------------------------------------------- -->
            <button type="button" class="btn btn-success" id="downloadbtn">Download</button>
        </div>

        <!-- Phone picture div -->
        <div class="index col-xs-6" id="PhonePicture">
            <img src="img/phone3.png" alt="phone" class="img-responsive">
        </div>

        <div class="index2 col-xs-12" id="TheTeam">
            <h1> The Team</h1>
            <h4>Kenneth</h4>
            <p class="job">Backend & frontend developer</p>
               <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sem lorem. Nunc egestas purus eu convallis vulputate.
                Maecenas sit amet augue lobortis, aliquet augue et, egestas orci.
                Nullam vulputate elit sed aliquet consequat. In vel pulvinar risus.
                Integer vehicula magna id posuere pharetra. Aliquam dictum mollis molestie.
                Quisque finibus lectus neque, id scelerisque massa fermentum non. </p>
            <h4>Jonas</h4>
            <p class="job">Backend & frontend developer </p>
                <p>Pellentesque fringilla scelerisque magna, sit amet vehicula nisl ultricies vitae.
                Etiam mauris odio, scelerisque eu laoreet in, commodo volutpat diam. Sed leo libero, consectetur eget ex ut, accumsan dictum lacus.
                Vivamus aliquet id eros quis dignissim. Nulla semper, augue eu tincidunt dapibus, mi quam posuere quam, vel imperdiet mauris augue eu turpis.
                Suspendisse semper mauris in magna tristique elementum. </p>
        </div>

        <div class="index3 col-xs-12" id="Contact">
            <div id="Formdiv">
                <h1>Contact</h1>
                <form id="ContactForm" method="POST">
                    <input type="text" name="name" placeholder="Name">
                    <br>
                    <br>
                    <input type="email" name="email" placeholder="Email">
                    <br>
                    <br>
                    <textarea form="ContactForm" placeholder="Comment" cols="36" rows="10" name="comment" id="comment"></textarea>
                    <br>
                    <br>
                    <input type="submit" value="Submit">
                </form>
            </div>

            <div class="col-xs-6" id="footer">
                <p>Address: H.C. Andersenvej 9 </p>
            </div>
        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> <!-- jquery lib -->
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script> <!-- Bootstrap js -->
    <script src="js/scroll.js"></script> <!-- scrolls down page when link is clicked -->
</body>
</html>