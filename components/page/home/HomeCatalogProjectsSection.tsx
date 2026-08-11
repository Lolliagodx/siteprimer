import { defineComponent } from 'vue';
import { ArrowUpRight } from 'lucide-vue-next';
import Reveal from '~/components/ui/Reveal';
import { projectCards } from '~/data/siteContent';

const catalogProjects = projectCards.filter((project) => project.featured).slice(0, 3);

export default defineComponent({
  name: 'HomeCatalogProjectsSection',
  setup() {
    return () => (
      <section id="projects" class="bg-stone-50 py-16 sm:py-20 md:py-28">
        <div class="mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
          <Reveal>
            <div class="grid gap-5 border-b border-stone-300 pb-8 lg:grid-cols-12 lg:items-end">
              <div class="lg:col-span-7">
                <p class="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">Каталог решений</p>
                <h2 class="bronze-text text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">Проекты домов</h2>
              </div>
              <p class="max-w-2xl leading-relaxed text-stone-600 lg:col-span-5">Реализованные объекты и проекты на технологии SCIP.</p>
            </div>
          </Reveal>

          <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {catalogProjects.map((project, index) => (
              <Reveal delay={index * 100}>
                <article class="group h-full overflow-hidden border border-stone-200 bg-white">
                  <div class="aspect-[4/3] overflow-hidden bg-stone-200">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                  </div>
                  <div class="p-6">
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <p class="text-[10px] uppercase tracking-[0.2em] text-stone-500">{project.location}</p>
                        <h3 class="mt-2 text-xl font-medium text-stone-900">{project.title}</h3>
                      </div>
                      <ArrowUpRight class="h-5 w-5 shrink-0 text-amber-700/70" stroke-width={1.4} />
                    </div>
                    <dl class="mt-6 divide-y divide-stone-200 border-y border-stone-200 text-sm">
                      <div class="flex justify-between gap-4 py-3"><dt class="text-stone-500">Площадь</dt><dd class="min-w-24 border-b border-stone-300" aria-label="Площадь проекта" /></div>
                      <div class="flex justify-between gap-4 py-3"><dt class="text-stone-500">Стоимость</dt><dd class="min-w-24 border-b border-stone-300" aria-label="Стоимость проекта" /></div>
                      <div class="flex justify-between gap-4 py-3"><dt class="text-stone-500">Спецификация</dt><dd class="min-w-24 border-b border-stone-300" aria-label="Спецификация проекта" /></div>
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
