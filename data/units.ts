
import { Unit } from '../types';

export const units: Unit[] = [
  // Group 1: Present Tenses (4)
  { id: "1-1", group_id: 1, vi: "Hiện tại đơn", en: "Present Simple", tags: { tense: 'present', aspect: 'simple' }, canonKey: "T_PRES_SIM", coreRef: "T_PRES_SIM" },
  { id: "1-2", group_id: 1, vi: "Hiện tại tiếp diễn", en: "Present Continuous", tags: { tense: 'present', aspect: 'progressive' }, canonKey: "T_PRES_PROG", coreRef: "T_PRES_PROG" },
  { id: "1-3", group_id: 1, vi: "Hiện tại hoàn thành", en: "Present Perfect", tags: { tense: 'present', aspect: 'perfect' }, canonKey: "T_PRES_PERF", coreRef: "T_PRES_PERF" },
  { id: "1-4", group_id: 1, vi: "Hiện tại hoàn thành tiếp diễn", en: "Present Perfect Continuous", tags: { tense: 'present', aspect: 'perfect_progressive' }, canonKey: "T_PRES_PERF_PROG", coreRef: "T_PRES_PERF_PROG" },
  // Group 2: Past Tenses (4)
  { id: "2-1", group_id: 2, vi: "Quá khứ đơn", en: "Past Simple", tags: { tense: 'past', aspect: 'simple' }, canonKey: "T_PAST_SIM", coreRef: "T_PAST_SIM" },
  { id: "2-2", group_id: 2, vi: "Quá khứ tiếp diễn", en: "Past Continuous", tags: { tense: 'past', aspect: 'progressive' }, canonKey: "T_PAST_PROG", coreRef: "T_PAST_PROG" },
  { id: "2-3", group_id: 2, vi: "Quá khứ hoàn thành", en: "Past Perfect", tags: { tense: 'past', aspect: 'perfect' }, canonKey: "T_PAST_PERF", coreRef: "T_PAST_PERF" },
  { id: "2-4", group_id: 2, vi: "Quá khứ hoàn thành tiếp diễn", en: "Past Perfect Continuous", tags: { tense: 'past', aspect: 'perfect_progressive' }, canonKey: "T_PAST_PERF_PROG", coreRef: "T_PAST_PERF_PROG" },
  // Group 3: Future Tenses (5)
  { id: "3-1", group_id: 3, vi: "Tương lai đơn (will)", en: "Future Simple (will)", tags: { tense: 'future', aspect: 'simple' }, canonKey: "T_FUT_SIM", coreRef: "T_FUT_SIM" },
  { id: "3-2", group_id: 3, vi: "Tương lai gần (be going to)", en: "Be going to", tags: { tense: 'future', near_future: true }, canonKey: "T_FUT_NEAR_BGT", coreRef: "T_FUT_NEAR_BGT" },
  { id: "3-3", group_id: 3, vi: "Tương lai tiếp diễn", en: "Future Continuous", tags: { tense: 'future', aspect: 'progressive' }, canonKey: "T_FUT_PROG", coreRef: "T_FUT_PROG" },
  { id: "3-4", group_id: 3, vi: "Tương lai hoàn thành", en: "Future Perfect", tags: { tense: 'future', aspect: 'perfect' }, canonKey: "T_FUT_PERF", coreRef: "T_FUT_PERF" },
  { id: "3-5", group_id: 3, vi: "Dự định tương lai (HTTD)", en: "Near future (Present Continuous for arrangements)", tags: { tense: 'present', aspect: 'progressive', near_future: true }, canonKey: "T_FUT_NEAR_PC", coreRef: "T_FUT_NEAR_PC" },
  // Group 4: Sentence Types (5)
  { id: "4-1", group_id: 4, vi: "Câu đơn", en: "Simple Sentence", tags: { category: 'sentence_type' }, canonKey: "S_TYPE_SIMPLE", coreRef: "S_TYPE_SIMPLE" },
  { id: "4-2", group_id: 4, vi: "Câu ghép", en: "Compound Sentence", tags: { category: 'sentence_type' }, canonKey: "S_TYPE_COMPOUND", coreRef: "S_TYPE_COMPOUND" },
  { id: "4-3", group_id: 4, vi: "Câu phức", en: "Complex Sentence", tags: { category: 'sentence_type' }, canonKey: "S_TYPE_COMPLEX", coreRef: "S_TYPE_COMPLEX" },
  { id: "4-4", group_id: 4, vi: "Câu phức hợp", en: "Compound-complex Sentence", tags: { category: 'sentence_type' }, canonKey: "S_TYPE_COMP_COMP", coreRef: "S_TYPE_COMP_COMP" },
  { id: "4-5", group_id: 4, vi: "Câu chẻ (It/Wh)", en: "Cleft Sentence (It/Wh)", tags: { category: 'sentence_type' }, canonKey: "S_TYPE_CLEFT", coreRef: "S_TYPE_CLEFT" },
  // Group 5: Conditionals (7)
  { id: "5-1", group_id: 5, vi: "Câu điều kiện loại 1", en: "Conditional Type 1", tags: { category: 'conditional' }, canonKey: "S_COND_1", coreRef: "S_COND_1" },
  { id: "5-2", group_id: 5, vi: "Câu điều kiện loại 2", en: "Conditional Type 2", tags: { category: 'conditional' }, canonKey: "S_COND_2", coreRef: "S_COND_2" },
  { id: "5-3", group_id: 5, vi: "Câu điều kiện loại 3", en: "Conditional Type 3", tags: { category: 'conditional' }, canonKey: "S_COND_3", coreRef: "S_COND_3" },
  { id: "5-4", group_id: 5, vi: "Câu điều kiện hỗn hợp", en: "Mixed Conditionals", tags: { category: 'conditional' }, canonKey: "S_COND_MIX", coreRef: "S_COND_MIX" },
  { id: "5-5", group_id: 5, vi: "Đảo ngữ câu ĐK loại 1", en: "Inversion Type 1", tags: { category: 'conditional' }, canonKey: "S_COND_INV_1", coreRef: "S_COND_INV_1" },
  { id: "5-6", group_id: 5, vi: "Đảo ngữ câu ĐK loại 2", en: "Inversion Type 2", tags: { category: 'conditional' }, canonKey: "S_COND_INV_2", coreRef: "S_COND_INV_2" },
  { id: "5-7", group_id: 5, vi: "Đảo ngữ câu ĐK loại 3", en: "Inversion Type 3", tags: { category: 'conditional' }, canonKey: "S_COND_INV_3", coreRef: "S_COND_INV_3" },
  // Group 6: Wishes (3)
  { id: "6-1", group_id: 6, vi: "Ước ở hiện tại", en: "Wish (present)", tags: { category: 'wish' }, canonKey: "S_WISH_PRES", coreRef: "S_WISH_PRES" },
  { id: "6-2", group_id: 6, vi: "Ước ở quá khứ", en: "Wish (past)", tags: { category: 'wish' }, canonKey: "S_WISH_PAST", coreRef: "S_WISH_PAST" },
  { id: "6-3", group_id: 6, vi: "Ước ở tương lai", en: "Wish (future)", tags: { category: 'wish' }, canonKey: "S_WISH_FUT", coreRef: "S_WISH_FUT" },
  // Group 7: Reported Speech (5)
  { id: "7-1", group_id: 7, vi: "Tường thuật câu trần thuật", en: "Reported Statements", tags: { category: 'reported' }, canonKey: "S_REP_STATE", coreRef: "S_REP_STATE" },
  { id: "7-2", group_id: 7, vi: "Tường thuật câu hỏi Yes/No", en: "Reported Yes/No Questions", tags: { category: 'reported' }, canonKey: "S_REP_YN", coreRef: "S_REP_YN" },
  { id: "7-3", group_id: 7, vi: "Tường thuật câu hỏi Wh-", en: "Reported Wh- Questions", tags: { category: 'reported' }, canonKey: "S_REP_WH", coreRef: "S_REP_WH" },
  { id: "7-4", group_id: 7, vi: "Tường thuật câu mệnh lệnh", en: "Reported Imperatives/Requests", tags: { category: 'reported' }, canonKey: "S_REP_IMP", coreRef: "S_REP_IMP" },
  { id: "7-5", group_id: 7, vi: "Quy tắc lùi thì", en: "Backshift Rules", tags: { category: 'reported' }, canonKey: "S_REP_RULES", coreRef: "S_REP_RULES" },
  // Group 8: Comparisons (4)
  { id: "8-1", group_id: 8, vi: "So sánh bằng", en: "Comparison of Equality", tags: { category: 'comparison' }, canonKey: "W_COMP_EQ", coreRef: "W_COMP_EQ" },
  { id: "8-2", group_id: 8, vi: "So sánh hơn", en: "Comparative", tags: { category: 'comparison' }, canonKey: "W_COMP_COMP", coreRef: "W_COMP_COMP" },
  { id: "8-3", group_id: 8, vi: "So sánh nhất", en: "Superlative", tags: { category: 'comparison' }, canonKey: "W_COMP_SUP", coreRef: "W_COMP_SUP" },
  { id: "8-4", group_id: 8, vi: "So sánh kép/tiến triển", en: "Correlative/Progressive Comparison", tags: { category: 'comparison' }, canonKey: "W_COMP_CORR", coreRef: "W_COMP_CORR" },
  // Group 9: Subjunctive (5)
  { id: "9-1", group_id: 9, vi: "Giả định: that + V(bare)", en: "Mandative Subjunctive (that + V)", tags: { category: 'subjunctive' }, canonKey: "W_SUBJ_MAND", coreRef: "W_SUBJ_MAND" },
  { id: "9-2", group_id: 9, vi: "Giả định: were", en: "Were-subjunctive", tags: { category: 'subjunctive' }, canonKey: "W_SUBJ_WERE", coreRef: "W_SUBJ_WERE" },
  { id: "9-3", group_id: 9, vi: "Giả định: công thức cố định", en: "Fixed Formulae", tags: { category: 'subjunctive' }, canonKey: "W_SUBJ_FORMULA", coreRef: "W_SUBJ_FORMULA" },
  { id: "9-4", group_id: 9, vi: "Giả định: It + adj/n + that", en: "It + adj/n + that", tags: { category: 'subjunctive' }, canonKey: "W_SUBJ_IT", coreRef: "W_SUBJ_IT" },
  { id: "9-5", group_id: 9, vi: "Would rather/sooner", en: "Would rather/sooner", tags: { category: 'subjunctive' }, canonKey: "W_SUBJ_WOULD", coreRef: "W_SUBJ_WOULD" },
  // Group 10: Modals (6)
  { id: "10-1", group_id: 10, vi: "Khả năng/sự cho phép", en: "Ability/Permission", tags: { category: 'modal' }, canonKey: "W_MODAL_ABIL", coreRef: "W_MODAL_ABIL" },
  { id: "10-2", group_id: 10, vi: "Nghĩa vụ/sự cần thiết", en: "Obligation/Necessity", tags: { category: 'modal' }, canonKey: "W_MODAL_OBLI", coreRef: "W_MODAL_OBLI" },
  { id: "10-3", group_id: 10, vi: "Khả năng/xác suất", en: "Possibility/Probability", tags: { category: 'modal' }, canonKey: "W_MODAL_POSS", coreRef: "W_MODAL_POSS" },
  { id: "10-4", group_id: 10, vi: "Suy luận", en: "Deduction", tags: { category: 'modal' }, canonKey: "W_MODAL_DED", coreRef: "W_MODAL_DED" },
  { id: "10-5", group_id: 10, vi: "Lời khuyên", en: "Advice", tags: { category: 'modal' }, canonKey: "W_MODAL_ADV", coreRef: "W_MODAL_ADV" },
  { id: "10-6", group_id: 10, vi: "Thói quen trong quá khứ", en: "Past Habit", tags: { category: 'modal' }, canonKey: "W_MODAL_HABIT", coreRef: "W_MODAL_HABIT" },
  // Group 11: Articles (4)
  { id: "11-1", group_id: 11, vi: "Mạo từ a/an", en: "a/an", tags: { category: 'article' }, canonKey: "W_ART_AAN", coreRef: "W_ART_AAN" },
  { id: "11-2", group_id: 11, vi: "Mạo từ the", en: "the", tags: { category: 'article' }, canonKey: "W_ART_THE", coreRef: "W_ART_THE" },
  { id: "11-3", group_id: 11, vi: "Mạo từ zero", en: "Zero Article", tags: { category: 'article' }, canonKey: "W_ART_ZERO", coreRef: "W_ART_ZERO" },
  { id: "11-4", group_id: 11, vi: "Ngoại lệ", en: "Exceptions", tags: { category: 'article' }, canonKey: "W_ART_EX", coreRef: "W_ART_EX" },
  // Group 12: Adjectives (5)
  { id: "12-1", group_id: 12, vi: "Trật tự tính từ", en: "Order of Adjectives", tags: { category: 'adjective' }, canonKey: "W_ADJ_ORD", coreRef: "W_ADJ_ORD" },
  { id: "12-2", group_id: 12, vi: "Tính từ -ed/-ing", en: "-ed/-ing Adjectives", tags: { category: 'adjective' }, canonKey: "W_ADJ_EDING", coreRef: "W_ADJ_EDING" },
  { id: "12-3", group_id: 12, vi: "Tính từ + giới từ", en: "Adjective + Preposition", tags: { category: 'adjective' }, canonKey: "W_ADJ_PREP", coreRef: "W_ADJ_PREP" },
  { id: "12-4", group_id: 12, vi: "Vị trí tính từ", en: "Position", tags: { category: 'adjective' }, canonKey: "W_ADJ_POS", coreRef: "W_ADJ_POS" },
  { id: "12-5", group_id: 12, vi: "Tính từ phân cấp", en: "Gradability", tags: { category: 'adjective' }, canonKey: "W_ADJ_GRAD", coreRef: "W_ADJ_GRAD" },
  // Group 13: Adverbs (5)
  { id: "13-1", group_id: 13, vi: "Loại/chức năng trạng từ", en: "Types/Functions", tags: { category: 'adverb' }, canonKey: "W_ADV_TYPE", coreRef: "W_ADV_TYPE" },
  { id: "13-2", group_id: 13, vi: "Vị trí trạng từ", en: "Position", tags: { category: 'adverb' }, canonKey: "W_ADV_POS", coreRef: "W_ADV_POS" },
  { id: "13-3", group_id: 13, vi: "Trạng từ tần suất", en: "Frequency Adverbs", tags: { category: 'adverb' }, canonKey: "W_ADV_FREQ", coreRef: "W_ADV_FREQ" },
  { id: "13-4", group_id: 13, vi: "Trạng từ nhấn mạnh", en: "Focusing Adverbs", tags: { category: 'adverb' }, canonKey: "W_ADV_FOC", coreRef: "W_ADV_FOC" },
  { id: "13-5", group_id: 13, vi: "So sánh trạng từ", en: "Comparison", tags: { category: 'adverb' }, canonKey: "W_ADV_COMP", coreRef: "W_ADV_COMP" },
  // Group 14: Nouns (5)
  { id: "14-1", group_id: 14, vi: "Danh từ đếm được/không", en: "Countability", tags: { category: 'noun' }, canonKey: "W_NOUN_COUNT", coreRef: "W_NOUN_COUNT" },
  { id: "14-2", group_id: 14, vi: "Danh từ số nhiều", en: "Plural Nouns", tags: { category: 'noun' }, canonKey: "W_NOUN_PLUR", coreRef: "W_NOUN_PLUR" },
  { id: "14-3", group_id: 14, vi: "Danh từ ghép", en: "Compound Nouns", tags: { category: 'noun' }, canonKey: "W_NOUN_COMP", coreRef: "W_NOUN_COMP" },
  { id: "14-4", group_id: 14, vi: "Sở hữu cách", en: "Possessive", tags: { category: 'noun' }, canonKey: "W_NOUN_POSS", coreRef: "W_NOUN_POSS" },
  { id: "14-5", group_id: 14, vi: "Cấu trúc cụm danh từ", en: "Noun Phrase Structure", tags: { category: 'noun' }, canonKey: "W_NOUN_NP", coreRef: "W_NOUN_NP" },
  // Group 15: Verbs (5)
  { id: "15-1", group_id: 15, vi: "Nội/Ngoại động từ", en: "Transitivity", tags: { category: 'verb' }, canonKey: "W_VERB_TRAN", coreRef: "W_VERB_TRAN" },
  { id: "15-2", group_id: 15, vi: "Động từ trạng thái/hành động", en: "Stative vs Dynamic", tags: { category: 'verb' }, canonKey: "W_VERB_STAT", coreRef: "W_VERB_STAT" },
  { id: "15-3", group_id: 15, vi: "Dạng động từ", en: "Verb Patterns", tags: { category: 'verb' }, canonKey: "W_VERB_PATT", coreRef: "W_VERB_PATT" },
  { id: "15-4", group_id: 15, vi: "Cụm động từ", en: "Phrasal Verbs", tags: { category: 'verb' }, canonKey: "W_VERB_PHRA", coreRef: "W_VERB_PHRA" },
  { id: "15-5", group_id: 15, vi: "Thể truyền khiến", en: "Causative", tags: { category: 'verb' }, canonKey: "W_VERB_CAUS", coreRef: "W_VERB_CAUS" },
  // Group 16: Conjunctions (5)
  { id: "16-1", group_id: 16, vi: "Liên từ kết hợp", en: "Coordinating Conjunctions", tags: { category: 'conjunction' }, canonKey: "W_CONJ_COORD", coreRef: "W_CONJ_COORD" },
  { id: "16-2", group_id: 16, vi: "Liên từ phụ thuộc", en: "Subordinating Conjunctions", tags: { category: 'conjunction' }, canonKey: "W_CONJ_SUB", coreRef: "W_CONJ_SUB" },
  { id: "16-3", group_id: 16, vi: "Liên từ tương quan", en: "Correlative Conjunctions", tags: { category: 'conjunction' }, canonKey: "W_CONJ_CORR", coreRef: "W_CONJ_CORR" },
  { id: "16-4", group_id: 16, vi: "Trạng từ liên kết", en: "Conjunctive Adverbs", tags: { category: 'conjunction' }, canonKey: "W_CONJ_ADV", coreRef: "W_CONJ_ADV" },
  { id: "16-5", group_id: 16, vi: "Quy tắc dấu câu", en: "Punctuation Rules", tags: { category: 'conjunction' }, canonKey: "W_CONJ_PUNC", coreRef: "W_CONJ_PUNC" },
  // Group 17: Prepositions (5)
  { id: "17-1", group_id: 17, vi: "Giới từ chỉ thời gian", en: "Prepositions of Time", tags: { category: 'preposition' }, canonKey: "W_PREP_TIME", coreRef: "W_PREP_TIME" },
  { id: "17-2", group_id: 17, vi: "Giới từ chỉ nơi chốn", en: "Prepositions of Place/Direction", tags: { category: 'preposition' }, canonKey: "W_PREP_PLACE", coreRef: "W_PREP_PLACE" },
  { id: "17-3", group_id: 17, vi: "Giới từ phụ thuộc", en: "Dependent Prepositions", tags: { category: 'preposition' }, canonKey: "W_PREP_DEP", coreRef: "W_PREP_DEP" },
  { id: "17-4", group_id: 17, vi: "Cụm giới từ", en: "Prepositional Phrases", tags: { category: 'preposition' }, canonKey: "W_PREP_PHRA", coreRef: "W_PREP_PHRA" },
  { id: "17-5", group_id: 17, vi: "Vị trí cuối câu", en: "End-position Prepositions", tags: { category: 'preposition' }, canonKey: "W_PREP_END", coreRef: "W_PREP_END" },
  // Group 18: Relative Clauses (4)
  { id: "18-1", group_id: 18, vi: "MĐQH xác định", en: "Defining Relative Clauses", tags: { category: 'relative_clause' }, canonKey: "C_REL_DEF", coreRef: "C_REL_DEF" },
  { id: "18-2", group_id: 18, vi: "MĐQH không xác định", en: "Non-defining Relative Clauses", tags: { category: 'relative_clause' }, canonKey: "C_REL_NONDEF", coreRef: "C_REL_NONDEF" },
  { id: "18-3", group_id: 18, vi: "Đại từ & lược bỏ", en: "Pronouns & Omission", tags: { category: 'relative_clause' }, canonKey: "C_REL_PRON", coreRef: "C_REL_PRON" },
  { id: "18-4", group_id: 18, vi: "Whose/where/when", en: "whose/where/when", tags: { category: 'relative_clause' }, canonKey: "C_REL_WH", coreRef: "C_REL_WH" },
  // Group 19: Reduced Relative Clauses (4)
  { id: "19-1", group_id: 19, vi: "Rút gọn dùng V-ing", en: "Reduced with V-ing", tags: { category: 'reduced_relative' }, canonKey: "C_REDREL_VING", coreRef: "C_REDREL_VING" },
  { id: "19-2", group_id: 19, vi: "Rút gọn dùng V-ed", en: "Reduced with V-ed", tags: { category: 'reduced_relative' }, canonKey: "C_REDREL_VED", coreRef: "C_REDREL_VED" },
  { id: "19-3", group_id: 19, vi: "Rút gọn dùng To-inf", en: "Reduced with To-infinitive", tags: { category: 'reduced_relative' }, canonKey: "C_REDREL_TO", coreRef: "C_REDREL_TO" },
  { id: "19-4", group_id: 19, vi: "Rút gọn với where/when", en: "Reduced with where/when", tags: { category: 'reduced_relative' }, canonKey: "C_REDREL_WH", coreRef: "C_REDREL_WH" },
  // Group 20: Prefixes (4)
  { id: "20-1", group_id: 20, vi: "Tiền tố phủ định", en: "Negative Prefixes", tags: { category: 'morphology' }, canonKey: "M_PRE_NEG", coreRef: "M_PRE_NEG" },
  { id: "20-2", group_id: 20, vi: "Tiền tố chỉ mức độ", en: "Degree Prefixes", tags: { category: 'morphology' }, canonKey: "M_PRE_DEG", coreRef: "M_PRE_DEG" },
  { id: "20-3", group_id: 20, vi: "Tiền tố chỉ thời gian/thứ tự", en: "Time/Order Prefixes", tags: { category: 'morphology' }, canonKey: "M_PRE_TIME", coreRef: "M_PRE_TIME" },
  { id: "20-4", group_id: 20, vi: "Tiền tố chỉ số lượng/vị trí", en: "Number/Position Prefixes", tags: { category: 'morphology' }, canonKey: "M_PRE_NUM", coreRef: "M_PRE_NUM" },
  // Group 21: Suffixes (4)
  { id: "21-1", group_id: 21, vi: "Hậu tố danh từ", en: "Noun Suffixes", tags: { category: 'morphology' }, canonKey: "M_SUF_NOUN", coreRef: "M_SUF_NOUN" },
  { id: "21-2", group_id: 21, vi: "Hậu tố tính từ", en: "Adjective Suffixes", tags: { category: 'morphology' }, canonKey: "M_SUF_ADJ", coreRef: "M_SUF_ADJ" },
  { id: "21-3", group_id: 21, vi: "Hậu tố động từ", en: "Verb Suffixes", tags: { category: 'morphology' }, canonKey: "M_SUF_VERB", coreRef: "M_SUF_VERB" },
  { id: "21-4", group_id: 21, vi: "Hậu tố trạng từ", en: "Adverb Suffixes", tags: { category: 'morphology' }, canonKey: "M_SUF_ADV", coreRef: "M_SUF_ADV" },
  // Group 22: Present Passive (4)
  { id: "22-1", group_id: 22, vi: "Bị động Hiện tại đơn", en: "Passive Present Simple", tags: { tense: 'present', aspect: 'simple', voice: 'passive' }, canonKey: "V_PAS_PRES_SIM", coreRef: "V_PAS_PRES_SIM" },
  { id: "22-2", group_id: 22, vi: "Bị động Hiện tại tiếp diễn", en: "Passive Present Continuous", tags: { tense: 'present', aspect: 'progressive', voice: 'passive' }, canonKey: "V_PAS_PRES_PROG", coreRef: "V_PAS_PRES_PROG" },
  { id: "22-3", group_id: 22, vi: "Bị động Hiện tại hoàn thành", en: "Passive Present Perfect", tags: { tense: 'present', aspect: 'perfect', voice: 'passive' }, canonKey: "V_PAS_PRES_PERF", coreRef: "V_PAS_PRES_PERF" },
  { id: "22-4", group_id: 22, vi: "Bị động HTHT tiếp diễn", en: "Passive Present Perfect Continuous", tags: {}, canonKey: "V_PAS_PRES_PERF_PROG", coreRef: "V_PAS_PRES_PERF_PROG", applicable: false },
  // Group 23: Past Passive (4)
  { id: "23-1", group_id: 23, vi: "Bị động Quá khứ đơn", en: "Passive Past Simple", tags: { tense: 'past', aspect: 'simple', voice: 'passive' }, canonKey: "V_PAS_PAST_SIM", coreRef: "V_PAS_PAST_SIM" },
  { id: "23-2", group_id: 23, vi: "Bị động Quá khứ tiếp diễn", en: "Passive Past Continuous", tags: { tense: 'past', aspect: 'progressive', voice: 'passive' }, canonKey: "V_PAS_PAST_PROG", coreRef: "V_PAS_PAST_PROG" },
  { id: "23-3", group_id: 23, vi: "Bị động Quá khứ hoàn thành", en: "Passive Past Perfect", tags: { tense: 'past', aspect: 'perfect', voice: 'passive' }, canonKey: "V_PAS_PAST_PERF", coreRef: "V_PAS_PAST_PERF" },
  { id: "23-4", group_id: 23, vi: "Bị động QKHT tiếp diễn", en: "Passive Past Perfect Continuous", tags: {}, canonKey: "V_PAS_PAST_PERF_PROG", coreRef: "V_PAS_PAST_PERF_PROG", applicable: false },
  // Group 24: Future Passive (4)
  { id: "24-1", group_id: 24, vi: "Bị động Tương lai đơn", en: "Passive Future Simple", tags: { tense: 'future', aspect: 'simple', voice: 'passive' }, canonKey: "V_PAS_FUT_SIM", coreRef: "V_PAS_FUT_SIM" },
  { id: "24-2", group_id: 24, vi: "Bị động Tương lai gần", en: "Passive Be going to", tags: { tense: 'future', voice: 'passive', near_future: true }, canonKey: "V_PAS_FUT_BGT", coreRef: "V_PAS_FUT_BGT" },
  { id: "24-3", group_id: 24, vi: "Bị động Tương lai tiếp diễn", en: "Passive Future Continuous", tags: {}, canonKey: "V_PAS_FUT_PROG", coreRef: "V_PAS_FUT_PROG", applicable: false },
  { id: "24-4", group_id: 24, vi: "Bị động Tương lai hoàn thành", en: "Passive Future Perfect", tags: { tense: 'future', aspect: 'perfect', voice: 'passive' }, canonKey: "V_PAS_FUT_PERF", coreRef: "V_PAS_FUT_PERF" },
  // Group 25: Adjective Position (4)
  { id: "25-1", group_id: 25, vi: "Vị trí thuộc tính", en: "Attributive Position", tags: { category: 'adjective_position' }, canonKey: "P_ADJ_ATTR", coreRef: "P_ADJ_ATTR" },
  { id: "25-2", group_id: 25, vi: "Vị trí vị ngữ", en: "Predicative Position", tags: { category: 'adjective_position' }, canonKey: "P_ADJ_PRED", coreRef: "P_ADJ_PRED" },
  { id: "25-3", group_id: 25, vi: "Tính từ + bổ ngữ", en: "Adjective + Complement", tags: { category: 'adjective_position' }, canonKey: "P_ADJ_COMP", coreRef: "P_ADJ_COMP" },
  { id: "25-4", group_id: 25, vi: "Vị trí sau danh từ", en: "Postpositive Position", tags: { category: 'adjective_position' }, canonKey: "P_ADJ_POST", coreRef: "P_ADJ_POST" },
  // Group 26: Adverb Position (4)
  { id: "26-1", group_id: 26, vi: "Vị trí giữa câu", en: "Mid Position", tags: { category: 'adverb_position' }, canonKey: "P_ADV_MID", coreRef: "P_ADV_MID" },
  { id: "26-2", group_id: 26, vi: "Vị trí đầu câu", en: "Initial Position", tags: { category: 'adverb_position' }, canonKey: "P_ADV_INIT", coreRef: "P_ADV_INIT" },
  { id: "26-3", group_id: 26, vi: "Vị trí cuối câu", en: "Final Position", tags: { category: 'adverb_position' }, canonKey: "P_ADV_FIN", coreRef: "P_ADV_FIN" },
  { id: "26-4", group_id: 26, vi: "Nhấn mạnh/đảo ngữ", en: "Emphasis/Inversion", tags: { category: 'adverb_position' }, canonKey: "P_ADV_INV", coreRef: "P_ADV_INV" },
  // Group 27: Verbs in Sentences (5)
  { id: "27-1", group_id: 27, vi: "Chuỗi trợ động từ", en: "Auxiliary Chain (T-A-M)", tags: { category: 'sentence_function' }, canonKey: "F_VERB_AUX", coreRef: "F_VERB_AUX" },
  { id: "27-2", group_id: 27, vi: "Sự hòa hợp & do-support", en: "Agreement & do-support", tags: { category: 'sentence_function' }, canonKey: "F_VERB_AGREE", coreRef: "F_VERB_AGREE" },
  { id: "27-3", group_id: 27, vi: "Phủ định & nghi vấn", en: "Negation & Questions", tags: { category: 'sentence_function' }, canonKey: "F_VERB_NEGQ", coreRef: "F_VERB_NEGQ" },
  { id: "27-4", group_id: 27, vi: "Đảo ngữ sau từ phủ định", en: "Inversion after Negative/Focus", tags: { category: 'sentence_function' }, canonKey: "F_VERB_INV", coreRef: "F_VERB_INV" },
  { id: "27-5", group_id: 27, vi: "Lược bỏ & pro-verb 'do'", en: "Ellipsis & pro-verb 'do'", tags: { category: 'sentence_function' }, canonKey: "F_VERB_ELL", coreRef: "F_VERB_ELL" },
  // Group 28: Nouns in Sentences (5)
  { id: "28-1", group_id: 28, vi: "Chủ ngữ & chủ ngữ giả", en: "Subjects & Dummy Subjects", tags: { category: 'sentence_function' }, canonKey: "F_NOUN_SUBJ", coreRef: "F_NOUN_SUBJ" },
  { id: "28-2", group_id: 28, vi: "Tân ngữ", en: "Objects", tags: { category: 'sentence_function' }, canonKey: "F_NOUN_OBJ", coreRef: "F_NOUN_OBJ" },
  { id: "28-3", group_id: 28, vi: "Bổ ngữ", en: "Complements", tags: { category: 'sentence_function' }, canonKey: "F_NOUN_COMP", coreRef: "F_NOUN_COMP" },
  { id: "28-4", group_id: 28, vi: "Đồng vị ngữ", en: "Apposition", tags: { category: 'sentence_function' }, canonKey: "F_NOUN_APP", coreRef: "F_NOUN_APP" },
  { id: "28-5", group_id: 28, vi: "Từ hạn định & lượng từ", en: "Determiners & Quantifiers", tags: { category: 'sentence_function' }, canonKey: "F_NOUN_DET", coreRef: "F_NOUN_DET" },
  // Group 29: Conjunctions in Sentences (4)
  { id: "29-1", group_id: 29, vi: "Phối hợp (tránh comma splice)", en: "Coordination (avoid comma splice)", tags: { category: 'sentence_function' }, canonKey: "F_CONJ_COORD", coreRef: "F_CONJ_COORD" },
  { id: "29-2", group_id: 29, vi: "Các loại phụ thuộc", en: "Subordination Types", tags: { category: 'sentence_function' }, canonKey: "F_CONJ_SUB", coreRef: "F_CONJ_SUB" },
  { id: "29-3", group_id: 29, vi: "Song song tương quan", en: "Correlative Parallelism", tags: { category: 'sentence_function' }, canonKey: "F_CONJ_CORR", coreRef: "F_CONJ_CORR" },
  { id: "29-4", group_id: 29, vi: "Trạng từ liên kết & dấu câu", en: "Conjunctive Adverbs & Punctuation", tags: { category: 'sentence_function' }, canonKey: "F_CONJ_ADV", coreRef: "F_CONJ_ADV" },
  // Group 30: Sentence Formation (5)
  { id: "30-1", group_id: 30, vi: "Câu khẳng định", en: "Affirmatives", tags: { category: 'sentence_formation' }, canonKey: "F_SENT_AFF", coreRef: "F_SENT_AFF" },
  { id: "30-2", group_id: 30, vi: "Câu phủ định", en: "Negatives", tags: { category: 'sentence_formation' }, canonKey: "F_SENT_NEG", coreRef: "F_SENT_NEG" },
  { id: "30-3", group_id: 30, vi: "Câu hỏi Yes/No", en: "Yes/No Questions", tags: { category: 'sentence_formation' }, canonKey: "F_SENT_YN", coreRef: "F_SENT_YN" },
  { id: "30-4", group_id: 30, vi: "Câu hỏi Wh-", en: "Wh- Questions", tags: { category: 'sentence_formation' }, canonKey: "F_SENT_WH", coreRef: "F_SENT_WH" },
  { id: "30-5", group_id: 30, vi: "Câu mệnh lệnh & gợi ý", en: "Imperatives & Suggestions", tags: { category: 'sentence_formation' }, canonKey: "F_SENT_IMP", coreRef: "F_SENT_IMP" },
];
