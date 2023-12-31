export default async function sendMail(user: any) {
  const headers = {
    Accept: "application/json",
    "api-key": process.env.API_KEY_BREVO ?? "",
    "Content-Type": "application/json",
  };

  const data = {
    sender: {
      name: "Rudy Musiani",
      email: process.env.EMAIL,
    },
    to: [
      {
        name: "Rudy Musiani",
        email: process.env.EMAIL,
      },
    ],
    subject: "🚀 Nouveau client coaching perso",
    htmlContent: `<html><head><title>Informations</title></head><body><h2>Informations renseignées par le client</h2><table><tr><td>Nom Complet:</td><td>${user.fullName}</td></tr><tr><td>Adresse E-mail:</td><td>${user.mail}</td></tr><tr><td>Téléphone:</td><td>${user.phone}</td><tr><td>Formule:</td><td>${user.formule}</td></tr></tr><tr><td>Taille/Poids/Age:</td><td>${user.age}</td></tr><tr><td>Objectifs:</td><td>${user.objectifs}</td></tr><tr><td>Antécédents sportifs/sports pratiqués actuellement :</td><td>${user.pastSports}</td></tr><tr><td>Parties du corps visées:</td><td>${user.body}</td></tr><tr><td>Disponibilité:</td><td>${user.dispos}</td></tr><tr><td>Soucis signalés:</td><td>${user.diseases}</td></tr><tr><td>Journée type de diète: </td><td>${user.journey}</td></tr><tr><td>Allergies:</td><td>${user.alergies}</td></tr><tr><td>Semaine type d'entrainement:</td><td>${user.week}</td></tr><tr><td>Compléments:</td><td>${user.complements}</td></tr><tr><td>Matériel :</td><td>${user.materiel}</td></tr><tr><td>Style de Vie:</td><td>${user.lifestyle}</td></tr><tr><td>Infos suplémentaires:</td><td>${user.options}</td></tr></table></body></html>`,
  };

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });
  if (response.ok) {
    console.log("Email sent successfully");
  } else {
    console.error("Failed to send email");
  }
}
