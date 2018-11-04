export class Recipe {
  ingredients: Array<string>;
  preparation: string;

  constructor() {
    this.ingredients = [
      "2 acorn suqash",
      "4 cups vegetable stock",
      "1 Tbsp. butter or oil",
      "1/4 of a fresh nutmeg, grated",
      "1 red onion, minced",
      "1 Tbsp. curry powder",
      "2 pears, chopped",
      "salt & pepper to taste",
    ];

    this.preparation = "Preheat your oven to 425F.\n"
      + "Slice the acorn squash in half, lengthwise, and scoop out the seeds.  Place the squash cut-side-down on a baking sheet lined with aluminum foil.  Roast at 425F for 45 minutes, until the flesh is tender.  Let cool, and scoop out the acorn squash flesh.\n"
      + "Heat a large pot over medium heat, and add your butter or oil.  Add the onion, and sautee until the onions are soft.  Add the roasted squash, pears, vegetable stock, nutmeg, and curry powder, and stir to combine everything.\n"
      + "Turn the heat to high and bring the pot to a boil.  Turn the heat down to low and simmer for 45 minutes, until all of the flavours are infused and gorgeous.  Your home will smell decadent.  Season with salt & pepper.\n"
      + "Serve warm, topped with your favourite soup toppings.  I like a little Greek yoghurt and some freshly chopped chives.";
  }
}
