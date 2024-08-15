import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto items-center justify-center">
      <article className="min-h-screen">
        <div className="prose font-serif">
          <p>
            Before the invention of paper, thin layers of tanned sheepskin –
            called vellum or parchment – were used as printing material in
            Europe and the Near East. Ancient Egyptians used another material,
            papyrus, which was made from vertically sliced plant stems that were
            pressed and then dried. In China, characters were written on wooden
            or bamboo strips, which were tied together with string to form a
            sheet. In all of these cases, the final product took the form of a
            rectangle, even though the contours of dried sheepskin, for example,
            naturally reflected the shape of the animal. Cuneiform tablets are
            also rectangular when viewed from above. It seems that humans
            reconfigure their natural environment by making it rectangular.
          </p>
          <p>
            Nevertheless, surprisingly few rectangular objects exist within
            nature with the exception of some mineral crystals, which are close
            to perfect cubes. Modern science is, as we are well aware, built on
            the order discovered in nature, so it isn't strange to find the
            mathematical principle of the square concealed there. Yet squares
            and rectangles are extremely unstable, which explains why they are
            so rare. Why then have people come to favor rectangular forms? One
            possibility is the fact that if we break a big leafy object into two
            pieces using our two hands, we get a straight line, while a second
            break results in a right angle. Another possibility comes from the
            nature of gravity, which turns a hanging vine or string into a
            straight vertical line. We could speculate endlessly on such
            possibilities, but the fact remains that when sheepskins were turned
            into writing materials, they were always cut into rectangles. This
            process may be understood as one of the origins of design.
          </p>
          <p>
            Correspondingly, paper today is manufactured in the form of a roll,
            which is then cut into sheets that have a ratio... If we cut the
            sheet in half and then cut it in half a second time, this ratio
            stays the same – the proportional relationship between length and
            width remains constant. TV screens and computer monitors are
            rectangular but stretch sideways, reflecting the horizontal
            placement of our eyes.
          </p>
          <p>
            Books are made of rectangular sheets of paper. Can we not say then
            that language is folded and stored in rectangular space? Basically
            speaking, language appears in linear form. Humans cannot utter more
            than a single word at a time; were that possible, communication
            would be even more complex than it is. When we speak, we are solo
            instruments. This linear structure remains the rule when our
            language is arranged in letters. A book is a vessel constructed by
            controlling this unbroken string of language, folded into a defined
            space.
          </p>
          <p className="opacity-60">
            — Kenya Hara, excerpt from <em>White</em>
          </p>
        </div>
        <div className="prose font-serif mt-24 italic [text-wrap:balance]">
          <p>
            Rektangle (2023–24) was a design studio founded and operated by{" "}
            <a href="https://baytas.net">Mehmet Aydın Baytaş</a>.
          </p>
          <p>
            Visit our current projects:{" "}
            <a
              href="https://colorai.app/"
              target="_blank"
            >
              Color AI
            </a>
            ,{" "}
            <a
              href="https://www.designdisciplin.com/"
              target="_blank"
            >
              Design Discipline
            </a>
          </p>
        </div>
      </article>
    </main>
  );
}
