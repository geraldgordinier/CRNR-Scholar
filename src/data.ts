import { Category, Question } from './types';
import { QUESTIONS as IMPORTED_QUESTIONS } from './questions';
import { QUESTIONS_2 } from './questions2';
import { QUESTIONS_3 } from './questions3';
import { QUESTIONS_4 } from './questions4';
import { QUESTIONS_5 } from './questions5';
import { QUESTIONS_6 } from './questions6';
import { QUESTIONS_7 } from './questions7';

export const CNRN_CATEGORIES: Category[] = [
  'Cerebrovascular',
  'Trauma',
  'Seizures',
  'Tumors',
  'Immune & Infections',
  'Chronic/Degenerative',
  'Professional Issues'
];

export const ARTHUR_TIPS: string[] = [
  "Cushing's triad (bradycardia, hypertension, irregular breathing) is a LATE sign of increased ICP! Bark early if you see LOC changes!",
  "Keep an eye on that sodium! SIADH is common after neurosurgery and causes hyponatremia. Time for a water restriction!",
  "Nimodipine is for Noggins! It's the specific calcium channel blocker used to prevent vasospasm after a subarachnoid hemorrhage.",
  "Treat status epilepticus fast! Lorazepam is my favorite quick-acting bone to throw at continuous seizures.",
  "You're doing paw-some, Annie! Remember MS causes demyelination in the CNS, while Guillain-Barré affects the peripheral nervous system!",
  "A blown pupil (unilateral, fixed, dilated) often indicates uncal herniation. It's a true neuro emergency, ruff!",
  "Don't forget! The earliest sign of neurological deterioration is almost always a change in the Level of Consciousness (LOC).",
  "Homonymous hemianopsia means seeing only half of the visual field in each eye. Tell the patient to turn their head to scan the room!",
  "Brain tumors like GBMs love to cause vasogenic edema. Dexamethasone is the steroid of choice to bring that swelling down, good girl!",
  "Myasthenia Gravis patients need their meds exactly on time to prevent a myasthenic crisis! Keep those muscles strong for fetching!",
  "Remember Annie, the Monroe-Kellie hypothesis states the sum of volumes of brain, CSF, and intracerebral blood is constant. An increase in one should cause a decrease in others! You've got this!"
];

export const QUESTIONS: Question[] = [
  // Cerebrovascular
  {
    id: 'cv-1',
    category: 'Cerebrovascular',
    text: 'A patient is admitted with an aneurysmal subarachnoid hemorrhage (SAH). Which medication is primarily prescribed to prevent cerebral vasospasm?',
    options: ['Phenytoin', 'Nimodipine', 'Mannitol', 'Dexamethasone'],
    correctAnswerIndex: 1,
    rationale: 'Nimodipine is a calcium channel blocker specifically indicated to prevent vasospasm and resultant delayed ischemic neurological deficits following SAH.'
  },
  {
    id: 'cv-2',
    category: 'Cerebrovascular',
    text: 'During the acute phase of an ischemic stroke, blood pressure is typically allowed to run moderately high (permissive hypertension). What is the primary rationale for this?',
    options: ['To prevent hemorrhagic conversion', 'To maintain cerebral perfusion pressure to the penumbra', 'To decrease the workload of the heart', 'To facilitate the action of tPA'],
    correctAnswerIndex: 1,
    rationale: 'Permissive hypertension is utilized in the acute stroke phase to maintain cerebral perfusion pressure (CPP) and blood flow to the ischemic penumbra, the brain tissue surrounding the core infarct that is salvageable.',
    isPediatric: true
  },
  {
    id: 'cv-3',
    category: 'Cerebrovascular',
    text: 'A common early complication following an arteriovenous malformation (AVM) resection is Normal Perfusion Pressure Breakthrough (NPPB). The main strategy to combat this is:',
    options: ['Strict blood pressure control (hypotension)', 'Administering high-dose steroids', 'Permissive hypertension', 'Immediate return to the OR'],
    correctAnswerIndex: 0,
    rationale: 'NPPB occurs because the surrounding brain tissue has lost autoregulation and cannot handle normal blood pressure after the high-flow AVM is removed. Strict BP control is required to prevent edema and hemorrhage.'
  },
  {
    id: 'tr-1',
    category: 'Trauma',
    text: 'An early sign of increased intracranial pressure (ICP) is:',
    options: ["Cushing's triad", 'Decerebrate posturing', 'Fixed and dilated pupils', 'A change in level of consciousness (LOC)'],
    correctAnswerIndex: 3,
    rationale: 'A subtle change in the level of consciousness is almost always the earliest sign of increasing intracranial pressure, often occurring well before pupillary changes or vital sign alterations.'
  },
  {
    id: 'tr-2',
    category: 'Trauma',
    text: 'A patient with a traumatic brain injury is mechanically ventilated. The goal for PaCO2 should typically be maintained at:',
    options: ['20-25 mmHg', '35-45 mmHg', '45-55 mmHg', '25-30 mmHg'],
    correctAnswerIndex: 1,
    rationale: 'Prophylactic hyperventilation is no longer recommended. PaCO2 should be maintained at normal levels (35-45 mmHg) to avoid profound cerebral vasoconstriction and subsequent ischemia.',
    isPediatric: true
  },
  {
    id: 'sz-1',
    category: 'Seizures',
    text: 'The drug of choice for the initial management of status epilepticus is:',
    options: ['IV Phenytoin', 'IV Lorazepam', 'Oral Carbamazepine', 'IV Propofol'],
    correctAnswerIndex: 1,
    rationale: 'IV Lorazepam (a rapid-acting benzodiazepine) is considered a first-line agent to quickly break status epilepticus.'
  },
  {
    id: 'sz-2',
    category: 'Seizures',
    text: 'A patient taking Phenytoin (Dilantin) should be heavily educated on which of the following side effects?',
    options: ['Gingival hyperplasia', 'Stevens-Johnson syndrome', 'Bone marrow suppression', 'All of the above'],
    correctAnswerIndex: 3,
    rationale: 'Phenytoin has many side effects, including gingival hyperplasia, serious skin rashes (Stevens-Johnson), and blood dyscrasias, making comprehensive education and monitoring vital.'
  },
  {
    id: 'tm-1',
    category: 'Tumors',
    text: 'The most common type of primary malignant brain tumor in adults is:',
    options: ['Meningioma', 'Schwannoma', 'Glioblastoma multiforme (GBM)', 'Pituitary adenoma'],
    correctAnswerIndex: 2,
    rationale: 'Glioblastoma multiforme (GBM) is the most common and most aggressive malignant primary brain tumor in adults. Meningiomas are common but typically benign.'
  },
  {
    id: 'tm-2',
    category: 'Tumors',
    text: 'A patient with an acoustic neuroma (Vestibular Schwannoma) is most at risk for damage to which cranial nerve during surgery?',
    options: ['CN V (Trigeminal) and CN VII (Facial)', 'CN III (Oculomotor)', 'CN X (Vagus)', 'CN XII (Hypoglossal)'],
    correctAnswerIndex: 0,
    rationale: 'Acoustic neuromas grow on CN VIII (Vestibulocochlear) but are in close proximity to CN VII and CN V; thus, facial nerve preservation (CN VII) and facial sensation (CN V) are high priorities and risks during surgical removal.'
  },
  {
    id: 'im-1',
    category: 'Immune & Infections',
    text: 'A hallmark clinical presentation of Myasthenia Gravis is:',
    options: ['Ascending symmetric paralysis', 'Muscle weakness that worsens with exercise and improves with rest', 'Cogwheel rigidity and resting tremor', 'Dementia and chorea'],
    correctAnswerIndex: 1,
    rationale: 'MG is characterized by fluctuating muscle weakness that worsens with sustained activity (fatigability) and improves with rest, due to autoantibodies at the neuromuscular junction.'
  },
  {
    id: 'im-2',
    category: 'Immune & Infections',
    text: 'In Bacterial Meningitis, typical cerebrospinal fluid (CSF) analysis reveals:',
    options: ['High glucose, low protein, low WBCs', 'Normal glucose, normal protein, high RBCs', 'Low glucose, high protein, high WBCs (neutrophils)', 'Normal glucose, high protein, high WBCs (lymphocytes)'],
    correctAnswerIndex: 2,
    rationale: 'Bacteria consume glucose and produce protein and an inflammatory response. Therefore, classic bacterial meningitis CSF shows low glucose, very high protein, and a high WBC count, predominantly polymorphonuclear neutrophils (PMNs).'
  },
  {
    id: 'ch-1',
    category: 'Chronic/Degenerative',
    text: 'Which drug is commonly used as a first-line treatment for managing spasticity in patients with Multiple Sclerosis or Spinal Cord Injury?',
    options: ['Baclofen', 'Donepezil', 'Levodopa', 'Interferon beta'],
    correctAnswerIndex: 0,
    rationale: 'Baclofen is a GABA agonist used specifically as a skeletal muscle relaxant to treat severe spasticity.'
  },
  {
    id: 'ch-2',
    category: 'Chronic/Degenerative',
    text: 'Parkinson\'s disease is primarily caused by the degeneration of dopamine-producing neurons in which part of the brain?',
    options: ['Cerebral cortex', 'Substantia nigra', 'Hippocampus', 'Cerebellum'],
    correctAnswerIndex: 1,
    rationale: 'Parkinson\'s disease results from the loss of dopaminergic neurons in the substantia nigra (part of the basal ganglia), leading to the classic motor symptoms of resting tremor, bradykinesia, and rigidity.'
  },
  ...IMPORTED_QUESTIONS,
  ...QUESTIONS_2,
  ...QUESTIONS_3,
  ...QUESTIONS_4,
  ...QUESTIONS_5,
  ...QUESTIONS_6,
  ...QUESTIONS_7
];

// Helper to expand the pool so a full exam can be generated even if we have fewer unique questions
export const generateTest = (category: Category | 'Mixed' | 'Pediatric', count: number = 75, hiddenQuestions: string[] = []): Question[] => {
  let pool = QUESTIONS.filter(q => !hiddenQuestions.includes(q.id));
  if (category === 'Pediatric') {
    pool = pool.filter(q => q.isPediatric);
  } else if (category !== 'Mixed') {
    pool = pool.filter(q => q.category === category);
  }
  
  // If requested count is greater than our pool, we will duplicate the pool until we have enough
  let extendedPool = [...pool];
  while (extendedPool.length < count && pool.length > 0) {
    extendedPool = [...extendedPool, ...pool];
  }
  
  extendedPool = extendedPool.slice(0, count);

  // Shuffle pool (simple Fisher-Yates approach)
  const shuffled = [...extendedPool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  // Also regenerate unique IDs for extended questions just in case we use them for keys
  return shuffled.map((q, index) => ({
    ...q,
    id: q.id // Keep original ID so we can hide it later
  }));
};
