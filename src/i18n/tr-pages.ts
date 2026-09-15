/**
 * Copy for the two standing pages: the diagram behind "nasıl çalıştığını gör"
 * and the form behind "demo talep et".
 *
 * It lives beside `tr.ts` rather than inside it so the landing page's copy
 * stays readable in one pass; `i18n/index.ts` merges the two into the single
 * `t` every component reads.
 */
export const trPages = {
  /** `/nasil-calisir` — the whole chain, drawn and annotated. */
  how: {
    metaTitle: "Nasıl çalışır — Hezarfen",
    metaDescription:
      "Sınav verisinden öğretmen onaylı kişisel çalışma planına: Hezarfen'in veri modelini, analiz sürecini, onay adımlarını ve her rolün gördüğü ekranı gösteren şema.",
    label: "Şema",
    title: "Bir sınav kâğıdı nasıl otuz ayrı çalışma planına dönüşür?",
    lead: "Ürünün tamamı aşağıdaki dört adımdan oluşur: Veri toplanır, analiz kanıta dayanır, öğretmen onaylar ve herkes kendi ekranında görür. Yeni bir sınav geldiğinde süreç baştan işler, plan da kendiliğinden güncellenir.",
    ctaPrimary: "Demo talep edin",
    ctaSecondary: "Ürünlere dönün",

    /** The animated pipeline. Four stages, then the loop back to analysis. */
    flowLabel: "Veri akışı",
    flowNote: "Yeni bir sınav, ödev ya da çalışma kaydı geldiğinde akış baştan işler; plan eski hâliyle kalmaz.",
    stages: [
      {
        id: "toplama",
        num: "01",
        title: "Toplama",
        subtitle: "Sınav · ödev · yoklama · çalışma süresi",
        description:
          "Kurumun günlük işleri zaten platformda yürüdüğü için veriyi ayrıca girmeniz gerekmez. Sınav hazırlanırken her soru konu ve kazanım etiketini alır; optik okuyucuyla ya da elle girilen cevaplar öğrenci, soru ve seçenek bazında saklanır.",
        bullets: [
          "Her soru bir konuya ve kazanım koduna bağlıdır",
          "Her cevapta hangi seçeneğin işaretlendiği tutulur",
          "Ödev, yoklama ve çalışma süresi aynı öğrenci kaydında toplanır",
        ],
      },
      {
        id: "analiz",
        num: "02",
        title: "Analiz",
        subtitle: "Konu hâkimiyeti · çeldirici eğilimi · güncellik",
        description:
          "Doğru sayısı tek başına pek bir şey söylemez; asıl önemli olan öğrencinin hangi konuda, hangi çeldiriciye ve ne zaman takıldığıdır. Öğrencinin konu hâkimiyeti soru bazındaki cevaplardan hesaplanır; güncel veri, eski sonuçlardan daha ağır basar.",
        bullets: [
          "Konu bazında doğruluk ve çeldirici eğilimi",
          "Zaman içindeki değişim: ilerleme kaydedilen konu eksik sayılmaz",
          "Sınıf ve şube bazında toplu görünüm",
        ],
      },
      {
        id: "plan",
        num: "03",
        title: "Plan ve onay",
        subtitle: "Haftalık program · kanıt · öğretmen kararı",
        description:
          "Analiz sonucuna ve öğrencinin hedefine göre haftalık çalışma programı hazırlanır. Program öğretmenin önüne dayanaklarıyla gelir: hangi soru, hangi tarih, hangi başarı oranı. Öğretmen onaylar ya da düzeltir; her düzeltme kayda geçer.",
        bullets: [
          "Her öneri dayandığı soru ve tarihle birlikte gösterilir",
          "Öğretmen onaylamadan hiçbir içerik öğrenciye ulaşmaz",
          "Yapılan düzeltmeler sonraki önerilere yansır",
        ],
      },
      {
        id: "kullanim",
        num: "04",
        title: "Kullanım",
        subtitle: "Öğrenci · öğretmen · yönetici · veli",
        description:
          "Onaylanan plan öğrencinin ekranına düşer. Öğretmen sınıfının eksiklerini, yönetici kurumun genel durumunu, veli de çocuğunun gelişimini anlaşılır bir özetle görür. Plana ne kadar uyulduğu ve alınan sonuç da yeniden veriye dönüşür.",
        bullets: [
          "Herkes yalnızca yetkisi olan veriyi görür",
          "Her çalışma kaydı ve yeni sınav süreci baştan başlatır",
          "Veli, gelişimi görmek için karne dönemini beklemez",
        ],
      },
    ],

    contract: {
      label: "Veri sözleşmesi",
      title: "Bu şemayı mümkün kılan üç kural",
      description:
        "Bu üç kural olmadan geri kalan her şey tahminden ibaret kalır. Kurulum sırasında veriyi bu yapıya getiriyoruz; sonrasında kurumun tek yapması gereken, günlük işlerini platform üzerinden yürütmek.",
      items: [
        {
          id: "etiket",
          title: "Her soru bir konuya bağlıdır",
          description: "Her sınav sorusu ders, konu ve kazanım etiketiyle saklanır; etiketi olmayan soru sınava eklenemez.",
        },
        {
          id: "madde",
          title: "Cevaplar seçenek bazında saklanır",
          description: "“Yanlış” demek yetmez; hangi seçeneğin işaretlendiği de tutulur, çünkü öğrencinin hangi çeldiriciye takıldığı eksiği asıl gösteren şeydir.",
        },
        {
          id: "zaman",
          title: "Her kaydın bir tarihi vardır",
          description: "Aynı konudaki iki deneme arasındaki fark analizin sonucunu belirler; güncel veri, eski sonuçlardan daha ağır basar.",
        },
      ],
    },

    gates: {
      label: "Kontrol noktaları",
      title: "Süreç dört noktada durup kontrolden geçer",
      description:
        "Bir eğitim ürününde asıl önemli olan ne üretebildiği değil, neyi üretmemeyi bildiğidir. Hezarfen'deki dört kontrol noktası bunun için var.",
      items: [
        { id: "onay", title: "Öğretmen onayı", description: "Öğrenciye gidecek plan, özet ve soru taslakları öğretmen onayından geçmeden yayımlanmaz." },
        { id: "yetki", title: "Rol bazlı yetki", description: "Analiz de asistan da kullanıcının yetkisiyle çalışır; yetki dışındaki veri ne gösterilir ne de özetlenir." },
        { id: "kaynak", title: "Kaynak takibi", description: "Özetler ve asistan yanıtları yalnızca kurumun yüklediği kaynaklardan üretilir; her yanıt dayandığı bölüme bağlanır." },
        { id: "kalite", title: "Kalite kontrolü", description: "Sesli ders bölümü belirlenen kalite eşiklerini geçemezse otomatik olarak yayımlanmaz." },
      ],
    },

    map: {
      label: "Ürünler şemada",
      title: "Hangi ürün sürecin hangi aşamasında?",
      description: "Dört ürün ayrı ayrı satın alınabilir, ama hepsi aynı sürecin parçalarıdır.",
      items: [
        { stage: "01 · Toplama", name: "Hezarfen Platform", description: "Veriyi üreten ve saklayan çekirdek: roller, dersler, yoklama, sınav, ödev, not ve ödeme." },
        { stage: "02 · Analiz", name: "Hezarfen Zekâ", description: "Konu hâkimiyetini hesaplayan, planı hazırlayan ve ders programı taslağını oluşturan katman." },
        { stage: "03 · Onay", name: "Çelebi", description: "Kullanıcıyı doğru ekrana götüren, kaynaklardan dayanağı belli özetler çıkaran asistan." },
        { stage: "04 · Kullanım", name: "Ses Atölyesi", description: "Onaylanan içeriği, kaynağına kadar takip edilebilen sesli derslere dönüştüren üretim hattı." },
      ],
    },

    measures: {
      label: "Ölçüm",
      title: "Pilot sürecinde neleri ölçüyoruz?",
      description:
        "Şemanın işe yaradığını söylemek yetmez; pilot dönem boyunca şunları ölçüyoruz:",
      items: [
        "Sınavdan sonra rapora ulaşma süresi",
        "Rehber öğretmen başına hazırlanan kişisel plan sayısı",
        "Önerilerin kabul edilme ve düzeltilme oranı",
        "Öğrencinin plana uyumu",
        "Ders programındaki çakışma sayısı",
        "Velilerden gelen bilgi talebi yükü",
      ],
    },
  },

  /** `/iletisim` — the form the demo button opens. */
  contact: {
    metaTitle: "Demo talebi ve iletişim — Hezarfen",
    metaDescription:
      "Kurumunuz için demo talep edin: Formu doldurun, 20 dakikalık bir ihtiyaç görüşmesiyle başlayalım. Kurulum, veri aktarımı ve rol bazlı eğitim dahildir.",
    label: "İletişim",
    title: "Kurumunuz için demo talep edin",
    lead: "Formu doldurun; iki iş günü içinde size dönüp 20 dakikalık bir ihtiyaç görüşmesi planlayalım. Demoyu kurumunuzun kendi iş akışına göre hazırlıyoruz.",
    formTitle: "Demo talep formu",
    fields: {
      name: "Ad ve soyad",
      institution: "Kurum adı",
      role: "Göreviniz",
      rolePlaceholder: "Kurum müdürü, kurucu, koordinatör…",
      email: "E-posta",
      phone: "Telefon",
      phoneHint: "İsteğe bağlı",
      students: "Öğrenci sayısı",
      studentsOptions: ["1–150", "150–400", "400–800", "800+"],
      interest: "İlgilendiğiniz ürünler",
      interestOptions: ["Hezarfen Platform", "Hezarfen Zekâ", "Çelebi", "Ses Atölyesi"],
      message: "Eklemek istedikleriniz",
      messagePlaceholder: "Şu an hangi araçları kullanıyorsunuz, en çok hangi işlerde zaman kaybediyorsunuz?",
      consent: "Formdaki bilgilerimin, demo talebimin değerlendirilmesi amacıyla işlenmesine onay veriyorum.",
      required: "zorunlu",
    },
    submit: "Demo talebini gönder",
    submitting: "Gönderiliyor…",
    successTitle: "Talebiniz alındı",
    successBody: "İki iş günü içinde size dönüyoruz. Acil bir durum varsa doğrudan e-posta gönderebilirsiniz:",
    errors: {
      name: "Lütfen adınızı ve soyadınızı yazın.",
      institution: "Lütfen kurumunuzun adını yazın.",
      email: "Lütfen geçerli bir e-posta adresi yazın.",
      consent: "Formu gönderebilmek için onay kutusunu işaretlemeniz gerekiyor.",
      unknown: "Talebiniz gönderilemedi. Lütfen tekrar deneyin ya da bize doğrudan e-posta gönderin.",
    },
    next: {
      title: "Formu gönderdikten sonra",
      steps: [
        { num: "01", title: "İhtiyaç görüşmesi", description: "20 dakika: kurumun işleyişi, kullandığı araçlar ve en çok zaman alan işler." },
        { num: "02", title: "Kurumunuza özel demo", description: "Aynı verinin dört üründe nasıl işe yaradığını, kendi iş akışınız üzerinden gösteriyoruz." },
        { num: "03", title: "İsterseniz pilot", description: "Bir dönemlik pilotta başlangıç değerlerini ölçüyor, dönem sonunda öncesi ve sonrası raporunu birlikte değerlendiriyoruz." },
      ],
    },
    direct: {
      title: "Doğrudan iletişim",
      description: "Form yerine e-posta göndermeyi tercih ederseniz, mesajınız aynı ekibe ulaşır.",
    },
    kvkk: "Form bilgileri yalnızca talebinizin değerlendirilmesi için kullanılır, üçüncü taraflarla paylaşılmaz ve talebiniz sonuçlandıktan sonra saklanmaz.",
  },
} as const;
