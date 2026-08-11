import { ChevronDown } from 'lucide-vue-next';
import { defineComponent, ref } from 'vue';
import Reveal from '~/components/ui/Reveal';
import { technologyAccordionCards } from '~/data/siteContent';

export default defineComponent({
  name: 'HomeStageOverviewSection',
  setup() {
    const activeCard = ref<string | null>(null);

    const toggleCard = (id: string) => {
      activeCard.value = activeCard.value === id ? null : id;
    };

    return () => (
      <section class="border-y border-stone-200 bg-white py-12 sm:py-14 md:py-16">
        <div class="mx-auto max-w-7xl space-y-4 px-5 sm:space-y-5 sm:px-6 md:px-12">
          {technologyAccordionCards.map((card, index) => {
            const isOpen = activeCard.value === card.title;

            return (
              <Reveal key={card.title} delay={index * 90}>
                <div class="overflow-hidden border border-stone-200 bg-stone-50/80 backdrop-blur-sm">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`stage-overview-card-${index}`}
                    onClick={() => toggleCard(card.title)}
                    class="group relative flex min-h-[100px] w-full items-center justify-center px-5 py-5 text-center transition-[background-color,border-color] duration-300 hover:bg-white sm:min-h-[124px] sm:px-8 sm:py-6 md:min-h-[168px] md:px-14 md:py-10"
                  >
                    <ChevronDown
                      size={18}
                      class={[
                        'absolute right-4 top-4 text-stone-400 transition-transform duration-300 sm:right-6 sm:top-6 md:right-8 md:top-8',
                        isOpen ? 'rotate-180' : '',
                      ]}
                    />
                    <h3 class="max-w-4xl text-2xl font-light leading-[1.06] tracking-tighter text-stone-900 sm:text-3xl md:text-5xl">
                      {card.title}
                    </h3>
                  </button>

                  <div
                    id={`stage-overview-card-${index}`}
                    class={[
                      'grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    ]}
                  >
                    <div class="overflow-hidden">
                      <div class="border-t border-stone-200 bg-white px-5 py-4 text-stone-600 sm:px-6 sm:py-5 md:px-10 md:py-6">
                        <div class="mx-auto grid max-w-5xl gap-4 sm:gap-5 md:gap-6">
                          {card.paragraphs.map((paragraph) => (
                            <p key={paragraph.slice(0, 32)} class="text-sm leading-7 sm:text-base sm:leading-8 md:text-lg md:leading-9">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    );
  },
});
