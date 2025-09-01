
export interface Group {
  id: number;
  code: string;
  vi: string;
  en: string;
}

export interface Unit {
  id: string;
  group_id: number;
  vi: string;
  en: string;
  tags: Record<string, any>;
  canonKey: string;
  coreRef: string;
  applicable?: boolean;
}

export type Subject = 'I' | 'you' | 'we' | 'they' | 'he' | 'she' | 'it' | 'N (số nhiều)' | 'danh từ số ít';

export interface Lemma {
  type: 'verb' | 'adj' | 'adv' | 'noun' | 'prep';
  text: string;
  base?: string;
  past?: string;
  pp?: string;
  ing?: string;
  article?: string;
}

export interface Flags {
  tense: 'present' | 'past' | 'future';
  aspect: 'simple' | 'progressive' | 'perfect' | 'perfect_progressive';
  voice: 'active' | 'passive';
  polarity: 'affirmative' | 'negative' | 'interrogative';
  near_future: boolean;
  short_answer: boolean;
  contractions: boolean;
}

export interface GrammarState {
  subject: Subject;
  lemma: Lemma;
  flags: Flags;
  unitId: string | null;
}

export interface VocabItem {
    base?: string;
    past?: string;
    pp?: string;
    ing?: string;
    word?: string;
    type?: string;
    article?: string;
}

export type VocabPack = Record<string, VocabItem[]>;

export interface NewsArticle {
    id: string;
    title_en: string;
    title_vi: string;
    image_url: string;
    content_en: string;
    content_vi: string;
}

export interface BugReport {
    time: string;
    route: string;
    state: GrammarState;
    message: string;
    userAgent: string;
}
