import { Ability, HEROES_KEYS, Role, locales } from "../type";
import { get } from "../utils/fetch";

type heroesParams = {
  locale?: locales;
} | null;
type HeroDetails = {
  name: string;
  description: string;
  portrait: string;
  role: Role;
  location: string;
  abilities: Ability[];
  story: {
    sumarry: string;
    media: {
      type: string;
      link: string;
    };
    chapters: {
      title: string;
      content: string;
      picture: string;
    }[];
  };
};
/**
 * This function return a hero details from Overfast API by TeKrop.
 *
 * @param {HEROES_KEYS} hero_key The hero key.
 * @param {heroesParams} params Optional parameters.
 * @returns {Promise<HeroDetails>} Promise of a hero details.
 * @example
 * // Get hero details of Ana
 * const ana = await Overwatch.hero("ana");
 *
 * // Get hero details of Ana with locale "fr_FR"
 * const anaFr = await Overwatch.hero("ana", { locale: "fr_FR" });
 */
export const hero = async (hero_key: HEROES_KEYS, params?: heroesParams) => {
  const { locale } = params || {};
  const localeParam = locale ? `locale=${locale}` : "";
  const url = `https://overfast-api.tekrop.fr/heroes/${hero_key}?${localeParam}`;
  const data: HeroDetails = await get(url);
  return data;
};
