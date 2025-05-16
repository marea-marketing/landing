import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Image
            className=""
            src="/logo.png"
            alt="Marea logomark"
            width={500}
            height={500}
          />
        </div>
        <p className="text-center w-full text-xl">Web en construcción...  🛠️ 💻</p>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/marea.agenciaar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            aria-hidden
            src="/instagram-icon.png"
            alt="Instagram icon"
            width={16}
            height={16}
          />
          Instagram
        </a>
      </footer>
    </div>
  );
}
