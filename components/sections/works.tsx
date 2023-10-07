---
import Image from '~/components/Image.astro'
import work01 from '~/assets/img/work01.jpg'
import work02 from '~/assets/img/work02.jpg'
import work03 from '~/assets/img/work03.jpg'
import work04 from '~/assets/img/work04.jpg'
import work05 from '~/assets/img/work05.jpg'
import work06 from '~/assets/img/work06.jpg'
---

<section class="worksWrapper overflow-hidden py-24">
  <div class="works flex w-[300vw] flex-row flex-nowrap justify-start gap-16 px-16 lg:px-24">
    <div class="w-1/2">
      <Image src={work01} alt="work01" class="mb-8" />
      <div class="flex flex-row justify-between">
        <div>
          <h5>WEB DESIGN</h5>
          <h4 class="text-2xl font-semibold">Color Intergration</h4>
        </div>
        <h6 class="text-xl font-semibold">2023</h6>
      </div>
    </div>
    <div class="w-1/2">
      <Image src={work02} alt="work02" class="mb-8" />
      <div class="flex flex-row justify-between">
        <div>
          <h5>WEB DESIGN</h5>
          <h4 class="text-2xl font-semibold">Color Intergration</h4>
        </div>
        <h6 class="text-xl font-semibold">2023</h6>
      </div>
    </div>
    <div class="w-1/2">
      <Image src={work03} alt="work03" class="mb-8" />
      <div class="flex flex-row justify-between">
        <div>
          <h5>WEB DESIGN</h5>
          <h4 class="text-2xl font-semibold">Color Intergration</h4>
        </div>
        <h6 class="text-xl font-semibold">2023</h6>
      </div>
    </div>
    <div class="w-1/2">
      <Image src={work04} alt="work04" class="mb-8" />
      <div class="flex flex-row justify-between">
        <div>
          <h5>WEB DESIGN</h5>
          <h4 class="text-2xl font-semibold">Color Intergration</h4>
        </div>
        <h6 class="text-xl font-semibold">2023</h6>
      </div>
    </div>
    <div class="w-1/2">
      <Image src={work05} alt="work05" class="mb-8" />
      <div class="flex flex-row justify-between">
        <div>
          <h5>WEB DESIGN</h5>
          <h4 class="text-2xl font-semibold">Color Intergration</h4>
        </div>
        <h6 class="text-xl font-semibold">2023</h6>
      </div>
    </div>
    <div class="w-1/2">
      <Image src={work06} alt="work06" class="mb-8" />
      <div class="flex flex-row justify-between">
        <div>
          <h5>WEB DESIGN</h5>
          <h4 class="text-2xl font-semibold">Color Intergration</h4>
        </div>
        <h6 class="text-xl font-semibold">2023</h6>
      </div>
    </div>
  </div>
</section>

<script>
  document.addEventListener('astro:page-load', () => {
    let sections = gsap.utils.toArray('.w-1\\/2')

    gsap.to(sections, {
      xPercent: -50 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.works',
        pin: true,
        scrub: 1,
        // snap: 1 / (sections.length - 1),
        start: 'top 20%',
        end: '+=2000',
        // markers: true,
      },
    })
  })
</script>
