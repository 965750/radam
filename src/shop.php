<?php
	// Message Vars
	$msg = '';
	$msgClass = '';

	// Check For Submit
	if(filter_has_var(INPUT_POST, 'submit')){
		// Get Form Data
		$name = htmlspecialchars($_POST['name']);
		$email = htmlspecialchars($_POST['email']);
		$message = htmlspecialchars($_POST['message']);
        $option = htmlspecialchars($_POST['option']);

		// Check Required Fields
		if(!empty($email) && !empty($name) && !empty($message)){
			// Passed
			// Check Email

			if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
				// Failed
				$msg = 'Please use a valid email';
				$msgClass = 'no';

			} else {
				// Passed
				$toEmail = 'aventhelast@gmail.com';
				$subject = 'Zamówienie Radam '.$name;
				$body = 'Zamówienie Radam'."\n"
					.'Imie: '.$name."\n"
					.'Email: '.$email."\n"
                    .'Produkt: '.$option."\n"
					.'Wiadomość: '.$message;


				// Email Headers
				$headers .= "Organization: Sender Organization\r\n";
                $headers .= "MIME-Version: 1.0\r\n";
                $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
                $headers .= "X-Priority: 3\r\n";
                $headers .= "X-Mailer: PHP". phpversion() ."\r\n"; 

				// Additional Headers
				$headers .= "From: " .$name. "<".$email.">". "\r\n";

				if(mail($toEmail, $subject, $body, $headers)){
					// Email Sent
					$msg = 'Your email has been sent';
					$msgClass = 'yes';

				} else {
					// Failed
					$msg = 'Your email was not sent';
					$msgClass = 'no';
				}
			}
		} else {
			// Failed
			$msg = 'Please fill in all fields';
			$msgClass = 'no';
		}
	}
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <title></title>
        <link rel="stylesheet" href="css/style.css">
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&amp;subset=latin-ext" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
        <script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
        <script src="js/main.js"></script>
        <script src="js/onlyShop.js"></script>
    </head>

    <body>
        <header>
            <nav id="mainNav">
                <div class="socialCont">
                    <div class="socialICont"><i class="fab socialI fa-facebook-f"></i></div>
                    <div class="socialICont"><i class="fas socialI fa-envelope"></i></div>
                    <div class="socialICont"><i class="fas socialI fa-phone"></i></div>
                </div>
                <div class="naviCont">
                    <ul>
                        <a href="index.html">
                            <li class="singleNavi" id="home">Firma</li>
                        </a>
                        <a href="shop.html">
                            <li class="singleNavi activeNav" id="shop">Sklep</li>
                        </a>
                        <li class="singleNavi" id="ord">Zamówienie</li>
                        <li class="singleNavi" id="cont">Kontakt</li>
                    </ul>
                </div>
            </nav>
        </header>
        <main class="firma">
            <div class="alert alertUp <?php echo $msgClass; ?>">
                                <?php echo $msg; ?>
            </div>
            <article class="diamondPreCont">
                <section class="diamondCont" id="vue-app">
                    <div v-for="(product, index) in products" class="singleDiam">
                        <div class="diamImg" v-bind:style="{ 'background-image': 'url(' + product.img + ')' }"></div>
                        <div class="diamTxt">
                            <h3>{{product.name}}</h3>
                            <p>
                                {{product.desc}}
                            </p>
                            <div class="costCont"><span class="cost">{{product.cost}}PLN</span><button v-on:click="buyScroll(product.name)" class="btnBuy">Zamów</button></div>
                        </div>
                    </div>
                    <div class="orderCont" id="orderForm">
                        <form method="post" action="shop.php">
                            <select id="sel" name="option">
                            <option  v-for="(product, index) in products" v-bind:value="product.name">{{product.name}}</option>
                            </select>
                            <?php if($msg != ''): ?>
                            <div class="alert <?php echo $msgClass; ?>">
                                <?php echo $msg; ?>
                            </div>
                            <?php endif; ?>
                            <label class="labelHeader" for="name">Imię i Nazwisko</label>
                            <input id="name" name="name" type="text" value="<?php echo isset($_POST['name']) ? $name : ''; ?>">
                            <label class="labelHeader" for="email">Email</label>
                            <input id="email" name="email" type="email" value="<?php echo isset($_POST['email']) ? $email : ''; ?>">
                            <label class="labelHeader" for="msg">Wiadomość</label>
                            <textarea name="message" id="msg"><?php echo isset($_POST['message']) ? $message : ''; ?></textarea>
                            <input type="submit" name="submit" value="Złóż Zamówienie">
                        </form>
                    </div>
                </section>
            </article>
            <article>

            </article>
        </main>
        <footer>
            <div class="topFooter">
                <div class="topFooterLeft">
                    <h2>Zapytaj</h2>
                    <div class="singleZap"><i class="fas footI fa-map-marker"></i><span class="footerZap">wrocław ul.główna 20/5 58-500</span></div>
                    <div class="singleZap"><i class="fas footI fa-phone"></i><span class="footerZap">+48 586 359 931</span></div>
                    <div class="singleZap"><i class="fas footI fa-envelope"></i><span class="footerZap">justansimple@gmail.com</span></div>
                </div>
                <div class="topFooterMid">
                    <h2>Mapa Strony</h2>
                    <i class="fas footIMid fa-link"></i>
                    <div style="clear: both"></div>
                    <ul id="FmapS">
                        <li>O Firmie</li>
                        <li>Oferta</li>
                        <li>Zamówienie</li>
                        <li>Kontakt</li>
                    </ul>
                </div>
                <div class="topFooterRight">
                    <h2>Klient</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur dignissimos, odio quo recusandae aperiam, quam molestias enim perferendis mollitia totam.</p>
                </div>
            </div>
            <div class="botFooter">
                <p>All copyrights reserved ©2018</p>
            </div>
        </footer>
        <script src="js/app.js"></script>
    </body>

    </html>
