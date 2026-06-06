import { Question } from './types';

export const QUESTIONS_2: Question[] = [
  {
    id: '201',
    category: 'Immune & Infections',
    text: 'Which of the following is NOT a true statement regarding cerebral palsy (CP)?',
    options: ['CP is contagious.', 'CP is not caused by a genetic abnormality or hereditary.', 'CP is a chronic neurological disorder without a cure.', 'CP is not always associated with mental impairment.'],
    correctAnswerIndex: 0,
    rationale: 'CP is not contagious. It is chronic without a known cure. It is not related to a genetic abnormality and cannot be passed along generation to generation. It can be associated with mental impairment but not always.'
  },
  {
    id: '202',
    category: 'Cerebrovascular',
    text: 'Which of the following is considered the single most important risk factor for a stroke?',
    options: ['Hypertension', 'Sedentary lifestyle', 'Male gender', 'Smoking'],
    correctAnswerIndex: 0,
    rationale: 'Hypertension is considered the single most important risk factor of both ischemic and hemorrhagic strokes. Sedentary lifestyle contributes to obesity and other known risk factors of stroke but is not the single most important risk factor.'
  },
  {
    id: '203',
    category: 'Chronic/Degenerative',
    text: 'Which of the following is the surgical management used to manage the symptoms of normal-pressure hydrocephalus?',
    options: ['Skull base surgery', 'Long-term intracranial pressure monitor', 'Ventriculoperitoneal shunt', 'Vagal nerve resection'],
    correctAnswerIndex: 2,
    rationale: 'A ventriculoperitoneal (VP) shunt may be placed to manage the symptoms of normal-pressure hydrocephalus (NPH) including patient\'s gait and urinary continence. Intracranial pressure (ICP) monitors are not placed for long term or chronic use.'
  },
  {
    id: '204',
    category: 'Trauma',
    text: 'A traumatic brain-injured patient in the ICU has an intracranial pressure (ICP) monitor and is noted to have the following: blood pressure = 140/60 mmHg, MAP = 80 mmHg, and ICP = 15 mmHg. Which of the following is the correct calculated cerebral perfusion pressure?',
    options: ['95 mmHg', '125 mmHg', '65 mmHg', '75 mmHg'],
    correctAnswerIndex: 2,
    rationale: 'Cerebral perfusion pressures (CPPs) are calculated by subtracting the intracranial pressure (ICP) from the mean arterial pressure (MAP). So, MAP - ICP = CPP. This patient\'s MAP = 80 and ICP = 15. The CPP is 65 mmHg.'
  },
  {
    id: '205',
    category: 'Tumors',
    text: 'Which of the following primary tumor locations most commonly metastasizes to the brain?',
    options: ['Gastrointestinal tract', 'Pancreas', 'Lung', 'Kidney'],
    correctAnswerIndex: 2,
    rationale: 'Tumors arising from the lungs commonly metastasize to the brain. Kidney and gastrointestinal tract tumors can also metastasize to the brain but not as commonly as lung.'
  },
  {
    id: '206',
    category: 'Seizures',
    text: 'Which of the following presentations would most commonly be associated with autonomic seizures?',
    options: ['Experiences of déjà vu', 'Auditory hallucinations', 'Feeling of being flushed and piloerection', 'Repetitive movements'],
    correctAnswerIndex: 2,
    rationale: 'Autonomic seizures are commonly classified as simple partial or focal seizures with maintenance of awareness. Symptoms include feelings of being flush, piloerection (hair on the arms standing on end), pallor, and sweating.'
  },
  {
    id: '207',
    category: 'Cerebrovascular',
    text: 'Which of the following goals for blood pressure management is recommended for both primary and secondary prevention in a nondiabetic person?',
    options: ['Maintain systolic blood pressure (SBP) <160 mmHg and diastolic <100 mmHg', 'Do not treat unless SBP >220 mmHg or diastolic >120 mmHg', 'Manage BP within a normal pressure of 110/80 mmHg', 'Maintain SBP <140 mmHg and diastolic <90 mmHg'],
    correctAnswerIndex: 3,
    rationale: 'The recommendation by the American Heart Association/American Stroke Association (AHA/ASA) is to initiate blood pressure (BP) therapy with antihypertensive agents for a systolic BP > 140 mmHg and diastolic > 90 mmHg. There are no studies to support maintaining the BP less than 140/90 in nondiabetic patients.'
  },
  {
    id: '208',
    category: 'Tumors',
    text: 'What is a grade III astrocytoma called?',
    options: ['Glioblastoma', 'Neurofibromatosis', 'Anaplastic', 'Neuroblastoma'],
    correctAnswerIndex: 2,
    rationale: 'An anaplastic astrocytoma is a grade III astrocytoma. A glioblastoma is a grade IV astrocytoma. Neurofibromatosis is a familial tumor syndrome.'
  },
  {
    id: '209',
    category: 'Trauma',
    text: 'Which of the following reflexes require the cervical spine to be cleared of injury before being tested?',
    options: ['Bulbocavernosus reflex', 'Babinski reflex', 'Oculocephalic reflexes', 'Oculovestibular reflexes'],
    correctAnswerIndex: 2,
    rationale: 'Moving the head side to side to assess for eye movement is performed to identify the presence of the oculocephalic reflex. Cervical spine should be cleared of injury prior to performing this reflex evaluation.'
  },
  {
    id: '210',
    category: 'Chronic/Degenerative',
    text: 'Ergotamine is used to manage benign headaches. Which of the following is a complication of this drug therapy?',
    options: ['Liver toxicity', 'Acute myocardial infarction', 'Increased intracranial pressure', 'Acute kidney injury'],
    correctAnswerIndex: 1,
    rationale: 'Ergotamine causes vasoconstriction in the cerebral circulation but also causes vasoconstriction in the coronary arteries. This coronary vasoconstriction may increase the risk of acute myocardial infarction.'
  },
  {
    id: '211',
    category: 'Chronic/Degenerative',
    text: 'An infant is born with a hypoplasia of the cerebellum. Which of the following is the correct classification of the Chiari malformation?',
    options: ['Type I', 'Type II', 'Type III', 'Type IV'],
    correctAnswerIndex: 3,
    rationale: 'The type IV Chiari malformation refers to a hypoplasia, which is an incomplete development of the cerebellum, or an aplasia, which is a lack of development of a portion of the cerebellum.'
  },
  {
    id: '212',
    category: 'Immune & Infections',
    text: 'Which of the following is NOT a route of exposure or cause of Creutzfeldt-Jakob disease?',
    options: ['Sporadic', 'Hereditary', 'Exposure of infected person\'s tissue', 'Casual contact'],
    correctAnswerIndex: 3,
    rationale: 'Creutzfeldt-Jakob disease (CJD) can be acquired through sporadic alteration of protein, hereditary, or exposure of the infected person\'s tissue. Casual contact is not a route of exposure to CJD.'
  },
  {
    id: '213',
    category: 'Immune & Infections',
    text: 'Which of the following would be considered a preventive intervention for cerebral palsy?',
    options: ['Genetic counseling', 'Administration of rubella vaccination prior to pregnancy', 'Avoiding use of alcohol during pregnancy', 'Participating in an exercise program during the pregnancy'],
    correctAnswerIndex: 1,
    rationale: 'One of the known causes for cerebral palsy (CP) is maternal infection, such as Rubella (German measles), during pregnancy. Prevention of CP includes vaccinations to prevent maternal infections.'
  },
  {
    id: '214',
    category: 'Trauma',
    text: 'Posttraumatic injury can involve cranial nerve (CN) injuries. Which of the following CNs is most commonly damaged with traumatic brain injury?',
    options: ['CN I (olfactory nerve)', 'CN V (trigeminal nerve)', 'CN VII (facial nerve)', 'CN VIII (acoustic nerve)'],
    correctAnswerIndex: 0,
    rationale: 'CN I, the olfactory cranial nerve, is commonly damaged due to shearing of the olfactory fibers at the cribriform plate during the trauma. This can result in loss of smell (amnosia) permanent, with some return and regeneration.'
  },
  {
    id: '215',
    category: 'Cerebrovascular',
    text: 'Which of the following should be stressed to the patient and family regarding best transportation to the hospital in case of a second stroke?',
    options: ['EMS 9-1-1', 'Personal vehicle', 'Taxi', 'Next-door neighbor'],
    correctAnswerIndex: 0,
    rationale: 'Activating the EMS 9-1-1 system allows a more rapid transport to the hospital and allows for the prehospital identification of stroke symptoms, transport to designated stroke centers, and an early alert for the hospital to have the stroke team ready.'
  },
  {
    id: '216',
    category: 'Trauma',
    text: 'Which of the following does NOT increase the risk of seizures following severe traumatic brain injury?',
    options: ['Penetrating head trauma', 'Decreased level of consciousness', 'Depressed skull fracture', 'Linear skull fracture'],
    correctAnswerIndex: 3,
    rationale: 'Linear skull fracture is associated with traumatic brain injury (TBI) but does not carry the high risk of seizures as in patients with penetrating head trauma, decreased level of consciousness, and depressed skull fractures.'
  },
  {
    id: '217',
    category: 'Tumors',
    text: 'What is a common complication of a pineal tumor?',
    options: ['Hydrocephalus', 'Visual field loss', 'Hemiparesis', 'Subarachnoid hemorrhage'],
    correctAnswerIndex: 0,
    rationale: 'Pineal tumors commonly cause the obstruction of cerebrospinal fluid, resulting in noncommunicating hydrocephalus. Visual field losses, hemiparesis, and subarachnoid hemorrhage are not commonly found in patients with pineal tumors.'
  },
  {
    id: '218',
    category: 'Cerebrovascular',
    text: 'Which of the following would be considered a "simple" definition or explanation of what a stroke is?',
    options: ['A stroke is an ischemic event causing cerebral injury.', 'Stroke happens when there is a lack of blood flow to the brain due to an obstruction.', 'A stroke is a permanent injury to the brain tissue and areas of ischemia, which may be reversible injury.', 'Stroke occurs when the penumbra converts to an infarcted area.'],
    correctAnswerIndex: 1,
    rationale: 'Keep the definitions and explanations simple, at a fourth-grade level. Use common words and limit words with multiple syllables. Avoid medical jargon in definitions.'
  },
  {
    id: '219',
    category: 'Chronic/Degenerative',
    text: 'Cluster headaches may cause ipsilateral autonomic signs, which include all but which of the following?',
    options: ['Nasal congestion', 'Facial sweating', 'Miosis', 'Atrial fibrillation'],
    correctAnswerIndex: 3,
    rationale: 'Autonomic signs may be present with cluster headaches. These signs include nasal congestion, facial sweating, and miosis. Atrial fibrillation is not an autonomic sign.'
  },
  {
    id: '220',
    category: 'Immune & Infections',
    text: 'Which of the following is not considered a route of entry for bacterial meningitis?',
    options: ['Direct', 'Sinusitis', 'Airborne, droplet spread', 'Eating undercooked pork'],
    correctAnswerIndex: 3,
    rationale: 'Introduction of bacteria into the meninges can occur through the direct route such as a surgical site, sinusitis, and, in some type of meningitis, via an airborne or droplet route. Eating undercooked pork does not cause meningitis but can increase the risk of neurocysticercosis.'
  },
  {
    id: '221',
    category: 'Seizures',
    text: 'At what age do most neonates develop seizures secondary to pyridoxine dependency?',
    options: ['Within the first 24 hours after birth', '24 to 48 hours after birth', '48 hours to 7 days after birth', '1 to 4 weeks after birth'],
    correctAnswerIndex: 0,
    rationale: 'Within the first 24 hours after birth. Pyridoxine dependency can be caused by glutamic acid decarboxylase activity impairment. This is a rare autosomal recessive condition. Seizures can start immediately after birth or later.'
  },
  {
    id: '222',
    category: 'Chronic/Degenerative',
    text: 'Select the most common sleep disorder among the choices:',
    options: ['Obstructive sleep apnea', 'Narcolepsy', 'Periodic limb movement disorder', 'Delayed sleep phase syndrome'],
    correctAnswerIndex: 0,
    rationale: 'Obstructive sleep apnea may affect up to ten to 15 percent of the population and is expected to increase as obesity increases.'
  },
  {
    id: '223',
    category: 'Chronic/Degenerative',
    text: 'A patient with multiple sclerosis had a urinary accident at night because he did not get to the bathroom in time. A bedside commode is suggested and immediately rejected. What could be the next step?',
    options: ['Ask the patient to take some time to think about the decision.', 'Provide a temporary commode.', 'Review the options and the consequence of each.', 'Drop the subject but include the exchanged in the progress note'],
    correctAnswerIndex: 2,
    rationale: 'Review the options and the consequence of each. Patients often have difficulty accepting change, especially when it involves admitting decline of skills or changes to the home. When this occurs, the first step is to discuss the situation. If the patient is still resistant, the other options are appropriate.'
  },
  {
    id: '224',
    category: 'Chronic/Degenerative',
    text: 'Patients with spina bifida need special skin care. Which of the following would not be appropriate?',
    options: ['Patient and caregiver education for regular skin exam.', 'Frequent position changes', 'Avoidance of tight cloths', 'Deep and thick padding'],
    correctAnswerIndex: 3,
    rationale: 'Deep and thick padding can increase skin pressure. There should only be enough padding for comfort.'
  },
  {
    id: '225',
    category: 'Immune & Infections',
    text: 'Which of the following is least likely to have elevated protein in the cerebrospinal fluid?',
    options: ['Guillain-Barre syndrome (GBS)', 'Chronic inflammatory demyelinating polyradiculoneuropathy (CIDP)', 'Multifocal motor neuropathy (MMN)', 'Multiple sclerosis (MS)'],
    correctAnswerIndex: 2,
    rationale: 'The CSF protein in multifocal motor neuropathy (MMN) can be normal or minimally elevated to <100 mg/dL.'
  },
  {
    id: '226',
    category: 'Immune & Infections',
    text: 'Which of the following has been associated with cases of progressive multifocal leukoencephalopathy?',
    options: ['Rituximab', 'Natalizumab', 'Abciximab', 'Infliximab'],
    correctAnswerIndex: 1,
    rationale: 'Natalizumab was initially related in 2004 for MS and was found to cause PML in patients when combined with other medications.'
  },
  {
    id: '227',
    category: 'Seizures',
    text: 'Which of the following is the most common cause of a seizure in a full term infant less that 12 hours of age?',
    options: ['Sepsis', 'Inborn errors of metabolism', 'Hypoxemic encephalopathy', 'Intraventricular bleed'],
    correctAnswerIndex: 2,
    rationale: 'The most common causes, in order, of neonatal seizures in the first 12 hours are hypoxic/ischemic encephalopthy, sepsis, meningitis, and subarachnoid hemorrhage'
  },
  {
    id: '228',
    category: 'Trauma',
    text: 'Which classification of anoxic encephalopathy is associated with mostly theta wave?',
    options: ['Grade I', 'Grade II', 'Grade III', 'Grade IV'],
    correctAnswerIndex: 1,
    rationale: 'Grade II of anoxic encephalopathy consists of mostly theta waves.'
  },
  {
    id: '229',
    category: 'Immune & Infections',
    text: 'A caregiver is approached by a colleague in the hall. The colleague wants to know how a hospitalized friend is doing and if his tests were improving. Which of the following is most appropriate?',
    options: ['Reassure the colleague that you are providing the best care possible.', 'Fill in the friend about the patient\'s condition', 'Decline to discuss the patient and encourage the colleague to visit him or her', 'report the colleague for violation of HIPAA'],
    correctAnswerIndex: 2,
    rationale: 'Decline to discuss the patient and encourage the colleague to visit him or her. Sharing any information about the patient is a violation of HIPPA.'
  },
  {
    id: '230',
    category: 'Chronic/Degenerative',
    text: 'An obese patient needs to be transferred and the provider is not sure he can do it alone. What is the best solution?',
    options: ['Do not transfer the patient', 'Obtain help', 'Have a stronger provider do the transfer', 'Bend the knees, use a wide base of support, and keep the spine neutral'],
    correctAnswerIndex: 1,
    rationale: 'Obtain help. It often takes 2 or more people to transfer morbidly obese patients. Trying to do so, even using proper body mechanics, can result in injury to the patient and/or the provider.'
  },
  {
    id: '231',
    category: 'Tumors',
    text: 'Which of the following choices is not true of neuroblastoms?',
    options: ['They are masses which originate from the parasympathetic chain', 'They can present with an abdominal mass', 'Metastases to the lungs can occur with treatment is delayed', 'They can be difficult to differentiate from Wilms tumor on examination'],
    correctAnswerIndex: 0,
    rationale: 'They are masses which originate from the PARASYMPATHETIC chain is false. Neuroblastoms are tumors of the sympathetic chain and thus are comming in the adrenal gland and in other chromaffin cells.'
  },
  {
    id: '232',
    category: 'Trauma',
    text: 'How can you determine the vertebral level of a thoracic cord compression on a 24 cm field of view sagittal sequence?',
    options: ['Use the xiphoid process as a landmark. It is at the ninth thoracic level', 'Use the sternal notch as a landmark. It is at the T4-5 level', 'Take a single view lateral T-Spine radiograph. A vertebral collapse sufficient to cause cord compression should be evident.', 'Use the localizer\'s large field of view and count down from C2'],
    correctAnswerIndex: 3,
    rationale: 'Use the localizer\'s large field of view and count down from C2. Using this technique also allows detection of fusion and other congenital anomalies that might lead to level numbering confusions at surgery.'
  },
  {
    id: '233',
    category: 'Seizures',
    text: 'What percentage of seizures are caused by Lennox-Gastaut syndrome?',
    options: ['57', '20', '13', '2'],
    correctAnswerIndex: 3,
    rationale: 'Lennox-Gastaut syndrome is associated with about 2 percent of seizures. It is also called childhood epileptic encephalopathy and has a poor prognosis.'
  },
  {
    id: '234',
    category: 'Chronic/Degenerative',
    text: 'What is the correct muscle strength grading in a patient with normal muscle movement?',
    options: ['0', '1', '3', '5'],
    correctAnswerIndex: 3,
    rationale: 'Normal motor strength is grade 5. Grade 3 motor strength is movement against only gravity. No muscle movement is a grade zero.'
  },
  {
    id: '235',
    category: 'Seizures',
    text: 'Select the condition that is not progressive myoclonic epilepsy?',
    options: ['Type I sialidosis', 'Neuronal ceroid lipofuscinosis', 'Juvenile myoclonic epilepsy', 'Myclonic epilepsy with ragged-red fibers'],
    correctAnswerIndex: 2,
    rationale: 'Juvenile myoclonic epilepsy usually has onset at puberty and is not considered a progressive myoclonic epilepsy (which are rare conditions leading to severe cognitive decline).'
  }
];
