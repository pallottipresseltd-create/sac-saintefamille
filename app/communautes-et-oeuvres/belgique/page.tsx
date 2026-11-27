import CountryCommunitiesClient from "@/components/pages/CountryCommunitiesClient";

export const metadata = {
  title: "Communautés en Belgique | Procure & Paroisses | SAC - Province Sainte Famille",
  description: "Découvrez la présence pallottine en Belgique : Procure Missionnaire de Bruxelles Rogier, Unité Pastorale de Meiser, Sainte Thérèse d'Avila et Sombreffe (Namur).",
};

export default function BelgiqueCommunitiesPage() {
  return (
    <CountryCommunitiesClient
      country="Belgique"
      badgeKey="comm.be.badge"
      titleKey="comm.be.title"
      descKey="comm.be.desc"
      worksLabelKey="comm.be.works"
      membersCountKey="common.confreres-assigned"
      columns={2}
    />
  );
}
