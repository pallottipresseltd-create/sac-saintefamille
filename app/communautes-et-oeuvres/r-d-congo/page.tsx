import CountryCommunitiesClient from "@/components/pages/CountryCommunitiesClient";

export const metadata = {
  title: "Communautés en R.D. Congo | SAC - Province Sainte Famille",
  description: "Découvrez les communautés pallottines en République Démocratique du Congo : Goma-Keshero, Buturande, Bukavu-Karhale et Postulat.",
};

export default function CongoCommunitiesPage() {
  return (
    <CountryCommunitiesClient
      country="R.D. Congo"
      badgeKey="comm.rdc.badge"
      titleKey="comm.rdc.title"
      descKey="comm.rdc.desc"
      worksLabelKey="comm.rdc.works"
      membersCountKey="common.confreres-assigned"
      columns={2}
    />
  );
}
