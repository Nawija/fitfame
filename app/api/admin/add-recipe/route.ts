import { NextResponse } from 'next/server';
import { recipesData } from '@/constants/Przepisy';

type newRecipeTypes = {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;
    ingredients: string[];
    steps: string[];
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Typowanie nowego przepisu zgodnie z newRecipeTypes
    const newRecipe: newRecipeTypes = {
      id: recipesData.length + 1,
      slug: formData.get("slug")?.toString() ?? "",
      title: formData.get("title")?.toString() ?? "",
      description: formData.get("description")?.toString() ?? "",
      image: `/images/przepisy/${formData.get("imageName")?.toString()}`,
      ingredients: JSON.parse(formData.get("ingredients")?.toString() ?? "[]"),
      steps: JSON.parse(formData.get("steps")?.toString() ?? "[]"),
    };

    recipesData.push(newRecipe); // Dodanie nowego przepisu do listy
    return NextResponse.json({ message: 'Przepis został dodany!' });
  } catch (error) {
    console.error("Błąd podczas dodawania przepisu:", error);
    return NextResponse.json({ message: 'Błąd podczas dodawania przepisu' }, { status: 500 });
  }
}
