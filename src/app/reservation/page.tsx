'use client'
import { useState } from 'react';

export default function Reservation() {
  const [plan, setPlan] = useState("")
  const [fullName, setFullName] = useState("")
  const [mail, setMail] = useState("")
  const [phone, setPhone] = useState("")
  const [age, setAge] = useState("")
  const [objectifs, setObjectifs] = useState("")
  const [pastSports, setPastSports] = useState("")
  const [body, setBody] = useState("")
  const [dispos, setDispos] = useState("")
  const [diseases, setDiseases] = useState("")
  const [journey, setJourney] = useState("")
  const [alergies, setAlergies] = useState("")
  const [week, setWeek] = useState("")
  const [complements, setComplements] = useState("")
  const [materiel, setMateriel] = useState("")
  const [lifestyle, setLifeStyle] = useState("")
  const [options, setOptions] = useState("")
  return (
    <div className="min-h-screen p-6 flex items-center justify-center text-white pt-[150px]">
      <div className="container max-w-screen-xl mx-auto">
        <div>
          <div className="bg-[#3A3A3A]/50 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-8 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="mb-4">
                <p className="font-medium text-lg">Renseignements</p>
                <p className=" text-white/50 text-justify mt-4">
                  Afin de pouvoir personnaliser au mieux ton programme
                  d'entrainement et de diète, voici quelques questions dont les
                  réponses me seront très utiles afin de connaître tes
                  objectifs, ta disponibilité, et éventuels soucis à signaler
                  afin de concevoir un programme adapté et donc le plus efficace
                  possible. Tu n'es pas obligé de répondre à tout évidemment,
                  néanmoins chaque question a son utilité !
                </p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Prénom et nom</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      name="full_name"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-800"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-800"
                      placeholder="john.doe@exemple.com"
                      value={mail}
                      onChange={(e) => setMail(e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-5 mb-6">
                    <label htmlFor="phone">Numéro de téléphone</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-800"
                      placeholder="0123456789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-5 mb-6">
                    <label htmlFor="age">
                      Taille/Poids/Age ?{" "}
                      <span className="text-white/50 text-xs">
                        ( Tu peux garder ces informations confidentielles, mais
                        elles me seront très utiles, surtout la taille et le
                        poids )
                      </span>
                    </label>
                    <input
                      type="text"
                      name="age"
                      id="age"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-800"
                      placeholder="165cm/70kg/36"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-5 mb-6">
                    <label htmlFor="objectifs">
                      Quels sont tes objectifs ?{" "}
                      <span className="text-white/50 text-xs">
                        (Gain de muscle, perte de graisse, gain de
                        force/résistance/endurance, améliorer tes performances
                        dans un autre sport, etc...)
                      </span>
                    </label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="objectifs"
                        id="objectifs"
                        placeholder="Gain de muscle"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={objectifs}
                        onChange={(e) => setObjectifs(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-5 mb-6">
                    <label htmlFor="pastSports">
                      Quels sont tes antécédents sportifs/sports pratiqués
                      actuellement ?{" "}
                      <span className="text-white/50 text-xs">
                        (Sport(s) pratiqué(s), durée, niveau,...)
                      </span>
                    </label>
                    <div className=" bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <textarea
                        name="pastSports"
                        id="pastSports"
                        placeholder="Natation"
                        className="px-4 pt-1  resize-y appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={pastSports}
                        onChange={(e) => setPastSports(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-5 mb-6">
                    <label htmlFor="body">
                      As-tu d'éventuelles parties de ton corps que tu souhaites
                      plus améliorer que d'autres ?{" "}
                      <span className="text-white/50 text-xs">
                        (On ne négligera aucune partie du corps, tant bien pour
                        l’aspect esthétique que santé !), Mais on peut faire en
                        sorte de mettre l’accent sur un groupe musculaire que tu
                        souhaites développer plus qu’un autre !
                      </span>
                    </label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="body"
                        id="body"
                        placeholder="Les bras"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-5 mb-6">
                    <label htmlFor="dispos">
                      Tes disponibilités pour l'entrainement ?{" "}
                      <span className="text-white/50 text-xs">
                        (Les jours de la semaine qui te conviennent pour les
                        entrainements, la durée de ces entrainements, et l'heure
                        des entrainements...)
                      </span>
                    </label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="dispos"
                        id="dispos"
                        placeholder="du lundi au vendredi, 1H, le soir"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={dispos}
                        onChange={(e) => setDispos(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-5 mb-6">
                    <label htmlFor="diseases">
                      Des soucis à signaler ?{" "}
                      <span className="text-white/50 text-xs">
                        (Douleurs aux épaules, dos, tendinites…)
                      </span>
                    </label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="diseases"
                        id="diseases"
                        placeholder="Tendinites"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={diseases}
                        onChange={(e) => setDiseases(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-5 mb-6">
                    <label htmlFor="journey">
                      Résume-moi ta journée type de diète à l'heure actuelle ?
                      Combien de repas peux-tu/veux-tu faire dans la journée ?
                      Dis-moi si il y a moment de la journée où tu préfères
                      manger plus qu’un autre ! Par exemple, préfères-tu manger
                      « beaucoup » le soir ?{" "}
                      <span className="text-white/50 text-xs">
                        Plus j’en saurais, plus je pourrai perfectionner ton
                        plan alimentaire !
                      </span>
                    </label>
                    <div className=" bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <textarea
                        name="journey"
                        id="journey"
                        placeholder="Je mange 6 fois par jours"
                        className="px-4 pt-1 h-32 resize-y appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={journey}
                        onChange={(e) => setJourney(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-5 mb-6">
                    <label htmlFor="alergies">
                      A tu des allergies ou intolérance quelconques que je
                      devrais savoir ?
                      <span className="text-white/50 text-xs">
                        (Fruits à coque, Gluten, lactose…)
                      </span>
                    </label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="alergies"
                        id="alergies"
                        placeholder="Gluten ..."
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={alergies}
                        onChange={(e) => setAlergies(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-5 mb-6">
                    <label htmlFor="week">
                      Quelle est ta semaine type en terme d'entrainement à
                      l'heure actuelle ?
                      <span className="text-white/50 text-xs">
                        (Plus il y aura de détails plus je pourrais corriger et
                        adapter ton programme selon tes envies et objectifs)
                      </span>
                    </label>
                    <div className=" bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <textarea
                        name="week"
                        id="week"
                        placeholder="Le lundi je fais le dos ..."
                        className="px-4 pt-1 h-32 resize-y appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={week}
                        onChange={(e) => setWeek(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-5 mb-6">
                    <label htmlFor="complements">
                      As-tu déjà consommé des compléments alimentaires ? (si oui
                      lesquels), envisages-tu d'en consommer à l'avenir ? (si
                      oui quel est ton budget ?)
                      <span className="text-white/50 text-xs">
                        Les compléments alimentaires ne sont pas du tout un
                        passage obligatoire !
                      </span>
                    </label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="complements"
                        id="complements"
                        placeholder="Protéine en poudre"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={complements}
                        onChange={(e) => setComplements(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-5 mb-6">
                    <label htmlFor="materiel">
                      Qu'as-tu comme matériel à disposition pour t'entrainer ?
                      <span className="text-white/50 text-xs">
                        (en salle/maison)
                      </span>
                    </label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="materiel"
                        id="materiel"
                        placeholder="Dans la salle j'ai à ma disposition des elastiques, des haltères ..."
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={materiel}
                        onChange={(e) => setMateriel(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-5 mb-6">
                    <label htmlFor="lifestyle">
                      Quelles-sont tes habitudes de vie ?
                      <span className="text-white/50 text-xs">
                        (Heures de réveil habituelles régulières ou non, heures
                        de sommeil en moyenne, heures de repas, etc...)
                      </span>
                    </label>
                    <div className=" bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <textarea
                        name="lifestyle"
                        id="lifestyle"
                        placeholder="Je me réveille à 8h ..."
                        className="px-4 pt-1 h-32 resize-y appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={lifestyle}
                        onChange={(e) => setLifeStyle(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-5 mb-6">
                    <label htmlFor="options">
                      As-tu d'autres choses à me faire savoir ?
                    </label>
                    <div className=" bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <textarea
                        name="options"
                        id="options"
                        placeholder="Je n'ai jamais fait de sport"
                        className="px-4 pt-1 h-32 resize-y appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={options}
                        onChange={(e) => setOptions(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-5 mb-6 text-center">
                    <h1>Choisis la formule que tu veux</h1>
                    <div className="flex justify-center gap-8 mt-6">
                      <button onClick={() => setPlan('one_month')} className={`inline-block rounded-lg border border-blue-500 ${plan === 'one_month' ? 'bg-blue-500' : 'bg-none'} px-12 py-3 text-sm text-center font-medium text-white`}>
                        1 mois
                      </button>
                      <button onClick={() => setPlan('three_month')} className={`inline-block rounded-lg border border-blue-500 ${plan === 'three_month' ? 'bg-blue-500' : 'bg-none'} px-12 py-3 text-sm text-center font-medium text-white`}>
                        3 mois
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-5 mb-6 text-right mt-5">
                    <div className="inline-flex items-end">
                      <button className="inline-block rounded-lg bg-blue-500 px-12 py-3 text-sm font-medium text-center text-white hover:bg-blue-700">
                        PAYER
                      </button>
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
