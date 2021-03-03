<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JamessDEV</title>
    <link rel="stylesheet" href="/css/commonn.css" />
    <link rel="stylesheet" href="/main/mainStyle.css" />
</head>
<body>
    <div class="appBar">
        <div class="leadding"></div>
        <div class="title">
            <h2>#logo#</h2>
        </div>
        <div class="actions">
            <div class="container">
                <form action="/web/logout" method="POST">
                    <input type="submit" value="로그아웃" />
                </form>
            </div>
        </div>
    </div>
    <div class="body">
        <div class="row">
            <div class="container" style="flex-grow: 1;">
                <div class="column">
                    <div class="container userInfo">ID</div>
                    <div class="container mail">MAIL</div>
                </div>
            </div>
            <div class="container" style="flex-grow: 2;">
                <div class="column">
                    <div class="container noti">공지</div>
                    <div class="container event">이벤트 공지</div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>