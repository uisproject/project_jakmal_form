Pada test projek kali ini saya menggunakan react-hook, react-hook-form dan menggunakan styled-component sebagai stylingnya. yang pertama dilakukan adalah membuat rancangan struktur folder agar project terlihat rapih, disini saya menggunakan 7 jenis folder yang sudah saya kategorikan

1. Components: terdiri atas komponen yang telah dibuat dari suatu halaman hingga custom element secara umum sehingga saya dapat me reuse component tersebut
2. context karna saya tidak jadi pakai redux dikarenakan tidak mensupport forwardRef maka saya menggunakan teknik useContext pada react terdiri atas data global dan hasil form karena component bersifat nested lalu disini juga langsung di hubungkan dengan session storage sebagai initial data
3. hooks disini hanya untuk menangkap state yang telah disimpan didalam konteks seperti ingin melakukan set data transaksi, melihat data transaksi dan melakukan track pada tab ke berapa
4. layouts untuk menyimpan layout disini saya hanya menggunakan 1 jenis layout karena pada 3 halaman ini bersifat sama secara tampilan
5. pages: halaman dari project itu sendiri, disini saya membuat nya menjadi 3 halaman yaitu halaman delivery, payment, finish, disini saya mengkonek 1 sama lain dengan bantuan react-router-dom
6. styles untuk menyimpan styling theme dan global untuk styled component
7. utils untuk menyimpan fungsi fungsi atau data yang dapat dipakai atau di reuse kembali pada komponent tertentu
