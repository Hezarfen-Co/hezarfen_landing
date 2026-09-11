/**
 * Every string on the site, in one place.
 *
 * This is a product page, not a business plan: it says what Hezarfen does for
 * a kurum, who it is for, and how a demo starts. Prices, market sizing,
 * funding and the founders' CVs deliberately live nowhere on it — a müdür
 * reading this wants to know whether the thing works, and the number comes
 * from a conversation rather than from a table.
 *
 * Labels are written in sentence case: the page is quiet, and a row of
 * shouted eyebrow labels is the first thing that stops it being.
 */
export const tr = {
  meta: {
    titleSuffix: "Hezarfen",
    /* Search results cut a title around 60 characters, so this one stays short
       and carries the terms kurum müdürleri actually search for; the longer
       promise lives in the hero, not in the tab. */
    homeTitle: "Hezarfen — Okul, kurs ve etüt merkezleri için tek platform",
    homeDescription:
      "Yoklama, sınav, ödev, not, mesajlaşma ve ödeme tek yerde. Sınav sonucu soru soru kaydedildiği için her öğrencinin eksiği ve haftalık planı öğretmen onayıyla çıkar.",
  },

  nav: {
    home: "Ana sayfa",
    menu: "Menü",
    close: "Kapat",
    problem: "Neden Hezarfen",
    products: "Ürünler",
    platform: "Modüller",
    theory: "Nasıl çalışır",
    roles: "Roller",
    trust: "Güven",
    audience: "Kimler için",
    about: "Hakkımızda",
    faq: "SSS",
    contact: "İletişim",
    demo: "Demo talep et",
  },

  hero: {
    line1: "Okulun verisinden",
    line2: "kişisel çalışma planı",
    lead: "Yoklama, sınav, ödev, not, mesajlaşma ve ödeme tek yerde. Sınav sonucu soru soru kaydedildiği için her öğrencinin eksiği görünür olur ve haftalık planı öğretmen onayıyla çıkar.",
    primary: "Demo talep et",
    secondary: "Nasıl çalıştığını gör",
    note: "Kurulum, veri aktarımı ve rol bazlı eğitim dahil",
    /** The hero's closing row: who sits in front of the platform. */
    roles: ["Yönetici", "Öğretmen", "Öğrenci", "Veli"],
  },

  problem: {
    label: "Neden Hezarfen",
    title: "Veri kurumda var; öğrenciye dönen bir plana dönüşmüyor",
    description:
      "Kurumların çoğu yoklamayı, sınavı, ödevi, ders programını ve ödemeyi birbirinden kopuk araçlarda yönetiyor. Hezarfen bu dört sorunu tek veri yapısında çözmek için kuruldu.",
    items: [
      {
        id: "dagnik-operasyon",
        title: "Dağınık operasyon",
        description:
          "Yoklama, sınav, not, ödev, program, iletişim ve ödeme farklı araçlarda yürüyor. Sonuç: tekrar veri girişi, tutarsız kayıt ve zaman kaybı.",
      },
      {
        id: "kisisellestirilemeyen-takip",
        title: "Kişiselleştirilemeyen takip",
        description:
          "Rehber öğretmen her öğrenciye ayrı program hazırlayamıyor; sınav, ödev ve çalışma verisi bir arada görülemediği için hedefe uygun plan çıkmıyor.",
      },
      {
        id: "donuk-analiz",
        title: "Donuk analiz",
        description:
          "Geçmiş veri güncel performansı bastırıyor; öğrenci bir konuda gelişse bile sistem eski eksiği göstermeye devam ediyor.",
      },
      {
        id: "kanitsiz-cikti",
        title: "Kanıtsız çıktı",
        description:
          "Bir önerinin neye dayandığı belirsizse kimse onu öğrenciye vermek istemiyor. Hezarfen'de her çıktı kaynağını gösterir ve onaydan geçer.",
      },
    ],
  },

  products: {
    label: "Ürünler",
    title: "Tek veri omurgası, dört ürün",
    description:
      "Kurum yalnızca ihtiyaç duyduğu ürünü açar; dördü de aynı öğrenci verisi üzerinde çalışır. Sınav sorusu konu ve kazanım etiketiyle, cevaplar soru soru saklanır; diğer üç ürün bu zemini kullanır.",
    items: [
      {
        id: "hezarfen-platform",
        name: "Hezarfen Platform",
        tag: "Çekirdek",
        description:
          "Okulun günlük işini tek yerde toplar: rol yönetimi, ders ve sınıflar, yoklama, sınav ve soru bankası, ödev, not, mesajlaşma, randevu ve ödeme.",
        rows: [
          "Her soru konu ve kazanım etiketiyle saklanır",
          "Cevaplar öğrenci, soru ve seçenek düzeyinde kaydedilir",
          "Kazanım raporu sınavla aynı gün hazır olur",
        ],
        pills: ["Rol ve yetki", "Yoklama ve not", "Soru bankası", "Ödeme takibi"],
      },
      {
        id: "hezarfen-zeka",
        name: "Hezarfen Zekâ",
        tag: "Analiz ve plan",
        description:
          "Soru soru tutulan veriden öğrencinin konu yetkinliği çıkar; haftalık çalışma planı buna göre üretilir ve yeni sınav geldikçe kendini günceller. Yönetici için çakışmasız ders çizelgesi taslağı hazırlar.",
        rows: [
          "Her öneri soru, tarih ve başarı oranı kanıtı taşır",
          "Plan yeni veri geldikçe kendini günceller",
          "Öğretmenin düzeltmesi kaydedilir ve sonraki öneriyi iyileştirir",
        ],
        pills: ["Kanıt paneli", "Haftalık plan", "Çizelge taslağı", "Onay döngüsü"],
      },
      {
        id: "celebi",
        name: "Çelebi",
        tag: "Kullanım asistanı",
        description:
          "“Bu işlem nerede yapılır?” sorusunu sistem içinde yanıtlar ve kullanıcıyı doğru ekrana götürür. Kurumun yüklediği kaynaklardan özet çıkarır; her yanıt dayandığı bölüme bağlanır.",
        rows: [
          "Doğru ekrana tek adımda yönlendirir",
          "Yanıt, kaynağın ilgili bölümüne bağlanır",
          "Kullanıcının yetkisi dışındaki veriyi göstermez",
        ],
        pills: ["Rol farkındalığı", "Kaynağa bağlı yanıt", "Kanıtlı özet", "Denetim kaydı"],
      },
      {
        id: "ses-atolyesi",
        name: "Ses Atölyesi",
        tag: "Sesli ders",
        description:
          "Ders PDF'ini kaynağına izlenebilir sesli derse dönüştürür; dinlerken duran ve soru soran noktalar içerir. Kalite kontrolünden geçmeyen bölüm yayımlanmaz.",
        rows: [
          "Her bölüm kaynak sayfasına kadar izlenebilir",
          "Hatırlama pratiği için DUR-CEVAPLA noktaları eklenir",
          "Kalite eşiğini geçmeyen bölüm yayımdan engellenir",
        ],
        pills: ["Kaynak izleme", "Hatırlama pratiği", "Kalite kontrolü", "Yerelde üretim"],
      },
    ],
    note: "Modüler yapı: kurum yalnızca açtığı ürünü kullanır ve yalnızca onun bedelini öder. Mevcut sisteminizin eksik kalan tarafını tek modülle tamamlayabilirsiniz.",
  },

  platform: {
    label: "Platform modülleri",
    title: "Kurum operasyonu tek veri yapısında",
    description:
      "Rol yönetimi, dersler, sınav ve soru bankası, ödev, yoklama, not, takvim, mesajlaşma, randevu, ödeme ve yönetim panoları aynı yerde buluşur. Herkes yalnızca yetkisi olan veriyi görür.",
    items: [
      { id: "roller", title: "Rol ve yetki", description: "Yönetici, öğretmen, öğrenci ve veli; her rol yalnızca yetkisi olan veriyi görür." },
      { id: "dersler", title: "Dersler ve çizelge", description: "Öğretmen, derslik ve saat kısıtlarını gözeten çakışmasız ders programı taslağı." },
      { id: "sinav", title: "Sınav ve soru bankası", description: "Her soru konu ve kazanım etiketli; cevaplar soru soru saklanır." },
      { id: "yoklama", title: "Yoklama ve not", description: "Günlük devam ve değerlendirme kayıtları, karne dönemini beklemeden görünür." },
      { id: "odev", title: "Ödev ve çalışma takibi", description: "Ödev, çalışma süresi ve hedefler; plana uyum ölçülebilir hâle gelir." },
      { id: "iletisim", title: "Mesajlaşma ve randevu", description: "Veli bilgilendirme ve görüşme randevusu, kaydı tutulan tek kanalda." },
      { id: "odeme", title: "Ödeme ve tahsilat", description: "Ücret planı, taksit ve tahsilat takibi; yönetici panosunda gecikme görünürlüğü." },
      { id: "panolar", title: "Rol bazlı panolar", description: "Müdür kurumun durumunu, öğretmen sınıfının eksiğini, veli gelişimi görür." },
    ],
  },

  theory: {
    label: "Nasıl çalışır",
    title: "Sınav kâğıdından öğretmen onaylı plana dört adım",
    description:
      "Zincirin hiçbir halkası öğretmeni devre dışı bırakmaz. Her adımın ölçülebilir bir karşılığı var: işlem süresi, program çakışması, önerilerin kabul oranı ve plana uyum.",
    steps: [
      {
        num: "Adım 1",
        title: "Veri soru soru toplanır",
        description:
          "Sınav, ödev, çalışma süresi ve hedefler aynı yapıda toplanır; her cevap soru ve seçenek düzeyinde saklanır.",
      },
      {
        num: "Adım 2",
        title: "Analiz kanıta bağlanır",
        description:
          "Konu yetkinliği güncel veriyle çıkar; hedefe uygun plan üretilir ve yeni sınav geldikçe plan yenilenir.",
      },
      {
        num: "Adım 3",
        title: "Öğretmen onaylar ya da düzeltir",
        description:
          "Öğrenciye gidecek çıktı öğretmenden geçer; düzeltmeler kaydedilir ve sonraki öneriyi iyileştirir.",
      },
      {
        num: "Adım 4",
        title: "Herkes kendi ekranında görür",
        description:
          "Öğrenci planını, öğretmen sınıfının eksiğini, veli anlaşılır gelişim görünümünü görür.",
      },
    ],
  },

  roles: {
    label: "Roller",
    title: "Aynı veri, dört farklı ekran",
    description:
      "Hezarfen'i kullanan herkes kendi işine dönüşmüş hâlini görür. Rol, hem neyi görebileceğinizi hem de sistemin size ne önereceğini belirler.",
    items: [
      {
        id: "yonetici",
        title: "Yönetici",
        description: "Kurumun tek panosu: yoklama, tahsilat, çakışmasız çizelge taslağı ve sınıf-konu özetleri.",
      },
      {
        id: "ogretmen",
        title: "Öğretmen",
        description: "Sınavla aynı gün kazanım raporu, kaynaktan soru taslağı ve onaydan geçirdiği planlar.",
      },
      {
        id: "ogrenci",
        title: "Öğrenci",
        description: "Neye, neden ve ne kadar çalışacağını gösteren güncel plan; kaynak özeti ve sesli ders.",
      },
      {
        id: "veli",
        title: "Veli",
        description: "Karne dönemini beklemeden anlaşılır gelişim görünümü, duyurular ve görüşme randevusu.",
      },
    ],
  },

  trust: {
    label: "Güven ve uyum",
    title: "Kanıt gösteren, sınırını bilen bir sistem",
    description:
      "Öğrenci verisi hassas veri. Hezarfen bu yüzden kaynağa bağlı çalışır, yetkinin dışına çıkmaz ve kararı insana bırakır.",
    items: [
      { id: "kanit", title: "Her öneri kanıtıyla gelir", description: "Bir öneri hangi soruya, hangi tarihe ve hangi başarı oranına dayandığını gösterir." },
      { id: "kaynak", title: "Kaynakta yoksa uydurmaz", description: "Özet ve soru taslağı yalnızca kurumun yüklediği kaynaktan üretilir; yanıt ilgili bölüme bağlanır." },
      { id: "onay", title: "Çıktı onaya tabi", description: "Öğrenciye giden içerik öğretmen onayından geçer; düzeltme kaydı tutulur." },
      { id: "yetki", title: "Rol bazlı erişim", description: "Asistan da kullanıcının yetkisiyle çalışır; yetki dışındaki veriyi ne gösterir ne de özetler." },
      { id: "kvkk", title: "KVKK uyumu gözetilerek", description: "Veri envanteri, saklama süreleri ve erişen roller tanımlı; çocuk verisi için ek özen." },
      { id: "yerel", title: "Yerelde üretim", description: "Sesli ders üretimi yerelde yapılır; içerik kalite kontrolünden geçmeden yayımlanmaz." },
    ],
  },

  audience: {
    label: "Kimler için",
    title: "Kurum önce açar, öğrenci sonra devam eder",
    description:
      "Hezarfen kurumla sözleşme yapar ve kurumun akışına kurulur. Bireysel kullanım, kurumsal sürümün öğrenciye dönük tarafından doğar.",
    items: [
      {
        id: "kurslar",
        tag: "İlk odak",
        title: "Kurslar ve etüt merkezleri",
        description: "Sınav, yoklama, takip, program, ödeme ve veli iletişimini aynı anda yürüten kurumlar. Kurulum ve eğitim yüz yüze destekle yapılır.",
      },
      {
        id: "okullar",
        tag: "Kurumsal",
        title: "Özel okullar",
        description: "150–600 öğrencili K–12 kurumları ve küçük okul zincirleri; yönetim, öğrenci analizi ve kişiselleştirme modülleriyle güçlü uyum.",
      },
      {
        id: "ogrenciler",
        tag: "Bireysel",
        title: "LGS ve YKS öğrencileri",
        description: "Kişisel çalışma planı, kaynak özeti ve sesli içerik; web ve mobil. Kurum yönetimi işlevleri bu kapsamda değildir.",
      },
    ],
  },

  about: {
    label: "Hakkımızda",
    title: "Hezarfen, okul verisini öğrenme değerine çeviren bir üründür",
    description:
      "Her öğrencinin aynı şekilde öğrenmediği gerçeğinden hareketle kurumların günlük verilerini kişiselleştirilmiş öğrenme yollarına dönüştürüyoruz; ölçülebilir, denetlenebilir ve öğretmenin kararını merkeze alan bir sistemle.",
    paragraphs: [
      "Hezarfen; okul, kurs ve etüt merkezlerinin akademik, idari ve finansal süreçlerini tek merkezde birleştiren rol tabanlı bir eğitim yönetim platformudur. Sınav sorusu konu ve kazanım etiketiyle, cevaplar soru soru saklandığı için kurumda biriken veri raporun ötesine geçer: öğrencinin neye, neden ve ne kadar çalışması gerektiğini gösteren bir plana dönüşür.",
      "Analiz ve içerik üretimi kaynağa bağlı çalışır. Kişisel çalışma planı, kaynak özeti, ders çizelgesi taslağı, öğretmen denetimindeki soru üretimi ve sesli ders içeriği; hepsi kurumun kendi verisinden ve kendi yüklediği kaynaklardan üretilir. Öğrenciye gidecek hiçbir çıktı öğretmen onayı olmadan yayımlanmaz.",
      "Ürün Kayseri'de geliştiriliyor; ilk kurulumlar ve eğitimler yüz yüze destekle yürütülüyor. Türkçe içerik ve MEB süreçlerine uyum sonradan eklenen bir özellik değil, ürünün başlangıç kabulü.",
    ],
    builder: {
      title: "Dizey Lab tarafından geliştiriliyor",
      description:
        "Hezarfen'in mühendisliği, veri altyapısı ve web platformları üzerine çalışan Dizey Lab tarafından yürütülüyor.",
      linkLabel: "dizey.sh",
    },
    facts: [
      { value: "4", label: "ürün, tek veri omurgası: Platform, Hezarfen Zekâ, Çelebi ve Ses Atölyesi." },
      { value: "4", label: "rol: yönetici, öğretmen, öğrenci ve veli — her biri kendi yetkisiyle." },
      { value: "TR", label: "Türkçe içerik, MEB süreçlerine uyum ve yüz yüze kurulum desteği." },
    ],
  },

  faq: {
    label: "Sık sorulanlar",
    title: "Kurum müdürlerinin ilk sorduğu altı şey",
    description: "Aşağıdaki yanıtlar demo görüşmesinin kısa hâli. Kurumunuza özel soruları görüşmede, kendi verinizle konuşuyoruz.",
    items: [
      {
        q: "Fiyatlandırma nasıl işliyor?",
        a: "Lisans, kurumla yapılan yıllık sözleşmeyle ve öğrenci sayısı üzerinden veriliyor; yalnızca açtığınız ürünün bedelini ödersiniz. Kurumunuza özel teklifi demo görüşmesinde konuşuyoruz. Kurulum, veri aktarımı ve rol bazlı eğitim sözleşme kapsamında.",
      },
      {
        q: "Mevcut yazılımımızı bırakmak zorunda mıyız?",
        a: "Hayır. Modüler yapı, mevcut sisteminizin eksik kalan tarafını tek modülle tamamlamanıza izin verir. Kullanım oturduktan sonra diğer ürünler aynı veri omurgasına bağlanır.",
      },
      {
        q: "Verilerimiz nerede duruyor, KVKK tarafı ne oluyor?",
        a: "Erişim rol bazlıdır; kim hangi veriyi hangi amaçla görüyor ve ne kadar saklanıyor, hepsi tanımlıdır. Öğrenci verisi çocuk verisi olarak ek özenle işlenir ve genel amaçlı model eğitimi için kullanılmaz.",
      },
      {
        q: "Üretilen içeriğe güvenebilir miyiz?",
        a: "Özet ve soru taslağı yalnızca kurumun yüklediği kaynaktan üretilir ve yanıt dayandığı bölüme bağlanır. Öğrenciye gidecek içerik öğretmen onayından geçer; onay ve düzeltmeler kayda alınır.",
      },
      {
        q: "Öğretmenlerimizin öğrenmesi ne kadar sürer?",
        a: "Rol bazlı eğitim kurulumun parçası; Çelebi asistanı ise “bu işlem nerede yapılır?” sorusunu sistem içinde yanıtlayıp kullanıcıyı doğru ekrana götürür. İlk 30, 60 ve 90 günde kullanımı birlikte gözden geçiriyoruz.",
      },
      {
        q: "Demo ve pilot nasıl başlıyor?",
        a: "20 dakikalık ihtiyaç görüşmesi, ardından kurumunuzun gerçek iş akışıyla senaryolaştırılmış demo. Uygun görürseniz bir dönemlik pilotta başlangıç değerlerini ölçüyor, sonunda önce/sonra raporunu birlikte okuyoruz.",
      },
    ],
  },

  cta: {
    label: "İletişim",
    title: "Kurumunuzun gerçek iş akışıyla senaryolaştırılmış demo",
    subtitle:
      "20 dakikalık ihtiyaç görüşmesiyle başlıyoruz; demo kurumunuzun kendi akışına göre kurulur, ardından isterseniz bir dönemlik pilotta sonuçları birlikte ölçüyoruz.",
    panelTitle: "Kurumunuz için 20 dakika ayırın, gerisini birlikte planlayalım",
    panelSubtitle: "Demo kaydı ya da yüz yüze görüşme; Kayseri ve Niğde'de yerinde destek veriyoruz.",
    secondary: "Pilot sürecini sor",
    subject: "Hezarfen demo talebi",
    pilotSubject: "Hezarfen pilot görüşmesi",
    journey: [
      { step: "1", title: "İhtiyaç görüşmesi", description: "20 dakika: kurumun akışı, kullandığı araçlar ve en çok zaman kaybettiren adımlar." },
      { step: "2", title: "Kuruma özel demo", description: "Aynı verinin dört üründe nasıl değere döndüğü, sizin iş akışınızla gösterilir." },
      { step: "3", title: "Bir dönemlik pilot", description: "Başlangıç değerleri alınır; kullanım, önerilerin kabul oranı ve plana uyum izlenir." },
      { step: "4", title: "Kurulum ve destek", description: "Veri aktarımı, rol bazlı eğitim ve 30-60-90 gün kullanım gözden geçirmesi." },
    ],
  },

  footer: {
    tagline: "Okul, kurs ve etüt merkezleri için eğitim yönetim platformu.",
    sections: {
      product: "Ürün",
      company: "Kurum",
      contact: "İletişim",
    },
    rights: "Tüm hakları saklıdır.",
    builtBy: "Dizey Lab tarafından geliştiriliyor",
  },

  notFound: {
    title: "Bu sayfa yok",
    subtitle: "Aradığınız bölüm taşınmış ya da hiç var olmamış olabilir. Ana sayfadan devam edebilirsiniz.",
    action: "Ana sayfaya dön",
  },
} as const;
