import { ArrowLeft, ArrowRight, Droplets, Fan, ShieldCheck, ThermometerSun } from 'lucide-vue-next';
import { defineComponent } from 'vue';
import Reveal from '~/components/ui/Reveal';

const wallResults = [
  {
    Icon: Droplets,
    title: 'Влага не остаётся в стене',
    text: 'Бетон принимает кратковременный избыток влаги и возвращает его в помещение, когда воздух становится суше.',
  },
  {
    Icon: ShieldCheck,
    title: 'EPS не впитывает воду',
    text: 'Закрытые поры жёсткого утеплителя не дают влаге проникать в сердечник, гнить или разрушать конструкцию.',
  },
  {
    Icon: Fan,
    title: 'Дом дышит вентиляцией',
    text: 'Принудительная вентиляция с рекуперацией удаляет лишнюю влагу и возвращает до 90% тепла без сквозняков.',
  },
];

export default defineComponent({
  name: 'IntelligentWallSection',
  setup() {
    return () => (
      <section id="intelligent-wall" class="relative overflow-hidden border-y border-stone-200 bg-stone-50 py-16 sm:py-20 md:py-24">
        <div class="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
          <Reveal>
            <div class="max-w-5xl">
              <p class="text-[10px] font-bold uppercase tracking-[0.28em] text-stone-500 sm:text-xs">Интеллектуальная стена ЭвоСтройТех</p>
              <h2 class="bronze-text mt-4 overflow-visible pb-[0.16em] text-3xl font-light leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-6xl">
                Как SCIP управляет влагой и микроклиматом
              </h2>
              <p class="mt-4 max-w-4xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
                Вы боитесь, что дом из SCIP — это «термос»? Дышать должны люди, а не стены. Даже деревянный дом портится без
                правильно рассчитанной вентиляции.
              </p>
            </div>
          </Reveal>

          <div class="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:items-stretch">
            <Reveal>
              <div class="h-full border border-stone-200 bg-white p-6 shadow-[0_24px_60px_rgba(28,25,23,0.08)] sm:p-8 md:p-10">
                <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-stone-400 sm:text-xs">Почему «дышащие стены» опасны</p>
                <div class="mt-5 space-y-4 text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
                  <p>
                    Речь идёт не о воздухе, а о водяном паре. Зимой внутри дома влажнее, снаружи холоднее и суше. Пар движется к
                    холодной стороне стены.
                  </p>
                  <p>
                    В паропроницаемых минеральных материалах влага может встретить холод, превратиться в воду и остаться внутри.
                    Повторяющиеся циклы замерзания и оттаивания повышают риск сырости, плесени, трещин и потери тепла.
                  </p>
                  <p class="border-l-2 border-amber-500 pl-4 font-medium text-stone-900">
                    «Дышащая стена» не заменяет вентиляцию: через ограждающие конструкции уходит лишь небольшая часть бытовой влаги.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} direction="left">
              <div class="relative flex h-full min-h-[460px] flex-col justify-between overflow-hidden bg-stone-950 p-6 text-white shadow-[0_28px_70px_rgba(28,25,23,0.20)] sm:p-8">
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.16),transparent_36%)]" />
                <div class="relative">
                  <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-stone-400 sm:text-xs">Логика стены</p>
                  <h3 class="mt-3 text-2xl font-light tracking-[-0.04em] sm:text-3xl">Бетон → EPS → бетон</h3>
                </div>

                <div class="relative my-8">
                  <div class="mb-4 flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-xs">
                    <span class="text-sky-200">Пар из помещения входит в бетон</span>
                    <span class="flex items-center gap-2 text-amber-300"><ArrowLeft size={18} /> Возвращается при сухом воздухе</span>
                  </div>

                  <div class="grid grid-cols-[1fr_auto_1.15fr_auto_1fr] items-stretch gap-2 sm:gap-3">
                    <div class="relative flex min-h-44 flex-col items-center justify-center border border-sky-200/30 bg-stone-700 px-2 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-100 sm:text-xs">
                      <Droplets class="mb-3 text-sky-200" size={22} />
                      Внутренний бетон
                      <span class="mt-2 text-[9px] normal-case tracking-normal text-stone-300">Буфер влаги</span>
                    </div>
                    <div class="flex flex-col items-center justify-center gap-4">
                      <ArrowRight class="text-sky-200" size={20} />
                      <ArrowLeft class="text-amber-300" size={20} />
                    </div>
                    <div class="relative flex min-h-44 items-center justify-center overflow-hidden border border-amber-200/30 bg-stone-100 px-2 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-stone-800 sm:text-xs">
                      <div class="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_30%_30%,#d6d3d1_0,transparent_18%),radial-gradient(circle_at_70%_70%,#d6d3d1_0,transparent_16%)]" />
                      <span class="relative">Жёсткий EPS<br />останавливает влагу</span>
                    </div>
                    <div class="flex items-center justify-center text-stone-600"><ShieldCheck size={20} /></div>
                    <div class="flex min-h-44 flex-col items-center justify-center border border-white/15 bg-stone-700 px-2 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-200 sm:text-xs">
                      Наружный бетон
                      <span class="mt-2 text-[9px] normal-case tracking-normal text-stone-400">Остаётся сухим</span>
                    </div>
                  </div>

                  <div class="mt-4 grid grid-cols-2 gap-3 text-[10px] leading-4 sm:text-xs">
                    <div class="border-l-2 border-sky-300 pl-3 text-stone-300">При повышенной влажности внутренний бетон принимает часть водяного пара.</div>
                    <div class="border-l-2 border-amber-300 pl-3 text-stone-300">Когда воздух становится суше, бетон отдаёт влагу обратно в помещение.</div>
                  </div>
                </div>

                <div class="relative grid grid-cols-2 gap-3 text-xs leading-5 text-stone-300 sm:text-sm sm:leading-6">
                  <div class="border border-white/10 bg-white/5 p-3 sm:p-4">
                    <ThermometerSun size={18} class="mb-2 text-amber-300" />
                    Точка росы находится в толще утеплителя, который не впитывает воду и не гниёт.
                  </div>
                  <div class="border border-white/10 bg-white/5 p-3 sm:p-4">
                    <Droplets size={18} class="mb-2 text-sky-200" />
                    Бетонный слой работает как буфер: принимает избыток и отдаёт его обратно при сухом воздухе.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div class="mt-8 grid gap-px overflow-hidden border border-stone-200 bg-stone-200 md:grid-cols-3">
            {wallResults.map(({ Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 100}>
                <div class="h-full bg-white p-6 sm:p-7">
                  <Icon size={24} strokeWidth={1.4} class="text-stone-500" />
                  <h3 class="mt-5 text-xl font-medium tracking-[-0.03em] text-stone-900">{title}</h3>
                  <p class="mt-3 text-sm leading-7 text-stone-600 sm:text-base">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180}>
            <div class="mt-8 border border-stone-900 bg-stone-900 px-6 py-6 text-stone-100 sm:px-8 sm:py-7">
              <p class="text-lg font-light leading-8 sm:text-xl">
                «Умный термос» — это комплимент: тепло не уходит через щели, стена остаётся сухой, а свежим воздухом управляет
                современная вентиляция. Дышать должны люди. Не стены.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    );
  },
});
