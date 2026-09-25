import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import generatedSidebar from "../docs/openapi/management/sidebar";

const sidebarItems = [...generatedSidebar];
const driverIndex = sidebarItems.findIndex(
  (item) => item.type === "category" && item.label === "Motorista",
);
const cardsIndex = sidebarItems.findIndex(
  (item) => item.type === "category" && item.label === "Cartões",
);

if (driverIndex < 0 || cardsIndex < 0) {
  throw new Error("Expected generated Motorista and Cartões categories.");
}

const driverCategory = sidebarItems[driverIndex];
const cardsCategory = sidebarItems[cardsIndex];
if (driverCategory.type !== "category" || cardsCategory.type !== "category") {
  throw new Error("Expected generated Motorista and Cartões categories.");
}

function useLocalizedDocLabels(items: typeof driverCategory.items) {
  return items.map((item) => {
    if (item.type !== "doc") return item;
    return item.id;
  });
}

const motoristasCategory = {
  type: "category" as const,
  label: "Motoristas",
  collapsible: true,
  collapsed: true,
  items: [
    ...useLocalizedDocLabels(driverCategory.items),
    {
      type: "category" as const,
      label: "Cartões",
      collapsible: true,
      collapsed: true,
      items: useLocalizedDocLabels(cardsCategory.items),
    },
  ],
};

const insertionIndex = Math.min(driverIndex, cardsIndex);
const apiSidebar = sidebarItems.filter(
  (_, index) => index !== driverIndex && index !== cardsIndex,
);
apiSidebar.splice(insertionIndex, 0, motoristasCategory);

const sidebars: SidebarsConfig = { apisidebar: apiSidebar };
export default sidebars.apisidebar;
