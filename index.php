
<!DOCTYPE html>
<html>	
	<head>
		<title>Получаем данные форму</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	</head>
	<body>
		<form  method="post">
			<p>Имя: <input name="name" type="text"></p>
			<p>Фамилия: <input name="surname" type="text"></p>
			<p>E-mail: <input name="email" type="text"></p>
			<p>Сообщение: <br /><textarea name="message" cols="30" rows="5"></textarea></p>
			<p><input type='submit' value='Отправить'></p>
		</form>
	</body>
</html>


<?php
function clean($value = "") {
    $value = trim($value);
    $value = stripslashes($value);
    $value = strip_tags($value);
    $value = htmlspecialchars($value);
    
    return $value;
}
function check_length($value = "", $min, $max) {
    $result = (mb_strlen($value) < $min || mb_strlen($value) > $max);
    return !$result;
}
if($_SERVER['REQUEST_METHOD'] == 'POST') {
	$name = $_POST['name'];
	$surname = $_POST['surname'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$name = clean($name);
	$surname = clean($surname);
	$email = clean($email);
	$message = clean($message);
	if(!empty($name) && !empty($surname) && !empty($email) && !empty($message)) {
	    $email_validate = filter_var($email, FILTER_VALIDATE_EMAIL); 
	    if(check_length($name, 2, 25) && check_length($surname, 2, 50) && check_length($message, 2, 1000) && $email_validate) {
	        echo "Спасибо за сообщение";
	    }
	     if (mail("dokamir.novik@gmail.com", "Заказ с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
 { 
    echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки"; 
}
	} else {
	    echo "Заполните пустые поля";
	}
} else {
	header("Location: ../index.php");
}
?>
<?php
echo "<h2>Ваш ввод:</h2>";
echo $name;
echo "<br>";
echo $surname;
echo "<br>";
echo $email;
echo "<br>";
echo $message;
echo "<br>";
?>

