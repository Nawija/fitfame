import { getAllRecipes } from "@/lib/getRecipes";
import { FiltersSection } from "./FiltersSection";
import { Recipe } from "@/types/types";

export default function PrzepisyPage() {
    const recipes:Recipe[] = getAllRecipes(); // SSR tylko na serwerze

    return <FiltersSection allRecipes={recipes} />;
}
