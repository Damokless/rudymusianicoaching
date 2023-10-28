import AwardsCard from "@/components/Cards/AwardsCard";
import awards from "@/data/awards.json"

export default function Home() {
  return (
    <div>
      <div className="w-full h-full flex">
        <div className="w-3/5 pt-[250px] pl-[75px]">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl text-white font-bold sm:text-6xl mb-11">
              Coaching sportif personnalisé <br />
              avec{" "}
              <strong className="font-bold text-blue-500">Rudy Musiani</strong>
            </h1>

            <p className="mb-11 max-w-2xl sm:text-xl/relaxed text-white">
              Choisissez votre parcours vers la réussite avec Rudy Musiani,
              coach sportif expert. Optez pour un suivi de fitness personnalisé
              et atteignez vos objectifs.
            </p>
            <p className="mb-11 sm:text-xl/relaxed text-white">
              Découvrez une nouvelle ère de fitness dès aujourd&apos;hui.
            </p>

            <a
              className="inline-block rounded-lg bg-blue-500 px-12 py-3 text-sm font-medium text-white hover:bg-blue-700"
              href="#"
            >
              Prendre un coaching
            </a>
          </div>
        </div>
        <div className="hidden lg:flex w-2/5 h-screen bg-hero bg-noRepeat bg-cover bg-[center_top_0.01rem] pl-4 box-border shadow-[inset_180px_0_100px_0_rgba(23,23,23,1)]">
        </div>
      </div>
      <div className=" px-[75px] mt-64">
        <div className="flex justify-center items-center mb-11">
          <h1 className="text-3xl text-center text-white font-bold sm:text-6xl mt-11">
            Prêt à passer à l&apos;étape <br />
            <strong className="font-bold text-blue-500">supérieure ?</strong>
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-[#3A3A3A]/50 py-16 px-24 flex rounded-3xl w-10/12">
            <div className="w-1/2">
              <div className=" mb-16">
                <h2 className="text-white lg:text-3xl font-semibold">
                  Coaching personnalisé
                </h2>
                <p className="text-white text-sm font-light mt-2">
                  Entraînement personnalisé, Musculation, Suivi <br /> de
                  progression, Plan d&apos;exercices sur mesure
                </p>
              </div>
              <div className="mb-16">
                <h3 className=" text-xl text-blue-500 font-bold">110 €</h3>
                <p className=" mt-3 text-white">Par personne / mois</p>
                <p className=" mt-4 text-[#6F6F6F]">Ou</p>
                <h3 className=" mt-4 text-xl text-blue-500 font-bold">300 €</h3>
                <p className=" mt-3 text-white">Pour 3 mois</p>
              </div>
              <div className="flex flex-col gap-4 lg:w-2/4">
                <a
                  className="inline-block rounded-lg bg-blue-500 px-12 py-3 text-sm font-medium text-center text-white hover:bg-blue-700"
                  href="#"
                >
                  Prendre un coaching
                </a>

                <a
                  className="inline-block rounded-lg border border-blue-500 px-12 py-3 text-sm text-center font-medium text-white hover:bg-blue-500"
                  href="#"
                >
                  Découvrir Rudy
                </a>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-col justify-center h-full gap-9">
                <div className="flex place-items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                      fill="white"
                    />
                  </svg>
                  <h4 className=" text-xl ml-3 text-white">
                    Suivi d'entraînement.
                  </h4>
                </div>
                <div className="flex place-items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                      fill="white"
                    />
                  </svg>
                  <h4 className=" text-xl ml-3 text-white">
                    Suivi nutritionnel.
                  </h4>
                </div>
                <div className="flex place-items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                      fill="white"
                    />
                  </svg>
                  <h4 className=" text-xl ml-3 text-white">
                    Bilan hebdomadaire.
                  </h4>
                </div>
                <div className="flex place-items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                      fill="white"
                    />
                  </svg>
                  <h4 className=" text-xl ml-3 text-white">
                    Planification d'objectifs à court et à long terme.
                  </h4>
                </div>
                <div className="flex place-items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                      fill="white"
                    />
                  </svg>
                  <h4 className=" text-xl ml-3 text-white">
                    Recommandations pour la santé et le bien-être.
                  </h4>
                </div>
                <div className="flex place-items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                      fill="white"
                    />
                  </svg>
                  <h4 className=" text-xl ml-3 text-white">
                    Disponible pour toutes vos questions.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-[75px] mt-64">
        <div className="flex justify-center items-center mb-11">
          <h1 className="text-3xl text-center text-white font-bold sm:text-6xl mt-11">
            Découvrez votre
            <strong className="font-bold text-blue-500"> coach</strong>
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AwardsCard />
        </div>
      </div>
    </div>
  );
}
