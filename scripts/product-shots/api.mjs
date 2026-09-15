/**
 * Answers the frontend's `/api` requests from the fixture school.
 *
 * Only reads are served. Anything unmatched returns an empty page and is
 * logged, so a new screen that needs data shows up as a line in the output
 * instead of a silently blank panel.
 */
const page = (items, url) => {
  const limit = Number(url.searchParams.get("limit")) || null;
  const offset = Number(url.searchParams.get("offset")) || 0;
  const slice = limit ? items.slice(offset, offset + limit) : items.slice(offset);
  return { items: slice, total: items.length, limit, offset };
};

export function createApi(school, { as }) {
  const s = school;
  const me = as;
  const strip = ({ key, ...rest }) => rest;
  const find = (list, id) => list.find(x => x.id === id);

  const marksFor = user => {
    const courses = s.courses.map(c => {
      const res = s.exams
        .filter(e => e.course === c.id)
        .map(e => ({ e, r: s.results.find(r => r.exam === e.id && r.user.id === user) }))
        .filter(x => x.r)
        .map(({ e, r }) => ({ exam: e.id, title: e.title, kind: e.kind, weight: e.kind === "midterm" ? 2 : 1, mark: r.mark, grade: null, graded_by: s.teachers[c.key].id }));
      const avg = res.length ? Math.round((res.reduce((a, b) => a + b.mark * b.weight, 0) / res.reduce((a, b) => a + b.weight, 0)) * 10) / 10 : null;
      return { course: strip(c), results: res, average: avg, average_grade: null };
    });
    const avgs = courses.map(c => c.average).filter(a => a != null);
    return { user, courses, overall_average: avgs.length ? Math.round((avgs.reduce((a, b) => a + b, 0) / avgs.length) * 10) / 10 : null, overall_grade: null };
  };

  const counts = (present, absent, late, excused) => ({ present, absent, late, excused, custom: {}, total: present + absent + late + excused, rate: present / (present + absent + late + excused) });

  const routes = [
    [/^\/auth\/me$/, () => me],
    [/^\/time$/, () => ({ now: s.now })],
    [/^\/users\/me\/profile$/, () => ({ id: me.id, username: me.username, display_name: me.display_name, role: me.role, bio: null, avatar: null, classes: [], courses: [], badges: [], stats: {} })],
    [/^\/users\/search$/, u => page(s.users, u)],
    [/^\/users$/, u => page(s.users, u)],
    [/^\/users\/([^/]+)$/, (u, [id]) => find(s.users, id)],
    [/^\/courses(\/me)?$/, u => page(s.courses.map(strip), u)],
    [/^\/courses\/([^/]+)$/, (u, [id]) => strip(find(s.courses, id))],
    [/^\/courses\/([^/]+)\/subjects$/, (u, [id]) => page(s.subjectRows.filter(x => x.course === id).map(strip), u)],
    [/^\/courses\/([^/]+)\/exams$/, (u, [id]) => page(s.exams.filter(x => x.course === id), u)],
    [/^\/courses\/([^/]+)\/enrollments$/, (u, [id]) => page(s.students.map(st => ({ id: `en-${id}-${st.id}`, course: id, user: s.ref(st), enrolled_by: s.ref(s.manager), source: s.classOf(st).id })), u)],
    [/^\/classes(\/me)?$/, u => page(s.classes, u)],
    [/^\/classes\/([^/]+)$/, (u, [id]) => find(s.classes, id)],
    [/^\/classes\/([^/]+)\/members$/, (u, [id]) => page(s.students.filter(st => s.classOf(st).id === id).map(st => ({ id: `cm-${st.id}`, class: id, user: s.ref(st), added_by: s.ref(s.manager) })), u)],
    [/^\/classes\/user\/([^/]+)$/, (u, [id]) => page([s.classOf(find(s.students, id) ?? s.students[0])], u)],
    [/^\/terms$/, u => page([s.term], u)],
    [/^\/exams$/, u => {
      const after = Number(u.searchParams.get("ends_after"));
      const list = after ? s.exams.filter(e => e.ends_at > after).sort((a, b) => a.starts_at - b.starts_at) : [...s.exams].reverse();
      return page(list, u);
    }],
    [/^\/exams\/([^/]+)$/, (u, [id]) => find(s.exams, id)],
    [/^\/exams\/([^/]+)\/statistics$/, (u, [id]) => s.examStats.get(id) ?? { exam: id, graded: 0, average: null, min: null, max: null }],
    [/^\/exams\/([^/]+)\/results$/, (u, [id]) => page(s.results.filter(r => r.exam === id), u)],
    [/^\/exams\/([^/]+)\/questions$/, (u, [id]) => page(s.questions.map(q => ({ ...q, exam: id })), u)],
    [/^\/bank-questions$/, u => page(s.bank, u)],
    [/^\/homework$/, u => page(s.homework, u)],
    [/^\/events$/, u => {
      const after = Number(u.searchParams.get("ends_after"));
      const list = after ? s.events.filter(e => e.ends_at > after).sort((a, b) => a.starts_at - b.starts_at) : s.events;
      return page(list, u);
    }],
    [/^\/appointments$/, u => page(s.appointments, u)],
    [/^\/messages$/, u => page(u.searchParams.get("read") === "false" ? s.messages.filter(m => !m.read) : s.messages, u)],
    [/^\/meals\/menus$/, u => page([s.menu], u)],
    [/^\/marks\/me$/, () => marksFor(me.id)],
    [/^\/marks\/([^/]+)$/, (u, [id]) => marksFor(decodeURIComponent(id))],
    [/^\/attendance\/(me|[^/]+)$/, (u, [id]) => ({ user: id, events: counts(11, 1, 0, 0), sessions: counts(142, 4, 3, 2), courses: s.courses.map(c => ({ course: strip(c), counts: counts(24, 1, 1, 0) })) })],
    [/^\/modules$/, () => ({ enabled: ["appointments", "attendance", "bank_questions", "boards", "chatbot", "classes", "course_notes", "courses", "events", "exams", "homework", "marks", "meals", "messages", "notes", "payments", "pomodoro", "questions", "sessions", "subjects", "work"] })],
    [/^\/notes$/, u => page([], u)],
    [/^\/chatbot\/threads$/, u => page(s.chat?.threads ?? [], u)],
    [/^\/chatbot\/threads\/([^/]+)\/messages$/, (u, [id]) => page(s.chat?.messages.filter(m => m.thread_id === id) ?? [], u)],
  ];

  /** Metadata identical for every school: safe to read from the real backend. */
  const passthrough = [/^\/limits$/, /^\/modules\/catalog$/, /^\/settings$/];

  return async function handle(route) {
    const req = route.request();
    const url = new URL(req.url());
    const path = url.pathname.replace(/^\/api/, "");
    if (req.method() !== "GET") return route.fulfill({ status: 204, body: "" });
    if (passthrough.some(re => re.test(path))) return route.continue();
    for (const [re, fn] of routes) {
      const m = path.match(re);
      if (m) {
        const body = fn(url, m.slice(1));
        if (body === undefined) break;
        return route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify(body) });
      }
    }
    console.log("  [api] unmocked", path + url.search);
    return route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ items: [], total: 0, limit: null, offset: 0 }) });
  };
}
