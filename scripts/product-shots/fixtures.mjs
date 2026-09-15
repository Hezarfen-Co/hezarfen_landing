/**
 * A fictional school for product screenshots.
 *
 * The staging school is empty, and an empty table sells nothing. Rather than
 * seeding a shared backend, the shoot script answers the frontend's `/api`
 * calls from this file inside the browser, so every screenshot is repeatable
 * and nothing is written anywhere. Names are invented; timestamps are built
 * around `now` so "upcoming" always means upcoming.
 */
const HOUR = 3_600_000;
const DAY = 24 * HOUR;

export function buildSchool(now = Date.now()) {
  let seq = 0;
  const id = prefix => `${prefix}-${String(++seq).padStart(4, "0")}`;
  const ref = u => ({ id: u.id, username: u.username, display_name: `${u.name} ${u.surname}` });

  const person = (role, name, surname) => ({
    id: id("u"),
    username: `${name}.${surname}`.toLocaleLowerCase("tr").replace(/ı/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ö/g, "o").replace(/ç/g, "c").replace(/ı/g, "i"),
    role,
    name,
    surname,
    email: null,
    phone: null,
    birth_date: null,
    display_name: `${name} ${surname}`,
    bio: null,
    theme: "light",
    language: "tr",
    palette_color: null,
  });

  const manager = person("manager", "Burak", "Boduroğlu");
  const teachers = {
    mat: person("teacher", "Elif", "Demir"),
    fiz: person("teacher", "Kerem", "Arslan"),
    kim: person("teacher", "Zeynep", "Koç"),
    tur: person("teacher", "Ahmet", "Yıldız"),
    bio: person("teacher", "Deniz", "Şahin"),
    tar: person("teacher", "Seda", "Öztürk"),
  };
  const studentNames = [
    ["Ayşe", "Yılmaz"], ["Mehmet", "Çelik"], ["Ecem", "Aydın"], ["Emir", "Kaplan"],
    ["Defne", "Erdoğan"], ["Can", "Kurt"], ["İrem", "Aksoy"], ["Yusuf", "Polat"],
    ["Elif Naz", "Güneş"], ["Berk", "Tekin"], ["Nehir", "Bulut"], ["Arda", "Keskin"],
    ["Zehra", "Uçar"], ["Kaan", "Özkan"], ["Selin", "Aslan"], ["Mert", "Doğan"],
    ["Ada", "Işık"], ["Eren", "Coşkun"], ["Duru", "Karaca"], ["Onur", "Toprak"],
    ["Sude", "Kılıç"], ["Barış", "Aksu"], ["Melis", "Er"], ["Efe", "Baysal"],
  ];
  const students = studentNames.map(([n, s]) => person("student", n, s));
  const users = [manager, ...Object.values(teachers), ...students];

  const term = { id: id("term"), name: "2026–2027 Güz", starts_at: now - 10 * DAY, ends_at: now + 120 * DAY, archived_at: null };

  const course = (key, title, description) => ({
    id: id("course"),
    creator: ref(manager),
    teachers: [ref(teachers[key])],
    title,
    description,
    kind: "course",
    term: term.id,
    capacity: null,
    key,
  });
  const courses = [
    course("mat", "Matematik 11", "Fonksiyonlar, trigonometri ve analitik geometri."),
    course("fiz", "Fizik 11", "Kuvvet ve hareket, elektrik ve manyetizma."),
    course("kim", "Kimya 11", "Modern atom teorisi, gazlar ve çözeltiler."),
    course("tur", "Türk Dili ve Edebiyatı 11", "Paragraf, anlatım biçimleri ve edebi akımlar."),
    course("bio", "Biyoloji 11", "İnsan fizyolojisi ve komünite ekolojisi."),
    course("tar", "Tarih 11", "Değişen dünya dengeleri ve Osmanlı'da modernleşme."),
  ];
  const courseBy = key => courses.find(c => c.key === key);

  const classes = [
    { id: id("class"), creator: ref(manager), name: "11-A", grade: "11", term: term.id, teacher: ref(teachers.mat) },
    { id: id("class"), creator: ref(manager), name: "11-B", grade: "11", term: term.id, teacher: ref(teachers.fiz) },
    { id: id("class"), creator: ref(manager), name: "12-A", grade: "12", term: term.id, teacher: ref(teachers.tur) },
  ];
  const classOf = s => classes[students.indexOf(s) % 2];

  const subjects = {
    mat: ["Fonksiyonlar", "Trigonometri", "Analitik geometri", "Denklem ve eşitsizlikler"],
    fiz: ["Vektörler", "Newton'un hareket yasaları", "İş, güç ve enerji", "Elektrik alan"],
    kim: ["Atom modelleri", "Gazlar", "Sıvı çözeltiler", "Kimyasal tepkimelerde enerji"],
    tur: ["Paragraf", "Anlatım biçimleri", "Servet-i Fünun", "Cümle türleri"],
    bio: ["Sinir sistemi", "Endokrin sistem", "Duyu organları", "Destek ve hareket"],
    tar: ["Avrupa'da değişim", "Osmanlı'da ıslahatlar", "Sanayi devrimi", "Diplomasi"],
  };
  const subjectRows = [];
  for (const c of courses) for (const name of subjects[c.key]) subjectRows.push({ id: id("sub"), course: c.id, name, description: "", key: c.key });

  /** A deterministic "random" so every shoot draws the same school. */
  let seed = 7;
  const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;

  const exam = (key, title, kind, daysFromNow, extra = {}) => ({
    id: id("exam"),
    creator: teachers[key].id,
    course: courseBy(key).id,
    title,
    description: "",
    kind,
    mode: "sync",
    starts_at: now + daysFromNow * DAY,
    ends_at: now + daysFromNow * DAY + 80 * 60_000,
    duration_ms: 80 * 60_000,
    max_attempts: 1,
    allow_rejoin: false,
    allow_review: true,
    draft: false,
    ...extra,
  });
  const exams = [
    exam("mat", "Fonksiyonlar tarama sınavı", "quiz", -34),
    exam("fiz", "Hareket ve kuvvet kısa sınav", "quiz", -30),
    exam("mat", "1. Dönem 1. Yazılı", "midterm", -26),
    exam("kim", "Atom modelleri kısa sınav", "quiz", -22),
    exam("tur", "Paragraf deneme 3", "quiz", -19),
    exam("fiz", "1. Dönem 1. Yazılı", "midterm", -15),
    exam("bio", "Sinir sistemi kısa sınav", "quiz", -12),
    exam("mat", "Trigonometri kazanım testi", "quiz", -8),
    exam("kim", "Gazlar kısa sınav", "quiz", -4),
    exam("mat", "TYT Matematik deneme 4", "quiz", -1),
    exam("fiz", "Elektrik alan kısa sınav", "quiz", 2),
    exam("mat", "1. Dönem 2. Yazılı", "midterm", 5),
    exam("tar", "Islahat hareketleri kısa sınav", "quiz", 6),
    exam("kim", "Çözeltiler kazanım testi", "quiz", 9, { draft: true }),
  ];
  const trend = [58, 61, 63, 60, 66, 68, 67, 71, 73, 76];
  const examStats = new Map();
  exams.forEach((e, i) => {
    if (e.starts_at > now) return;
    const avg = trend[i] ?? 70;
    examStats.set(e.id, { exam: e.id, graded: 24, average: avg, min: avg - 31, max: Math.min(100, avg + 24) });
  });

  /** The exam the Platform shot opens: each question with its topic, points and options. */
  const questionRows = [
    ["f(x) = 2x − 3 ve g(x) = x² + 1 olduğuna göre (f∘g)(2) kaçtır?", ["5", "7", "9", "11", "13"], 1],
    ["sin 30° + cos 60° ifadesinin değeri kaçtır?", ["1/2", "1", "√3/2", "√3", "2"], 1],
    ["A(1, 2) ve B(5, 8) noktaları arasındaki uzaklık kaç birimdir?", ["√13", "2√13", "6", "√52", "8"], 1],
    ["x² − 5x + 6 = 0 denkleminin kökler toplamı kaçtır?", ["−6", "−5", "5", "6", "11"], 2],
  ];
  const questions = questionRows.map(([text, options, correct], i) => {
    const subj = subjectRows.filter(s => s.key === "mat")[i % 4];
    const choices = options.map(t => ({ id: id("ch"), text: t }));
    return { id: id("q"), exam: exams[9].id, subject: subj.id, text, kind: "choice", points: 25, choices, correct: choices[correct].id, from_bank: null, banked_as: null };
  });

  const bank = [];
  const bankTexts = [
    ["mat", "f(x) = 2x − 3 ve g(x) = x² + 1 olduğuna göre (f∘g)(2) kaçtır?", 14],
    ["mat", "sin 30° + cos 60° ifadesinin değeri kaçtır?", 9],
    ["fiz", "Sürtünmesiz yatay düzlemde 2 kg kütleli cisme 10 N kuvvet uygulanıyor. Cismin ivmesi kaç m/s² olur?", 11],
    ["kim", "Aynı sıcaklıkta eşit hacimli kaplardaki gazlardan hangisinin ortalama kinetik enerjisi daha büyüktür?", 6],
    ["mat", "A(1, 2) ve B(5, 8) noktaları arasındaki uzaklık kaç birimdir?", 8],
    ["tur", "Aşağıdaki cümlelerin hangisinde öznel bir yargı vardır?", 12],
    ["bio", "Refleks yayında impulsun izlediği yol aşağıdakilerden hangisidir?", 5],
    ["fiz", "Yüklü iki küre arasındaki mesafe iki katına çıkarsa elektriksel kuvvet nasıl değişir?", 7],
    ["tar", "Tanzimat Fermanı'nın ilanında etkili olan dış gelişme hangisidir?", 4],
    ["kim", "Molar derişimi 0,2 M olan 500 mL çözeltide kaç mol çözünen vardır?", 10],
  ];
  bankTexts.forEach(([key, text, used], i) => {
    const subj = subjectRows.filter(s => s.key === key)[i % 4];
    const choices = ["A", "B", "C", "D", "E"].map(l => ({ id: id("ch"), text: l }));
    bank.push({
      id: id("bq"), owner: teachers[key].id, owner_name: `${teachers[key].name} ${teachers[key].surname}`,
      subject: subj.id, subject_name: subj.name, text, kind: "choice", points: 10, choices, correct: choices[i % 5].id,
      source_exam: null, visibility: i % 3 === 0 ? "private" : "school", created_at: now - (20 - i) * DAY, used_count: used,
    });
  });

  const results = [];
  for (const e of exams) {
    if (e.starts_at > now) continue;
    const avg = examStats.get(e.id).average;
    students.forEach(s => {
      results.push({ id: id("res"), exam: e.id, user: ref(s), seq: 1, mark: Math.max(35, Math.min(100, Math.round(avg + (rand() - 0.5) * 30 + (students.indexOf(s) % 5) * 2))), graded_by: ref(teachers.mat) });
    });
  }

  const homework = [
    ["mat", "Trigonometri çalışma kâğıdı 2", 1],
    ["fiz", "Newton yasaları soru seti", 2],
    ["tur", "Servet-i Fünun okuma notu", 3],
    ["kim", "Gazlar konu özeti", 4],
    ["bio", "Sinir sistemi kavram haritası", -3],
    ["mat", "Fonksiyonlar tekrar testi", -6],
    ["tar", "Islahatlar zaman çizelgesi", -9],
    ["fiz", "Vektörler alıştırma", -13],
  ].map(([key, title, d], i) => ({
    id: id("hw"), course: courseBy(key).id, subject: subjectRows.find(s => s.key === key).id, title,
    description: null, due_at: now + d * DAY + 17 * HOUR - (now % DAY), assigned: null, created_by: teachers[key].id, created_at: now - (d < 0 ? 20 : 5) * DAY - i * HOUR,
  }));

  const events = [
    ["Veli toplantısı — 11. sınıflar", 3, { kind: "school" }],
    ["TYT deneme sınavı 5", 7, { kind: "school" }],
    ["Bilim şenliği hazırlık", 10, { kind: "registration", capacity: 30 }],
    ["Rehberlik semineri: çalışma planı", 12, { kind: "role", role: "student" }],
    ["Sınıf öğretmenleri kurulu", -5, { kind: "role", role: "teacher" }],
    ["Okul gezisi: Anıtkabir", -16, { kind: "school" }],
  ].map(([title, d, audience]) => ({ id: id("ev"), creator: manager.id, title, description: "", audience, starts_at: now + d * DAY, ends_at: now + d * DAY + 2 * HOUR }));

  const appointments = [
    [students[0], "Matematik yazılı sonucu hakkında görüşmek istiyoruz.", 1],
    [students[4], "Trigonometri konusunda ek çalışma önerisi.", 2],
    [students[9], "Haftalık çalışma planını birlikte gözden geçirelim.", 4],
  ].map(([s, reason, d]) => ({
    id: id("ap"), slot: id("slot"), teacher: ref(teachers.mat), requester: ref(s), status: "pending", reason,
    starts_at: now + d * DAY, ends_at: now + d * DAY + 20 * 60_000, proposed_starts_at: null, proposed_ends_at: null,
    proposed_by: null, decided_by: null, cancelled_by: null, cancel_reason: null, reject_reason: null, created_at: now - DAY,
  }));

  const today = new Date(now).toISOString().slice(0, 10);
  const menu = {
    id: id("menu"), date: today, slot: "Öğle", capacity: 320, created_by: ref(manager), created_at: now - 2 * DAY,
    dishes: [
      ["Mercimek çorbası", 4500, ["vejetaryen"]], ["Fırında tavuk", 12000, []], ["Bulgur pilavı", 5000, ["vejetaryen"]], ["Cacık", 3500, ["vejetaryen"]],
    ].map(([name, price_minor, tags]) => ({ id: id("dish"), name, description: null, price_minor, tags, conflicts: [], created_at: now - 3 * DAY })),
  };

  const messages = [
    [manager, "Yazılı takvimi güncellendi", "2. yazılı tarihleri takvime işlendi, kontrol edebilir misiniz?"],
    [students[2], "Ödev teslimi", "Hocam trigonometri kâğıdını sisteme yükledim."],
    [teachers.fiz, "Ortak deneme analizi", "11-B'nin fizik kazanım raporunu paylaştım."],
  ].map(([from, subject, body], i) => ({
    id: id("msg"), sender: ref(from), sender_role: from.role, recipient: ref(teachers.mat), recipient_role: "teacher",
    subject, body, sent_at: now - (i + 1) * 3 * HOUR, read: i > 0, folder: "inbox", label: null,
  }));

  const thread = { id: id("th"), title: "Yoklama nereden alınır?", created_at: now - HOUR, updated_at: now - 50 * 60_000 };
  const thread2 = { id: id("th"), title: "11-A kazanım raporu", created_at: now - 2 * DAY, updated_at: now - 2 * DAY };
  const msg = (role, content, extra = {}) => ({ id: id("cm"), thread_id: thread.id, role, status: "complete", content, truncated: false, error_code: null, created_at: now - HOUR, completed_at: now - HOUR, ...extra });
  const chat = {
    threads: [thread, thread2],
    messages: [
      msg("user", "Bugünkü 3. ders için yoklamayı nereden alıyorum?"),
      msg("assistant", "Yoklama, dersin oturumu üzerinden alınır:\n\n1. **Dersler** sayfasından Matematik 11'i açın.\n2. **Ders oturumları** sekmesinde bugünkü oturumu seçin.\n3. Öğrencileri Var, Yok veya Geç olarak işaretleyip kaydedin.\n\nKaydettiğiniz yoklama velinin ekranına ve öğrencinin devam raporuna aynı anda düşer.", {
        navigation: { route: "/attendance", label: "Yoklama sayfasına git" },
      }),
      msg("user", "Devamsızlığı 5 günü geçen öğrenciler var mı?"),
      msg("assistant", "Yetkiniz olan şubelerde bu dönem **5 günü geçen devamsızlık yok**. En yakın iki öğrenci 11-A'da 4 gün ile Emir Kaplan ve 3 gün ile Can Kurt.", {
        suggestions: ["Emir Kaplan'ın devam raporunu göster", "Veliye mesaj taslağı hazırla"],
      }),
    ],
  };

  return { chat, now, users, manager, teachers, students, term, courses, classes, classOf, subjectRows, exams, examStats, questions, bank, results, homework, events, appointments, menu, messages, ref, rand, DAY, HOUR };
}
