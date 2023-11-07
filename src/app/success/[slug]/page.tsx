import getStripeSession from "@/functions/getStripeSession";
import Link from "next/link";

export default async function Reservation({params,}: {params: { slug: string };}) {
  const stripe_session = await getStripeSession(params.slug);
  return (
    <div>
      <div className="pt-[150px] flex justify-center items-center">
        <div className="bg-[#3A3A3A]/50 p-6  md:mx-auto rounded-3xl">
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-white mx-auto"
          >
            <path
              d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
              fill="currentColor"
            />
          </svg>
          <div className="flex flex-col justify-center items-center mt-8">
            <h3 className="md:text-2xl text-base text-blue-500 font-semibold text-center">
              Le paiement a été effectué !
            </h3>
            <p className="text-white/50 my-2 w-1/2 text-justify">
            Merci {stripe_session.metadata.fullName} pour votre confiance, vous allez recevoir un mail pour la facture à l'adresse e-mail suivante : {stripe_session.customer_details.email} <br /> Rudy prendra contact avec vous rapidement.
            </p>
            <div className="py-10 text-center">
              <Link
                href="/"
                className="inline-block rounded-lg bg-blue-500 px-12 py-3 text-sm font-medium text-center text-white hover:bg-blue-700"
              >
                RETOURNER AU MENU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
