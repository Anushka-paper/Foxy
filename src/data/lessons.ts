import { Lesson } from '../types/learning';

export const LESSONS: Lesson[] = [
  // SPANISH LESSONS
  {
    id: 'es_lesson_1',
    title: 'Saying Hello',
    description: 'Learn to greet people in Spanish.',
    unitId: 'es_unit_1',
    order: 1,
    goal: 'User can say hello and goodbye in Spanish.',
    aiTeacherPrompt: 'You are a friendly Spanish teacher. The student is learning basic greetings. Speak slowly and clearly. Introduce the words "Hola" (hello) and "Adiós" (goodbye). Encourage them to repeat after you.',
    activities: [
      {
        id: 'es_l1_a1',
        type: 'vocabulary',
        prompt: 'How do you say "Hello"?',
        expectedAnswer: 'Hola',
        options: ['Hola', 'Adiós', 'Gracias', 'Por favor'],
      },
      {
        id: 'es_l1_a2',
        type: 'video-teacher',
        prompt: 'Listen to the teacher and repeat.',
      },
      {
        id: 'es_l1_a3',
        type: 'phrase',
        prompt: 'Translate: Goodbye',
        expectedAnswer: 'Adiós',
        options: ['Hola', 'Adiós', 'Sí', 'No'],
      },
    ],
  },
  {
    id: 'es_lesson_2',
    title: 'Introductions',
    description: 'Learn to introduce yourself.',
    unitId: 'es_unit_1',
    order: 2,
    goal: 'User can introduce themselves saying "My name is...".',
    aiTeacherPrompt: 'You are a Spanish teacher. The user knows "Hola". Teach them how to say "Me llamo [Name]" (My name is). Have a short back-and-forth conversation where they introduce themselves.',
    activities: [
      {
        id: 'es_l2_a1',
        type: 'vocabulary',
        prompt: 'How do you say "My name is"?',
        expectedAnswer: 'Me llamo',
        options: ['Me llamo', 'Yo soy', 'Tú eres', 'Hola'],
      },
      {
        id: 'es_l2_a2',
        type: 'chat',
        prompt: 'Have a short chat in Spanish. Start by saying hello and introducing yourself.',
      },
    ],
  },
  {
    id: 'es_lesson_3',
    title: 'At the Airport',
    description: 'Vocabulary for the airport.',
    unitId: 'es_unit_2',
    order: 1,
    goal: 'User can ask where the airport is.',
    activities: [
      {
        id: 'es_l3_a1',
        type: 'phrase',
        prompt: 'Translate: Where is the airport?',
        expectedAnswer: '¿Dónde está el aeropuerto?',
        options: [
          '¿Dónde está el aeropuerto?',
          '¿Dónde está el baño?',
          'Quiero agua',
          'Hola',
        ],
      },
    ],
  },

  // FRENCH LESSONS
  {
    id: 'fr_lesson_1',
    title: 'Bonjour!',
    description: 'Basic French greetings.',
    unitId: 'fr_unit_1',
    order: 1,
    goal: 'User can say hello in French.',
    aiTeacherPrompt: 'You are a French teacher. Teach the user to say "Bonjour" with a good accent.',
    activities: [
      {
        id: 'fr_l1_a1',
        type: 'vocabulary',
        prompt: 'How do you say "Hello"?',
        expectedAnswer: 'Bonjour',
        options: ['Bonjour', 'Au revoir', 'Merci', 'Oui'],
      },
    ],
  },

  // JAPANESE LESSONS
  {
    id: 'ja_lesson_1',
    title: 'Konnichiwa',
    description: 'Basic Japanese greetings.',
    unitId: 'ja_unit_1',
    order: 1,
    goal: 'User can say hello in Japanese.',
    activities: [
      {
        id: 'ja_l1_a1',
        type: 'vocabulary',
        prompt: 'How do you say "Hello"?',
        expectedAnswer: 'Konnichiwa',
        options: ['Konnichiwa', 'Sayonara', 'Arigato', 'Hai'],
      },
    ],
  },
];
