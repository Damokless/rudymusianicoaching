const messages : any = {
    "fullName" : '"Prénom et nom" n\'est pas complété',
    "mail" : '"E-mail" n\'est pas complété',
    "phone" : '"Numéro de téléphone" n\'est pas complété',
    "plan" : 'Vous n\'avez pas choisi de formule'
}
export default function formValidator(fields : any ) : number | string {
    for (const field in fields) {
        if(fields[field] === "") return messages[field]
    }
    return 0
}