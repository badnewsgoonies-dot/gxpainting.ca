
  const HOME_FEATURED = [
  { src: `/gx-1.webp`, alt: `Featured project 1`, width: 1920, height: 1080 },
  { src: `/gx-2.webp`, alt: `Featured project 2`, width: 1920, height: 1281 },
  { src: `/gx-3.webp`, alt: `Featured project 3`, width: 1000, height: 667 }
];

  export default function Home() {
    return (
      <section className="space-y-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <img src="/logo-lockup.svg" alt="GX Painting LTD" className="h-14 w-auto" />
            <h2 className="text-2xl font-semibold">Interior · Exterior · Staining</h2>
            <p>Professional painters serving the GTA since 1999. Free same-day quotes, WSIB with $5M liability, and a 2-year workmanship warranty.</p>
            <a href="/contact" className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg">Get a Free Quote</a>
          </div>
          <div className="grid grid-cols-6 gap-3">
            <img src={HOME_FEATURED[0].src} alt={HOME_FEATURED[0].alt} width={HOME_FEATURED[0].width} height={HOME_FEATURED[0].height} loading="lazy" decoding="async" className="col-span-3 h-40 w-full object-cover rounded-xl" />
            <img src={HOME_FEATURED[1].src} alt={HOME_FEATURED[1].alt} width={HOME_FEATURED[1].width} height={HOME_FEATURED[1].height} loading="lazy" decoding="async" className="col-span-3 h-60 w-full object-cover rounded-xl" />
            <img src={HOME_FEATURED[2].src} alt={HOME_FEATURED[2].alt} width={HOME_FEATURED[2].width} height={HOME_FEATURED[2].height} loading="lazy" decoding="async" className="col-span-6 h-52 w-full object-cover rounded-xl" />
          </div>
        </div>

        <section className="mt-12">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold">Meet the Owner</h3>
              <p className="mt-2 text-slate-700 dark:text-slate-300">
                Gaz founded GX Painting LTD in 1999 and brings 25 years of hands-on experience to every project across the GTA.
                The focus is simple: careful prep, clean lines, premium materials, and a spotless job site.
              </p>
            </div>
            <aside className="p-5 rounded-xl border bg-white dark:bg-slate-900/40">
              <h4 className="font-semibold">Quick facts</h4>
              <dl className="mt-2 text-sm space-y-1">
                <div className="flex justify-between"><dt>Owner</dt><dd>Gaz</dd></div>
                <div className="flex justify-between"><dt>Since</dt><dd>1999</dd></div>
                <div className="flex justify-between"><dt>Experience</dt><dd>25 years</dd></div>
              </dl>
            </aside>
          </div>
        </section>
      </section>
    )
  }
