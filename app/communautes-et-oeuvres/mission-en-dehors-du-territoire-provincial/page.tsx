import CountryCommunitiesClient from "@/components/pages/CountryCommunitiesClient";

export const metadata = {
  title: "Mission en Dehors du Territoire Provincial | SAC - Province Sainte Famille",
  description: "Présence des prêtres pallottins de la Province Sainte Famille en France (Osny, Montereau, Vaires), en Italie (Latina, Rome) et dans le monde.",
};

export default function OutsideTerritoryCommunitiesPage() {
  return (
    <CountryCommunitiesClient
      country="Mission en Europe et Monde"
      badgeKey="comm.eu.badge"
      titleKey="comm.eu.title"
      descKey="comm.eu.desc"
      worksLabelKey="comm.eu.works"
      membersCountKey="common.confreres-sent"
      columns={2}
    />
  );
}
