import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { computed, defineComponent, ref, type CSSProperties } from 'vue';
import Reveal from '~/components/ui/Reveal';
import { constructionGallery } from '~/data/constructionGallery';
import { stats } from '~/data/siteContent';

const projectSectionStyle = {
  contentVisibility: 'auto',
  containIntrinsicSize: '900px',
} as CSSProperties;

const clampIndex = (value: number) => {
  const total = constructionGallery.length;
  return ((value % total) + total) % total;
};

export default defineComponent({
  name: 'HomeProjectsSection',
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
    isMobilePortrait: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const currentIndex = ref(0);
    const touchStartX = ref<number | null>(null);

    const previousIndex = computed(() => clampIndex(currentIndex.value - 1));
    const nextIndex = computed(() => clampIndex(currentIndex.value + 1));
    const progress = computed(() => ((currentIndex.value + 1) / constructionGallery.length) * 100);

    const previous = () => {
      currentIndex.value = previousIndex.value;
    };

    const next = () => {
      currentIndex.value = nextIndex.value;
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        previous();
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        next();
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartX.value = event.touches[0]?.clientX ?? null;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (touchStartX.value === null) {
        return;
      }

      const endX = event.changedTouches[0]?.clientX ?? touchStartX.value;
      const delta = endX - touchStartX.value;
      touchStartX.value = null;

      if (Math.abs(delta) < 45) {
        return;
      }

      if (delta > 0) {
        previous();
      } else {
        next();
      }
    };

    return () => {
      const current = constructionGallery[currentIndex.value]!;
      const previousItem = constructionGallery[previousIndex.value]!;
      const nextItem = constructionGallery[nextIndex.value]!;

      return (
        <>
          <section
            id="construction-photos"
            class="relative overflow-hidden bg-stone-900 py-16 text-stone-50 sm:py-20 md:py-24"
            style={projectSectionStyle}
          >
            <div class="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-10 lg:px-12">
              <div class="mb-8 sm:mb-10 md:mb-12">
                <Reveal>
                  <p class="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500 sm:text-xs">
                    Реальные объекты и этапы работ
                  </p>
                  <h2 class="bronze-text-light overflow-visible pb-[0.12em] text-4xl font-light leading-[1.08] tracking-tighter sm:text-5xl md:text-6xl">
                    Фото <span class="font-medium">строительства</span>
                  </h2>
                </Reveal>
              </div>

              <div
                class="outline-none"
                tabindex={0}
                aria-label="Галерея фотографий строительства"
                onKeydown={handleKeydown}
                onTouchstart={handleTouchStart}
                onTouchend={handleTouchEnd}
              >
                <div class="grid grid-cols-[12%_76%_12%] items-center gap-2 sm:grid-cols-[16%_68%_16%] sm:gap-4 md:grid-cols-[20%_60%_20%] md:gap-6 lg:gap-8">
                  <button
                    type="button"
                    aria-label="Предыдущее фото"
                    onClick={previous}
                    class="group relative h-[420px] overflow-hidden bg-stone-950 opacity-60 transition-all duration-500 hover:opacity-75 sm:h-[480px] lg:h-[560px]"
                  >
                    <img
                      src={previousItem.src}
                      alt={previousItem.alt}
                      loading="lazy"
                      decoding="async"
                      class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div class="absolute inset-0 bg-stone-950/20" />
                  </button>

                  <div class="relative isolate h-[560px] overflow-hidden bg-stone-950">
                    <img
                      key={current.src}
                      src={current.src}
                      alt={current.alt}
                      loading="eager"
                      decoding="async"
                      class="relative z-10 block max-h-full max-w-full object-contain"
                    />

                    <button
                      type="button"
                      aria-label="Предыдущее фото"
                      onClick={previous}
                      class="absolute z-30 left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-stone-950/55 text-white backdrop-blur-md transition hover:bg-stone-950/80 sm:left-5 sm:h-12 sm:w-12"
                    >
                      <ChevronLeft size={24} strokeWidth={1.5} />
                    </button>

                    <button
                      type="button"
                      aria-label="Следующее фото"
                      onClick={next}
                      class="absolute z-30 right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-stone-950/55 text-white backdrop-blur-md transition hover:bg-stone-950/80 sm:right-5 sm:h-12 sm:w-12"
                    >
                      <ChevronRight size={24} strokeWidth={1.5} />
                    </button>
                  </div>

                  <button
                    type="button"
                    aria-label="Следующее фото"
                    onClick={next}
                    class="group relative h-[420px] overflow-hidden bg-stone-950 opacity-60 transition-all duration-500 hover:opacity-75 sm:h-[480px] lg:h-[560px]"
                  >
                    <img
                      src={nextItem.src}
                      alt={nextItem.alt}
                      loading="lazy"
                      decoding="async"
                      class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div class="absolute inset-0 bg-stone-950/20" />
                  </button>
                </div>

                <div class="mx-auto mt-6 flex max-w-3xl items-center gap-4 sm:mt-8 sm:gap-6">
                  <button
                    type="button"
                    aria-label="Предыдущее фото"
                    onClick={previous}
                    class="text-stone-400 transition-colors hover:text-white"
                  >
                    <ChevronLeft size={22} strokeWidth={1.4} />
                  </button>

                  <div class="flex-1">
                    <div class="h-px overflow-hidden bg-white/15">
                      <div
                        class="h-full bg-gradient-to-r from-[#a9783f] via-[#f0d0a1] to-[#a9783f] transition-[width] duration-500 ease-out"
                        style={{ width: `${progress.value}%` }}
                      />
                    </div>
                  </div>

                  <div class="min-w-[86px] text-center text-xs font-medium tabular-nums tracking-[0.14em] text-stone-300 sm:text-sm">
                    {String(currentIndex.value + 1).padStart(2, '0')} / {constructionGallery.length}
                  </div>

                  <button
                    type="button"
                    aria-label="Следующее фото"
                    onClick={next}
                    class="text-stone-400 transition-colors hover:text-white"
                  >
                    <ChevronRight size={22} strokeWidth={1.4} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section class="border-b border-stone-200 bg-stone-100 py-12 sm:py-14 md:py-16">
            <div class="mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
              <div class="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 md:gap-12 md:divide-x md:divide-stone-200">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    class={[
                      'flex flex-col items-center text-center',
                      index % 2 === 1 ? 'border-l border-stone-200 pl-6 sm:pl-8 md:border-l-0 md:pl-4' : 'pr-2 md:px-4',
                      index >= 2 ? 'border-t border-stone-200 pt-6 sm:pt-8 md:border-t-0 md:pt-0' : 'pb-2 md:pb-0',
                    ]}
                  >
                    <Reveal delay={index * 100}>
                      <div class="mb-2 text-2xl font-light text-stone-900 sm:text-3xl md:text-5xl">{stat.value}</div>
                      <div class="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-500 sm:text-xs">{stat.label}</div>
                    </Reveal>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      );
    };
  },
});



















