/**
 * The product screenshots under `public/product/`, and what each one shows.
 *
 * They are photographs of the real frontend filled with a fictional school
 * (`scripts/product-shots/`), so the files are regenerated rather than edited.
 * The pixel sizes below are the files' own, at 2× — keep them in step when a
 * shot's crop changes, or the reserved box and the image will disagree.
 */
export const products = {
  dashboard: {
    src: "/product/dashboard.webp",
    width: 2880,
    height: 1580,
    url: "hezarfen.app",
    alt: "Hezarfen yönetici panosu: ders, sınav ve etkinlik sayıları, son sınavların başarı eğilimi ve ders bazında ortalamalar",
  },
  "exam-question": {
    src: "/product/exam-question.webp",
    width: 1480,
    height: 946,
    url: "hezarfen.app/exams",
    alt: "Sınav sorusu: konu etiketi, puanı ve seçenekleriyle; doğru seçenek işaretli",
  },
  celebi: {
    src: "/product/celebi.webp",
    width: 1088,
    height: 1800,
    url: "hezarfen.app · Çelebi",
    alt: "Çelebi paneli: yoklamanın nereden alınacağını adım adım anlatan ve ilgili sayfaya götüren yanıt",
  },
} as const;

export type ProductShotName = keyof typeof products;
