9+++FIRST LEARN CREATE PROJEXT++++
==== CMD +++>> npm init -y

++ Install Module Yang Di perlukan++

==== npm install express backend ===> npm express
==== install nodemon ==>> npm nodemon
==== run nodemon =>> npx nodemon <name-file>=> app.js

+++step isikan commant di package.json
buat saat run app tinggal comman npm start
"scripts": {
"start": "nodemon app.js"
==== command Start ===>> npm start

+++step instal squelize ORM
==== command install squelize /pg/  dan postgress
=== install squelize-cli (commant propt interface)

++step menghubungkan Db ++ versi squelize

=== cek squelize commEnt ===>> npx squelize
=== comment npx sequelize-cli init
=== create DB ==> Command npx sequelize-cli db:create <CONTOH NAMA DB>
=== Terus Lihat DB kita DBMS kita.. sesusai dengan user daan pass nya 

+++step generaate model di squelize+++
=== command ==> npx sequelize-cli model:generate --name </nama-model\> --attributes </fields:tipe-datanya\> , dss..
Tipe-data(STRING , INTEGER , BOOLEAN , CHAR , LONG , DOUBLE , DLL..)

=== kalau udah di generad akan ada muncul 2 file di folder migration dan model itu artinya udah di generated..
=== terus masukan migration Db nya dengan command ==> npx squelize-cli db:migrate
=== kalau udah cek di db apakan table udah muncul..



WARNING !!!!

NODEMON ialah semacam module di javascript biar mengAUto start suatu APPS/projeck

squelize ORM ialan 0RM(Object-relational-mapping) adalah tekhnik mengubah data dalam bentuk objeck Dalam bahasa pemograman javascrip

documedn : https://sequelize.org/docs/v6/getting-started/






