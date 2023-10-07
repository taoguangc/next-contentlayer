export default function Awards() {
  return (
    <section className="py-40">
      <div className="container mx-auto flex flex-row flex-wrap gap-y-8 px-4 lg:gap-y-16 lg:px-8">
        <div className="flex w-1/2 flex-row items-end xl:w-1/4">
          <h2 className="stroke-text text-white mr-2 text-5xl font-extrabold tracking-tighter md:text-7xl xl:text-8xl">15</h2>
          <h3 className="text-xl">年经验</h3>
        </div>
        <div className="flex w-1/2 flex-row items-end xl:w-1/4">
          <h2 className="mr-2 text-5xl font-extrabold tracking-tighter md:text-7xl xl:text-8xl">30</h2>
          <h3 className="text-xl">个项目</h3>
        </div>
        <div className="flex w-1/2 flex-row items-end xl:w-1/4">
          <h2 className="stroke-text text-white mr-2 text-5xl font-extrabold tracking-tighter md:text-7xl xl:text-8xl">100</h2>
          <h3 className="text-xl">个产品</h3>
        </div>
        <div className="flex w-1/2 flex-row items-end xl:w-1/4">
          <h2 className="mr-2 text-5xl font-extrabold tracking-tighter md:text-7xl xl:text-8xl">20</h2>
          <h3 className="text-xl">个客户</h3>
        </div>
      </div>
    </section>
  )
}