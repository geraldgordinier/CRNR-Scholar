import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: '1',
    category: 'Tumors',
    text: 'Which of the following tumor types will have a higher incidence in pediatric populations and have a decreased incidence with age? Annie Rules',
    options: ['Glioblastoma', 'Pilocytic astrocytoma', 'Central nervous system lymphoma', 'Metastatic brain tumor'],
    correctAnswerIndex: 1,
    rationale: 'Both pilocytic astrocytoma and medulloblastoma brain tumors are more commonly found in the younger population. The incidence of these tumors will decrease with age. Glioblastomas are more frequently found in young adults. CNS lymphoma and metastasis will have an increased incidence with age.'
  },
  {
    id: '2',
    category: 'Cerebrovascular',
    text: 'A patient presents with progressive neurological deficits and has a recent history of transient neurological attack. This patient is most likely experiencing which of the following types of stroke?',
    options: ['Thrombotic stroke', 'Embolic stroke', 'Subarachnoid hemorrhage', 'Vasospasms'],
    correctAnswerIndex: 0,
    rationale: 'Thrombotic strokes frequently present as a worsening neurological status over a short period of time. Patients may have experienced episodes of transient ischemic attacks (TIAs) before the onset of the ischemic strokes. Embolic strokes tend to have a more sudden onset without progression in symptoms.'
  },
  {
    id: '3',
    category: 'Trauma',
    text: 'Which of the following best describes a coup injury?',
    options: ['Injury occurs at the point of impact.', 'Injury occurs on the contralateral side of impact.', 'It is an acceleration injury.', 'It is a deceleration injury.'],
    correctAnswerIndex: 0,
    rationale: 'A coup injury occurs at the point of impact, and a contracoup injury occurs on the contralateral side.'
  },
  {
    id: '4',
    category: 'Seizures',
    text: 'A patient is admitted to the ICU with persistent epileptic seizures lasting beyond 90 minutes. Which of the following best describes the seizure activity?',
    options: ['Epileptic seizure', 'Epilepsy', 'Refractory seizure', 'Nonepileptic seizure'],
    correctAnswerIndex: 2,
    rationale: 'An epileptic seizure, which persists for greater than 90 minutes despite administration of anticonvulsants is called a refractory seizure.'
  },
  {
    id: '5',
    category: 'Trauma',
    text: 'Which of the following would be the best technique to use to assess for cerebrospinal fluid in bloody drainage from the nose following a traumatic brain injury?',
    options: ['Glucose test', 'Halo test', 'Send to lab for hemoglobin level', 'Litmus test'],
    correctAnswerIndex: 1,
    rationale: 'Halo test (a positive result produces a yellow ring) is more accurate than a glucose test, especially with the presence of bloody drainage.'
  },
  {
    id: '6',
    category: 'Cerebrovascular',
    text: 'Which of the following is the most common cause of an embolic stroke?',
    options: ['Atrial septal defect', 'Atrial fibrillation', 'Calcified lesion', 'Angioplasty'],
    correctAnswerIndex: 1,
    rationale: 'Atrial fibrillation (AF) is the most common cause of an embolic stroke.'
  },
  {
    id: '7',
    category: 'Chronic/Degenerative',
    text: 'Cranial nerve (CN) VII (facial nerve) is commonly involved with Bell\'s palsy. Where does this CN originate?',
    options: ['Pons', 'Medulla', 'Midbrain', 'Basal ganglia'],
    correctAnswerIndex: 0,
    rationale: 'Cranial nerve (CN) V (trigeminal nerve), VI (abducens nerve), VII (facial nerve), and VIII (acoustic nerve) originate from the pons.'
  },
  {
    id: '8',
    category: 'Seizures',
    text: 'Which of the following electrolyte abnormalities is LESS likely to result in a seizure?',
    options: ['Hyponatremia', 'Hyperkalemia', 'Hypocalcemia', 'Hypomagnesemia'],
    correctAnswerIndex: 1,
    rationale: 'Potassium is more likely to affect the myocardial electrical system, resulting in arrhythmias. Hyponatremia is one of the most common electrolyte abnormalities that can cause a seizure.'
  },
  {
    id: '9',
    category: 'Trauma',
    text: 'A patient in the ICU following a severe traumatic brain injury suddenly demonstrates profuse sweating, sustained tachycardia, hypertension, and fever. Which of the following is the most likely cause?',
    options: ['Neurogenic fever', 'Diencephalic seizure', 'Paroxysmal sympathetic hyperactivity', 'Cerebral salt wasting syndrome'],
    correctAnswerIndex: 2,
    rationale: 'Traumatic brain injury (TBI) patients can experience "sympathetic storms" called paroxysmal sympathetic hyperactivity.'
  },
  {
    id: '10',
    category: 'Immune & Infections',
    text: 'In severe cases of cerebral palsy, there may be a delay in growth and development. Which of the following conditions can occur in these cases?',
    options: ['Coagulopathy', 'Immunocompromise', 'Failure to thrive', 'Locked-in syndrome'],
    correctAnswerIndex: 2,
    rationale: 'Failure to thrive is a complication of moderate to severe cerebral palsy (CP). It can result in malnutrition and death.'
  },
  {
    id: '11',
    category: 'Cerebrovascular',
    text: 'Which of the following best describes the penumbra in an ischemic stroke?',
    options: ['Irreversibly damaged tissue', 'Normal healthy tissue', 'Presence of vasogenic cerebral edema', 'Reversible ischemic tissue'],
    correctAnswerIndex: 3,
    rationale: 'The penumbra is the area surrounding an infarction that is ischemic or reversible ischemic tissue.'
  },
  {
    id: '12',
    category: 'Trauma',
    text: 'A patient is admitted to the trauma ICU following a traumatic brain injury due to vehicle rollover. The patient is hypotensive and tachycardic. Which of the following is the most accurate statement?',
    options: ['Hypotension following TBI indicates presence of epidural hematoma.', 'Hypotension is a sign of blood loss but is not considered a sign of TBI.', 'Scalp lacerations can be easily controlled with direct compression.', 'Neurogenic shock following TBI results in hypotension.'],
    correctAnswerIndex: 1,
    rationale: 'Hypotension indicates hypovolemia from blood loss in trauma patients, but cerebral injury, even epidural hematoma, cannot account for the volume of blood loss.'
  },
  {
    id: '13',
    category: 'Cerebrovascular',
    text: 'Which of the following has been found to be the most effective in preventing embolic strokes due to atrial fibrillation?',
    options: ['Aspirin', 'Low-molecular-weight heparin', 'Warfarin (Coumadin)', 'Clopidogrel (Plavix)'],
    correctAnswerIndex: 2,
    rationale: 'Studies have shown warfarin is the best at preventing an embolic stroke but is associated with a greater risk of bleeding.'
  },
  {
    id: '14',
    category: 'Tumors',
    text: 'Which of the following scales are used to determine the overall prognosis in patients with a brain tumor?',
    options: ['PedsQL', 'Functional Independence Measure', 'CHADS2 score', 'Karnofsky Performance Status Scale'],
    correctAnswerIndex: 3,
    rationale: 'Karnofsky Performance Status Scale (KPS) is used to determine overall prognosis in patients with a brain tumor.'
  },
  {
    id: '15',
    category: 'Chronic/Degenerative',
    text: 'Which of the following best describes a radiculopathy?',
    options: ['Compression of the cord with central stenosis', 'Inflammation of bone and cartilage of joint', 'Compression of nerve roots with foraminal stenosis', 'Symptomatic degenerative changes of osteoarthritis'],
    correctAnswerIndex: 2,
    rationale: 'Radiculopathy is compression of nerve roots due to the narrowing of foraminal processes.'
  },
  {
    id: '16',
    category: 'Cerebrovascular',
    text: 'Your patient presents with left upper extremity weakness and facial droop. Which of the following vessels is most likely involved in this stroke?',
    options: ['Anterior cerebral artery', 'Middle cerebral artery', 'Posterior cerebral artery', 'Basilar artery'],
    correctAnswerIndex: 1,
    rationale: 'The middle cerebral artery (MCA) supplies blood to the lateral portion of the cerebral cortex, which is where the motor strip for the upper extremities and face is located.'
  },
  {
    id: '17',
    category: 'Trauma',
    text: 'Your patient has sustained a traumatic brain injury and a basilar skull fracture. The physician has ordered a nasogastric tube (NG) be placed. Which of the following is your best response?',
    options: ['Place the NG according to the physician\'s order.', 'Discuss with the physician the need to place an enteral feeding tube.', 'Insert the gastric tube orally.', 'Ask the physician to place the NG.'],
    correctAnswerIndex: 2,
    rationale: 'Never place a gastric tube nasally in a patient with a basilar skull fracture. The nasogastric (NG) tube may go through the cribriform fracture and enter the brain. A gastric tube can be placed orally, just not nasally.'
  },
  {
    id: '18',
    category: 'Cerebrovascular',
    text: 'During a stroke assessment, the patient has been found to have a deviated gaze. Which of the following would be the most correct statement regarding the gaze?',
    options: ['Dysconjugate gaze', 'Upward gaze', 'Gaze toward the affected side', 'Gaze away from affected side'],
    correctAnswerIndex: 2,
    rationale: 'The gaze abnormality in a middle cerebral artery (MCA) stroke is deviated toward the affected side.'
  },
  {
    id: '19',
    category: 'Seizures',
    text: 'What type of seizure is an aura classified as?',
    options: ['Simple partial', 'Complex partial', 'Generalized', 'Nonconvulsive'],
    correctAnswerIndex: 0,
    rationale: 'An aura is a simple partial seizure typically involving somatosensory symptoms such as hallucinations.'
  },
  {
    id: '20',
    category: 'Immune & Infections',
    text: 'Your patient presents with the diagnosis of Guillain-Barré syndrome. Which of the following is the priority of care for this patient?',
    options: ['Assessment of vital capacity', 'Reassurance of the patient', 'Preparing for electromyography testing', 'Obtaining CT scan of the spine'],
    correctAnswerIndex: 0,
    rationale: 'Airway and breathing are the priorities of care. The ascending loss of muscle contraction can include the diaphragm and respiratory muscles. Vital capacity is commonly used to assess the effectiveness of ventilation in neuromuscular disorders.'
  },
  {
    id: '21',
    category: 'Trauma',
    text: 'A patient sustained cervical fractures at the C4 and C5 level from a motor vehicle collision. In the ED, initially he was moving all extremities equally. He suddenly became hemiplegic on the left side. Which of the following is the most likely cause for this neurological change?',
    options: ['Carotid artery dissection', 'Spinal cord injury', 'Spinal epidural hematoma', 'Cerebral edema'],
    correctAnswerIndex: 0,
    rationale: 'Carotid artery dissections are associated with traumatic injuries at the cervical level. The flexion/extension mechanism of injury that causes vertebral fractures and spinal cord injuries can also cause carotid and vertebral dissections. Carotid dissections can cause cerebral infarctions with symptoms of contralateral motor loss.'
  },
  {
    id: '22',
    category: 'Trauma',
    text: 'Which of the following therapeutic interventions is frequently recommended to manage a cerebrospinal fluid (CSF) leak?',
    options: ['Drain CSF with a lumbar drain.', 'Administer mannitol.', 'Limit fluid intake.', 'Maintain head-of-the-bed elevation greater than 30 degrees.'],
    correctAnswerIndex: 0,
    rationale: 'Cerebrospinal fluid (CSF) leak is frequently managed by placing a lumbar drain to remove CSF. This lowers the CSF pressure and decreases the drainage.'
  },
  {
    id: '23',
    category: 'Tumors',
    text: 'The mother of a 6-year-old girl just diagnosed with pilocytic astrocytoma asks the nurse what her child\'s prognosis is. Which of the following would be the best response by the nurse?',
    options: ['This type of tumor has a good prognosis and can usually be managed with surgery.', 'The tumor is malignant and frequently metastasizes to the spine.', 'This tumor is associated with poor prognosis. I would encourage you to speak with a palliative care physician.', 'The prognosis is not well known. She will probably require long-term chemotherapy.'],
    correctAnswerIndex: 0,
    rationale: 'The prognosis of pilocytic astrocytoma is good, with over a 90% survival rate in 10 years. It is commonly located in the cerebellum and can be surgically resected.'
  },
  {
    id: '24',
    category: 'Cerebrovascular',
    text: 'Which of the following cerebral arteries is most likely involved in the presentation of "locked-in" syndrome during a stroke?',
    options: ['Anterior cerebral artery', 'Posterior communicating artery', 'Internal carotid artery', 'Basilar artery'],
    correctAnswerIndex: 3,
    rationale: 'The basilar artery provides blood to the ventral portion of the pons. The basilar artery is involved in the stroke, resulting in locked-in syndrome.'
  },
  {
    id: '25',
    category: 'Trauma',
    text: 'Following a minor brain injury (concussion), the patient may experience which of the following symptoms over the next 6 months?',
    options: ['Periods of aphasia', 'Swallowing deficits', 'Difficulty concentrating', 'Ataxia'],
    correctAnswerIndex: 2,
    rationale: 'Following a minor brain injury (concussion), patients may experience postconcussion syndrome. This is self-limiting, with neurological deficits that may last 6 months to a year after injury. Symptoms include memory deficits, emotional outbursts, and difficulty concentrating.'
  },
  {
    id: '26',
    category: 'Chronic/Degenerative',
    text: 'A patient presents with signs of occipital headache and abnormal motor strength. The MRI found herniation of the cerebellar tonsils, vermis, and fourth ventricle. How would this Chiari malformation be classified?',
    options: ['Type I', 'Type II', 'Type III', 'Type IV'],
    correctAnswerIndex: 1,
    rationale: 'A type II Chiari malformation is the downward displacement of cerebellar tonsils and inferior vermis, fourth ventricle, choroid plexus, and medulla.'
  },
  {
    id: '27',
    category: 'Cerebrovascular',
    text: 'The patient presents in the ED with expressive aphasia and paralysis of the right arm and leg. He has a decreased level of consciousness and rapid respiration. Which of the following is your priority of care?',
    options: ['Obtain a STAT CT scan.', 'Administer alteplase immediately.', 'Perform a baseline National Institutes of Health Stroke Scale (NIHSS).', 'Secure an airway and ensure ventilation.'],
    correctAnswerIndex: 3,
    rationale: 'Priority of care is always airway and breathing. Patients presenting with a decreased level of consciousness (LOC) may be unable to maintain an airway, requiring the airway to be secured.'
  },
  {
    id: '28',
    category: 'Chronic/Degenerative',
    text: 'A patient presents with low-back pain. Upon review of the spinal radiographs, multiple levels of osteophytes are noted. Which of the following best describes an osteophyte?',
    options: ['Inflammation of synovial joints', 'Degeneration of vertebral body with increased bone formation', 'Stenosis of the nerve root as it exits lateral foramen', 'Compression of lumbar disc'],
    correctAnswerIndex: 1,
    rationale: 'The degeneration of the vertebral body includes increased bone formation of the subchondral bone adjacent to endplate and is called sclerosis. It causes formation of osteophytes, bony projections also known as spurs.'
  },
  {
    id: '29',
    category: 'Immune & Infections',
    text: 'Anticholinesterase agents are used to improve myasthenia gravis muscle function through which of the following actions?',
    options: ['Increase secretion of acetylcholine.', 'Prevent breakdown of acetylcholine.', 'Increase sensitization post-synaptic receptors.', 'Increase number of postsynaptic muscle receptors.'],
    correctAnswerIndex: 1,
    rationale: 'Anticholinesterase agents prevent the breakdown of acetylcholine by acetylcholinesterase.'
  },
  {
    id: '30',
    category: 'Trauma',
    text: 'Which of the following diagnostic studies is considered the most reliable to identify spinal cord and soft-tissue injuries?',
    options: ['Lateral cervical spine radiographs', 'CT scan', 'MRI', 'Flexion/extension radiographs'],
    correctAnswerIndex: 2,
    rationale: 'The benefits of MRI in evaluating acute spinal cord injury (SCI) are its ability to identify cord compression, soft-tissue injuries such as herniated disc and epidural hematoma, ligament instability, and intramedullary hematomas.'
  },
  {
    id: '31',
    category: 'Seizures',
    text: 'A patient reports he or she experiences irritability and mood changes days prior to a seizure. What is this period called?',
    options: ['Preictal', 'Aura', 'Intraictal', 'Postictal'],
    correctAnswerIndex: 0,
    rationale: 'The preictal state is the "warning" sign of an impending seizure that may occur days prior to the seizure. This may include feelings of general irritability or depression.'
  },
  {
    id: '32',
    category: 'Trauma',
    text: 'Which of the following secondary injuries would be the most important determinants of outcomes in patients following traumatic brain injuries?',
    options: ['Hyponatremia and tachycardia', 'Hypoxia and hypotension', 'Hyperglycemia and hypothermia', 'Hyperthermia and metabolic acidosis'],
    correctAnswerIndex: 1,
    rationale: 'Current research has found the two most important determinants of outcome following a traumatic brain injury are hypoxia and hypotension.'
  },
  {
    id: '33',
    category: 'Cerebrovascular',
    text: 'Which of the following would be a contraindication for administering a thrombolytic?',
    options: ['Patient\'s home medications include Eliquis', 'National Institutes of Health Stroke Scale score of 10', 'Patient on a daily aspirin', 'Negative CT scan'],
    correctAnswerIndex: 0,
    rationale: 'Eliquis is classified as a novel anticoagulant. Taking a direct oral anticoagulant (DOAC) recently is typically a contraindication to alteplase.'
  },
  {
    id: '34',
    category: 'Cerebrovascular',
    text: 'Your patient has a sudden loss of consciousness. An emergency CT is obtained and an intracerebral hemorrhage (ICH) is seen. Which of the following would be the LEAST common cause of an ICH?',
    options: ['Anticoagulation therapy', 'Hypertensive crisis', 'Aneurysm rupture', 'Vascular tumor'],
    correctAnswerIndex: 2,
    rationale: 'Aneurysm rupture results in subarachnoid hemorrhages (SAH) and intraventricular hemorrhage (IVH), not primarily intracerebral bleeds.'
  },
  {
    id: '35',
    category: 'Immune & Infections',
    text: 'Which of the following statements is a true regarding cerebral palsy (CP)?',
    options: ['CP is not preventable.', 'CP is a disease found in children but can be cured.', 'Most children with CP will die by the age of 10 years.', 'CP has no cure.'],
    correctAnswerIndex: 3,
    rationale: 'There is no cure for cerebral palsy (CP). It is preventable in some cases such as those due to maternal infections (vaccinations) or Rh incompatibility.'
  },
  {
    id: '36',
    category: 'Immune & Infections',
    text: 'Plasmapheresis is treatment commonly used in managing Guillain-Barré. It involves the:',
    options: ['Complete exchange of red blood cells', 'Removal of antibodies with plasma exchange', 'Washing of the white blood cells to clear allergens', 'Filtering of the immunoglobulins'],
    correctAnswerIndex: 1,
    rationale: 'Plasmapheresis involves the exchange of serum plasma to remove the antibodies.'
  },
  {
    id: '37',
    category: 'Cerebrovascular',
    text: 'Which of the following best describes Moyamoya disease?',
    options: ['Small, multiple aneurysms in the microcirculation', 'Arteriovenous malformations', 'Hyperlipidemia deposits of fat in the cerebral vessel wall', 'Progressive occlusion of the intracranial internal carotid artery with collateral flow'],
    correctAnswerIndex: 3,
    rationale: 'Moyamoya disease is the progressive narrowing or occlusion of the internal carotid artery with the development of collateral circulation called Moyamoya vessels.'
  },
  {
    id: '38',
    category: 'Trauma',
    text: 'When clearing a cervical spine injury in the acute period following a traumatic event, which of the following is NOT required?',
    options: ['Maintain cervical immobilization until cleared of ligament injury', 'Flexion/extension evaluation in an awake, asymptomatic patient', 'Visualization of C1 through T1 on lateral cervical radiographs', 'MRI of cervical spine'],
    correctAnswerIndex: 3,
    rationale: 'MRI of cervical spine can be used to clear a cervical spine injury (C-spine) in certain circumstances but is not required.'
  },
  {
    id: '39',
    category: 'Tumors',
    text: 'Which of the following is a known risk factor for a brain tumor?',
    options: ['Use of cellular phones', 'Exposure to ionized radiation', 'Consumption of fish with high mercury levels', 'Use of microwaves'],
    correctAnswerIndex: 1,
    rationale: 'Overall, causes of brain tumors are unknown. Exposure to ionized radiation is a known risk factor, which can be modified.'
  },
  {
    id: '40',
    category: 'Cerebrovascular',
    text: 'Lobar intracerebral hemorrhage frequently presents with which neurological symptom?',
    options: ['Cranial nerve deficits', 'Decreased level of consciousness', 'Pinpoint pupils', 'Horner\'s syndrome'],
    correctAnswerIndex: 1,
    rationale: 'A decrease in level of consciousness is frequently associated with lobar intracerebral hemorrhage. A bleed within the brainstem frequently presents with cranial nerve deficits, pinpoint pupils, and Horner\'s syndrome.'
  },
  {
    id: '41',
    category: 'Chronic/Degenerative',
    text: 'Patients with Mèniére\'s disease often complain of feelings of aural fullness accompanied by which of the following other symptoms?',
    options: ['Worst headache of their lives', 'Urinary incontinence', 'Roaring sound in ears', 'Frequent ear infections'],
    correctAnswerIndex: 2,
    rationale: 'A common complaint by patients is a "roaring" sound in their ears as well as aural fullness.'
  },
  {
    id: '42',
    category: 'Seizures',
    text: 'A patient is experiencing a tonic-clonic seizure on the floor next to the bed. To prevent injury during the seizure, which of the following is the most appropriate intervention by the nurse?',
    options: ['Move the bed and any other objects away from the patient to prevent injury.', 'Just monitor the patient and do not attempt to make any interventions during the seizure.', 'Move the patient away from the bed and to the middle of the floor.', 'Restrain the patient to prevent injury.'],
    correctAnswerIndex: 0,
    rationale: 'The goal to prevent injury of the patient is to move objects that can potentially injure the patient away from the patient.'
  },
  {
    id: '43',
    category: 'Immune & Infections',
    text: 'Which of the following is NOT considered a cholinergic side effect of anticholinesterase medications used in managing myasthenia gravis?',
    options: ['Diarrhea', 'Nausea and vomiting', 'Increased salivation', 'Urinary retention'],
    correctAnswerIndex: 3,
    rationale: 'Cholinergic side effects of anticholinesterase medications include diarrhea, increased salivation, and nausea and vomiting. Urinary retention is not considered a side effect.'
  },
  {
    id: '44',
    category: 'Trauma',
    text: 'Intracellular swelling in the brain occurred following an anoxic brain injury. What is this called?',
    options: ['"Steal" phenomenon', 'Neurogenic cerebral edema', 'Vasogenic cerebral edema', 'Cytotoxic cerebral edema'],
    correctAnswerIndex: 3,
    rationale: 'Cytotoxic cerebral edema involves intracellular swelling and is caused by hypoxic and/or anoxic brain injuries. Vasogenic cerebral edema is interstitial swelling.'
  },
  {
    id: '45',
    category: 'Cerebrovascular',
    text: 'Which of the following frequently presents with nausea, vomiting, and ataxia?',
    options: ['Cerebellar hemorrhage', 'Thalamic hemorrhage', 'Pituitary hemorrhage', 'Frontal lobe hemorrhage'],
    correctAnswerIndex: 0,
    rationale: 'Cerebellar hemorrhage frequently presents with nausea, vomiting, and ataxia. Thalamic hemorrhage presents with loss motor and/or sensory.'
  },
  {
    id: '46',
    category: 'Chronic/Degenerative',
    text: 'Which of the following radiographs is best used to identify spinal segmental instability in an awake, nontraumatic patient?',
    options: ['Cervical CT scan', 'Diffusion-weighted imagery', 'Myelogram', 'Flexion extension x-rays'],
    correctAnswerIndex: 3,
    rationale: 'Cervical flexion extension radiographs are used to evaluate vertebral segmental stability.'
  },
  {
    id: '47',
    category: 'Trauma',
    text: 'Which of the following is a TRUE statement about rehabilitation with spinal cord-injured (SCI) patients?',
    options: ['Rehabilitation begins after the patient is stabilized in the acute period.', 'The goal of rehabilitation in SCI patients is to return the patient to his or her prior level of functioning.', 'Preventing secondary injuries in SCI patients is a component of rehabilitation.', 'It provides long-term assistance to patients with SCI.'],
    correctAnswerIndex: 2,
    rationale: 'Rehabilitation begins on admission into an acute care facility. A major component of rehabilitation is the prevention of secondary injuries that can adversely affect outcome.'
  },
  {
    id: '48',
    category: 'Immune & Infections',
    text: 'The cardinal feature of Guillain-Barré includes which of the following?',
    options: ['Unilateral ascending paralysis', 'Descending bilateral paresthesia', 'Bilateral ascending paralysis', 'Bilateral spasticity in upper extremities'],
    correctAnswerIndex: 2,
    rationale: 'The primary characteristic of paralysis in Guillain-Barré (GB) is bilateral, ascending paralysis.'
  },
  {
    id: '49',
    category: 'Tumors',
    text: 'Which of the following has been associated with a genetic increase in risk of brain tumor?',
    options: ['Down syndrome', 'Autoimmune disorders', 'Glioblastoma gene', 'Neurofibromatosis'],
    correctAnswerIndex: 3,
    rationale: 'Genetic syndromes, such as neurofibromatosis types I and II, have been associated with brain tumor risk in families.'
  },
  {
    id: '50',
    category: 'Seizures',
    text: 'Which of the following is the priority of care of a patient following a seizure?',
    options: ['Reorient the patient to place and time.', 'Determine whether the patient has a recollection of the seizure.', 'Maintain the patient\'s airway and breathing.', 'Assess for the presence of Todd\'s paralysis.'],
    correctAnswerIndex: 2,
    rationale: 'Airway and breathing are always the priorities. Following a seizure, patients may have altered mentation and are unable to maintain airway.'
  },
  {
    id: '51',
    category: 'Immune & Infections',
    text: 'When assessing a patient with meningitis, you passively flex the patient\'s neck and his or her knees automatically flex upward. What is this called?',
    options: ['Brudzinski\'s sign', 'Romberg sign', 'Kernig\'s sign', 'Kehr\'s sign'],
    correctAnswerIndex: 0,
    rationale: 'Brudzinski\'s and Kernig\'s signs are both signs of meningeal irritation and can be present in patients with meningitis. The Brudzinski\'s sign is seen when the flexion of the neck causes knees to passively flex.'
  },
  {
    id: '52',
    category: 'Cerebrovascular',
    text: 'A patient presents to your unit with the diagnosis of an intracerebral hemorrhage. Which of the following blood pressure (BP) parameters orders would be expected?',
    options: ['Keep systolic BP >220 mmHg.', 'Maintain systolic BP <100 mmHg.', 'Maintain systolic BP between 130 and 150 mmHg.', 'Treat BP only if patient rebleeds.'],
    correctAnswerIndex: 2,
    rationale: 'The goal in a hemorrhagic stroke is to keep the systolic blood pressure (SBP) low to prevent a rebleed but high enough for perfusion of the brain tissue.'
  },
  {
    id: '53',
    category: 'Cerebrovascular',
    text: 'Postoperative management of carotid endarterectomy (CE) includes monitoring of neurological assessment. Which of the following physiological changes is NOT considered a common cause for the neurological deterioration following the CE?',
    options: ['Reperfusion injury with cerebral edema', 'Embolic showers', 'Cerebral ischemia', 'Subdural hematoma'],
    correctAnswerIndex: 3,
    rationale: 'Subdural hematoma is not a common complication of CE. CE complications include cerebral ischemia, embolic showers, and reperfusion injury.'
  },
  {
    id: '54',
    category: 'Trauma',
    text: 'Which of the following patients is LEAST likely to experience a chronic subdural hematoma?',
    options: ['An 85-year-old male patient', 'A patient with severe dementia', 'Patient on anticoagulation therapy', 'An alcoholic patient'],
    correctAnswerIndex: 2,
    rationale: 'The elderly, alcoholics, and dementia patients are prone to experiencing chronic subdural hematomas due to atrophy of brain. Patients on anticoagulation are more likely to experience an intracerebral hemorrhage or an acute to subacute bleed.'
  },
  {
    id: '55',
    category: 'Chronic/Degenerative',
    text: 'Which of the following types of headache may be accompanied by an aura?',
    options: ['Cluster headaches', 'Migraine headaches', 'Stress headaches', 'Daily headaches'],
    correctAnswerIndex: 1,
    rationale: 'An aura has been found to frequent migraine headaches. It is not associated with cluster, stress, or daily headaches.'
  },
  {
    id: '56',
    category: 'Tumors',
    text: 'Which of the following is LESS meaningful when talking to the patient about the brain tumor pathology and prognosis?',
    options: ['Malignant or benign', 'Tumor growth', 'Location of tumor', 'Patient\'s comorbidities'],
    correctAnswerIndex: 0,
    rationale: 'A benign tumor in the brain may be more life-threatening than a malignancy due to several factors. The location is very important because the tumor may be benign but is present in an eloquent area of the brain or a difficult location to reach with surgery or radiation.'
  },
  {
    id: '57',
    category: 'Cerebrovascular',
    text: 'Aneurysms can be classified based on the shape, size, and origin of the aneurysm. Which of the following terms best describes an aneurysm with a neck?',
    options: ['Saccular aneurysm', 'Fusiform aneurysm', 'Giant aneurysm', 'Mycotic aneurysm'],
    correctAnswerIndex: 0,
    rationale: 'An aneurysm with a neck is called a saccular or berry aneurysm. A fusiform is more of an outpouching of the vessel wall.'
  },
  {
    id: '58',
    category: 'Chronic/Degenerative',
    text: 'A patient is diagnosed with disc protrusion (propulsion). Which of the following best describes disc herniation?',
    options: ['Occurs when nucleus ruptures through innermost fibers of the annulus fibrosus with no disruption to outer annular fibers.', 'Rupture of nucleus distorts the outermost fibers of the annulus and causes bulge outward.', 'Complete split of annulus allows nuclear material to leak out of surrounding spaces.', 'Extruded nuclear substance is no longer attached to material remaining within the disc.'],
    correctAnswerIndex: 1,
    rationale: 'Disc protrusion or propulsion involves the rupture of the outermost fibers of the annulus. This results in bulging outward of the disc.'
  },
  {
    id: '59',
    category: 'Trauma',
    text: 'A paraplegic patient is being taught in rehabilitation to prevent pressure ulcers while sitting in the wheelchair. Which of the following strategies is the MOST important to prevent pressure ulcers?',
    options: ['Use air cushion pad at all times.', 'Perform frequent shifts in the chair.', 'Use a Hoyer lift to move in the chair.', 'Massage skin frequently to improve skin circulation.'],
    correctAnswerIndex: 1,
    rationale: 'Paraplegic patients are taught to perform frequent chair shifting to prevent prolonged pressure and pressure ulcers (redistribution techniques).'
  },
  {
    id: '60',
    category: 'Chronic/Degenerative',
    text: 'Hydrocephalus present in Chiari type II malformations is classified as which of the following?',
    options: ['Communicating hydrocephalus', 'Noncommunicating hydrocephalus', 'Degenerative hydrocephalus', 'Productive hydrocephalus'],
    correctAnswerIndex: 1,
    rationale: 'When there is an obstruction to cerebrospinal fluid (CSF) flow resulting in hydrocephalus, it is called noncommunicating hydrocephalus.'
  },
  {
    id: '61',
    category: 'Immune & Infections',
    text: 'Which of the following autoimmune disorders is most commonly associated with trigeminal neuralgia?',
    options: ['Lupus', 'Multiple sclerosis', 'Myasthenia gravis', 'CREST syndrome'],
    correctAnswerIndex: 1,
    rationale: 'When trigeminal neuralgia (TN) is found in the younger population without other risk factors, they will frequently test for multiple sclerosis (MS). TN and MS are associated disorders, which frequently occur together.'
  },
  {
    id: '62',
    category: 'Cerebrovascular',
    text: 'Which of the following aneurysms is caused by septic emboli associated with bacterial endocarditis?',
    options: ['Charcot-Bouchard', 'Giant aneurysm', 'Ehler\'s aneurysm', 'Mycotic aneurysm'],
    correctAnswerIndex: 3,
    rationale: 'Mycotic aneurysms are a result of a septic source such as endocarditis showering septic emboli.'
  },
  {
    id: '63',
    category: 'Trauma',
    text: 'Hyperventilation with the lowering of PaCO2 causes which of the following physiological effects in the cerebral circulation?',
    options: ['Cerebral vasodilation', 'Cerebral vasoconstriction', 'Increased intracranial pressure', 'Cerebral edema'],
    correctAnswerIndex: 1,
    rationale: 'Carbon dioxide (CO2) is a potent vasodilator in the cerebral circulation. A decrease in PaCO2 causes cerebral vasoconstriction, thus lowering ICP.'
  },
  {
    id: '64',
    category: 'Chronic/Degenerative',
    text: 'Which of the following best describes the pain syndrome associated with trigeminal neuralgia?',
    options: ['Dull, constant aching pain along the jaw line', 'Constant, severe, knifelike facial pain occurs bilaterally', 'Muscle spasms along the V1 and V2 branches, which result in cramping-like pain', 'Shock-like sensations, intermittent or episodic facial pain that occurs unilaterally'],
    correctAnswerIndex: 3,
    rationale: 'The pain of trigeminal neuralgia (TN) is neuropathic pain. It is frequently described as shock-like or electrical pain, which comes in volleys, or episodes of pain. It usually occurs unilaterally.'
  },
  {
    id: '65',
    category: 'Cerebrovascular',
    text: 'Which of the following is the most common result of an intracranial aneurysm rupture?',
    options: ['Subarachnoid hemorrhage', 'Epidural hematoma', 'Subdural hematoma', 'Intracerebral hemorrhage'],
    correctAnswerIndex: 0,
    rationale: 'Intracranial aneurysm rupture causes bleeding into the subarachnoid and intraventricular spaces resultinig in Subarachnoid hemorrhage.'
  }
];
