Pada test projek kali ini saya menggunakan react-hook, react-hook-form dan menggunakan styled-component sebagai stylingnya. yang pertama dilakukan adalah membuat rancangan struktur folder agar project terlihat rapih, disini saya menggunakan 7 jenis folder yang sudah saya kategorikan

1. Components: terdiri atas komponen yang telah dibuat dari suatu halaman hingga custom element secara umum sehingga saya dapat me reuse component tersebut
2. context karna saya tidak jadi pakai redux dikarenakan tidak mensupport forwardRef maka saya menggunakan teknik useContext pada react terdiri atas data global dan hasil form karena component bersifat nested lalu disini juga langsung di hubungkan dengan session storage sebagai initial data
3. hooks disini hanya untuk menangkap state yang telah disimpan didalam konteks seperti ingin melakukan set data transaksi, melihat data transaksi dan melakukan track pada tab ke berapa
4. layouts untuk menyimpan layout disini saya hanya menggunakan 1 jenis layout karena pada 3 halaman ini bersifat sama secara tampilan
5. pages: halaman dari project itu sendiri, disini saya membuat nya menjadi 3 halaman yaitu halaman delivery, payment, finish, disini saya mengkonek 1 sama lain dengan bantuan react-router-dom
6. styles untuk menyimpan styling theme dan global untuk styled component
7. utils untuk menyimpan fungsi fungsi atau data yang dapat dipakai atau di reuse kembali pada komponent tertentu

untuk skenario nya adalah

1. pada halaman delivery saya membuat terlebih dahulu component input dan dapat di reuse kembali, input tersebut divalidadi oleh useFormContext dari library react-hook-form. ketika validasi benar maka input akan berubah warna menjadi hijau dan muncul centang lalu jika salah akan muncul silang dengan warna merah, dan ketika send as dropshipper di centang maka akan men disable kolom dropshipper. ketika semua telah tervalidasi maka klik Continue to Payment, hal ini akan membuat form di submit ke dalam context agar disimpan secara global untuk dipakai di komponen berikutnya, pada halaman delivery continue payment akan mengirimkan data ke session storage sehingga ketika di refresh akan menyimpan validasi terakhir

2. halaman payment, disini saya harus membuat box nya seperti yang dilakukan pada halaman delivery dan memiliki validasi yang sama seperti pada halaman delivery hanya saja sudah ada default pilihan yang pertama ketika masuk ke halaman payment, dan yang berbeda lagi adalah setiap melakukan pemilihan maka akan langsung menyimpan ke session storage sehingga ketika di refresh data akan tetap terjaga

3. setelah itu bisa langsung ke pay with e-wallet dan mengarahkan pada halaman finish
