import { component$, type HTMLAttributes } from '@builder.io/qwik';

export const NetlifyLogo = component$<HTMLAttributes<SVGSVGElement>>(
  (props) => (
    <svg viewBox="0 0 128 64" role="img" aria-label="Netlify logo" {...props}>
      <path
        class="text-[#05BDBA] dark:text-[#32e6e2]"
        fill="currentColor"
        d="M30.33 57V44.22l.26-.26h3.2l.26.26V57l-.27.27H30.6Zm0-37.23V7l.26-.27h3.2l.26.27v12.76l-.27.26H30.6ZM19.35 48.02h-.44l-2.2-2.2v-.43l4.12-4.12h2.32l.31.3v2.33Zm-2.63-29.29v-.45l2.19-2.19h.44l4.11 4.11v2.32l-.31.32h-2.32ZM2.28 30.14h18.08l.26.26v3.2l-.26.26H2.28L2 33.59V30.4Zm123.44 0 .27.27v3.19l-.27.26h-18.34l-.27-.26 1.33-3.2.27-.26Z"
      />
      <path
        class="text-[#014847] dark:text-white"
        fill="currentColor"
        d="M38.17 38.65h-3.19l-.26-.27v-7.46c0-1.33-.52-2.36-2.13-2.4-.82-.01-1.76 0-2.77.05l-.16.15v9.66l-.26.26h-3.19l-.26-.26V25.62l.26-.26h7.18a5.05 5.05 0 0 1 5.05 5.05v7.97l-.27.26Zm15.46-5.59-.27.27h-8.25l-.26.26a2.4 2.4 0 0 0 2.66 2.13 2.08 2.08 0 0 0 1.86-.8l.27-.27h3.19l.26.27c-.26 1.6-1.6 3.99-5.59 3.99-4.52 0-6.64-3.2-6.64-6.92s2.12-6.92 6.38-6.92 6.39 3.2 6.39 6.92Zm-4-2.66a2.4 2.4 0 0 0-4.78 0l.26.27h4.26Zm11.44 4.26a.7.7 0 0 0 .8.8h2.4l.26.26v2.66l-.27.26h-2.39c-2.4 0-4.52-1.06-4.52-3.99V28.8l-.26-.26h-1.87l-.26-.27v-2.66l.26-.26h1.87l.26-.27v-2.4l.26-.26h3.2l.26.27v2.4l.26.26h2.93l.26.26v2.66l-.26.27h-2.93l-.26.26v5.85Zm9.85 3.99h-3.2l-.26-.26v-18.1l.27-.26h3.19l.26.26v18.1l-.26.25Zm7.18-15.43h-3.2l-.26-.27V20.3l.27-.26h3.19l.26.26v2.66Zm0 15.43h-3.2l-.26-.26V25.62l.27-.27h3.19l.26.27v12.77ZM90.6 20.3v2.65l-.26.27h-2.4a.7.7 0 0 0-.8.8v1.06l.27.27h2.66l.27.26v2.66l-.27.27h-2.66l-.26.26v9.58l-.27.26H83.7l-.26-.26V28.8l-.27-.27H81.3l-.27-.26V25.6l.27-.26h1.86l.27-.27v-1.06c0-2.93 2.13-4 4.52-4h2.39l.27.27Zm9.84 18.61c-1.06 2.66-2.12 4.26-5.85 4.26h-1.33l-.26-.26v-2.66l.26-.27h1.33c1.33 0 1.6-.26 1.87-1.06v-.27L92.2 28.28V25.6l.26-.26h2.4l.26.26 3.2 9.05h.26l3.19-9.05.26-.26h2.4l.26.26v2.67l-4.26 10.64Z"
      />
    </svg>
  )
);
