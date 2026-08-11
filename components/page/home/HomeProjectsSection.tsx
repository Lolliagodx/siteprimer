import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { computed, defineComponent, ref, type CSSProperties } from 'vue';
import Reveal from '~/components/ui/Reveal';
import { constructionGallery } from '~/data/constructionGallery';

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
    const isLightboxOpen = ref(false);

    const openLightbox = () => {
      isLightboxOpen.value = true;
    };

    const closeLightbox = () => {
      isLightboxOpen.value = false;
    };
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

      if (event.key === 'Escape') {
        closeLightbox();
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
              <Reveal>
                <div id="construction-videos" class="mb-12 border-b border-white/10 pb-8 sm:mb-14 sm:pb-10">
                  <p class="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-400 sm:text-xs">
                    Технология в движении
                  </p>
                  <h2 class="bronze-text-light text-3xl font-light leading-[1.08] tracking-tighter sm:text-4xl md:text-5xl">
                    Галерея видео
                  </h2>
                </div>
              </Reveal>

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

                  <div class="relative isolate h-[360px] overflow-hidden sm:h-[480px] lg:h-[560px]">
                    <img
                      key={current.src}
                      src={current.src}
                      alt={current.alt}
                      loading="eager"
                      decoding="async"
                      class="relative z-10 mx-auto block h-full w-full cursor-default object-contain" onClick={openLightbox}
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

        {isLightboxOpen.value && (
          <div
            class="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/40 p-6 backdrop-blur-xl"
            onClick={closeLightbox}
          >

            <img
              src={current.src}
              alt={current.alt}
              class="relative z-10 max-h-[90vh] max-w-[90vw] scale-95 rounded-xl object-contain shadow-2xl transition-all duration-500 ease-out hover:scale-100"
              onClick={(event) => event.stopPropagation()}
            />

            <button
              type="button"
              aria-label="Закрыть"
              onClick={closeLightbox}
              class="absolute right-6 top-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-3xl text-white backdrop-blur"
            >
              ×
            </button>

          </div>
        )}

        </>
      );
    };
  },
});


























