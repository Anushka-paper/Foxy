export type ActivityType = 'vocabulary' | 'phrase' | 'video-teacher' | 'audio' | 'chat';

export type Activity = {
  id: string;
  type: ActivityType;
  prompt: string; // AI teacher prompt or translation instruction
  expectedAnswer?: string; // The correct answer for simple matching
  options?: string[]; // Multiple choice options
  vocabularyId?: string; // Link to specific vocabulary
  phraseId?: string; // Link to specific phrase
};

export type Lesson = {
  id: string;
  title: string;
  description: string;
  unitId: string;
  order: number;
  activities: Activity[];
  goal: string;
  aiTeacherPrompt?: string; // System prompt for the vision/audio agent
};

export type Unit = {
  id: string;
  languageId: string;
  title: string;
  description: string;
  order: number;
  lessons: string[]; // Lesson IDs
};

export type Vocabulary = {
  id: string;
  languageId: string;
  word: string;
  translation: string;
  audioUrl?: string;
};

export type Phrase = {
  id: string;
  languageId: string;
  phrase: string;
  translation: string;
  audioUrl?: string;
};

export type Language = {
  id: string;
  name: string;
  emoji: string;
};
