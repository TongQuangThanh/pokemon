export const storageKey = {
  listAll: 'thnvn-pokemon'
}

export const statsData = [
  { name: 'hp', color: 'success', value: 255 },
  { name: 'attack', color: 'danger', value: 190 },
  { name: 'defense', color: 'primary', value: 250 },
  { name: 'special-attack', color: 'warning', value: 194 },
  { name: 'special-defense', color: 'info', value: 250 },
  { name: 'speed', color: 'secondary', value: 200 }
];

export const typesData = [
  {
    "name": "normal",
    "color": "primary",
    "opacity": 100,
    "url": "https://pokeapi.co/api/v2/type/1/"
  },
  {
    "name": "fighting",
    "color": "danger",
    "opacity": 50,
    "url": "https://pokeapi.co/api/v2/type/2/"
  },
  {
    "name": "flying",
    "color": "primary",
    "opacity": 50,
    "url": "https://pokeapi.co/api/v2/type/3/"
  },
  {
    "name": "poison",
    "color": "success",
    "opacity": 75,
    "url": "https://pokeapi.co/api/v2/type/4/"
  },
  {
    "name": "ground",
    "color": "warning",
    "opacity": 100,
    "url": "https://pokeapi.co/api/v2/type/5/"
  },
  {
    "name": "rock",
    "color": "secondary",
    "opacity": 75,
    "url": "https://pokeapi.co/api/v2/type/6/"
  },
  {
    "name": "bug",
    "color": "warning",
    "opacity": 75,
    "url": "https://pokeapi.co/api/v2/type/7/"
  },
  {
    "name": "ghost",
    "color": "light",
    "opacity": 100,
    "url": "https://pokeapi.co/api/v2/type/8/"
  },
  {
    "name": "steel",
    "color": "secondary",
    "opacity": 100,
    "url": "https://pokeapi.co/api/v2/type/9/"
  },
  {
    "name": "fire",
    "color": "danger",
    "opacity": 100,
    "url": "https://pokeapi.co/api/v2/type/10/"
  },
  {
    "name": "water",
    "color": "tertiary",
    "opacity": 100,
    "url": "https://pokeapi.co/api/v2/type/11/"
  },
  {
    "name": "grass",
    "color": "success",
    "opacity": 100,
    "url": "https://pokeapi.co/api/v2/type/12/"
  },
  {
    "name": "electric",
    "color": "tertiary",
    "opacity": 50,
    "url": "https://pokeapi.co/api/v2/type/13/"
  },
  {
    "name": "psychic",
    "color": "dark",
    "opacity": 50,
    "url": "https://pokeapi.co/api/v2/type/14/"
  },
  {
    "name": "ice",
    "color": "tertiary",
    "opacity": 75,
    "url": "https://pokeapi.co/api/v2/type/15/"
  },
  {
    "name": "dragon",
    "color": "danger",
    "opacity": 50,
    "url": "https://pokeapi.co/api/v2/type/16/"
  },
  {
    "name": "dark",
    "color": "dark",
    "opacity": 75,
    "url": "https://pokeapi.co/api/v2/type/17/"
  },
  {
    "name": "fairy",
    "color": "light",
    "opacity": 100,
    "url": "https://pokeapi.co/api/v2/type/18/"
  },
  {
    "name": "unknown",
    "color": "primary",
    "opacity": 75,
    "url": "https://pokeapi.co/api/v2/type/10001/"
  },
  {
    "name": "shadow",
    "color": "dark",
    "opacity": 100,
    "url": "https://pokeapi.co/api/v2/type/10002/"
  }
];

export interface Responds {
  count: number,
  next: string,
  previous: string,
  results: {name: string, url: string}[]
}

export interface Ability2 {
  name: string;
  url: string;
}

export interface Ability {
  ability: Ability2;
  is_hidden: boolean;
  slot: number;
}

export interface Form {
  name: string;
  url: string;
}

export interface Version {
  name: string;
  url: string;
}

export interface GameIndice {
  game_index: number;
  version: Version;
}

export interface Move2 {
  name: string;
  url: string;
}

export interface MoveLearnMethod {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
}

export interface Move {
  move: Move2;
  version_group_details: VersionGroupDetail[];
}

export interface Species {
  name: string;
  url: string;
}

export interface DreamWorld {
  front_default: string;
  front_female?: any;
}

export interface Home {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface OfficialArtwork {
  front_default: string;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  official_artwork: OfficialArtwork;
}

export interface RedBlue {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

export interface Yellow {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

export interface GenerationI {
  red_blue: RedBlue;
  yellow: Yellow;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Silver {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
}

export interface Emerald {
  front_default: string;
  front_shiny: string;
}

export interface FireredLeafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface RubySapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface GenerationIii {
  emerald: Emerald;
  firered_leafgreen: FireredLeafgreen;
  ruby_sapphire: RubySapphire;
}

export interface DiamondPearl {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface HeartgoldSoulsilver {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Platinum {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface GenerationIv {
  diamond_pearl: DiamondPearl;
  heartgold_soulsilver: HeartgoldSoulsilver;
  platinum: Platinum;
}

export interface Animated {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface BlackWhite {
  animated: Animated;
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface GenerationV {
  black_white: BlackWhite;
}

export interface OmegarubyAlphasapphire {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface XY {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface GenerationVi {
  omegaruby_alphasapphire: OmegarubyAlphasapphire;
  x_y: XY;
}

export interface Icons {
  front_default: string;
  front_female?: any;
}

export interface UltraSunUltraMoon {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface GenerationVii {
  icons: Icons;
  ultra_sun_ultra_moon: UltraSunUltraMoon;
}

export interface Icons2 {
  front_default: string;
  front_female?: any;
}

export interface GenerationViii {
  icons: Icons2;
}

export interface Versions {
  generation_i: GenerationI;
  generation_ii: GenerationIi;
  generation_iii: GenerationIii;
  generation_iv: GenerationIv;
  generation_v: GenerationV;
  generation_vi: GenerationVi;
  generation_vii: GenerationVii;
  generation_viii: GenerationViii;
}

export interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: Other;
  versions: Versions;
}

export interface Stat2 {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

export interface Type2 {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Type2;
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indices: GameIndice[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}
