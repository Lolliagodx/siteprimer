import { useHead } from '#imports';
import { defineComponent, ref, watch, type PropType } from 'vue';
import Reveal from '~/components/ui/Reveal';
import { withSiteBase } from '~/utils/withSiteBase';

export default defineComponent({
  name: 'HeroSection',
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    isWeakDevice: {
      type: Boolean,
      default: false,
    },
    navigateToSection: {
      type: Function as PropType<(event: Event | MouseEvent, id: string) => void>,
      required: true,
    },
  },

  setup(props) {
    const isReady = ref(false);
    const logoHref = withSiteBase('/image/logo.webp');
    const videoHref = withSiteBase('/video/technology-video.mp4');

    useHead({
      link: [
        { rel: 'preload', as: 'image', href: logoHref },
        { rel: 'preload', as: 'video', href: videoHref, type: 'video/mp4' },
      ],
    });

    watch(
      () => props.isLoading,
      (loading) => {
        if (loading) {
          isReady.value = false;
          return;
        }

        isReady.value = true;
      },
      { immediate: true },
    );

    return () => {
      const isReadyValue = isReady.value;

      return (
        <section
          id="hero"
          class="relative min-h-screen w-full overflow-hidden bg-stone-950 text-white"
        >
          <div class="absolute inset-0">
            <video
              class={[
                'absolute inset-0 h-full w-full object-cover',
                props.isWeakDevice ? '' : 'will-change-transform',
              ]}
              autoplay
              muted
              loop
              playsinline
              preload={props.isWeakDevice ? 'metadata' : 'auto'}
            >
              <source src={videoHref} type="video/mp4" />
            </video>

            <div class="absolute inset-0 bg-stone-950/55" />
            <div class="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-stone-950/35 to-stone-950/85" />
          </div>

          <div class="relative z-20 mx-auto max-w-7xl px-5 pb-6 pt-16 sm:px-6 sm:pb-8 sm:pt-20 md:px-12 md:pb-10 md:pt-24 lg:pb-12 lg:pt-28">
            <div class="mx-auto max-w-6xl">

              <Reveal isReady={isReadyValue} delay={200}>
                <div class="mb-6 sm:mb-8">
                  <div class="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4">
                    <div class="h-px w-10 bg-amber-200/80 sm:w-14" />

                    <span class="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-200 sm:text-xs">
                      Эволюционная технология строительства
                    </span>
                  </div>

                  <h2 class="bronze-text-light text-4xl font-light uppercase leading-[0.9] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">
                    ЭВОСТРОЙТЕХ
                  </h2>
                </div>
              </Reveal>

              <Reveal isReady={isReadyValue} delay={350}>
                <div class="max-w-5xl border border-white/15 bg-stone-950/55 px-5 py-5 backdrop-blur-md sm:px-8 sm:py-7 md:px-10 md:py-8">
                  <p class="max-w-4xl text-[13px] font-light leading-6 text-stone-100 sm:text-base sm:leading-7 md:text-xl md:leading-9 lg:text-[1.35rem]">
                    ЭвоСтройТех — это монолитная железобетонная система со встроенной тепло-звукоизоляцией и инженерными сетями.
                    Стены, перекрытия, лестницы состоят из сердечника из вспененного полистирола EPS
                    (из которого производят упаковку для продуктов питания), с электросварной пространственной сеткой
                    из высокопрочной оцинкованной стали внутри и на каждой из сторон, арматуры и бетона с двух сторон
                    под чистовую отделку.
                  </p>
                </div>
              </Reveal>

              <Reveal isReady={isReadyValue} delay={500}>
                <div class="mt-6 border border-white/15 bg-stone-950/70 p-5 backdrop-blur-xl sm:mt-8 sm:p-8 md:p-10">

                  <div class="mb-7 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
                    <div>
                      <p class="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-200/80 sm:text-xs">
                        Ваш будущий дом
                      </p>

                      <h3 class="bronze-text-light mt-3 text-3xl font-light leading-none tracking-[-0.045em] sm:text-4xl md:text-5xl">
                        Обсудить проект
                      </h3>
                    </div>

                    <p class="max-w-2xl text-sm leading-6 text-stone-300 sm:text-base sm:leading-7">
                      Расскажите основные параметры будущего дома. Мы свяжемся с вами,
                      уточним детали и предложим подходящий вариант реализации.
                    </p>
                  </div>

                  <form
                    class="grid gap-4 sm:grid-cols-2 sm:gap-5"
                    onSubmit={(event) => {
                      event.preventDefault();
                    }}
                  >
                    <label class="block">
                      <span class="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-300">
                        Телефон
                      </span>

                      <input
                        type="tel"
                        name="phone"
                        autocomplete="tel"
                        placeholder="+7 999 000-00-00"
                        class="w-full border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-stone-500 focus:border-amber-200/60 sm:px-5 sm:py-4"
                      />
                    </label>

                    <label class="block">
                      <span class="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-300">
                        Электронная почта
                      </span>

                      <input
                        type="email"
                        name="email"
                        autocomplete="email"
                        placeholder="mail@example.com"
                        class="w-full border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-stone-500 focus:border-amber-200/60 sm:px-5 sm:py-4"
                      />
                    </label>

                    <label class="block">
                      <span class="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-300">
                        Площадь дома
                      </span>

                      <input
                        type="text"
                        name="area"
                        placeholder="Например, 150 м²"
                        class="w-full border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-stone-500 focus:border-amber-200/60 sm:px-5 sm:py-4"
                      />
                    </label>

                    <label class="block">
                      <span class="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-300">
                        Этажность
                      </span>

                      <input
                        type="text"
                        name="floors"
                        placeholder="Например, 2 этажа"
                        class="w-full border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-stone-500 focus:border-amber-200/60 sm:px-5 sm:py-4"
                      />
                    </label>

                    <label class="block sm:col-span-2">
                      <span class="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-300">
                        Планируемый бюджет
                      </span>

                      <input
                        type="text"
                        name="budget"
                        placeholder="Укажите ориентировочный бюджет"
                        class="w-full border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-stone-500 focus:border-amber-200/60 sm:px-5 sm:py-4"
                      />
                    </label>

                    <label class="block sm:col-span-2">
                      <span class="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-300">
                        Комментарий
                      </span>

                      <textarea
                        name="comment"
                        rows={4}
                        placeholder="Расскажите о будущем доме, участке, архитектуре и других пожеланиях"
                        class="w-full resize-none border border-white/15 bg-white/5 px-4 py-3.5 text-sm leading-6 text-white outline-none transition-colors placeholder:text-stone-500 focus:border-amber-200/60 sm:px-5 sm:py-4"
                      />
                    </label>

                    <div class="sm:col-span-2">
                      <div class="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

                        <p class="max-w-2xl text-[10px] leading-5 text-stone-400 sm:text-xs">
                          Нажимая «Отправить заявку», вы соглашаетесь на обработку
                          указанных вами персональных данных исключительно для связи
                          по вашему обращению.
                        </p>

                        <button
                          type="submit"
                          class="shrink-0 bg-white px-7 py-4 text-sm font-medium text-stone-950 transition-colors hover:bg-stone-200 sm:px-9"
                        >
                          Отправить заявку
                        </button>

                      </div>
                    </div>
                  </form>
                </div>
              </Reveal>

            </div>
          </div>
        </section>
      );
    };
  },
});

