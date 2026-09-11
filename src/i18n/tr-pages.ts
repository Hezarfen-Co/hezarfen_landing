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
      "Sınav verisinden öğretmen onaylı kişisel çalışma planına: Hezarfen'in veri modeli, analiz hattı, onay kapıları ve rol bazlı çıktılarının şeması.",
    label: "Şema",
    title: "Bir sınav kâğıdı, otuz ayrı çalışma planına nasıl dönüşür",
    lead: "Aşağıdaki dört adım ürünün tamamıdır: veri toplanır, analiz kanıta bağlanır, öğretmen onaylar, herkes kendi ekranında görür. Yeni sınav geldiğinde zincir baştan işler ve plan kendini günceller.",
    ctaPrimary: "Demo talep et",
    ctaSecondary: "Ürünlere dön",

    /** The animated pipeline. Four stages, then the loop back to analysis. */
    flowLabel: "Veri akışı",
    flowNote: "Yeni sınav, ödev ya da çalışma kaydı geldiğinde akış baştan işler; plan eski hâliyle kalmaz.",
    stages: [
      {
        id: "toplama",
        num: "01",
        title: "Toplama",
        subtitle: "Sınav · ödev · yoklama · çalışma süresi",
        description:
          "Kurumun günlük işi platformda yürüdüğü için veri ayrıca girilmez. Sınav tanımlanırken her soru konu ve kazanım etiketini alır; optik ya da elle girilen cevaplar öğrenci, soru ve seçenek düzeyinde saklanır.",
        bullets: [
          "Her soru bir konu ve kazanım koduna bağlı",
          "Her cevap hangi seçeneğin işaretlendiğini tutar",
          "Ödev, yoklama ve çalışma süresi aynı öğrenci kaydında",
        ],
      },
      {
        id: "analiz",
        num: "02",
        title: "Analiz",
        subtitle: "Konu yetkinliği · çeldirici örüntüsü · güncellik",
        description:
          "Doğru sayısı bir şey anlatmaz; hangi konuda, hangi çeldiriciye ve ne zaman yanıldığı anlatır. Öğrenci-soru matrisinden konu yetkinliği kestirilir, güncel veri geçmişin önüne geçer.",
        bullets: [
          "Konu bazlı doğruluk ve çeldirici örüntüsü",
          "Zaman içindeki değişim: gelişen konu eksik sayılmaz",
          "Sınıf ve şube düzeyinde toplu görünüm",
        ],
      },
      {
        id: "plan",
        num: "03",
        title: "Plan ve onay",
        subtitle: "Haftalık program · kanıt · öğretmen kararı",
        description:
          "Analizden ve öğrencinin hedefinden haftalık çalışma programı üretilir. Program öğretmene kanıtıyla gelir: hangi soru, hangi tarih, hangi başarı oranı. Öğretmen onaylar ya da düzeltir; düzeltme kaydedilir.",
        bullets: [
          "Her öneri dayandığı soru ve tarihle birlikte görünür",
          "Öğretmen onaylamadan hiçbir içerik öğrenciye gitmez",
          "Düzeltmeler geri bildirim olarak sonraki öneriyi etkiler",
        ],
      },
      {
        id: "kullanim",
        num: "04",
        title: "Kullanım",
        subtitle: "Öğrenci · öğretmen · yönetici · veli",
        description:
          "Onaylanan plan öğrencinin ekranına düşer; öğretmen sınıfın eksiğini, yönetici kurumun durumunu, veli anlaşılır bir gelişim görünümünü görür. Plana uyum ve sonuç yeniden veri olur.",
        bullets: [
          "Herkes yalnızca yetkisi olan veriyi görür",
          "Çalışma kaydı ve yeni sınav akışı baştan tetikler",
          "Veli karne dönemini beklemez",
        ],
      },
    ],

    contract: {
      label: "Veri sözleşmesi",
      title: "Şemanın çalışmasını mümkün kılan üç kural",
      description:
        "Bu üç kural olmadan geri kalan her şey tahmine dönüşür. Kurulumda veri bu biçime getirilir; sonrasında kurumun yaptığı tek şey işini platformda yürütmektir.",
      items: [
        {
          id: "etiket",
          title: "Soru, konuya bağlıdır",
          description: "Her sınav sorusu ders, konu ve kazanım etiketiyle saklanır; etiketsiz soru sınava eklenmez.",
        },
        {
          id: "madde",
          title: "Cevap, seçenek düzeyinde saklanır",
          description: "“Yanlış” yetmez: hangi seçeneğin işaretlendiği tutulur, çünkü çeldirici örüntüsü konuyu anlatır.",
        },
        {
          id: "zaman",
          title: "Her kayıt zamanlıdır",
          description: "Aynı konudaki iki deneme arasındaki fark analizin çıktısını belirler; güncel veri geçmişi bastırır.",
        },
      ],
    },

    gates: {
      label: "Kapılar",
      title: "Zincirin dört noktasında sistem kendini durdurur",
      description:
        "Bir eğitim ürününde asıl mesele neyi üretebildiği değil, neyi üretmeyi reddettiğidir. Hezarfen'de dört kapı bunun için var.",
      items: [
        { id: "onay", title: "Öğretmen onayı", description: "Öğrenciye gidecek plan, özet ve soru taslağı öğretmenden geçmeden yayımlanmaz." },
        { id: "yetki", title: "Rol bazlı yetki", description: "Analiz de asistan da kullanıcının yetkisiyle çalışır; yetki dışındaki veri ne gösterilir ne özetlenir." },
        { id: "kaynak", title: "Kaynak izleme", description: "Özet ve sohbet yalnızca kurumun yüklediği kaynaktan üretilir; yanıt dayandığı bölüme bağlanır." },
        { id: "kalite", title: "Kalite kapısı", description: "Sesli ders bölümü ölçülen eşikleri geçmezse otomatik olarak yayımdan engellenir." },
      ],
    },

    map: {
      label: "Ürünler şemada",
      title: "Hangi ürün zincirin neresinde duruyor",
      description: "Dört ürün ayrı satın alınır ama aynı zincirin farklı halkalarıdır.",
      items: [
        { stage: "01 · Toplama", name: "Hezarfen Platform", description: "Veriyi üreten ve saklayan çekirdek: roller, dersler, yoklama, sınav, ödev, not, ödeme." },
        { stage: "02 · Analiz", name: "Hezarfen Zekâ", description: "Konu yetkinliğini kestiren, planı üreten ve çizelge taslağını hazırlayan katman." },
        { stage: "03 · Onay", name: "Çelebi", description: "Kullanıcıyı doğru ekrana götüren, kaynaktan kanıtlı özet çıkaran asistan." },
        { stage: "04 · Kullanım", name: "Ses Atölyesi", description: "Onaylanan içeriği kaynağına izlenebilir sesli derse çeviren üretim hattı." },
      ],
    },

    measures: {
      label: "Ölçüm",
      title: "Pilotta neye bakıyoruz",
      description:
        "Şemanın işlediğini iddia etmek yetmez; pilot dönemi boyunca ölçülen şeyler bunlar.",
      items: [
        "Sınav sonrası rapora ulaşma süresi",
        "Rehberlik başına hazırlanan kişisel plan sayısı",
        "Önerilerin kabul ve düzeltme oranı",
        "Öğrencinin plana uyumu",
        "Ders programı çakışma sayısı",
        "Veli bilgilendirmesine dönen soru yükü",
      ],
    },
  },

  /** `/iletisim` — the form the demo button opens. */
  contact: {
    metaTitle: "Demo talebi ve iletişim — Hezarfen",
    metaDescription:
      "Kurumunuz için demo talebi: formu doldurun, 20 dakikalık ihtiyaç görüşmesiyle başlayalım. Kurulum, veri aktarımı ve rol bazlı eğitim dahil.",
    label: "İletişim",
    title: "Kurumunuz için demo talep edin",
    lead: "Formu doldurun; iki iş günü içinde dönüp 20 dakikalık bir ihtiyaç görüşmesi planlıyoruz. Demoyu kurumunuzun kendi iş akışına göre hazırlıyoruz.",
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
      messagePlaceholder: "Bugün hangi araçları kullanıyorsunuz, en çok nerede zaman kaybediyorsunuz?",
      consent: "Formdaki bilgilerin demo talebimin değerlendirilmesi amacıyla işlenmesini onaylıyorum.",
      required: "zorunlu",
    },
    submit: "Demo talebini gönder",
    submitting: "Gönderiliyor…",
    successTitle: "Talebiniz alındı",
    successBody: "İki iş günü içinde dönüyoruz. Acelesi varsa doğrudan yazabilirsiniz:",
    errors: {
      name: "Adınızı yazın.",
      institution: "Kurum adını yazın.",
      email: "Geçerli bir e-posta adresi yazın.",
      consent: "Formu gönderebilmek için onay kutusunu işaretleyin.",
      unknown: "Talep gönderilemedi. Lütfen tekrar deneyin ya da doğrudan e-posta yazın.",
    },
    next: {
      title: "Formdan sonra ne oluyor",
      steps: [
        { num: "01", title: "İhtiyaç görüşmesi", description: "20 dakika: kurumun akışı, kullandığı araçlar ve en çok zaman kaybettiren adımlar." },
        { num: "02", title: "Kuruma özel demo", description: "Aynı verinin dört üründe nasıl değere döndüğü, sizin iş akışınızla gösterilir." },
        { num: "03", title: "İsterseniz pilot", description: "Bir dönemlik pilotta başlangıç değerleri ölçülür; sonunda önce/sonra raporunu birlikte okuruz." },
      ],
    },
    direct: {
      title: "Doğrudan iletişim",
      description: "Form yerine yazmayı tercih ederseniz aynı yere düşer.",
      cityLabel: "Merkez",
    },
    kvkk: "Form verileri yalnızca talebin değerlendirilmesi için kullanılır, üçüncü taraflarla paylaşılmaz ve talebiniz kapandıktan sonra saklanmaz.",
  },
} as const;
