---
title: Terminal Kısayollar
layout: post
tags: ubuntu terminal yakuake kısayol
---

Ctrl + c : Çalışan process’i sonlandırmak için sıkça kullandığımız kısayoldur.

Ctrl + d : Halihazırda açık bulunan bash oturmunu kapatıp bir üstte çalıştırılan oturuma geçer; eğer üzerinde çalışan başka oturum yoksa terminal sekmesi kapanır.

Ctrl +r : bash geçmişimizde bulunan bir komutu aramaya yarar. Ctrl +r ye bastıktan sonra aramak istediğimiz metni yazınca o metinle eşleşen en son çalıştırdığımız komutu bulabiliriz. Eşleşen daha eski komutları bulmak için tekrar tekrar Ctrl+r ‘ye basmamız gerekir.

Ctrl +l : Komut satırında kullandığımız clear komutu gibi ekranı temizlemek amacıyla yukarı kaydırır.
Ctrl +a ve Ctrl +e kısayolları komut satırında kolayca gezinmemizi sağlayan başlıca kısayolardan ikisidir. 

Ctrl +a kısayolu komut satırındaki imlecimizi satırın başına taşır. 

Ctrl+e ise imleci satır sonuna taşır.

Eğer bir önceki komutta çalıştırdığımız komutun başına sudo yazmayı unuttuysak; “!!” ifadesi geçmişte bulunan en son çalıştırdğımız komutu temsil ettiği için,
$ sudo !!
ifadesi son çalıştırılan komutun başına sudo ekleyip tekrar çalıştırır. Aynı şekilde eğer terminal geçmişinden başka bir komut çalıştırmak için ,

$ ![sıra_numarası]
komutu ile istediğimiz komutun çalıştırılma sırasına göre numarasını girerek tekrardan çalıştırabiliriz.

Ctrl+w kısayolu Komut satırının imleçten öncesini önceki whitespace karaktere kadar keser ve panoya (clipboard) kopyalar.
Ctrl+y kısayolu panoda bulunan metini ekrana yapıştırmak için kullanılır.
Ctrl+k kısayolu komut satırının imleçten sonrasını keser ve panoya (clipboard) kopyalar.
Ctrl+u kısayolu komut satırının imleçten öncesini keser ve panoya (clipboard) kopyalar.

Alt+b kısayolu imleci bir önceki kelimenin başına taşır. Alt+f kısayolu imleci bir sonraki kelimenin başına taşır. Bu iki kısayol, bazı karakterleri kelime sonu olarak kabul eder.
Ctrl +← ile Ctrl +→ kısayolları da aynı şekilde imleci kelime ilerleyerek taşımak için kullanılabilir.
Ctrl + x + e kısayolu ile komut satırına yazdıklarımızı $EDITOR değişkeninde belirlenmiş text editöründe açıp değiştirme şansı elde ederiz, çok uzun komutlar için kendinizi rahat hissettiğiniz editörü,
$ export EDITOR=[editor]
şeklinde “editor” yerine vim, nano, emacs yazıp değiştirebiliriz; varsayılan hali Ubuntu’da nano olarak ayarlanmıştır.


Bahsettiğim kısayollar Emacs text editörünün kısayolları olup varsayılan olarak bash komut satırında da çalışır halde gelir. Bu tuş seti dışında vi editörünün sunduğu modları ve kısayolları kullanmak isterseniz,

$ set -o vi
komutunu yazıp vi kısayol setiyle terminal kullanımına devam edebilirsiniz.

--alıntıdır...