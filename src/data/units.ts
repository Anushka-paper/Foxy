import { Unit } from '../types/learning';

export const UNITS: Unit[] = [
  // Spanish Units
  {
    id: 'es_unit_1',
    languageId: 'es',
    title: 'Basics 1',
    description: 'Learn basic greetings and introductions.',
    order: 1,
    lessons: ['es_lesson_1', 'es_lesson_2'],
  },
  {
    id: 'es_unit_2',
    languageId: 'es',
    title: 'Travel',
    description: 'Essential phrases for getting around.',
    order: 2,
    lessons: ['es_lesson_3'],
  },

  // French Units
  {
    id: 'fr_unit_1',
    languageId: 'fr',
    title: 'Basics 1',
    description: 'Say hello and goodbye in French.',
    order: 1,
    lessons: ['fr_lesson_1'],
  },

  // Japanese Units
  {
    id: 'ja_unit_1',
    languageId: 'ja',
    title: 'Hiragana 1',
    description: 'Learn the first characters of the Japanese alphabet.',
    order: 1,
    lessons: ['ja_lesson_1'],
  },
];
