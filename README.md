# hezarfen_landing

Hezarfen'in ürün tanıtım sayfası: okul, kurs ve etüt merkezleri için eğitim
yönetim platformunu anlatan tek sayfalık site.

Sayfa bir satış sayfasıdır, iş planı değil. Fiyat tabloları, pazar büyüklüğü,
yatırım ve ekip özgeçmişleri bilinçli olarak burada yer almaz: kurum müdürü
ürünün ne yaptığını ve demonun nasıl başladığını öğrenmek için gelir, sayı
görüşmede konuşulur.

## Çalıştırma

Paket yöneticisi olarak yalnızca **bun** kullanılır.

```sh
bun install
bun run dev        # geliştirme sunucusu
bun run typecheck  # tsc --noEmit
bun run build      # .output/ altına sunucu derlemesi
bun run preview    # derlenmiş sürümü yerelde çalıştır
bun run start      # .output/server/index.mjs
```

## Yapı

| Yol | İçerik |
| --- | --- |
| `src/i18n/tr.ts` | Sayfadaki **bütün** metin. İçerik değişikliği burada başlar. |
| `src/config.ts` | Alan adı, e-posta, şehir, bölüm çıpaları (`anchors`). |
| `src/routes/index.tsx` | Bölümlerin sırası. |
| `src/components/home/` | `Hero` ve bölümler (`Sections.tsx`). |
| `src/components/illustrations/edu.tsx` | Eğitim temalı pixel illüstrasyonlar. |
| `src/components/icons/pixel.tsx` | Pixelarticons'tan seçilmiş ikonlar (MIT). |
| `src/app.css` | Tasarım sistemi: tek palet, `hz-` önekli sınıflar. |
| `src/lib/schema.ts` | schema.org çıktısı (Organization, WebSite, ürün listesi, SSS). |
| `public/brand/` | Marka SVG'leri ve `og.png` kaynağı. |

Bölüm eklemek: `src/i18n/tr.ts`'e metni yaz, `src/config.ts`'e çıpasını ekle,
`Sections.tsx`'te bileşenini yaz ve `routes/index.tsx`'te sıraya koy. Header,
footer ve site haritası çıpaları `config.ts`'ten okuduğu için kendiliğinden
güncellenir.

## Tasarım

Tek renk: **#00ADD8** (Go'nun mavisi). Zemin beyaz, her ikinci bölüm kırık
beyaz; ayırıcılar gölge değil saç teli çizgi. Renk yalnızca eylem ve veri için
kullanılır — böylece hiçbir yerde arayüzün tamamına yayılmış bir ton olmaz.

Tüm renk, yazı ve boşluk değerleri `src/app.css` içindeki `:root` bloğundadır;
palet değişikliği tek yerden yapılır.

## Marka varlıkları

SVG kaynaktan PNG üretimi (macOS'ta `brew install librsvg`):

```sh
rsvg-convert -w 1200 -h 630 public/brand/og.svg -o public/og.png
rsvg-convert -w 512 -h 512 public/favicon.svg -o public/brand/hezarfen-mark-512.png
rsvg-convert -w 180 -h 180 public/favicon.svg -o public/apple-touch-icon.png
```

## Ekran görüntüsü

`scripts/shoot.mjs` çalışan bir sunucuyu bölüm bölüm fotoğraflar. Playwright
projenin bağımlılığı değildir; kurulu olduğu yer `PLAYWRIGHT` ile verilir:

```sh
bun run preview &
PLAYWRIGHT=/yol/playwright/index.mjs bun scripts/shoot.mjs http://localhost:4173 /tmp/shots
```

## Yayına alma

`bun run build` → `.output/`. Sunucu `bun .output/server/index.mjs` ile
çalışır; `/healthz` derlemenin commit'ini döner, `/sitemap.xml` ve
`/robots.txt` sayfayla birlikte üretilir.

Alan adı ve e-posta `src/config.ts` içindedir; alan adı bağlandığında
`domain`, `url` ve `public/robots.txt` içindeki sitemap satırı güncellenir.
