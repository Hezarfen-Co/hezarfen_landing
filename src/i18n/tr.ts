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
 *
 * Voice: plain, confident Istanbul Turkish, addressed to a school director.
 * Short sentences, active verbs, "siz" when speaking to the reader, and no
 * calques from English product copy ("çıktı", "zemin", "omurga" as filler).
 */
export const tr = {
  meta: {
    titleSuffix: "Hezarfen",
    /* Search results cut a title around 60 characters, so this one stays short
       and carries the terms kurum müdürleri actually search for; the longer
       promise lives in the hero, not in the tab. */
    homeTitle: "Hezarfen — Okul, kurs ve etüt merkezleri için tek platform",
    homeDescription:
      "Yoklama, sınav, ödev, not, mesajlaşma ve ödeme tek platformda. Sınav sonuçları soru soru kaydedilir; her öğrencinin eksiği görünür, haftalık planı öğretmen onayıyla hazırlanır.",
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
    demo: "Demo talep edin",
  },

  hero: {
    line1: "Okulunuzun verisinden",
    line2: "kişisel çalışma planı",
    lead: "Yoklama, sınav, ödev, not, mesajlaşma ve ödeme tek platformda. Sınav sonuçları soru soru kaydedildiği için her öğrencinin eksiği net görünür; haftalık planı da öğretmen onayıyla hazırlanır.",
    primary: "Demo talep edin",
    secondary: "Nasıl çalıştığını görün",
    note: "Kurulum, veri aktarımı ve rol bazlı eğitim dahildir",
    /** The hero's closing row: who sits in front of the platform. */
    roles: ["Yönetici", "Öğretmen", "Öğrenci", "Veli"],
  },

  problem: {
    label: "Neden Hezarfen",
    title: "Veri kurumda birikiyor ama öğrenciye plan olarak dönmüyor",
    description:
      "Kurumların çoğu yoklamayı, sınavı, ödevi, ders programını ve ödemeyi birbirinden kopuk araçlarla yürütüyor. Hezarfen, bu dört sorunu tek bir veri yapısı üzerinde çözmek için geliştirildi.",
    items: [
      {
        id: "dagnik-operasyon",
        title: "Dağınık iş akışı",
        description:
          "Yoklama, sınav, not, ödev, program, iletişim ve ödeme ayrı araçlarda yürüyor. Sonuç: aynı bilgiyi tekrar tekrar girmek, birbirini tutmayan kayıtlar ve kaybolan zaman.",
      },
      {
        id: "kisisellestirilemeyen-takip",
        title: "Kişiye özel takip yapılamıyor",
        description:
          "Rehber öğretmen her öğrenciye ayrı program hazırlayamıyor. Sınav, ödev ve çalışma verisi yan yana görülemediği için hedefe uygun bir plan da çıkmıyor.",
      },
      {
        id: "donuk-analiz",
        title: "Güncelliğini yitiren analiz",
        description:
          "Eski sonuçlar bugünkü performansın önüne geçiyor. Öğrenci bir konuda ilerlese bile sistem eski eksiği göstermeye devam ediyor.",
      },
      {
        id: "kanitsiz-cikti",
        title: "Dayanağı belli olmayan öneriler",
        description:
          "Neye dayandığı belli olmayan bir öneriyi kimse öğrenciye vermek istemez. Hezarfen'de her öneri kaynağını gösterir ve öğretmen onayından geçer.",
      },
    ],
  },

  products: {
    label: "Ürünler",
    title: "Tek veri yapısı, dört ürün",
    description:
      "Kurum yalnızca ihtiyaç duyduğu ürünü açar; dördü de aynı öğrenci verisiyle çalışır. Sınav soruları konu ve kazanım etiketiyle, cevaplar soru soru saklanır; diğer üç ürün de bu veriyi kullanır.",
    items: [
      {
        id: "hezarfen-platform",
        name: "Hezarfen Platform",
        tag: "Çekirdek",
        description:
          "Okulun günlük işlerini tek yerde toplar: rol yönetimi, dersler ve şubeler, yoklama, sınav ve soru bankası, ödev, not, mesajlaşma, randevu ve ödeme.",
        rows: [
          "Her soru konu ve kazanım etiketiyle saklanır",
          "Cevaplar öğrenci, soru ve seçenek bazında kaydedilir",
          "Kazanım raporu sınavın yapıldığı gün hazır olur",
        ],
        pills: ["Rol ve yetki", "Yoklama ve not", "Soru bankası", "Ödeme takibi"],
      },
      {
        id: "hezarfen-zeka",
        name: "Hezarfen Zekâ",
        tag: "Analiz ve plan",
        description:
          "Soru soru tutulan veriden öğrencinin hangi konuda ne durumda olduğunu çıkarır; haftalık çalışma planını buna göre hazırlar ve her yeni sınavla günceller. Yönetici için de çakışmasız bir ders programı taslağı oluşturur.",
        rows: [
          "Her öneri dayandığı soruyu, tarihi ve başarı oranını gösterir",
          "Plan, yeni veri geldikçe kendiliğinden güncellenir",
          "Öğretmenin düzeltmeleri kaydedilir ve sonraki önerilere yansır",
        ],
        pills: ["Kanıt paneli", "Haftalık plan", "Program taslağı", "Onay akışı"],
      },
      {
        id: "celebi",
        name: "Çelebi",
        tag: "Kullanım asistanı",
        description:
          "“Bu işlemi nereden yapıyorum?” sorusunu uygulamanın içinde yanıtlar ve kullanıcıyı doğru ekrana götürür. Kurumun yüklediği kaynaklardan özet çıkarır; her yanıt dayandığı bölüme bağlanır.",
        rows: [
          "Tek adımda doğru ekrana yönlendirir",
          "Her yanıt kaynağın ilgili bölümüne bağlanır",
          "Kullanıcının yetkisi dışındaki veriyi göstermez",
        ],
        pills: ["Role göre yanıt", "Kaynağa bağlı yanıt", "Kaynaklı özet", "İşlem kaydı"],
      },
      {
        id: "ses-atolyesi",
        name: "Ses Atölyesi",
        tag: "Sesli ders",
        description:
          "Ders PDF'lerini, kaynağına kadar takip edilebilen sesli derslere dönüştürür. Dinleme sırasında durup soru soran bölümler içerir; kalite kontrolünden geçmeyen bölüm yayımlanmaz.",
        rows: [
          "Her bölüm kaynaktaki sayfasına kadar takip edilebilir",
          "Konuyu pekiştirmek için “dur ve cevapla” anları eklenir",
          "Kalite eşiğini geçemeyen bölüm yayımlanmaz",
        ],
        pills: ["Kaynak takibi", "Pekiştirme soruları", "Kalite kontrolü", "Yerelde üretim"],
      },
    ],
    note: "Modüler yapı: Kurum yalnızca açtığı ürünü kullanır ve yalnızca onun ücretini öder. Mevcut sisteminizde eksik kalan tarafı tek bir modülle tamamlayabilirsiniz.",
  },

  platform: {
    label: "Platform modülleri",
    title: "Kurumun bütün işleyişi tek veri yapısında",
    description:
      "Rol yönetimi, dersler, sınav ve soru bankası, ödev, yoklama, not, takvim, mesajlaşma, randevu, ödeme ve yönetim panoları tek çatı altında. Herkes yalnızca yetkisi olan veriyi görür.",
    items: [
      { id: "roller", title: "Rol ve yetki", description: "Yönetici, öğretmen, öğrenci ve veli; her rol yalnızca yetkisi dahilindeki veriyi görür." },
      { id: "dersler", title: "Dersler ve program", description: "Öğretmen, derslik ve saat kısıtlarını hesaba katan, çakışmasız ders programı taslağı." },
      { id: "sinav", title: "Sınav ve soru bankası", description: "Her soru konu ve kazanım etiketi taşır; cevaplar soru soru saklanır." },
      { id: "yoklama", title: "Yoklama ve not", description: "Günlük devam ve değerlendirme kayıtları, karne dönemi beklenmeden görünür." },
      { id: "odev", title: "Ödev ve çalışma takibi", description: "Ödev, çalışma süresi ve hedefler bir arada; plana uyum ölçülebilir hâle gelir." },
      { id: "iletisim", title: "Mesajlaşma ve randevu", description: "Veli bilgilendirmeleri ve görüşme randevuları, kaydı tutulan tek bir kanalda." },
      { id: "odeme", title: "Ödeme ve tahsilat", description: "Ücret planı, taksit ve tahsilat takibi; geciken ödemeler yönetici panosunda görünür." },
      { id: "panolar", title: "Role özel panolar", description: "Müdür kurumun genel durumunu, öğretmen sınıfının eksiklerini, veli çocuğunun gelişimini görür." },
    ],
  },

  theory: {
    label: "Nasıl çalışır",
    title: "Sınav kâğıdından öğretmen onaylı plana dört adımda",
    description:
      "Sürecin hiçbir aşamasında öğretmen devre dışı kalmaz. Her adımın ölçülebilir bir karşılığı vardır: işlem süresi, programdaki çakışmalar, önerilerin kabul oranı ve plana uyum.",
    more: "Ayrıntılı şemayı inceleyin",
    steps: [
      {
        num: "Adım 1",
        title: "Veri soru soru toplanır",
        description:
          "Sınav, ödev, çalışma süresi ve hedefler aynı yapıda toplanır; her cevap soru ve seçenek bazında saklanır.",
      },
      {
        num: "Adım 2",
        title: "Analiz kanıta dayanır",
        description:
          "Konu bazında durum güncel veriyle çıkarılır; hedefe uygun plan hazırlanır ve her yeni sınavla yenilenir.",
      },
      {
        num: "Adım 3",
        title: "Öğretmen onaylar ya da düzeltir",
        description:
          "Öğrenciye gidecek her içerik öğretmenden geçer; yapılan düzeltmeler kaydedilir ve sonraki önerilere yansır.",
      },
      {
        num: "Adım 4",
        title: "Herkes kendi ekranında görür",
        description:
          "Öğrenci kendi planını, öğretmen sınıfının eksiklerini, veli çocuğunun gelişimini anlaşılır bir özetle görür.",
      },
    ],
  },

  roles: {
    label: "Roller",
    title: "Aynı veri, dört farklı ekran",
    description:
      "Hezarfen'i kullanan herkes, verinin kendi işine yarayan hâlini görür. Rolünüz hem neyi görebileceğinizi hem de sistemin size ne önereceğini belirler.",
    items: [
      {
        id: "yonetici",
        title: "Yönetici",
        description: "Kurumun tek panosu: yoklama, tahsilat, çakışmasız program taslağı ve sınıf-konu özetleri.",
      },
      {
        id: "ogretmen",
        title: "Öğretmen",
        description: "Sınavın yapıldığı gün kazanım raporu, kaynaktan soru taslağı ve kendi onayından geçen planlar.",
      },
      {
        id: "ogrenci",
        title: "Öğrenci",
        description: "Neye, neden ve ne kadar çalışacağını gösteren güncel bir plan; kaynak özeti ve sesli ders.",
      },
      {
        id: "veli",
        title: "Veli",
        description: "Karne dönemini beklemeden anlaşılır bir gelişim özeti, duyurular ve görüşme randevusu.",
      },
    ],
  },

  trust: {
    label: "Güven ve uyum",
    title: "Kanıt sunan, sınırlarını bilen bir sistem",
    description:
      "Öğrenci verisi hassas bir veridir. Bu yüzden Hezarfen kaynağa dayanarak çalışır, yetki sınırlarının dışına çıkmaz ve son kararı her zaman insana bırakır.",
    items: [
      { id: "kanit", title: "Her öneri kanıtıyla gelir", description: "Bir öneri hangi soruya, hangi tarihe ve hangi başarı oranına dayandığını açıkça gösterir." },
      { id: "kaynak", title: "Kaynakta olmayanı uydurmaz", description: "Özet ve soru taslakları yalnızca kurumun yüklediği kaynaklardan üretilir; yanıt ilgili bölüme bağlanır." },
      { id: "onay", title: "Her içerik onaydan geçer", description: "Öğrenciye giden içerik öğretmen onayından geçer; yapılan düzeltmeler kayıt altına alınır." },
      { id: "yetki", title: "Rol bazlı erişim", description: "Asistan da kullanıcının yetkisiyle çalışır; yetki dışındaki veriyi ne gösterir ne de özetler." },
      { id: "kvkk", title: "KVKK gözetilerek tasarlandı", description: "Veri envanteri, saklama süreleri ve erişim yetkileri tanımlıdır; çocuklara ait veriler ayrıca özenle işlenir." },
      { id: "yerel", title: "Yerelde üretim", description: "Sesli dersler yerelde üretilir; içerik kalite kontrolünden geçmeden yayımlanmaz." },
    ],
  },

  audience: {
    label: "Kimler için",
    title: "Önce kurumlar, ardından öğrenciler",
    description:
      "Hezarfen kurumla sözleşme yapar ve kurumun mevcut işleyişine göre kurulur. Bireysel kullanım, kurumsal sürümün öğrenciye yönelik tarafından doğar.",
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
        description: "150–600 öğrencili K-12 okulları ve küçük okul zincirleri. Yönetim, öğrenci analizi ve kişiselleştirme modülleriyle birebir örtüşür.",
      },
      {
        id: "ogrenciler",
        tag: "Bireysel",
        title: "LGS ve YKS öğrencileri",
        description: "Kişisel çalışma planı, kaynak özeti ve sesli içerik; web ve mobilde. Kurum yönetimi özellikleri bu sürümde yer almaz.",
      },
    ],
  },

  about: {
    label: "Hakkımızda",
    title: "Hezarfen, okulda biriken veriyi öğrenmeye dönüştürür",
    description:
      "Her öğrencinin farklı öğrendiği gerçeğinden yola çıkıyoruz. Kurumların günlük verisini kişiye özel öğrenme yollarına dönüştürüyoruz; ölçülebilir, denetlenebilir ve öğretmenin kararını merkeze alan bir sistemle.",
    paragraphs: [
      "Hezarfen; okul, kurs ve etüt merkezlerinin akademik, idari ve mali süreçlerini tek merkezde toplayan, rol bazlı bir eğitim yönetim platformudur. Sınav soruları konu ve kazanım etiketiyle, cevaplar soru soru saklandığı için kurumda biriken veri bir rapor olmaktan çıkar: öğrencinin neye, neden ve ne kadar çalışması gerektiğini gösteren bir plana dönüşür.",
      "Analiz ve içerik üretimi kaynağa dayanır. Kişisel çalışma planı, kaynak özeti, ders programı taslağı, öğretmen denetiminde hazırlanan sorular ve sesli dersler; hepsi kurumun kendi verisinden ve yüklediği kaynaklardan üretilir. Öğrenciye gidecek hiçbir içerik öğretmen onayı olmadan yayımlanmaz.",
      "İlk kurulumları ve eğitimleri yüz yüze yürütüyoruz. Türkçe içerik ve MEB süreçleriyle uyum, sonradan eklenmiş bir özellik değil; ürünü baştan bunun üzerine kurduk.",
    ],
    builder: {
      title: "Dizey Lab tarafından geliştiriliyor",
      description:
        "Hezarfen'in mühendisliğini, veri altyapısı ve web platformları üzerine çalışan Dizey Lab yürütüyor.",
      linkLabel: "dizey.sh",
    },
    facts: [
      { value: "4", label: "ürün, tek veri yapısı: Platform, Hezarfen Zekâ, Çelebi ve Ses Atölyesi." },
      { value: "4", label: "rol: yönetici, öğretmen, öğrenci ve veli; her biri kendi yetkisiyle." },
      { value: "TR", label: "Türkçe içerik, MEB süreçleriyle uyum ve yüz yüze kurulum desteği." },
    ],
  },

  faq: {
    label: "Sık sorulanlar",
    title: "Kurum müdürlerinin ilk sorduğu altı soru",
    description: "Buradaki yanıtlar demo görüşmesinin kısa bir özeti. Kurumunuza özel soruları görüşmede, kendi verinizle konuşuyoruz.",
    items: [
      {
        q: "Fiyatlandırma nasıl belirleniyor?",
        a: "Lisans, kurumla yapılan yıllık sözleşmeyle ve öğrenci sayısına göre veriliyor; yalnızca açtığınız ürünlerin ücretini ödersiniz. Kurumunuza özel teklifi demo görüşmesinde paylaşıyoruz. Kurulum, veri aktarımı ve rol bazlı eğitim sözleşmeye dahildir.",
      },
      {
        q: "Şu an kullandığımız yazılımı bırakmamız gerekiyor mu?",
        a: "Hayır. Modüler yapı sayesinde mevcut sisteminizde eksik kalan tarafı tek bir modülle tamamlayabilirsiniz. Kullanım oturduktan sonra diğer ürünler de aynı veri yapısına bağlanır.",
      },
      {
        q: "Verilerimiz nerede tutuluyor, KVKK açısından durum ne?",
        a: "Erişim rol bazlıdır; hangi veriyi kimin, hangi amaçla gördüğü ve ne kadar süre saklandığı tanımlıdır. Öğrenci verileri çocuklara ait veri olarak ayrıca özenle işlenir ve genel amaçlı yapay zekâ modellerinin eğitiminde kullanılmaz.",
      },
      {
        q: "Üretilen içeriğe güvenebilir miyiz?",
        a: "Özet ve soru taslakları yalnızca kurumun yüklediği kaynaklardan üretilir ve her yanıt dayandığı bölüme bağlanır. Öğrenciye gidecek içerik öğretmen onayından geçer; onaylar ve düzeltmeler kayıt altına alınır.",
      },
      {
        q: "Öğretmenlerimiz sistemi ne kadar sürede öğrenir?",
        a: "Rol bazlı eğitim kurulumun bir parçası. Çelebi de “Bu işlemi nereden yapıyorum?” sorusunu uygulamanın içinde yanıtlayıp kullanıcıyı doğru ekrana götürür. İlk 30, 60 ve 90. günlerde kullanımı sizinle birlikte değerlendiriyoruz.",
      },
      {
        q: "Demo ve pilot süreci nasıl başlıyor?",
        a: "Önce 20 dakikalık bir ihtiyaç görüşmesi yapıyoruz, ardından kurumunuzun gerçek iş akışına göre hazırlanmış bir demo gösteriyoruz. Uygun görürseniz bir dönemlik pilotta başlangıç değerlerini ölçüyor, dönem sonunda öncesi ve sonrası raporunu birlikte değerlendiriyoruz.",
      },
    ],
  },

  cta: {
    label: "İletişim",
    title: "Kurumunuzun kendi iş akışıyla hazırlanmış bir demo",
    subtitle:
      "20 dakikalık bir ihtiyaç görüşmesiyle başlıyoruz. Demoyu kurumunuzun işleyişine göre hazırlıyoruz; isterseniz ardından bir dönemlik pilotla sonuçları birlikte ölçüyoruz.",
    panelTitle: "Bize 20 dakikanızı ayırın, gerisini birlikte planlayalım",

    secondary: "Pilot sürecini sorun",
    subject: "Hezarfen demo talebi",
    pilotSubject: "Hezarfen pilot görüşmesi",
    journey: [
      { step: "1", title: "İhtiyaç görüşmesi", description: "20 dakika: kurumun işleyişi, kullandığı araçlar ve en çok zaman alan işler." },
      { step: "2", title: "Kurumunuza özel demo", description: "Aynı verinin dört üründe nasıl işe yaradığını, kendi iş akışınız üzerinden gösteriyoruz." },
      { step: "3", title: "Bir dönemlik pilot", description: "Başlangıç değerleri ölçülür; kullanım, önerilerin kabul oranı ve plana uyum takip edilir." },
      { step: "4", title: "Kurulum ve destek", description: "Veri aktarımı, rol bazlı eğitim ve 30, 60, 90. günlerde kullanım değerlendirmesi." },
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
    title: "Aradığınız sayfa bulunamadı",
    subtitle: "Sayfa taşınmış ya da hiç var olmamış olabilir. Ana sayfadan devam edebilirsiniz.",
    action: "Ana sayfaya dönün",
  },
} as const;
