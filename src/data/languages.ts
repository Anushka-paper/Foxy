import { Language } from '../types/learning';
import { UNITS } from './units';

const ALL_LANGUAGES: Language[] = [
  {
    id: 'es',
    name: 'Spanish',
    emoji: '🇪🇸',
  },
  {
    id: 'fr',
    name: 'French',
    emoji: '🇫🇷',
  },
  {
    id: 'ja',
    name: 'Japanese',
    emoji: '🇯🇵',
  },
  {
    id: 'ko',
    name: 'Korean',
    emoji: '🇰🇷',
  },
  {
    id: 'de',
    name: 'German',
    emoji: '🇩🇪',
  },
  {
    id: 'zh',
    name: 'Chinese',
    emoji: '🇨🇳',
  },
];

const availableLanguageIds = new Set(UNITS.map(unit => unit.languageId));

export const LANGUAGES: Language[] = ALL_LANGUAGES.filter(lang => availableLanguageIds.has(lang.id));
