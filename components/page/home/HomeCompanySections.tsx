import { defineComponent } from 'vue';
import { Building2, FileText, UserRound } from 'lucide-vue-next';
import Reveal from '~/components/ui/Reveal';

const partnerCards = [
  {
    title: 'Итальянские партнёры',
    text: 'Проектирование и строительство частных домов, посёлков, коммерческих и социальных объектов.',
  },
  {
    title: 'Santilli',
    text: '',
  },
];

const teamCards = Array.from({ length: 4 });

export default defineComponent({
  name: 'HomeCompanySections',
  setup() {
    return () => (
      <>
        <section id="partners" class="bg-stone-950 py-16 text-stone-100 sm:py-20 md:py-28">
          <div class="mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
            <Reveal>
              <p class="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-amber-200/70">Международная экспертиза</p>
              <div class="grid gap-5 lg:grid-cols-12 lg:items-end">
                <h2 class="bronze-text-light text-3xl font-light tracking-tight sm:text-4xl md:text-5xl lg:col-span-7">Партнёры</h2>
              </div>
            </Reveal>

            <div class="mt-10 grid gap-4 md:grid-cols-2">
              {partnerCards.map((card, index) => (
                <Reveal delay={index * 120}>
                  <article class="h-full border border-white/10 bg-white/[0.035] p-6 sm:p-8">
                    <Building2 class="mb-10 h-7 w-7 text-amber-200/75" stroke-width={1.35} />
                    <h3 class="text-xl font-medium text-white sm:text-2xl">{card.title}</h3>
                    {card.text ? <p class="mt-4 max-w-xl leading-relaxed text-stone-400">{card.text}</p> : <div class="mt-5 h-16" aria-hidden="true" />}
                    <div class="mt-7 inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-xs uppercase tracking-[0.18em] text-stone-400">
                      <FileText class="h-4 w-4" stroke-width={1.4} />
                      Презентация
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="team" class="bg-stone-100 py-16 sm:py-20 md:py-28">
          <div class="mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
            <Reveal>
              <p class="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">Люди проекта</p>
              <h2 class="bronze-text text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">Команда</h2>
              <p class="mt-5 max-w-3xl leading-relaxed text-stone-600">
                В нашей давно сплочённой команде — российские и итальянские специалисты с опытом в строительстве более 20 лет.
              </p>
            </Reveal>

            <div class="mt-10 grid gap-5 md:grid-cols-2">
              {teamCards.map((_, index) => (
                <Reveal delay={index * 120}>
                  <article class="grid h-full gap-0 border border-stone-200 bg-white sm:grid-cols-[180px_1fr]">
                    <div class="flex min-h-52 items-center justify-center bg-stone-200/70 p-6 text-stone-400">
                      <UserRound class="h-12 w-12" stroke-width={1} />
                    </div>
                    <div class="flex min-h-52 flex-col justify-center gap-4 p-6 sm:p-8" aria-hidden="true">
                      <div class="h-2 w-28 bg-amber-700/15" />
                      <div class="h-5 w-3/5 bg-stone-200" />
                      <div class="space-y-2 pt-2">
                        <div class="h-2 w-full bg-stone-100" />
                        <div class="h-2 w-11/12 bg-stone-100" />
                        <div class="h-2 w-4/5 bg-stone-100" />
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  },
});
