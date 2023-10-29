export default function Reservation() {
  return (
    <div className="min-h-screen p-6 flex items-center justify-center text-white">
  <div className="container max-w-screen-lg mx-auto">
    <div>
      <div className="bg-[#3A3A3A]/50 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-8 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="mb-4">
            <p className="font-medium text-lg">Renseignements</p>
            <p className=" text-white/50 text-justify mt-4">Afin de pouvoir personnaliser au mieux ton programme d'entrainement et de diète, voici quelques questions dont les réponses me seront très utiles afin de connaître tes objectifs, ta disponibilité, et éventuels soucis à signaler afin de concevoir un programme adapté et donc le plus efficace possible. Tu n'es pas obligé de répondre à tout évidemment, néanmoins chaque question a son utilité !</p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label htmlFor="full_name">Prénom et nom</label>
                <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="email">E-mail</label>
                <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="address">Numéro de téléphone</label>
                <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="city">Taille/Poids/Age ? <span className="text-white/50 text-xs">( Tu peux garder ces informations confidentielles, mais elles me seront très utiles, surtout la taille et le poids )</span></label>
                <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="country">Quels sont tes objectifs ? <span className="text-white/50 text-xs">(Gain de muscle, perte de graisse, gain de force/résistance/endurance, améliorer tes performances dans un autre sport, etc...)</span></label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                </div>
              </div>

              <div className="md:col-span-5">
                <label htmlFor="state">Quels sont tes antécédents sportifs/sports pratiqués actuellement ? (Sport(s) pratiqué(s), durée, niveau,...)</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                </div>
              </div>

              <div className="md:col-span-5">
                <label htmlFor="state">Quels sont tes antécédents sportifs/sports pratiqués actuellement ? <span className="text-white/50 text-xs">(Sport(s) pratiqué(s), durée, niveau,...)</span></label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                </div>
              </div>

              <div className="md:col-span-1">
                <label htmlFor="zipcode">Zipcode</label>
                <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
              </div>

              <div className="md:col-span-5 text-right mt-5">
                <div className="inline-flex items-end">
                  <button className="inline-block rounded-lg bg-blue-500 px-12 py-3 text-sm font-medium text-center text-white hover:bg-blue-700">Soumettre</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
