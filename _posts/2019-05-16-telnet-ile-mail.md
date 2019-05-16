---
title: Telnet ile mail
layout: post
tags: telnet mail
---

İlk olarak mail server’a telnet ile 25 portu üzerinde bağlanalım.

> telnet mailserver.com.tr 25

Ardından;

> HELO deneme.com.tr

Ardından;

> mail from: deneme@deneme.com.tr

Ardından;

> rcpt to: fatih.aslan@domain.com

Ardından(mail içeriğini bu kısımda hazırlayacağız);

> data

Daha sonra(subject);

> subject: deneme

“bu kısımda mail içeriği yani mesaj bloğu“

Ardırdan(nokta işareti mailimiz tamam oldu, gönder manasına gelmektedir);

> .

İşlem bu kadar.