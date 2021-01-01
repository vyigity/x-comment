X-COMMENT JQUERY EKLENTİSİ - X-COMMENT JQUERY PLUGIN

x-comment ile kullanıcıların yorumları birbirlerine yanıt verecek şekilde hiyerarşik olarak gösterilebilmektedir. Yanıtlamada seviye sınırı yoktur. x-comment yeni yorum eklenmesine, yorumların yanıtlanmasına olanak verir ve tamamen json ve javascript nesneleri üzerinden çalışır. Aşağıdaki GitHub bağlantısından kodlara erişilebilir.

GitHub:

https://github.com/vyigity/x-comment

Bağımlılıklar

* Jquery
* Bootstrap
* Fontawesome
* Globalize

Ayarlar - Eklenti

* mode: "array" veya "remote" değerlerini alabilir. "array" değerinde eklentiye verilen javascript array kullanılarak lokal olarak işlem yapılır. Toplu giriş çıkış işlemler için bu yöntem kullanılabilir. "remote" değerinde dataSource alanındaki Jquery Deferred döndüren fonksiyon çalıştırılarak veriye ulaşılır. (Zorunlu)
* items: "array" modda eklentiye veri buradan verilir. Ayrıca "remote" modda veri yüklendikten sonra buradan javascript array olarak okunabilir.(Array modda zorunlu)
* dataSource: Jquery Deffered nesnesi döndüren bir fonksiyon içerebilir. Eklenti tarafından bu fonksiyon çalıştırılarak veri elde edilir.(Remote modda zorunlu)
* authorName: Yanıtlama yapılırken eklenti tarafından burada yazan isim kullanılır. (Zorunlu)
* width: Eklentinin boyutunun px olarak ayarlanması sağlar. (Zorunlu değil)
* allowInsert: "true/false" değeri alabilir. Giriş yapılmasını sağlayan formun gösterilmesini sağlar. (Zorunlu değil - Default:true)
* allowReply: "true/false" değeri alabilir. Yorumların yanıtlanabilir veya yanıtlamaz olmasını sağlar. (Zorunlu değil - Default:true)
* allowDelete: "true/false" değeri alabilir. Yorumların silinebilir veya silinemez olmasını sağlar. (Zorunlu değil - Default:true)
* onInserting: Jquery Deffered nesnesi döndüren bir fonksiyon içerebilir. Yeni kayıt eklenirken tetiklenir.
    Parametreler: 
        instance: Yorum eklentisinin instance değeridir. Örn. items alanına ulaşmak için kullanılabilir veya eklenti buradan yenilenebilir.
        value: Kullanıcı tarafından girilen değerdir.
* onReplied: Jquery Deffered nesnesi döndüren bir fonksiyon içerebilir. Bir yoruma cevap verildiğine tetiklenir.
    Parametreler: 
        instance: Yorum eklentisinin instance değeridir. Örn. items alanına ulaşmak için kullanılabilir veya eklenti buradan yenilenebilir.
        value: Kullanıcı tarafından girilen değerdir.
        item: Yanıt verilen yorumdur.
* onDeleting: Jquery Deffered nesnesi döndüren bir fonksiyon içerebilir. Bir yorum silinirken tetiklenir.
    Parametreler: 
        instance: Yorum eklentisinin instance değeridir. Örn. items alanına ulaşmak için kullanılabilir veya eklenti buradan yenilenebilir.
        item: Silinmek istenen yorumdur.
* onError: Jquery Deffered nesnesi döndüren fonksiyonlar içinde hata olması durumunda tetiklenir. Deferred nesnesi reject fonksiyonu ile kullanılmalıdır.
    Parametreler: 
        data: Deferred nesnesinin reject fonksiyonu aracılığıyla gönderilen değerdir.
        texts: Eklenti içindeki nesneler üzerinde yazıların ayarlanmasını sağlayan javascript nesnesini içerebilir. (Zorunlu değil)
        
Ayarlar - texts (Zorunlu değil)

* sendButtonText: Yeni yorum oluşturma kısmında yer alan tuş üzerindeki yazıyı belirler.
* inputTextAreaPlaceHolder: Yorum girilen yazı alanının üzerinde beliren yazının düzenlenmesini sağlar.
* sendReplyButtonText: Yanıt gönderme tuşunun üzerindeki yazıyı belirler.
* cancelButtonText: Yanıt verilme işleminin iptal edilmesini sağlayan tuş üzerindeki yazıyı belirler.
* replyButtonText: Yanıtlama işleminin yapılmasını sağlayan tuş üzerindeki yazıyı belirler.
* deleteButtonText: Yorumların silinmesini sağlayan tuş üzerindeki yazıyı belirler.

Ayarlar - items 

* id: Yoruma ait eşsiz bir değerdir.
* parent: Hangi yorumun alt yorumu (yanıtı) olduğunu belirten değerdir.
* deletable: "true/false" değeri alabilir. Yorumun silinebilir olmasını veya olmamasını sağlayan değerdir.
* content: Yorumun içeriğini belirtir.
* created: Yorumun oluşturulma zamanını belirtir. JSON formatlı tarih değeri içermelidir. Örn. "2020-12-31T20:52:00Z"
* fullName: Yorumu yapan kullanıcının adını içerir.
