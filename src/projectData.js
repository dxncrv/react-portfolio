import {
  alive,
  flash,
  vag,
  towners,
  clock,
  g4c,
  da,
  grove,
  sharin,
  evokar,
  intensity,
} from "./assets/project.covers";

export const tooltipDict = {
  PM: "Product Manager",
  SM: "Scrum Master",
  "3D": "3D Designer",
  "2D": "2D Designer",
  UX: "UX Designer",
  Dev: "Developer",
  Video: "Video Editor",
};

export default [
  {
    id: "1",
    title: "ALIVE Investigator",
    cover: alive,
    description:
      "I led the team responsible for incubation of this project at CDM, then joined the ALIVE team as a Game Development Coordinator.",
    tags: ["PM", "3D", "UX", "Dev"],
  },
  {
    id: "2",
    title: "FlashoVR",
    cover: flash,
    description:
      "I served the team as a Scrum Master and Sprint Facilitator at CDM, then was hired for a part-time contract for redesigning a mechanic and minor improvements.",
    tags: ["PM", "Dev", "3D", "UX"],
  },
  {
    id: "3",
    title: "Vancouver Artgallery",
    cover: vag,
    description:
      "I produced media for the installed monitors; authored and sourced CGI for 2 installations in the exhibition; produced media, and styled html for the publication.",
    tags: ["Video", "3D", "Dev"],
  },
  {
    id: "4",
    title: "Tebbie Towners",
    cover: towners,
    description:
      'I designed a game to address a brief from D&AD Blood Awards 2021, "A game that is a force of good" brief set by Rare and Xbox.',
    tags: ["UX"],
  },
  {
    id: "5",
    title: "Clockwork",
    cover: clock,
    description:
      "A pitch project, aiming to minimize workplace distractions and address the loss of time and money caused by it.",
    tags: ["UX"],
  },
  {
    id: "6",
    title: "Healing Heart (G4C Impact Jam)",
    cover: g4c,
    description:
      "I hacked a game together in 10 days with 3 other students across the globe during Impact Jam hosted by Games for Change. We won an honorable mention for the title of most creative concept.",
    tags: ["UX", "Dev"],
  },
  {
    id: "7",
    title: "Digital Activism Vol. 2",
    cover: da,
    description:
      "I designed the cover for Digital Activism Volume 2, an e-book edited by Dr. Rachel Ralph. The book is a collection of works written on the topics of digital activism by students of the CDM.",
    tags: ["2D", "3D"],
  },
  {
    id: "8",
    title: "Sacred Grove",
    cover: grove,
    description:
      "I visualized an artefact for a proposal of an AR game. The design aimed to transform the waiting room of a corporate building into a grove, with the columns as the last living trees in the world.",
    tags: ["2D", "3D"],
  },
  {
    id: "9",
    title: "Sharin",
    cover: sharin,
    description:
      "I animated a short story for a wedding ceremony, and produced 50 personalized videos for guests to interactively trigger in a live event, as an action of writing an invitation card, or 'Kankotri'.",
    tags: ["2D", "Video"],
  },
  {
    id: "10",
    title: "Evõkar",
    cover: evokar,
    description:
      "I designed an ecofriendly package in 2 sizes for 6 lampshades; inspired from origami and made solely with cardboard. The outer form encases the product and inner form cushions the product.",
    tags: ["3D", "UX"],
  },
  {
    id: "11",
    title: "Intensity",
    cover: intensity,
    description:
      "I created and produced a promotional video for a gym. The video is a flythrough of the floor layout, aiming to show the dedicated areas of workout equipment.",
    tags: ["3D", "Video"],
  },
];
