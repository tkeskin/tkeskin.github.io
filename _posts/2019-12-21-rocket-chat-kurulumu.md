---
title: Rocket Chat Kurulumu
layout: post
tag: RocketChatKurulumu RocketChatCentOSNasıl KurumİçiMesaj KurumsalMesaj
---

Centos 8 üzerinde Rocket Chat Kurulumu

- [Manuel kurulumu officail dokümanda mevcut her adımı atlamadan yapıyoruz](https://rocket.chat/docs/installation/manual-installation/centos/)
- Son olarak centos üzerinde port açılması gerekiyor ;

Kalıcı olarak Port açma:

firewall-cmd --add-port=3000/tcp --permanent

/etc/firewalld altında firewalld servisinin ayarları bulunmaktadır.

/etc/firewalld/zones/public.xml altında varsayılan zoneda açılan portlar saklanmaktadır.

firewall-cmd --add-port=3000/tcp --permanent

komutu;

/etc/firewalld/zones/public.xml

dosyasını değiştirir.

Tüm değişiklikler bittikten sonra aşağıdaki komut ile değişiklikler aktif hale gelecektir.

firewall-cmd --reload

- Port açıldı ek olarak ben port yönlendirme yapacağım.Default porta gelen istekleri 3000 yönlendiricek.

firewall-cmd --permanent --add-forward-port=port=80:proto=tcp:toport=3000

firewall-cmd --reload