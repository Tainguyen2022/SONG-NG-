
import { GrammarState, Unit, Flags, Subject, Lemma } from '../types';
import { units } from '../data/units';

// --- Helper Functions ---
const isThirdPersonSingular = (subject: Subject) => ['he', 'she', 'it', 'danh từ số ít'].includes(subject);
const getPronoun = (subject: Subject): string => {
    const subjectMap = {
        'I': 'I', 'you': 'you', 'we': 'we', 'they': 'they', 'he': 'he', 'she': 'she', 'it': 'it',
        'N (số nhiều)': 'the students',
        'danh từ số ít': 'the student'
    };
    return subjectMap[subject];
}

// --- Conjugation Engine ---
const conjugateVerb = (lemma: Lemma, verbForm: string, subject: Subject, flags: Flags): string => {
    switch (verbForm) {
        case 'base': return lemma.base || lemma.text;
        case 'ing': return lemma.ing || `${lemma.text}ing`;
        case 'past': return lemma.past || `${lemma.text}ed`;
        case 'pp': return lemma.pp || lemma.past || `${lemma.text}ed`;
        case 's':
            const base = lemma.base || lemma.text;
             if (/(s|x|z|ch|sh)$/.test(base)) return `${base}es`;
             if (/[bcdfghjklmnpqrstvwxyz]y$/.test(base)) return `${base.slice(0, -1)}ies`;
             return `${base}s`;
        default: return lemma.text;
    }
};

const getAuxiliary = (state: GrammarState): { aux: string, verbForm: string, mainVerb: string } => {
    const { flags, subject, lemma } = state;
    const { tense, aspect, polarity, voice, near_future } = flags;
    const is3rdSg = isThirdPersonSingular(subject);
    const pronoun = getPronoun(subject);
    
    let mainVerb = conjugateVerb(lemma, 'base', subject, flags); // Default verb form

    // --- Active Voice ---
    if (voice === 'active') {
        const verb_s = conjugateVerb(lemma, 's', subject, flags);
        const verb_ing = conjugateVerb(lemma, 'ing', subject, flags);
        const verb_past = conjugateVerb(lemma, 'past', subject, flags);
        const verb_pp = conjugateVerb(lemma, 'pp', subject, flags);

        // Near Future (be going to) takes precedence
        if (near_future) {
            const be = subject === 'I' ? 'am' : is3rdSg ? 'is' : 'are';
            if (polarity === 'interrogative') return { aux: `${be}`, mainVerb: `going to ${mainVerb}`, verbForm: 'interrogative_be' };
            if (polarity === 'negative') return { aux: `${be} not`, mainVerb: `going to ${mainVerb}`, verbForm: 'statement' };
            return { aux: `${be}`, mainVerb: `going to ${mainVerb}`, verbForm: 'statement' };
        }

        // Tense/Aspect Logic
        if (tense === 'present') {
            if (aspect === 'simple') {
                if (polarity === 'negative') return { aux: is3rdSg ? 'does not' : 'do not', mainVerb, verbForm: 'statement' };
                if (polarity === 'interrogative') return { aux: is3rdSg ? 'Does' : 'Do', mainVerb, verbForm: 'interrogative_do' };
                return { aux: '', mainVerb: is3rdSg ? verb_s : mainVerb, verbForm: 'statement' };
            }
            if (aspect === 'progressive') {
                const be = subject === 'I' ? 'am' : is3rdSg ? 'is' : 'are';
                if (polarity === 'interrogative') return { aux: be, mainVerb: verb_ing, verbForm: 'interrogative_be' };
                return { aux: polarity === 'negative' ? `${be} not` : be, mainVerb: verb_ing, verbForm: 'statement' };
            }
            if (aspect === 'perfect') {
                const have = is3rdSg ? 'has' : 'have';
                if (polarity === 'interrogative') return { aux: have, mainVerb: verb_pp, verbForm: 'interrogative_have' };
                return { aux: polarity === 'negative' ? `${have} not` : have, mainVerb: verb_pp, verbForm: 'statement' };
            }
            if (aspect === 'perfect_progressive') {
                const have = is3rdSg ? 'has' : 'have';
                if (polarity === 'interrogative') return { aux: `${have}`, mainVerb: `been ${verb_ing}`, verbForm: 'interrogative_have' };
                return { aux: polarity === 'negative' ? `${have} not` : have, mainVerb: `been ${verb_ing}`, verbForm: 'statement' };
            }
        }
        if (tense === 'past') {
            if (aspect === 'simple') {
                if (polarity === 'negative') return { aux: 'did not', mainVerb, verbForm: 'statement' };
                if (polarity === 'interrogative') return { aux: 'Did', mainVerb, verbForm: 'interrogative_do' };
                return { aux: '', mainVerb: verb_past, verbForm: 'statement' };
            }
            if (aspect === 'progressive') {
                const be = is3rdSg || subject === 'I' ? 'was' : 'were';
                if (polarity === 'interrogative') return { aux: be, mainVerb: verb_ing, verbForm: 'interrogative_be' };
                return { aux: polarity === 'negative' ? `${be} not` : be, mainVerb: verb_ing, verbForm: 'statement' };
            }
            if (aspect === 'perfect') {
                if (polarity === 'interrogative') return { aux: 'Had', mainVerb: verb_pp, verbForm: 'interrogative_have' };
                return { aux: polarity === 'negative' ? 'had not' : 'had', mainVerb: verb_pp, verbForm: 'statement' };
            }
             if (aspect === 'perfect_progressive') {
                if (polarity === 'interrogative') return { aux: 'had', mainVerb: `been ${verb_ing}`, verbForm: 'interrogative_have' };
                return { aux: polarity === 'negative' ? `had not` : 'had', mainVerb: `been ${verb_ing}`, verbForm: 'statement' };
            }
        }
        if (tense === 'future') {
            if (aspect === 'simple') {
                if (polarity === 'negative') return { aux: 'will not', mainVerb, verbForm: 'statement' };
                if (polarity === 'interrogative') return { aux: 'Will', mainVerb, verbForm: 'interrogative_will' };
                return { aux: 'will', mainVerb, verbForm: 'statement' };
            }
            if (aspect === 'progressive') {
                 if (polarity === 'negative') return { aux: 'will not', mainVerb: `be ${verb_ing}`, verbForm: 'statement' };
                if (polarity === 'interrogative') return { aux: 'Will', mainVerb: `be ${verb_ing}`, verbForm: 'interrogative_will' };
                return { aux: 'will', mainVerb: `be ${verb_ing}`, verbForm: 'statement' };
            }
            if (aspect === 'perfect') {
                 if (polarity === 'negative') return { aux: 'will not', mainVerb: `have ${verb_pp}`, verbForm: 'statement' };
                if (polarity === 'interrogative') return { aux: 'Will', mainVerb: `have ${verb_pp}`, verbForm: 'interrogative_will' };
                return { aux: 'will', mainVerb: `have ${verb_pp}`, verbForm: 'statement' };
            }
        }
    }
    
    // --- Passive Voice ---
    if (voice === 'passive') {
        const verb_pp = conjugateVerb(lemma, 'pp', subject, flags);
        let be_aux = '';

        if (near_future) {
            const be = subject === 'I' ? 'am' : is3rdSg ? 'is' : 'are';
            be_aux = `${be} going to be`;
        } else if (tense === 'present') {
            const be = subject === 'I' ? 'am' : is3rdSg ? 'is' : 'are';
            if (aspect === 'simple') be_aux = be;
            if (aspect === 'progressive') be_aux = `${be} being`;
            if (aspect === 'perfect') be_aux = `${is3rdSg ? 'has' : 'have'} been`;
        } else if (tense === 'past') {
            const be = is3rdSg || subject === 'I' ? 'was' : 'were';
            if (aspect === 'simple') be_aux = be;
            if (aspect === 'progressive') be_aux = `${be} being`;
            if (aspect === 'perfect') be_aux = 'had been';
        } else if (tense === 'future') {
            if (aspect === 'simple') be_aux = 'will be';
            if (aspect === 'perfect') be_aux = 'will have been';
        }

        const parts = be_aux.split(' ');
        const first_aux = parts[0];
        const rest_aux = parts.slice(1).join(' ');

        if (polarity === 'interrogative') return { aux: first_aux, mainVerb: `${rest_aux} ${verb_pp}`, verbForm: 'interrogative_be' };
        if (polarity === 'negative') return { aux: `${first_aux} not`, mainVerb: `${rest_aux} ${verb_pp}`, verbForm: 'statement' };
        return { aux: be_aux, mainVerb: verb_pp, verbForm: 'statement' };
    }

    // Default fallback
    return { aux: '', mainVerb: lemma.text, verbForm: 'statement' };
};

// --- Main Service Functions ---

export const getFlagsForUnit = (unit: Unit, currentFlags: Flags): Flags => {
    return {
        ...currentFlags,
        tense: unit.tags?.tense || currentFlags.tense,
        aspect: unit.tags?.aspect || currentFlags.aspect,
        voice: unit.tags?.voice || 'active',
        near_future: unit.tags?.near_future || false,
        polarity: 'affirmative',
    };
};

export const generateSentence = (state: GrammarState): { en: string; vi: string; error: string | null } => {
    const { subject, lemma, flags, unitId } = state;
    const unit = units.find(u => u.id === unitId);
    
    if (unit?.applicable === false) {
        return { 
            en: "N/A",
            vi: "Không áp dụng",
            error: "KHÔNG ÁP DỤNG VỚI ĐIỂM NGỮ PHÁP NÀY"
        };
    }
    
    if (lemma.type !== 'verb') {
        const pronoun = getPronoun(subject);
        const be = isThirdPersonSingular(subject) ? 'is' : (subject === 'I' ? 'am' : 'are');
        return {
            en: `${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} ${be} ${lemma.text}.`,
            vi: `(Dịch mẫu) ${pronoun} là/thì ${lemma.text}.`,
            error: null
        }
    }
    
    const { aux, mainVerb, verbForm } = getAuxiliary(state);
    const pronoun = getPronoun(subject);
    
    let en = '';
    const capitalizedPronoun = pronoun.charAt(0).toUpperCase() + pronoun.slice(1);
    
    switch (verbForm) {
        case 'interrogative_be':
        case 'interrogative_have':
        case 'interrogative_will':
            en = `${aux.charAt(0).toUpperCase() + aux.slice(1)} ${pronoun} ${mainVerb}?`;
            break;
        case 'interrogative_do':
            en = `${aux} ${pronoun} ${mainVerb}?`;
            break;
        default: // statement
            en = `${capitalizedPronoun} ${aux} ${mainVerb}.`;
            break;
    }

    // Basic Vietnamese translation
    const vi = `(Dịch mẫu) ${pronoun} ${flags.tense === 'past' ? 'đã' : (flags.aspect === 'progressive' ? 'đang' : '')} ${lemma.text}.`;

    return { en: en.replace(/\s+/g, ' ').trim(), vi, error: null };
};
