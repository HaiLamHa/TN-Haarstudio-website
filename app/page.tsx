import Image from "next/image";

import background from "@/images/background.png";
import logo from "@/images/svg/Logo.svg";
import locatieButton from "@/images/svg/Locatie.svg";
import phoneGreen from "@/images/svg/Phone green.svg";
import phoneWhite from "@/images/svg/Phone white.svg";
import tarievenButton from "@/images/svg/Tarieven.svg";
import whatsappGreen from "@/images/svg/Whatsapp green.svg";
import whatsappWhite from "@/images/svg/Whatsapp white.svg";

const accentGreen = "#aef359";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="relative w-full min-h-[540px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={background}
            alt="Kapsalon achtergrond"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            style={{ filter: "blur(2px)" }}
          />
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-[5px] bg-[color:var(--accent-green)] shadow-[0_8px_18px_-4px_rgba(0,0,0,0.5)]"
          style={{ ["--accent-green" as string]: accentGreen }}
        />

        <div className="relative flex w-full flex-col items-center justify-center pb-12 pt-8">
          <div
            className="mt-6 w-full overflow-hidden rounded-none bg-white/80 shadow-sm"
            style={{ ["--accent-green" as string]: accentGreen }}
          >
            <div className="flex flex-col items-center px-6 pb-4 pt-6">
              <Image
                src={logo}
                alt="TN Haarstudio"
                className="h-auto w-[168px] sm:w-[192px]"
                priority
              />
              <p
                className="slogan mt-3 w-full text-center text-[20px] font-semibold text-neutral-900"
                style={{ fontFamily: "halcom, sans-serif" }}
              >
                Uw haar, uw tijd, ook na zonsondergang.
              </p>
            </div>
            <div className="h-[2px] w-full bg-[color:var(--accent-green)]" />

            <div className="mx-auto w-full max-w-3xl px-6">
              <div className="grid gap-4 py-5 text-[12px] leading-relaxed text-neutral-900 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-6">
                <div>
                  <p className="text-[15px] font-semibold">Adres &amp; Contact</p>
                  <div className="mt-1 space-y-1 text-[15px]">
                    <p>Maarten van Heemskerkstraat 6</p>
                    <p>5702XM Helmond</p>
                    <p>06 - 44545215</p>
                  </div>
                </div>
                <div className="sm:text-right">
                  <p className="text-[15px] font-semibold">Openingstijden</p>
                  <div className="mt-1 space-y-1 text-[15px]">
                    <p>Ma t/m Vr: 18:00 - 21:00</p>
                    <p>Wo: 9:00 - 21:00</p>
                    <p>Za: 9:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[2px] w-full bg-[color:var(--accent-green)]" />

            <div className="mx-auto w-full max-w-3xl px-6">
              <div className="flex flex-col items-center gap-3 py-5 text-[16px] font-semibold text-neutral-900">
                <p>Een afspraak maken</p>
                <div className="flex items-center gap-6">
                  <a
                    href="https://wa.me/31644545215"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp 06-44545215"
                  >
                    <Image
                      src={whatsappGreen}
                      alt="WhatsApp"
                      className="h-12 w-12 transition-transform duration-200 hover:scale-110"
                    />
                  </a>
                  <a href="tel:0644545215" aria-label="Bel 06-44545215">
                    <Image
                      src={phoneGreen}
                      alt="Telefoon"
                      className="h-12 w-12 transition-transform duration-200 hover:scale-110"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-12 pt-6 text-[12px] leading-relaxed text-neutral-900">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-6">
            <a
              href="/pdf/Tarieven%20TN%20Haarstudio.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={tarievenButton}
                alt="Tarieven"
                className="h-auto w-32 transition-transform duration-200 hover:scale-110"
                priority
              />
            </a>
            <a
              href="https://maps.app.goo.gl/bUeLpM3NYYADBavJ6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={locatieButton}
                alt="Locatie"
                className="h-auto w-32 transition-transform duration-200 hover:scale-110"
                priority
              />
            </a>
          </div>

          <div className="mt-4 w-full max-w-2xl space-y-3 text-left text-[15px]">
            <p className="text-[15px] font-semibold">Vragen of een afspraak maken?</p>
            <p>Heb je vragen? Neem dan gerust contact met mij op.</p>
            <p>Een afspraak maken kan telefonisch of via WhatsApp.</p>
            <div className="space-y-1">
              <p>Kun je niet (op tijd) komen?</p>
              <p>Laat het me dan z.s.m weten.</p>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="footer-normal mt-6 bg-[color:var(--accent-green)] py-4 text-[14px] text-black"
        style={{ ["--accent-green" as string]: accentGreen }}
      >
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-3 px-3 text-center sm:grid-cols-[1fr_auto_1fr] sm:px-6 sm:text-left">
          <div className="font-semibold sm:text-left">
            <p>Maarten v. Heemskerkstr 6 | 5702XM Helmond | 06 - 44545215</p>
            <p className="text-[11px] font-normal">KVK nr: 92045928</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://wa.me/31644545215"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp 06-44545215"
            >
              <Image
                src={whatsappWhite}
                alt="WhatsApp"
                className="h-11 w-11 transition-transform duration-200 hover:scale-110"
                priority
              />
            </a>
            <a href="tel:0644545215" aria-label="Bel 06-44545215">
              <Image
                src={phoneWhite}
                alt="Telefoon"
                className="h-11 w-11 transition-transform duration-200 hover:scale-110"
                priority
              />
            </a>
          </div>

          <div className="font-semibold sm:text-right">
            <p>Ma t/m Vr: 18:00 - 21:00 | Wo: 9:00 - 21:00 | Za: 9:00 - 17:00</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
