
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Aradığınız sayfa bulunamadı! Anasayfa! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 2,
    "url": "http://localhost:4000/",
    "title": "Anasayfa",
    "body": "      Öne çıkan:                                                                                                                                                                                                           Mülakat Soruları                              :                Android –&gt; EnYakinOtel Android –&gt; CountriesInfo:                                                                       29 Jun 2019                &lt;/span&gt;                                                                                                                                                                                                                                                                                                        Hackerrank                              :               Soruları ve Cevapları:                                                                       26 Jun 2019                &lt;/span&gt;                                                                                                                                                                              Tüm Hikayeler:                                                             Mülakat Soruları              :        Android –&gt; EnYakinOtel Android –&gt; CountriesInfo:                               29 Jun 2019        &lt;/span&gt;                                                                                    Yaml nedir ?              :       YAML dil bağımsız bir veri değişim formatıdır. Herhangi bir programlama dili ile oluşturulan nesneler, YAML formatında kolaylıkla temsil edilebilmektedir. YAML geniş veri tipi desteği sayesinde tüm diller arasında ortak olarak. . . :                               27 Jun 2019        &lt;/span&gt;                                                                                    Hackerrank              :       Soruları ve Cevapları:                               26 Jun 2019        &lt;/span&gt;                                                                                    money. com. tr              :        money. com. tr ‘de ufak ama kapatılması gereken bir açık buldum… yaklaşık 1 ay önce mail üzerinden ulaşmaya çalıştım fakat geri dönüş yapılmadı… hala kapatılmamış… hint: pageScripts…:                               25 May 2019        &lt;/span&gt;                                                                                    Golem (gnt) nedir ?              :       Golem Nedir? Golem dünya çapında kendi ağındaki bütün bilgisayar güçlerini bir araya getiren merkeziyetsiz bir süper bilgisayardır. Golem ekosisteminde bilgisayarınızı karmaşık hesaplamalar ya da görevler gerçekleştirmek için ek güce ihtiyaç. . . :                               25 May 2019        &lt;/span&gt;                                       &laquo; Geri       1        2      İleri &raquo; "
    }, {
    "id": 3,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 4,
    "url": "http://localhost:4000/page2/",
    "title": "Anasayfa",
    "body": "{% if page. url == “/” %}       Öne çıkan:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       Tüm Hikayeler:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 5,
    "url": "http://localhost:4000/mulakat-sorulari/",
    "title": "Mülakat Soruları",
    "body": "2019/06/29 -  Android –&gt; EnYakinOtel Android –&gt; CountriesInfo"
    }, {
    "id": 6,
    "url": "http://localhost:4000/yaml-nedir/",
    "title": "Yaml nedir ?",
    "body": "2019/06/27 - YAML dil bağımsız bir veri değişim formatıdır. Herhangi bir programlama dili ile oluşturulan nesneler, YAML formatında kolaylıkla temsil edilebilmektedir. YAML geniş veri tipi desteği sayesinde tüm diller arasında ortak olarak kullanılabilir olmakla birlikte, ayrıca insan gözüyle bakıldığında kolay okunabilir bir yapısı mevcuttur. YAML ile kompleks nesne yapıları temsil edilebileceği gibi, konfigürasyon amaçlı kullanılan formatlara alternatif olarak da kullanılabilmektedir (Örneğin: . xml, . json, . properties biçimleri). YAML vs XML vs JSONXML yazılım sektöründe yaygın olarak kullanılan bir teknoloji. Birçok kullanım alanı olmakla birlikte, kompleks nesnelerin temsil edilmesi, konfigürasyon amaçlı olarak kullanılması en yaygın kullanım biçimidir. Örneğin: Java ekosisteminde konfigürasyon amaçlı bilgiler ağırlıklı olarak XML dosyalarında tutulmaktadır. JSON formatı da, hem kompleks nesnelerin temsili hem de konfigürasyon amaçlı olarak kullanılan bir veri temsil edici biçimdir. Örneğin: JavaScript ekosisteminde konfigürasyon amacıyla ağırlıklı olarak JSON biçimli dosyalar kullanılmaktadır. XML formatı, ne insan gözüyle kolay okunabilirdir, ne de insan eliyle kolay yazılabilirdir. JSON formatı ise, insan gözüyle kolay okunabilirdir fakat insan eliyle o kadar da kolay yazılabilir değildir. YAML formatı ise, bu iki formata göre insan gözüyle daha kolay okunabilir ve insan eliyle daha kolay yazılabilir bir sözdizimi sunmaktadır Örneğin;Aşağıda sırasıyla 3 farklı formatta XML, JSON ve YAML örneği yer almaktadır. Bu 3 örnek de aynı veri düzenini barındırmaktadır. Görüldüğü üzere XML biçimi oldukça komleks, ne kolay okunabilir ne de kolay yazılabilir.   java  oraclejdk8  linux    sudo apt-get update -qq  sudo apt-get install -y rpm      releases    true          true      true      rahmanusta/AsciidocFX      JSON biçimi ise XML’e göre gerçekten kolay okunabiliyor. Fakat yazım sırasındaki {} [] “” , karakterlerini sıkça yazmak yazımı biraz zorlaştırıyor. {  “language”: “java”,  “jdk”: [    “oraclejdk8”  ],  “os”: [    “linux”  ],  “script”: “mvn clean install”,  “before_script”: [    “sudo apt-get update -qq”,    “sudo apt-get install -y rpm”  ],  “deploy”: {    “provider”: “releases”,    “skip_cleanup”: true,    “on”: {      “tags”: true,      “all_branches”: true,      “repo”: “rahmanusta/AsciidocFX”    }  }}YAML formatı ise oldukça sade, hem kolay okunabiliyor hem de kolay yazılabiliyor. Ayrıca satır sayısı olarak genelde daha az yer kaplıyor. language: javajdk:  oraclejdk8os: linuxscript: mvn clean installbefore_script: sudo apt-get update -qq sudo apt-get install -y rpmdeploy:provider: releasesskip_cleanup: trueon: tags: true all_branches: true repo: rahmanusta/AsciidocFXNot: XML, JSON, YAML arası dönüşümleri http://codebeautify. org/yaml-to-json-xml-csv adresinden deneyimleyebilirsiniz. YAML vs Properties FileProperty dosyaları Java ekosisteminde kullanılan, konfigürasyon dosyalarıdır. Property dosyaları hem kolay okunabilir hem de kolay yazılabilirdir. Fakat, properties dosyalarında veriler sadece key -&gt; value biçiminde (map, associative array) tutulabilmektedir. Bu da properties dosyalarının kullanım alanını sınırlı kılmaktadır. YAML formatı ise verileri hem key -&gt; value biçiminde hem de dizi biçiminde hem de istenilen derinlikte tutabilmektedir. Bu avantajlı noktalardan bakıldığında, YAML formatı Properties dosyalarına iyi bir alternatif olarak karşımıza çıkmaktadır. –alıntıdır. "
    }, {
    "id": 7,
    "url": "http://localhost:4000/hackerrank/",
    "title": "Hackerrank",
    "body": "2019/06/26 - Soruları ve Cevapları  Java_Loops_II"
    }, {
    "id": 8,
    "url": "http://localhost:4000/moneycomtr/",
    "title": "money.com.tr",
    "body": "2019/05/25 -  money. com. tr ‘de ufak ama kapatılması gereken bir açık buldum… yaklaşık 1 ay önce mail üzerinden ulaşmaya çalıştım fakat geri dönüş yapılmadı… hala kapatılmamış… hint: pageScripts…"
    }, {
    "id": 9,
    "url": "http://localhost:4000/golem-gnt-nedir/",
    "title": "Golem (gnt) nedir ?",
    "body": "2019/05/25 - Golem Nedir?Golem dünya çapında kendi ağındaki bütün bilgisayar güçlerini bir araya getiren merkeziyetsiz bir süper bilgisayardır. Golem ekosisteminde bilgisayarınızı karmaşık hesaplamalar ya da görevler gerçekleştirmek için ek güce ihtiyaç duyan diğer insanlara ödünç verebilirsiniz. Golem, tıpkı Uber ve Airbnb gibi kullanılmayan ya da az kullanılan kaynaklarla kullanıcılarının ekstra para kazanmasını sağlayan bir platform. Golem sayesinde bilgisayarınızın hız sıkıntısı yaşadığı durumlarda sorunu derhal çözmek için ağdan işlem gücü satın alabilirsiniz. Bu platform özellikle rutin olarak yoğun hesaplamalar gerektiren Doğal Dil İşleme, Yapay Zeka gibi uygulamalarda kullanılabilir. Golem Nasıl Çalışıyor?Golem ağının nasıl çalıştığını anlamak için gelin ağı kullanma isteğinin nasıl gerçekleştirildiğine bir göz atalım Şimdi varsayalım ki bir grup ya da kişi bu ağı kullanmak istiyor. (Bu kişi ya da kişilere “isteyen” diyelim) İsteyenimizin uygulamak istediği görev Golem tarafından sağlanan görevle aynı olsun. Eğer değilse “isteyen” görev tanım çerçevesini kullanarak kendi görev kodunu yazmak durumunda oluyor. Ancak bu opsiyon ilk iki versiyonda -Brass ve Clay- mevcut değil. Görev şablonlarının farklı görevler yapması üçüncü sürüm olan Stone’da kullanıma sunulacak. Bitci. ComBlender ve Luxender ilk Golem versiyonunda aktif olan iki görev şablonu. Şu an böyle olsa da ileride Golem Shop’dan birçok görev şablonu satın alabileceksiniz. Örneğimize dönersek, “isteyen” bir şablon seçiyor; görev, görev yöneticisine ekleniyor ve ağ görev hakkındaki bilgileri alıyor. (Bilgisayar gücünü sağlayan insanlara da sağlayıcı diyelim. ) Sağlayıcı bütün görev tekliflerini alıyor ve en iyi olanı seçiyor. Bu şekilde görev yayınlayan her node’un itibarını kontrol ediyor ve kötü itibarlı olanları reddediyor. “Sağlayıcı” uygun bir teklif bulduğunda “isteyen”e fiyat ve bilgisayar gücü bilgisini gönderiyor. Buna karşılık, “isteyen” sağlayıcının çalışmak için yeterince yüksek bir itibara sahip olduğunu doğruluyor. Her şey tamamsa sağlayıcı bütün gerekli kaynakları IPFS üzerinden alıyor ve görev bilgisayarında hesaplamalarına başlıyor. Görev tamamlandığında “isteyen”e sonuçlar IPFS ağı üzerinden geri gönderiliyor. Daha sonra, görev yöneticisi sonuçları doğrulamak için bilgileri doğru node’a iletiyor. Ayrıca “isteyen” fazla doğrulama için bunu birçok node’a göndermeyi de seçebiliyor. Son olarak ödeme sistemi Ethereum akıllı kontratı aracılığıyla gerçekleşiyor ve varlıklar isteyen’den sağlayan’a gönderiliyor. Ek Özellikler:Yukarıda özetlenen senaryonun dışında Golem iki özelliği de bünyesinde barındırıyor: Uygulama Kaydı: Geliştiricilerin Golem uygulamalarını paylaşabilmeleri için geliştirilmiş bir Ethereum akıllı kontratı. Bu kontrat işlemleri isteyen ve sağlayanlar için daha kolay hale getiriyor. İşlem Taslağı: Kendi geliştirdiği Golem uygulaması için bir işlem modeli uygularken geliştiricilerin uygulaması gereken bir dizi gereksinimden oluşuyor. Golem Network Token (GNT)GNT, bilgisayar gücü satmak ya da satın almak için kullanılabilecek bir ERC20 tokenı. Bir sağlayan uygun gördüğü her durumda GNT kiralama fiyatını belirleyebiliyor çünkü Golem kendi içerisinde fiyat dengesini bulabilecek bir pazar. Ayrıca bir sağlayıcı olmak için yapılan uygulama kaydı da GNT ile yapılıyor. GNT takımı 1. 000. 000. 000 adet GNT üretti ve bunun %82’si ICO ile katılımcılara satıldı. SonuçGolem bir dağıtılmış süper bilgisayar ve bilgisayar gücü pazarı. 2016’dan beri aktif ve bir aralar piyasa değeri olarak ilk 10 kripto para içerisinde yer alıyordu ve son zamanlarda sıralamada düşüşler yaşadı. Elbette bu takımın çalışmadığı ve Golem’i geliştirmediği anlamına gelmiyor. Son zamanlarda Golem ekibi hem bu ekosistemi geliştirmeye hem de teknik destek, topluluk sosyal yardımı ve dünya çağındaki erişimlerini genişletmeye çalışıyor. SONM gibi benzer projeler ile içinde bulunduğu rekabetten önde ayrılırsa Golem önümüzdeki yıllarda şu an sahip olduğundan çok daha büyük başarılarla adından söz ettirebilir. GNT’lerimi Nerede Saklayabilirim?GNT’lerinizi ERC20 desteği olan herhangi bir cüzdanda saklayabilirsiniz. En popüler ERC20 destekli cüzdanlar ise tabi ki MyEtherWallet ve MetaMask. "
    }, {
    "id": 10,
    "url": "http://localhost:4000/ataleti-yenenler/",
    "title": "Ataleti Yenenler",
    "body": "2019/05/18 -  Örnek insanlar, Pes etmeyenler, Başarı hikayeleri  Hayallerinin Peşinden Gidenler –&gt; https://youtu. be/C2ZelcvyDqk 0’dan 100 Milyon Dolara –&gt; https://youtu. be/fWr9h8cO5PI Zeliha AĞRIS –&gt; https://youtu. be/rdDHpZn1yRQ"
    }, {
    "id": 11,
    "url": "http://localhost:4000/telnet-ile-mail/",
    "title": "Telnet ile mail",
    "body": "2019/05/16 - İlk olarak mail server’a telnet ile 25 portu üzerinde bağlanalım.  telnet mailserver. com. tr 25 Ardından;  HELO deneme. com. tr Ardından;  mail from: deneme@deneme. com. tr Ardından;  rcpt to: fatih. aslan@domain. com Ardından(mail içeriğini bu kısımda hazırlayacağız);  data Daha sonra(subject);  subject: deneme “bu kısımda mail içeriği yani mesaj bloğu“ Ardırdan(nokta işareti mailimiz tamam oldu, gönder manasına gelmektedir);  . İşlem bu kadar. son olarak çıkış için,  quit "
    }, {
    "id": 12,
    "url": "http://localhost:4000/ubuntu-kurulum-sonrasi/",
    "title": "Ubuntu Kurulum Sonrası",
    "body": "2019/05/10 - Ubuntu Kurulum sonrası gerekli olanlar listesi…  idea yakuake kdiff3 vscode brave jdk/jd-gui git/smartgit docker/gradle datagrip/postman vlc/odiosonra ekleme yapalım… "
    }, {
    "id": 13,
    "url": "http://localhost:4000/terminal-kisayollar/",
    "title": "Terminal Kısayollar",
    "body": "2019/05/09 - Ctrl + c : Çalışan process’i sonlandırmak için sıkça kullandığımız kısayoldur. Ctrl + d : Halihazırda açık bulunan bash oturmunu kapatıp bir üstte çalıştırılan oturuma geçer; eğer üzerinde çalışan başka oturum yoksa terminal sekmesi kapanır. Ctrl +r : bash geçmişimizde bulunan bir komutu aramaya yarar. Ctrl +r ye bastıktan sonra aramak istediğimiz metni yazınca o metinle eşleşen en son çalıştırdığımız komutu bulabiliriz. Eşleşen daha eski komutları bulmak için tekrar tekrar Ctrl+r ‘ye basmamız gerekir. Ctrl +l : Komut satırında kullandığımız clear komutu gibi ekranı temizlemek amacıyla yukarı kaydırır. Ctrl +a ve Ctrl +e kısayolları komut satırında kolayca gezinmemizi sağlayan başlıca kısayolardan ikisidir. Ctrl +a kısayolu komut satırındaki imlecimizi satırın başına taşır. Ctrl+e ise imleci satır sonuna taşır. Eğer bir önceki komutta çalıştırdığımız komutun başına sudo yazmayı unuttuysak; “!!” ifadesi geçmişte bulunan en son çalıştırdğımız komutu temsil ettiği için,$ sudo !!ifadesi son çalıştırılan komutun başına sudo ekleyip tekrar çalıştırır. Aynı şekilde eğer terminal geçmişinden başka bir komut çalıştırmak için , $ ![sıra_numarası]komutu ile istediğimiz komutun çalıştırılma sırasına göre numarasını girerek tekrardan çalıştırabiliriz. Ctrl+w kısayolu Komut satırının imleçten öncesini önceki whitespace karaktere kadar keser ve panoya (clipboard) kopyalar. Ctrl+y kısayolu panoda bulunan metini ekrana yapıştırmak için kullanılır. Ctrl+k kısayolu komut satırının imleçten sonrasını keser ve panoya (clipboard) kopyalar. Ctrl+u kısayolu komut satırının imleçten öncesini keser ve panoya (clipboard) kopyalar. Alt+b kısayolu imleci bir önceki kelimenin başına taşır. Alt+f kısayolu imleci bir sonraki kelimenin başına taşır. Bu iki kısayol, bazı karakterleri kelime sonu olarak kabul eder. Ctrl +← ile Ctrl +→ kısayolları da aynı şekilde imleci kelime ilerleyerek taşımak için kullanılabilir. Ctrl + x + e kısayolu ile komut satırına yazdıklarımızı $EDITOR değişkeninde belirlenmiş text editöründe açıp değiştirme şansı elde ederiz, çok uzun komutlar için kendinizi rahat hissettiğiniz editörü,$ export EDITOR=[editor]şeklinde “editor” yerine vim, nano, emacs yazıp değiştirebiliriz; varsayılan hali Ubuntu’da nano olarak ayarlanmıştır. Bahsettiğim kısayollar Emacs text editörünün kısayolları olup varsayılan olarak bash komut satırında da çalışır halde gelir. Bu tuş seti dışında vi editörünün sunduğu modları ve kısayolları kullanmak isterseniz, $ set -o vikomutunu yazıp vi kısayol setiyle terminal kullanımına devam edebilirsiniz. –alıntıdır… "
    }, {
    "id": 14,
    "url": "http://localhost:4000/nerden-baslamali/",
    "title": "Nerden Başlamalı ?",
    "body": "2019/04/30 -  Yani diyorum ki mal mal oturma bu yollardan geçmiş insanlar güzel paylaşımlar yapmış/yapıyor aç gözünü yerinde sayma ilgilen araştır… Burdan başlamayı deneyebilirsin – &gt; Arkadaş güzel bir derleme yapmış,yazıların ve yazarların sana katkıları olacak"
    }, {
    "id": 15,
    "url": "http://localhost:4000/education/",
    "title": "Education must also train one for quick, resolute and effective thinking.",
    "body": "2018/06/12 - There are lots of powerful things you can do with the Markdown editor If you’ve gotten pretty comfortable with writing in Markdown, then you may enjoy some more advanced tips about the types of things you can do with Markdown! As with the last post about the editor, you’ll want to be actually editing this post as you read it so that you can see all the Markdown code we’re using. Special formatting: As well as bold and italics, you can also use some other special formatting in Markdown when the need arises, for example:  strike through ==highlight== *escaped characters*Writing code blocks: There are two types of code elements which can be inserted in Markdown, the first is inline, and the other is block. Inline code is formatted by wrapping any word or words in back-ticks, like this. Larger snippets of code can be displayed across multiple lines using triple back ticks: 123. my-link {  text-decoration: underline;}If you want to get really fancy, you can even add syntax highlighting using Rouge.  Reference lists: The quick brown jumped over the lazy. Another way to insert links in markdown is using reference lists. You might want to use this style of linking to cite reference material in a Wikipedia-style. All of the links are listed at the end of the document, so you can maintain full separation between content and its source or reference. Full HTML: Perhaps the best part of Markdown is that you’re never limited to just Markdown. You can write HTML directly in the Markdown editor and it will just work as HTML usually does. No limits! Here’s a standard YouTube embed code as an example: "
    }, {
    "id": 16,
    "url": "http://localhost:4000/about-bundler/",
    "title": "About Bundler",
    "body": "2018/05/12 - gem install bundler installs the bundler gem through RubyGems. You only need to install it once - not every time you create a new Jekyll project. Here are some additional details: bundler is a gem that manages other Ruby gems. It makes sure your gems and gem versions are compatible, and that you have all necessary dependencies each gem requires. The Gemfile and Gemfile. lock files inform Bundler about the gem requirements in your site. If your site doesn’t have these Gemfiles, you can omit bundle exec and just run jekyll serve. When you run bundle exec jekyll serve, Bundler uses the gems and versions as specified in Gemfile. lock to ensure your Jekyll site builds with no compatibility or dependency conflicts. For more information about how to use Bundler in your Jekyll project, this tutorial should provide answers to the most common questions and explain how to get up and running quickly. "
    }, {
    "id": 17,
    "url": "http://localhost:4000/is-intelligence-enough/",
    "title": "External Featured Image",
    "body": "2018/01/12 - Education must also train one for quick, resolute and effective thinking. To think incisively and to think for one’s self is very difficult.  We are prone to let our mental life become invaded by legions of half truths, prejudices, and propaganda. At this point, I often wonder whether or not education is fulfilling its purpose. A great majority of the so-called educated people do not think logically and scientifically. Even the press, the classroom, the platform, and the pulpit in many instances do not give us objective and unbiased truths. To save man from the morass of propaganda, in my opinion, is one of the chief aims of education. Education must enable one to sift and weigh evidence, to discern the true from the false, the real from the unreal, and the facts from the fiction. The function of education, therefore, is to teach one to think intensively and to think critically. But education which stops with efficiency may prove the greatest menace to society. The most dangerous criminal may be the man gifted with reason, but with no morals. The late Eugene Talmadge, in my opinion, possessed one of the better minds of Georgia, or even America. Moreover, he wore the Phi Beta Kappa key. By all measuring rods, Mr. Talmadge could think critically and intensively; yet he contends that I am an inferior being. Are those the types of men we call educated? We must remember that intelligence is not enough. Intelligence plus character–that is the goal of true education. The complete education gives one not only power of concentration, but worthy objectives upon which to concentrate. The broad education will, therefore, transmit to one not only the accumulated knowledge of the race but also the accumulated experience of social living. "
    }, {
    "id": 18,
    "url": "http://localhost:4000/quick-start-guide/",
    "title": "Let's test spoilers",
    "body": "2018/01/11 - Director Roland Suso Richter’s enigmatic psychological thriller (direct to video/DVD) was based upon screenwriter Michael Cooney’s own play “Point of Death” - a title that gave away the film’s entire plot twist premise. As in many similar films, such as Jacob’s Ladder (1990), Soul Survivors (2001), and The Butterfly Effect (2004), events and people were thoroughly distorted and confused because the protagonist was at the point of death. The tagline was misleading: “When You Don’t Have a Memory, How Can You Remember Who to Trust?” The mind-warping film opened with a hospital patient Simon Cable (Ryan Phillippe) awakening in a hospital with little knowledge (amnesia perhaps?) of what had happened, and why he was there, etc. He was told by attending Dr. Jeremy Newman (Stephen Rea) that it was July 29, 2002 (Simon thought it was the year 2000 - he was confused - he heard a doctor say 20:00 hours!) and that he had died for two minutes from cardiac arrest following the near-fatal accident – but he had been revived (“You’re as good as new”). Dr. Newman: “Simon, this is the 29th of July. The year is 2002. And your wife, whose name is Anna, is waiting outside. ” (The doctor left off four crucial additional words, revealed in the film’s ending. ) (Spoiler: Simon had died and was not resuscitated!). A major clue to everything that truly happened was the scene that played next under the credits - hospital staff failed to bring a patient back to life with a defibrillator after a car accident. Chest compressions failed and there was no pulse. A second major clue was provided by hospital orderly Travis (Stephen Graham): Everybody dies. No mystery there. But why and how everyone dies. Now, there’s a mystery worth solving. Probably the biggest mystery there is. So how do we do spoilers?: 1&lt;span class= spoiler &gt;My hidden paragraph here. &lt;/span&gt;"
    }, {
    "id": 19,
    "url": "http://localhost:4000/customer-service/",
    "title": "Inception Movie",
    "body": "2018/01/11 - Review products, books, movies, restaurant and anything you like on your Jekyll blog with Mediumish! JSON-LD ready for review property. How to use?: It’s actually really simple! Add the rating in your YAML front matter. It also supports halfs: 12345678910---layout: posttitle:  Inception Movie author: johncategories: [ Jekyll, tutorial ]tags: [red, yellow]image: assets/images/11. jpgdescription:  My review of Inception movie. Actors, directing and more.  rating: 4. 5---"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});