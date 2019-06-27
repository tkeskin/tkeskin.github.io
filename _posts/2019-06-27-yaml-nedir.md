---
title: Yaml nedir ?
layout: post
tag: yamlNedir yaml nedir
featured: false
---

YAML dil bağımsız bir veri değişim formatıdır. Herhangi bir programlama dili ile oluşturulan nesneler,  YAML formatında kolaylıkla temsil edilebilmektedir. YAML geniş veri tipi desteği sayesinde tüm diller arasında ortak olarak kullanılabilir olmakla birlikte, ayrıca insan gözüyle bakıldığında kolay okunabilir bir yapısı mevcuttur.

YAML ile kompleks nesne yapıları temsil edilebileceği gibi, konfigürasyon amaçlı kullanılan formatlara alternatif olarak da kullanılabilmektedir (Örneğin: .xml, .json,  .properties biçimleri).

YAML vs XML vs JSON
XML yazılım sektöründe yaygın olarak kullanılan bir teknoloji. Birçok kullanım alanı olmakla birlikte, kompleks nesnelerin temsil edilmesi, konfigürasyon amaçlı olarak kullanılması en yaygın kullanım biçimidir. Örneğin: Java ekosisteminde konfigürasyon amaçlı bilgiler ağırlıklı olarak XML dosyalarında tutulmaktadır.

JSON formatı da, hem kompleks nesnelerin temsili hem de konfigürasyon amaçlı olarak kullanılan bir veri temsil edici biçimdir. Örneğin: JavaScript ekosisteminde konfigürasyon amacıyla ağırlıklı olarak JSON biçimli dosyalar kullanılmaktadır.

XML formatı, ne insan gözüyle kolay okunabilirdir, ne de insan eliyle kolay yazılabilirdir. JSON formatı ise, insan gözüyle kolay okunabilirdir fakat insan eliyle o kadar da kolay yazılabilir değildir. YAML formatı ise,  bu iki formata göre insan gözüyle daha kolay okunabilir ve insan eliyle daha kolay yazılabilir bir sözdizimi sunmaktadır

Örneğin;
Aşağıda sırasıyla 3 farklı formatta XML, JSON ve YAML örneği yer almaktadır. Bu 3 örnek de aynı veri düzenini barındırmaktadır. Görüldüğü üzere XML biçimi oldukça komleks, ne kolay okunabilir ne de kolay yazılabilir.


<?xml version="1.0" encoding="UTF-8" ?>
<root>
    <language>java</language>
    <jdk>oraclejdk8</jdk>
    <os>linux</os>
    <script>mvn clean install</script>
    <before_script>sudo apt-get update -qq</before_script>
    <before_script>sudo apt-get install -y rpm</before_script>
    <deploy>
        <provider>releases</provider>
        <skip_cleanup>true</skip_cleanup>
        <on>
            <tags>true</tags>
            <all_branches>true</all_branches>
            <repo>rahmanusta/AsciidocFX</repo>
        </on>
    </deploy>
</root>
JSON biçimi ise XML'e göre gerçekten kolay okunabiliyor. Fakat yazım sırasındaki {} [] "" , karakterlerini sıkça yazmak yazımı biraz zorlaştırıyor.

{
    "language": "java",
    "jdk": [
        "oraclejdk8"
    ],
    "os": [
        "linux"
    ],
    "script": "mvn clean install",
    "before_script": [
        "sudo apt-get update -qq",
        "sudo apt-get install -y rpm"
    ],
    "deploy": {
        "provider": "releases",
        "skip_cleanup": true,
        "on": {
            "tags": true,
            "all_branches": true,
            "repo": "rahmanusta/AsciidocFX"
        }
    }
}
YAML formatı ise oldukça sade, hem kolay okunabiliyor hem de kolay yazılabiliyor. Ayrıca satır sayısı olarak genelde daha az yer kaplıyor.

language: java
jdk:
- oraclejdk8
os:
- linux
script: mvn clean install
before_script:
- sudo apt-get update -qq
- sudo apt-get install -y rpm
deploy:
  provider: releases
  skip_cleanup: true
  on:
    tags: true
    all_branches: true
    repo: rahmanusta/AsciidocFX
Not: XML, JSON, YAML arası dönüşümleri http://codebeautify.org/yaml-to-json-xml-csv adresinden deneyimleyebilirsiniz.

YAML vs Properties File
Property dosyaları Java ekosisteminde kullanılan, konfigürasyon dosyalarıdır. Property dosyaları hem kolay okunabilir hem de kolay  yazılabilirdir. Fakat, properties dosyalarında veriler sadece key -> value biçiminde (map, associative array) tutulabilmektedir. Bu da properties dosyalarının kullanım alanını sınırlı kılmaktadır.

YAML formatı ise verileri hem key -> value biçiminde hem de dizi biçiminde hem de istenilen derinlikte tutabilmektedir. Bu avantajlı noktalardan bakıldığında, YAML formatı Properties dosyalarına iyi bir alternatif olarak karşımıza çıkmaktadır.

--alıntıdır.