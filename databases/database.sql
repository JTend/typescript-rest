create database ng_games_db;

use ng_games_db;

create table games(
    id int(11) not null auto_increment primary key,
    title varchar(180),
    description varchar(255),
    image varchar(255),
    created_at timestamp default current_timestamp
);

describe games;