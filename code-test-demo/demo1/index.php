<?php
session_start();
//tiến hành kiểm tra là người dùng đã đăng nhập hay chưa
//nếu chưa, chuyển hướng người dùng ra lại trang đăng nhập
if (!isset($_SESSION['myusername'])) {
    header('Location: login.php');
}
?>
<html>
<head>
    <title>trang chủ</title>
    <meta charset="utf-8">
</head>
<body>
<body>
Đăng nhập thành công !
</body>
</html>
</body>
</html>
