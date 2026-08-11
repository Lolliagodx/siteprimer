import { Clock, Shield, Wind } from 'lucide-vue-next';
import { defineComponent, type CSSProperties } from 'vue';
import Reveal from '~/components/ui/Reveal';
import { withSiteBase } from '~/utils/withSiteBase';

const technologyFeatures = [
  {
    Icon: Wind,
    title: 'Пассивная теплоэффективность',
    desc: 'Сплошное ядро из EPS устраняет тепловые мосты, кардинально снижая энергопотребление на отопление и охлаждение. Испытайте истинный климат-контроль.',
  },
  {
    Icon: Shield,
    title: 'Монолитная устойчивость',
    desc: 'Двойные слои железобетона создают структуру, изначально устойчивую к сейсмической активности, ураганным ветрам и огню. Крепость, замаскированная под искусство.',
  },
  {
    Icon: Clock,
    title: 'Ускоренное строительство',
    desc: 'Легкая панельная система позволяет проводить быструю сборку перед нанесением бетона, значительно сокращая сроки проекта без ущерба для качества.',
  },
];

const technologySectionStyle = {
  contentVisibility: 'auto',
  containIntrinsicSize: '1200px',
} as CSSProperties;

export default defineComponent({
  name: 'HomeTechnologySection',
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const scipSectionImageSrc = withSiteBase('/image/i222.webp');
    const scipWallSampleSrc = withSiteBase('/image/scip-wall-sample.jpeg');

    return () => (
      <section id="technology" class="relative overflow-hidden border-y border-stone-200 bg-white py-20 sm:py-24 md:py-32" style={technologySectionStyle}>
        <div class="absolute right-0 top-0 -z-10 hidden h-full w-1/2 bg-stone-50/50 lg:block" />
        <div class="mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
          <div class="mx-auto mb-14 max-w-3xl sm:mb-20 md:mb-24 md:text-center">
            <Reveal>
              <div class="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 sm:mb-4 sm:text-xs">Ключевая технология</div>
              <h2 class="bronze-text mb-4 overflow-visible pb-[0.16em] pt-[0.06em] text-3xl font-light leading-[1.18] tracking-tighter sm:mb-6 sm:text-4xl md:text-6xl">
                Анатомия <span class="font-medium">совершенства.</span>
              </h2>
              <p class="text-base text-stone-500 sm:text-lg">
                SCIP (Структурные Изоляционные Панели) — это передовая строительная система, заменяющая традиционный каркас и кладку.
                Она образует монолитную, неразрушимую оболочку, которая дышит, изолирует и защищает.
              </p>
            </Reveal>
          </div>

          <div class="grid grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-2">
            <div class="relative order-2 overflow-visible lg:order-1">
              <Reveal direction="none">
                <div class="relative mx-auto w-full max-w-[360px] sm:max-w-[400px] lg:ml-8 lg:max-w-[420px]">
                  <div class="absolute -inset-3 translate-x-3 translate-y-3 border border-stone-300/70 bg-stone-100 sm:-inset-4 sm:translate-x-4 sm:translate-y-4" />
                  <div class="absolute -bottom-8 left-1/2 h-16 w-4/5 -translate-x-1/2 bg-stone-950/20 blur-2xl" />

                  <figure class="relative border border-stone-200 bg-white p-2.5 shadow-[0_32px_80px_rgba(28,25,23,0.20),0_10px_28px_rgba(28,25,23,0.10)] sm:p-3">
                    <div class="relative overflow-hidden bg-stone-200">
                      <img
                        src={scipWallSampleSrc}
                        alt="Реальный образец стены SCIP с ядром EPS, арматурой и бетонными слоями"
                        loading="eager"
                        decoding="async"
                        class="aspect-[4/5] h-full w-full object-cover object-center saturate-[0.82] contrast-[1.04]"
                      />
                      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-white/5" />
                      <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
                    </div>

                    <figcaption class="flex items-center justify-between gap-4 px-1 pb-0.5 pt-3 sm:px-2 sm:pt-4">
                      <span class="text-[9px] font-bold uppercase tracking-[0.22em] text-stone-500 sm:text-[10px]">Реальный образец стены SCIP</span>
                      <span class="h-px flex-1 bg-gradient-to-r from-stone-300 to-transparent" />
                    </figcaption>
                  </figure>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div class="relative z-10 mx-auto mt-10 w-full max-w-[300px] sm:mt-12 sm:max-w-[340px] lg:ml-28 lg:translate-x-[20px]">
                  <div class="float-card group border border-stone-200/90 bg-white/95 p-3 shadow-[0_22px_55px_rgba(28,25,23,0.12)] backdrop-blur-md transition-shadow duration-700 hover:shadow-[0_30px_70px_rgba(28,25,23,0.17)] sm:p-4">
                    <div class="mb-2 flex items-center gap-3 sm:mb-3 sm:gap-4">
                      <span class="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 sm:text-[10px]">Сечение SCIP</span>
                      <div class="h-px flex-1 bg-gradient-to-r from-stone-200 to-transparent" />
                    </div>
                    <div class="overflow-hidden border border-stone-100 bg-stone-50">
                      <img
                        src={scipSectionImageSrc}
                        alt="Сечение SCIP панели"
                        loading="lazy"
                        decoding="async"
                        class="w-full bg-white object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                      />
                    </div>
                    <p class="mt-2 text-xs leading-relaxed text-stone-500 sm:mt-3 sm:text-sm">
                      Реальный срез панели показывает логику слоев, армирования и изоляции в той последовательности, в которой система
                      работает в доме.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div class="order-1 flex flex-col gap-8 sm:gap-10 md:gap-12 lg:order-2">
              {technologyFeatures.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 200} direction="left">
                  <div class="group flex gap-4 sm:gap-6">
                    <div class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-colors duration-500 group-hover:bg-stone-900 group-hover:text-white sm:mt-1 sm:h-12 sm:w-12">
                      <feature.Icon size={20} strokeWidth={1.5} class="sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h3 class="mb-2 text-lg font-medium text-stone-900 sm:mb-3 sm:text-xl">{feature.title}</h3>
                      <p class="text-sm leading-relaxed text-stone-500 sm:text-base">{feature.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </section>
    );
  },
});
