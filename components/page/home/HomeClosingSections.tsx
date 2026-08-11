import { ArrowRight, Instagram, Linkedin, MessageCircle, Send, Smartphone } from 'lucide-vue-next';
import { defineComponent, type CSSProperties, type PropType } from 'vue';
import Reveal from '~/components/ui/Reveal';
import {
  companyLinks,
  socialLinks,
} from '~/data/siteContent';

const studioSectionStyle = {
  contentVisibility: 'auto',
  containIntrinsicSize: '900px',
} as CSSProperties;

const footerSectionStyle = {
  contentVisibility: 'auto',
  containIntrinsicSize: '900px',
} as CSSProperties;

export default defineComponent({
  name: 'HomeClosingSections',
  props: {
    openModal: {
      type: Function as PropType<() => void>,
      required: false,
    },
    navigateToSection: {
      type: Function as PropType<(event: Event | MouseEvent, id: string) => void>,
      required: true,
    },
  },
  setup(props) {
    const getSocialIcon = (label: string) => {
      switch (label) {
        case 'Telegram':
          return Send;
        case 'WhatsApp':
          return MessageCircle;
        case 'Instagram':
          return Instagram;
        case 'LinkedIn':
          return Linkedin;
        default:
          return Smartphone;
      }
    };

    return () => (
      <>
        <section id="studio" class="relative overflow-hidden bg-stone-50 py-10 sm:py-12 md:py-14" style={studioSectionStyle}>

          <div class="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
            <Reveal>
              <h2 class="bronze-text mb-5 overflow-visible pb-[0.16em] pt-[0.06em] text-3xl font-light leading-[1.18] tracking-tighter sm:mb-6 sm:text-4xl md:text-5xl">
                Готовы построить <span class="font-medium not-italic">будущее?</span>
              </h2>
              <p class="mx-auto mb-6 max-w-2xl text-base text-stone-600 sm:mb-7 sm:text-lg">
                Закажите дом от ЭвоСтройТех и испытайте сочетание выразительной архитектуры, инженерной прочности и бескомпромиссного комфорта.
              </p>
              <button
                onClick={(event: MouseEvent) => props.navigateToSection(event, 'project-form')}
                class="group inline-flex w-full items-center justify-center gap-2 bg-stone-900 px-6 py-3.5 text-sm font-medium text-white shadow-xl shadow-stone-900/15 transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-stone-800 hover:shadow-stone-900/30 sm:w-auto sm:gap-3 sm:px-9 sm:py-4"
              >
                Назначить частную консультацию
                <ArrowRight size={16} class="transition-transform group-hover:translate-x-1" />
              </button>
            </Reveal>
          </div>
        </section>

        <footer class="concrete-dark border-t border-white/10 bg-stone-950 py-8 text-stone-400 sm:py-10" style={footerSectionStyle}>
          <div class="mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
            <div class="mb-6 grid grid-cols-1 gap-7 md:grid-cols-[1.4fr_1fr_1fr] md:items-start md:gap-10">
              <div>
                <div class="mb-4 flex cursor-pointer items-center gap-2" onClick={(event: MouseEvent) => props.navigateToSection(event, 'hero')}>
                  <div class="flex h-6 w-6 items-center justify-center bg-white">
                    <div class="h-2 w-2 border border-stone-900" />
                  </div>
                  <span class="text-lg font-medium tracking-tight text-white">ЭвоСтройТех</span>
                </div>
                <p class="max-w-sm text-sm leading-relaxed text-stone-500">Строительство эволюционных домов по технологии SCIP.</p>
              </div>

              <div>
                <h4 class="mb-4 text-sm font-medium tracking-wide text-white">Компания</h4>
                <ul class="space-y-3 text-sm">
                  {companyLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        onClick={(event: MouseEvent) => props.navigateToSection(event, link.id)}
                        class="transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 class="mb-4 text-sm font-medium tracking-wide text-white">Связь</h4>
                <div class="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  {socialLinks.map((link) => {
                    const Icon = getSocialIcon(link.label);

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        aria-label={link.label}
                        title={link.label}
                        class="group flex h-10 w-10 items-center justify-center rounded-full border border-stone-800 bg-stone-900/60 text-stone-400 transition-[transform,border-color,color,background-color] duration-300 hover:-translate-y-0.5 hover:border-stone-500 hover:bg-stone-900 hover:text-white sm:h-11 sm:w-11"
                      >
                        <Icon size={18} strokeWidth={1.8} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div class="flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-6 text-xs text-stone-600 md:flex-row md:justify-end">
              <div class="flex gap-4 sm:gap-6">
                <a href="#" class="transition-colors hover:text-white">
                  Политика конфиденциальности
                </a>
                <a href="#" class="transition-colors hover:text-white">
                  Условия использования
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  },
});
