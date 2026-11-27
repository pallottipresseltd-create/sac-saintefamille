import CountryCommunitiesClient from "@/components/pages/CountryCommunitiesClient";

export const metadata = {
  title: "Communautés au Rwanda | SAC - Province Sainte Famille",
  description: "Découvrez les communautés, paroisses et sanctuaires pallottins au Rwanda : Gikondo, Kabuga, Kibeho, Ruhango, Butare, Kinoni et Pallotti Presse.",
};

export default function RwandaCommunitiesPage() {
  return (
    <CountryCommunitiesClient
      country="Rwanda"
      badgeKey="comm.rw.badge"
      titleKey="comm.rw.title"
      descKey="comm.rw.desc"
      worksLabelKey="comm.rw.works"
      membersCountKey="common.confreres"
      columns={3}
    />
  );
}
