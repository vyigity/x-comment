# X-COMMENT JQUERY PLUGIN

With x-comment, users' comments can be displayed hierarchically and users can respond to each other. There is no level limit while answering. x-comment allows adding new comments, reply to comments, and runs entirely on json and javascript objects.

Website:

http://vyigity.blogspot.com/2021/01/x-comment-jquery-plugin.html

Dependency

* Jquery
* Bootstrap
* Fontawesome
* Globalize

Configuration- Plugin

* mode: Can be set as "array" or "remote". With "array" value, data is processed locally by using the javascript array given to the extension. This method can be used for batch input and output operations. The data is accessed by running the function that returns Jquery Deferred in the dataSource field with "remote" value. (required)
* items: In "array" mode, data is given to the extension here. Also, after the data is loaded in "remote" mode, it can be read as a javascript array.(required in array mode)
* dataSource: Can be set as a function that returns a jquery Deferred object. Data is obtained by running this function by the plugin. Data must be sent as parameter to promise resolve function.(required in remote mode)
* authorName: The name written here is used by the plugin when responding. (required)
* width: It allows the size of the plugin to be set to px. (optional)
* allowInsert: Can be set as "true/false". It allows to show the form that enables inserting. (optional - Default:true)
* allowReply: Can be set as "true/false". Ensures that comments can be answered or not. (optional - Default:true)
* allowDelete: Can be set as "true/false". Ensures that comments can be deleted or not. (optional - Default:true)
* onInserting: Can be set as a function that returns a jquery Deferred object. Is triggered when adding a new record.
    Parameters: 
        instance: Instance of plugin. For example, it can be used to access the items or the plugin can be refreshed.
        value: Value that is typed by user.
* onReplied: Can be set as a function that returns a jquery Deferred object. Is triggered when replying to a comment.
    Parameters: 
        instance: Instance of plugin. For example, it can be used to access the items or the plugin can be refreshed.
        value: Value that is typed by user.
        item: Comment that is answered to.
* onDeleting: Can be set as a function that returns a jquery Deferred object. Is triggered  when deleting a comment.
    Parameters: 
        instance: Instance of plugin. For example, it can be used to access the items or the plugin can be refreshed.
        item: Comment about to be deleted.
* onError: Is triggered on error that occurs in functions that return a jquery Deferred object. Deferred object must be used with reject function.
    Parameters: 
        data: The value sent through the reject function of the Deferred object.
* texts: Can be configured text in plugin. A javascript object. (optional)

Configuration - texts (optional)

* sendButtonText: Determines the text on the button in the new comment creation section.
* inputTextAreaPlaceHolder: Allows editing of placeholder that appears in comment text area.
* sendReplyButtonText: Determines the text on the reply send button.
* cancelButtonText: Determines the text on the button that enables the cancellation of the response..
* replyButtonText: Determines the text on the button that enables the answering process.
* deleteButtonText: Determines the text on the button that allows the comments to be deleted.

Configuration - items 

* id: A unique value of a comment item.
* parent: Parent value of a comment item.
* deletable: Can be set as "true/false". The value that indicates the comment that can be deleted or not.
* content: Content of a comment item.
* created: Creation date time of a comment item. Value must be formatted as JSON. For example, "2020-12-31T20:52:00Z"
* fullName: User name of owner of comment item.

# X-COMMENT JQUERY EKLENTİSİ

x-comment ile kullanıcıların yorumları birbirlerine yanıt verecek şekilde hiyerarşik olarak gösterilebilmektedir. Yanıtlamada seviye sınırı yoktur. x-comment yeni yorum eklenmesine, yorumların yanıtlanmasına olanak verir ve tamamen json ve javascript nesneleri üzerinden çalışır.

Website:

http://vyigity.blogspot.com/2021/01/x-comment-jquery-icin-yorum-tartsma.html

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
* dataSource: Jquery Deffered nesnesi döndüren bir fonksiyon içerebilir. Eklenti tarafından bu fonksiyon çalıştırılarak veri elde edilir. Veri promise nesnesinin resolve fonksiyonuna parametre olarak gönderilmelidir.(Remote modda zorunlu)
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
