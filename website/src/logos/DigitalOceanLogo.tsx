import { component$, type HTMLAttributes } from '@builder.io/qwik';

export const DigitalOceanLogo = component$<HTMLAttributes<SVGSVGElement>>(
  ({ ...props }) => (
    <svg
      viewBox="0 0 200 64"
      role="img"
      aria-label="DigitalOcean logo"
      fill="#0069ff"
      {...props}
    >
      <path d="M60.87 25.06a12.05 12.05 0 0 0-6.98-2h-5.96V42h5.96a11.42 11.42 0 0 0 6.98-2.08 7 7 0 0 0 2.4-3.03 11.13 11.13 0 0 0 .86-4.47 11.08 11.08 0 0 0-.85-4.43 6.72 6.72 0 0 0-2.41-2.93Zm-9.45 1.24h1.88a9.9 9.9 0 0 1 5.12 1.2c1.43.88 2.18 2.54 2.18 4.92 0 2.48-.75 4.2-2.18 5.15a9.24 9.24 0 0 1-5.08 1.24h-1.9V26.29Zm16.88-3.46a2.06 2.06 0 0 0-2.09 2.02 1.9 1.9 0 0 0 .62 1.47 2.02 2.02 0 0 0 1.47.62 1.9 1.9 0 0 0 1.46-.62 2.07 2.07 0 0 0 .62-1.47 1.79 1.79 0 0 0-.62-1.43 2.04 2.04 0 0 0-1.46-.59Zm-1.73 5.83h3.36v13.37h-3.36Zm15.58 1.11a5.01 5.01 0 0 0-3.36-1.43 6.17 6.17 0 0 0-4.6 1.89 6.62 6.62 0 0 0-1.8 4.79 6.78 6.78 0 0 0 1.8 4.8 6.17 6.17 0 0 0 4.6 1.88 5.21 5.21 0 0 0 3.32-1.07v.32a3.58 3.58 0 0 1-.88 2.58 3.28 3.28 0 0 1-2.4.88c-1.57 0-2.52-.62-3.72-2.22l-2.28 2.18.06.1a8.18 8.18 0 0 0 2.25 2.03 6.75 6.75 0 0 0 3.75.97 6.43 6.43 0 0 0 4.79-1.82 6.57 6.57 0 0 0 1.8-4.86V28.67h-3.3v1.11Zm-.88 7.89a2.93 2.93 0 0 1-2.32.98 2.82 2.82 0 0 1-2.28-.98 3.77 3.77 0 0 1-.88-2.6 3.85 3.85 0 0 1 .88-2.65 2.94 2.94 0 0 1 2.28-1 2.86 2.86 0 0 1 2.32 1 3.85 3.85 0 0 1 .88 2.64 3.93 3.93 0 0 1-.88 2.6Zm7.03-9h3.36v13.37h-3.35Zm1.73-5.83a2.06 2.06 0 0 0-2.08 2.02 1.9 1.9 0 0 0 .62 1.47 2.02 2.02 0 0 0 1.46.62 1.9 1.9 0 0 0 1.47-.62 2.07 2.07 0 0 0 .62-1.47 1.79 1.79 0 0 0-.62-1.43 2.04 2.04 0 0 0-1.47-.59Zm9 2.25h-3.3v3.62h-1.92v3.06h1.93v5.54a5.29 5.29 0 0 0 1.04 3.68 4.9 4.9 0 0 0 3.62 1.08c.55 0 1.1-.03 1.63-.07h.16v-3.06l-1.14.07a2.13 2.13 0 0 1-1.6-.43 2.79 2.79 0 0 1-.4-1.76v-5.08h3.14v-3.07h-3.13V25.1Zm18.87-2.02h3.35V42h-3.35Zm37.28 14.18a7.97 7.97 0 0 1-1.7 1.56 3.17 3.17 0 0 1-1.72.46 3.1 3.1 0 0 1-2.44-1.1 4.61 4.61 0 0 1-.04-5.65 3.03 3.03 0 0 1 2.41-1.1 4.5 4.5 0 0 1 3.2 1.82l2.21-2.12a6.6 6.6 0 0 0-5.5-2.77 6.52 6.52 0 0 0-4.76 1.99 7.33 7.33 0 0 0 0 9.97 6.4 6.4 0 0 0 4.76 1.99 6.59 6.59 0 0 0 5.7-2.97Zm13.78-6.72a5.44 5.44 0 0 0-1.92-1.6 6.29 6.29 0 0 0-2.77-.59 5.65 5.65 0 0 0-4.56 2.06 7.72 7.72 0 0 0-1.7 5.02 6.95 6.95 0 0 0 1.86 4.98 6.45 6.45 0 0 0 4.86 1.93 6.6 6.6 0 0 0 5.5-2.74l.07-.1-2.19-2.11a8.33 8.33 0 0 1-.75.78 3.74 3.74 0 0 1-.97.72 3.6 3.6 0 0 1-1.7.35 3.16 3.16 0 0 1-2.28-.81 2.9 2.9 0 0 1-.94-2.02h8.9l.03-1.24a8.75 8.75 0 0 0-.36-2.48 7.39 7.39 0 0 0-1.08-2.15Zm-7.33 3.16a3.33 3.33 0 0 1 .88-1.6 2.38 2.38 0 0 1 1.76-.68 2.41 2.41 0 0 1 1.86.68 2.65 2.65 0 0 1 .68 1.57h-5.18Zm20.24-4.01a6.15 6.15 0 0 0-4.17-1.3 7.08 7.08 0 0 0-3.1.72 5.54 5.54 0 0 0-2.28 2.15l.03.03 2.15 2.06a3.44 3.44 0 0 1 3.16-1.9 2.68 2.68 0 0 1 1.73.56 1.72 1.72 0 0 1 .65 1.43v.65a8.34 8.34 0 0 0-2.48-.39 6.47 6.47 0 0 0-4.04 1.17A4.01 4.01 0 0 0 172 38.2a3.8 3.8 0 0 0 1.3 3.03 4.96 4.96 0 0 0 3.23 1.1 5.62 5.62 0 0 0 3.55-1.4v1.11h3.3v-8.6a4.43 4.43 0 0 0-1.5-3.75Zm-5.96 7.24a2.82 2.82 0 0 1 1.6-.4 7.3 7.3 0 0 1 2.54.5v1.3a4.04 4.04 0 0 1-2.9 1 1.98 1.98 0 0 1-1.34-.39 1.22 1.22 0 0 1-.45-.97 1.26 1.26 0 0 1 .55-1.04Zm20.43-6.97a5.01 5.01 0 0 0-3.91-1.57 4.59 4.59 0 0 0-3.23 1.14v-.81h-3.29v13.36h3.36v-7.4a3.52 3.52 0 0 1 .71-2.38 2.37 2.37 0 0 1 2-.85 2.22 2.22 0 0 1 1.75.75 3.2 3.2 0 0 1 .65 2.09V42h3.36v-7.72a6.25 6.25 0 0 0-1.4-4.34Zm-82.64-.27a6.15 6.15 0 0 0-4.18-1.3 7.08 7.08 0 0 0-3.1.72 5.54 5.54 0 0 0-2.28 2.15l.03.03 2.15 2.05a3.44 3.44 0 0 1 3.16-1.88 2.68 2.68 0 0 1 1.73.55 1.72 1.72 0 0 1 .65 1.43v.65a8.35 8.35 0 0 0-2.48-.39 6.47 6.47 0 0 0-4.04 1.17 4.01 4.01 0 0 0-1.53 3.33 3.8 3.8 0 0 0 1.3 3.03 4.96 4.96 0 0 0 3.23 1.1 5.62 5.62 0 0 0 3.55-1.4v1.11h3.29v-8.6a4.62 4.62 0 0 0-1.49-3.75Zm-5.97 7.24a2.82 2.82 0 0 1 1.6-.4 7.3 7.3 0 0 1 2.54.5v1.3a4.04 4.04 0 0 1-2.9 1 1.98 1.98 0 0 1-1.34-.39 1.22 1.22 0 0 1-.45-.97 1.18 1.18 0 0 1 .55-1.04Zm25.71 5.38a9.78 9.78 0 1 1 9.78-9.78 9.78 9.78 0 0 1-9.78 9.78Zm0-16.07a6.32 6.32 0 1 0 6.32 6.32 6.33 6.33 0 0 0-6.32-6.32ZM18.7 48.49V42.1a10.14 10.14 0 0 0 9.4-13.8 9.58 9.58 0 0 0-5.7-5.7A10.14 10.14 0 0 0 8.58 32H2.21a16.55 16.55 0 0 1 21.73-15.67 15.86 15.86 0 0 1 10.4 10.4A16.55 16.55 0 0 1 18.7 48.5Z" />
      <path d="M18.7 42.1h-6.36v-6.35h6.36Zm-6.36 4.89H7.45V42.1h4.9ZM7.45 42.1h-4.1v-4.07h4.1Z" />
    </svg>
  )
);
