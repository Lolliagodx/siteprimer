import { defineComponent } from 'vue';
import Reveal from '~/components/ui/Reveal';
import { stats } from '~/data/siteContent';

export default defineComponent({
  name: 'HomeStatsSection',
  setup() {
    return () => (
      <section class="border-b border-stone-200 bg-stone-100 py-12 sm:py-14 md:py-16">
        <div class="mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-5 lg:gap-6 lg:divide-x lg:divide-stone-200">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                class={[
                  'flex flex-col items-center text-center',
                  index % 2 === 1 ? 'sm:border-l sm:border-stone-200 sm:pl-8 lg:border-l-0 lg:pl-4' : 'sm:pr-2 lg:px-4',
                  index >= 2 ? 'border-t border-stone-200 pt-6 sm:pt-8 lg:border-t-0 lg:pt-0' : 'pb-2 lg:pb-0',
                ]}
              >
                <Reveal delay={index * 100}>
                  <div class="mb-2 text-2xl font-light leading-tight text-stone-900 sm:text-3xl lg:text-[2rem] xl:text-4xl">{stat.value}</div>
                  <div class="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-500 sm:text-xs">{stat.label}</div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
