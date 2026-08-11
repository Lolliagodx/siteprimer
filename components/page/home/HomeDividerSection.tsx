import { ArrowRight } from 'lucide-vue-next';
import { defineComponent, type PropType } from 'vue';
import Reveal from '~/components/ui/Reveal';

export default defineComponent({
  name: 'HomeDividerSection',

  props: {
    navigateToSection: {
      type: Function as PropType<(event: Event | MouseEvent, id: string) => void>,
      required: true,
    },
  },

  setup(props) {
    return () => (
      <section class="relative overflow-hidden border-y border-stone-200 bg-stone-100 py-10 text-stone-900 sm:py-12 md:py-14">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,113,108,0.10),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(231,229,228,0.88))]" />

        <div class="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
          <div class="grid items-center gap-7 md:grid-cols-[1fr_auto] md:gap-12">

            <Reveal>
              <div>
                <div class="mb-4 flex items-center gap-3">
                  <div class="h-px w-10 bg-stone-500 sm:w-14" />

                  <span class="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500 sm:text-xs">
                    Будущее строительства
                  </span>
                </div>

                <h2 class="bronze-text max-w-5xl text-3xl font-light leading-[1.02] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl">
                  <span class="block">Дом который вы искали и нашли</span>
                  <span class="block">В него хочется возвращаться</span>
                  <span class="block">Неповторимость во всем</span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <button
                type="button"
                onClick={(event: MouseEvent) =>
                  props.navigateToSection(event, 'technology')
                }
                class="group inline-flex w-full items-center justify-center gap-2 border border-stone-300 bg-white px-6 py-3.5 text-sm font-medium text-stone-900 shadow-sm transition-all hover:border-stone-900 hover:bg-stone-900 hover:text-white md:w-auto"
              >
                Изучить технологию SCIP
                <ArrowRight
                  size={16}
                  class="transition-transform group-hover:translate-x-1"
                />
              </button>
            </Reveal>

          </div>
        </div>
      </section>
    );
  },
});



