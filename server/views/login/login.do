<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN PAGE</title>
    <link rel="stylesheet" href="/css/commonn.css" />
    <link rel="stylesheet" href="/login/login.css" />
</head>
<body>
    <div class="appBar"></div>
    <div class="body">
        <div class="column">
                <form action="/web/loginprocess" method="POST">
                <div class="container">
                    <input type="text" class="userid" name="userid" id="userid" placeholder="사번을 입력해주세요" />
                </div>
                <div class="container">
                    <input type="password" class="userpw" name="userpw" id="userpw" placeholder="비밀번호" />
                </div>
                <div class="container">
                    <input type="submit" value="로그인" />
                </div>
            </form>
        </div>
    </div>
</body>
</html>