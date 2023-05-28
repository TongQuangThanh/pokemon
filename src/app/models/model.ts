export const limit = 8;
export const LOCAL = 'thnvn_pokemon_';
export const LOCAL_DARK = LOCAL + 'DARK';
export const baseUrls = 'https://pokeapi.co/api/v2';

export const filters = ['gender', 'growth-rate', 'pokemon-habitat', 'type', 'pokemon-color', 'pokemon-shape'];

export const storageKey = {
  listAll: 'thnvn-pokemon',
  player1: 'Player1'
};

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
    name: 'normal',
    color: 'primary',
    opacity: 100,
    url: 'https://pokeapi.co/api/v2/type/1/'
  },
  {
    name: 'fighting',
    color: 'danger',
    opacity: 50,
    url: 'https://pokeapi.co/api/v2/type/2/'
  },
  {
    name: 'flying',
    color: 'primary',
    opacity: 50,
    url: 'https://pokeapi.co/api/v2/type/3/'
  },
  {
    name: 'poison',
    color: 'success',
    opacity: 75,
    url: 'https://pokeapi.co/api/v2/type/4/'
  },
  {
    name: 'ground',
    color: 'warning',
    opacity: 100,
    url: 'https://pokeapi.co/api/v2/type/5/'
  },
  {
    name: 'rock',
    color: 'light',
    opacity: 75,
    url: 'https://pokeapi.co/api/v2/type/6/'
  },
  {
    name: 'bug',
    color: 'warning',
    opacity: 75,
    url: 'https://pokeapi.co/api/v2/type/7/'
  },
  {
    name: 'ghost',
    color: 'light',
    opacity: 100,
    url: 'https://pokeapi.co/api/v2/type/8/'
  },
  {
    name: 'steel',
    color: 'secondary',
    opacity: 100,
    url: 'https://pokeapi.co/api/v2/type/9/'
  },
  {
    name: 'fire',
    color: 'danger',
    opacity: 100,
    url: 'https://pokeapi.co/api/v2/type/10/'
  },
  {
    name: 'water',
    color: 'tertiary',
    opacity: 100,
    url: 'https://pokeapi.co/api/v2/type/11/'
  },
  {
    name: 'grass',
    color: 'success',
    opacity: 100,
    url: 'https://pokeapi.co/api/v2/type/12/'
  },
  {
    name: 'electric',
    color: 'tertiary',
    opacity: 50,
    url: 'https://pokeapi.co/api/v2/type/13/'
  },
  {
    name: 'psychic',
    color: 'dark',
    opacity: 50,
    url: 'https://pokeapi.co/api/v2/type/14/'
  },
  {
    name: 'ice',
    color: 'tertiary',
    opacity: 75,
    url: 'https://pokeapi.co/api/v2/type/15/'
  },
  {
    name: 'dragon',
    color: 'danger',
    opacity: 50,
    url: 'https://pokeapi.co/api/v2/type/16/'
  },
  {
    name: 'dark',
    color: 'dark',
    opacity: 75,
    url: 'https://pokeapi.co/api/v2/type/17/'
  },
  {
    name: 'fairy',
    color: 'light',
    opacity: 50,
    url: 'https://pokeapi.co/api/v2/type/18/'
  },
  {
    name: 'unknown',
    color: 'primary',
    opacity: 75,
    url: 'https://pokeapi.co/api/v2/type/10001/'
  },
  {
    name: 'shadow',
    color: 'dark',
    opacity: 100,
    url: 'https://pokeapi.co/api/v2/type/10002/'
  }
];

export interface Responds {
  count: number;
  next: string;
  previous: string;
  results: { name: string, url: string }[];
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

export interface GenerationViii {
  icons: Icons;
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

export interface NameUrl {
  name: string;
  url: string;
}

export interface Type2 {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Type2;
}

export interface LocationArea {
  name: string;
  url: string;
}

export interface Encounter {
  location_area: LocationArea;
  version_details: any;
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

export interface DoubleDamageFrom {
  name: string;
  url: string;
}

export interface DoubleDamageTo {
  name: string;
  url: string;
}

export interface HalfDamageFrom {
  name: string;
  url: string;
}

export interface HalfDamageTo {
  name: string;
  url: string;
}

export interface NoDamageFrom {
  name: string;
  url: string;
}

export interface NoDamageTo {
  name: string;
  url: string;
}

export interface DamageRelations {
  double_damage_from: DoubleDamageFrom[];
  double_damage_to: DoubleDamageTo[];
  half_damage_from: HalfDamageFrom[];
  half_damage_to: HalfDamageTo[];
  no_damage_from: NoDamageFrom[];
  no_damage_to: NoDamageTo[];
}

export interface Generation {
  name: string;
  url: string;
}

export interface GameIndice2 {
  game_index: number;
  generation: Generation;
}

export interface MoveDamageClass {
  name: string;
  url: string;
}

export interface Move {
  name: string;
  url: string;
}

export interface Language {
  name: string;
  url: string;
}

export interface Name {
  language: Language;
  name: string;
}

export interface Pokemon2 {
  name: string;
  url: string;
}

export interface PokemonReference {
  pokemon: Pokemon2;
  slot: number;
}

export interface TypeRelation {
  damage_relations: DamageRelations;
  game_indices: GameIndice2[];
  generation: Generation;
  id: number;
  move_damage_class: MoveDamageClass;
  moves: Move[];
  name: string;
  names: Name[];
  past_damage_relations: any[];
  pokemon: PokemonReference[];
}

export interface Color {
  name: string;
  url: string;
}

export interface EggGroup {
  name: string;
  url: string;
}

export interface EvolutionChain2 {
  url: string;
}

export interface EvolvesFromSpecies {
  name: string;
  url: string;
}

export interface Version {
  name: string;
  url: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
  version: Version;
}

export interface Genera {
  genus: string;
  language: Language;
}

export interface Generation {
  name: string;
  url: string;
}

export interface GrowthRate {
  name: string;
  url: string;
}

export interface Habitat {
  name: string;
  url: string;
}

export interface Language3 {
  name: string;
  url: string;
}

export interface Area {
  name: string;
  url: string;
}

export interface PalParkEncounter {
  area: Area;
  base_score: number;
  rate: number;
}

export interface Pokedex {
  name: string;
  url: string;
}

export interface PokedexNumber {
  entry_number: number;
  pokedex: Pokedex;
}

export interface Shape {
  name: string;
  url: string;
}

export interface Variety {
  is_default: boolean;
  pokemon: Pokemon2;
}

export interface PokemonSpecies {
  base_happiness: number;
  capture_rate: number;
  color: Color;
  egg_groups: EggGroup[];
  evolution_chain: EvolutionChain2;
  evolves_from_species: EvolvesFromSpecies;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genera[];
  generation: Generation;
  growth_rate: GrowthRate;
  habitat: Habitat;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: PalParkEncounter[];
  pokedex_numbers: PokedexNumber[];
  shape: Shape;
  varieties: Variety[];
}

export interface Trigger {
  name: string;
  url: string;
}

export interface Gender {
  name: string;
  url: string;
}

export interface EvolutionDetail {
  gender?: any;
  held_item?: any;
  item?: any;
  known_move?: any;
  known_move_type?: any;
  location?: any;
  min_affection?: any;
  min_beauty?: any;
  min_happiness?: any;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species?: any;
  party_type?: any;
  relative_physical_stats?: any;
  time_of_day: string;
  trade_species?: any;
  trigger: Trigger;
  turn_upside_down: boolean;
}

export interface EvolutionDetail2 {
  gender?: any;
  held_item?: any;
  item?: any;
  known_move?: any;
  known_move_type?: any;
  location?: any;
  min_affection?: any;
  min_beauty?: any;
  min_happiness?: any;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species?: any;
  party_type?: any;
  relative_physical_stats?: any;
  time_of_day: string;
  trade_species?: any;
  trigger: Trigger;
  turn_upside_down: boolean;
}

export interface Species {
  name: string;
  url: string;
}

export interface EvolvesTo2 {
  evolution_details: EvolutionDetail2[];
  evolves_to: any[];
  is_baby: boolean;
  species: Species;
}

export interface EvolvesTo {
  evolution_details: EvolutionDetail[];
  evolves_to: EvolvesTo2[];
  is_baby: boolean;
  species: Species;
}

export interface Chain {
  evolution_details: any[];
  evolves_to: EvolvesTo[];
  is_baby: boolean;
  species: Species;
}

export interface EvolutionChain {
  baby_trigger_item?: any;
  chain: Chain;
  id: number;
}

export interface PokemonSpeciesDetail {
  pokemon_species: PokemonSpecy;
  rate: number;
}

export interface RequiredForEvolution {
  name: string;
  url: string;
}

export interface GenderRelation {
  id: number;
  name: string;
  pokemon_species_details: PokemonSpeciesDetail[];
  required_for_evolution: RequiredForEvolution[];
}

export interface Description {
  description: string;
  language: Language;
}

export interface Level {
  experience: number;
  level: number;
}

export interface PokemonSpecy {
  name: string;
  url: string;
}

export interface GrowthRateRelation {
  descriptions: Description[];
  formula: string;
  id: number;
  levels: Level[];
  name: string;
  pokemon_species: PokemonSpecy[];
}

export interface HabitatRelation {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: PokemonSpecy[];
}

export interface ColorRelation {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: PokemonSpecy[];
}

export interface AwesomeName {
  awesome_name: string;
  language: Language;
}

export interface PokemonShapeRelation {
  awesome_names: AwesomeName[];
  id: number;
  name: string;
  names: Name[];
  pokemon_species: PokemonSpecy[];
}
