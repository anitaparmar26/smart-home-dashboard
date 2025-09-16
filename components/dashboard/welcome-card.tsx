import Image from "next/image"

export function WelcomeCard() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-sidebar-gradient p-6 text-white">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h1 className="text-balance text-3xl font-semibold">Welcome back, Jennifer</h1>
          <p className="mt-2 text-sm leading-6 text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt.
          </p>
          <div className="mt-4 flex items-center gap-4 rounded-2xl bg-white/10 px-4 py-3 text-sm">
            <span className="text-2xl">28°</span>
            <div>
              <div className="font-medium">Outdoor temperature</div>
              <div className="text-white/80">Thermal sensation 28°</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative h-32 w-48 md:h-36 md:w-56">
            <Image
              src="./images/smart-home-reference.png"
              alt="Smart home illustration"
              fill
              className="rounded-2xl object-cover opacity-90"
              sizes="(max-width: 768px) 192px, 224px"
            />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/10 blur-2xl" />
    </section>
  )
}
