# DB 구성

<br />

## DataBaseName : dbs

<br />

--- 

<br />

## Tables 
- Noti
    - Fields  
        id | title | des | name | time | active  
        -- | -- | -- | -- | -- | --   
        int | text | text | text | text | bool    
        O | O | O | O | O | O    
    -  SQL
        > CREATE TABLE noti (
            `id` INT AUTO_INCREMENT,
            `title` TEXT NOT NULL,
            `des` TEXT NOT NULL,
            `name` TEXT NOT NULL,
            `active` BOOLEAN NOT NULL,
            `time` DATETIME DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`)
        );

        - read
        > SELECT * FROM noti;

        > SELECT * FROM noti WHERE id=?;
        - create
        > INSERT INTO noti (title, des, name, active) VALUES (?,?,?,?);
        - update
        > UPDATE noti SET title=? des=? name=? active=? WHERE id = ?;
        - delete
        > DELETE FROM noti WHERE id = ?

        - TEST SQL
        > INSERT INTO noti (title, des, name, active) VALUES ('테스트 제목1','테스트 내용1','테스트 사원1',true);
        > INSERT INTO noti (title, des, name, active) VALUES ('테스트 제목2','테스트 내용2','테스트 사원2',true);
        
- Event
    - Fields
        id | title | des | name | time | active  
        -- | -- | -- | -- | -- | --   
        int | text | text | text | text | bool    
        O | O | O | O | O | O    
    -  SQL
    > CREATE TABLE `event` (
    `id` INT AUTO_INCREMENT,
    `title` TEXT NOT NULL,
    `des` TEXT NOT NULL,
    `name` TEXT NOT NULL,
    `active` BOOLEAN NOT NULL,
    `time` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);
  
- Mail
    - Fields
        id | title | des | sender | receiver | time | active  
        -- | -- | -- | -- | -- | -- | --  
        int | text | text | text | text | text | bool  
        O | O | O | O | O | O | O  
    -  SQL
    > CREATE TABLE `mail` (
    `id` INT AUTO_INCREMENT,
    `title` TEXT NOT NULL,
    `des` TEXT NOT NULL,
    `sender` TEXT NOT NULL,
    `receiver` TEXT NOT NULL,
    `active` BOOLEAN NOT NULL,
    `time` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

- Talk
    - Fields
        id | title | des | sender | receiver | time | active  
        -- | -- | -- | -- | -- | -- | --  
        int | text | text | text | text | text | bool  
        O | O | O | O | O | O | O  
    -  SQL
    > CREATE TABLE `talk` (
    `id` INT AUTO_INCREMENT,
    `title` TEXT NOT NULL,
    `des` TEXT NOT NULL,
    `sender` TEXT NOT NULL,
    `receiver` TEXT NOT NULL,
    `active` BOOLEAN NOT NULL,
    `time` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

- User
    - Fields
        id | username | userid | userpw | time | active  
        -- | -- | -- | -- | -- | --   
        int | text | text | text | text | bool    
        O | O | O | O | O | O    
    -  SQL
    > CREATE TABLE `user` (
    `id` INT AUTO_INCREMENT,
    `username` TEXT NOT NULL,
    `userid` TEXT NOT NULL,
    `userpw` TEXT NOT NULL,
    `active` BOOLEAN NOT NULL,
    `time` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);  
    - TEST SQL
    > INSERT INTO user (username, userid, userpw, active) VALUES ('테스트 사원1','testuser1','1234',true);