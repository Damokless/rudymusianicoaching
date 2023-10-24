export default function Home() {
  return (
    <div className="w-full h-full flex">
      <div className="w-3/5 pt-[250px] pl-[75px]">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl text-white font-bold sm:text-6xl mb-11">
            Coaching sportif personnalisé <br />
            avec{" "}
            <strong className="font-bold text-blue-500">Rudy Musiani</strong>
          </h1>

          <p className="mb-11 max-w-2xl sm:text-xl/relaxed text-white">
            Choisissez votre parcours vers la réussite avec Rudy Musiani, coach
            sportif expert. Optez pour un suivi de fitness personnalisé et
            atteignez vos objectifs.
          </p>
          <p className="mb-11 sm:text-xl/relaxed text-white">
            Découvrez une nouvelle ère de fitness dès aujourd&apos;hui.
          </p>

          <a
            className="inline-block rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white hover:bg-blue-700"
            href="#"
          >
            Prendre un coaching
          </a>
        </div>
      </div>
      <div className="w-2/5 h-screen bg-hero bg-no-repeat bg-cover bg-center pl-4 box-border shadow-[inset_180px_0_100px_0_rgba(23,23,23,1)]">
        <div className="bg-white "></div>
      </div>
    </div>
  );
}
