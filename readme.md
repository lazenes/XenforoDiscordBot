1.Adım(Botu Oluşturma-Sunucuya Ekleme)
https://discord.com/developers/applications Adresine gidin ve Hesabınza Oturum açın ardından 
Sağ Üst Köşede bulunan "NEW APPLICATION" butonuna tıklayın ve açılan pencereye botunuzun  Adını "*NAME" Yazan alana girin
Botunuza bir Avatar Ekleyin ve Bilgilerini doldurun ardından soldaki menüden  "Bot" seçeneğine gelin
"Build-A-Bot" yazısının  sağındaki "ADD BOT" Butonuna tıklayın  gelen uyarıyı "Yes,do it!" butonuna tıklayarak onaylayın 
Ardından Botunuzun Yetkileri için Aynı sayfanın aşağısında bulunan "Bot Permissions" kısmından "TEXT PERMISSIONS" sütününun tamamını işaretleyin
ve sayfayı yukarı kaydırarak  "Token" yazısı altındaki "Copy" Butonuna tıklayarak Token keyinizi kopyalayın 
Kopyalamış olduğunuz Token keyinizi bu depoda bulunan ayarlar.json içerisindeki token array anahtarıan ekleyin ardından  tekrar 
https://discord.com/developers/applications sayfasıan gidin ve oluşturduğunuz bota tıklayın botumuzun  bilgileri ekrana gelecek
şimdi hazırladığımız botu sunucumuza davet etmeliyiz bunun için
https://discord.com/oauth2/authorize?client_id={BOTID}&scope=bot&permissions=2080767167
Bağlantısında {BOTID} Yazan kısmı botumuzun  bilgileri ekranından
"APPLICATION ID" yazısı altındaki Kodu kopyalarak burdaki bağlantıda bulunan {BOTID} kısmı ile değiştirin
Gelen Pencereden Botunuzu ekleyeceğiniz Sunucuyu  seçin ve ilerleyin artık Botunuzun ismi Sunucunuzda çıkması gerekmekter sunucunuzda  botu görüyorsanız  
sırada sizin IDnizi bota eklemye geldi Bu github Deposunda bulunan ayarlar.json dosyasını tekrar açın ve bekleyin
2.Adım(
Bilgisayarınızda Discord Uygulaması yoksa yükleyin ardından Sol atl kısımda  avatarınzın  yanında Bulunan çark işaretine(Kullanıcı Ayarları) tıklayın ve açılan seçeneklerden  "Gelişmiş" i 
seçin Geliştirici Görünümünü Açın Sunucunuzda  Kendi Kullanıcı Adınıza Sağ tıklayın ve IDnizi kopyalarayak ayarlar.json daki "sahip" array anahtarına ekleyin ardından kaydedin ve 
prefix anahtarına  Botunuzun komutunu hangi ön ekle çalıştıracağınızı tanımlayın "+","!" vs Örneğin sohbete "+Yardım"
yazarsanız sizin için kendi yardım dökümalarını çağırıp ekrana basar  Botumuzun son ama en önemli ayarı Xenforo Sitenize  Yüklediğiniz  dcbot.php(https://xenforo.gen.tr/konular/discord-sunucunuz-icin-json-son-konular-botu-yapin.11450/#post-66309) dosyasını  komutlar/konular.js
 içerisindeki const data = await fetch("https://sinnerclownceviri.com/dcbot.php")  Url Kısmna ekleyin  ve sunucunuzda botunuzu test edebilrisiniz tüm adımları  düzgün bir şekilde yaptıysanız sorun yaşamayacaksınız. 
 
