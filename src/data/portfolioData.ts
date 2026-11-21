import portraitImg from '../assets/images/portrait.jpg';

export interface JourneyPhoto {
  src: string;
  caption: string;
  fullWidth: boolean;
}

export interface JourneyBook {
  year: string;
  title: string;
  subtitle: string;
  photoCountLabel: string;
  coverSrc: string;
  coverAlt: string;
  variantClass: string;
  yearTextClass: string;
  photos: JourneyPhoto[];
}

export const IMAGES = {
  meadow:
    'https://lh3.googleusercontent.com/aida/ALJJyrA0PieY51V4cdmtOskKLePAQoheXwDsEP4mINp6iUg2seG9u_fNsC8B_iyaoX_41eGQZnynd5tCrh4V4hbr83BOXCpby1uMnuJoMcfPk00_rYqc6yhdBZbar-mDK3w4AQTJm3nWXkJmHwyMl2Kwbr1xIoqN_-bqITtOmVmjFPxU5aWS9p_IiVr52gNR5jk7PuBEPL5oyIgHBy9lxLh-vWLZf4XueRPDXmCGsZ0ir6iR-S8',
  portrait: portraitImg,
  kidilent:
    'https://lh3.googleusercontent.com/aida/ALJJyrAt_9bIXuT3RWYLBPldpCvxZaHxpL59dX-aTqIhrA7xzgLLRZXSYgYMlYLTd9aAHp946VQnKJyS-Pa2XasrFprhOkFK5VMV2CkeYu8MaEkkMYEOonisJsshiHEgMAHy68iqSMYysPRPWc_HksSIJkXgRg9AdKEMkCaiITrbkidx97dBXXhiT46n0PfeghnQAy43aGDHymps9X_EcAvtNhZU_6VZKS1pDHZOZjdZE--YHwTp27v7pbjl',
  uceable:
    'https://lh3.googleusercontent.com/aida/ALJJyrDE6PK0R5x8si8cb7guCEzcnFI7fa-oMIklx4TWTgBNLRHOokYU_c4iowv0q58QHtrXkXC-MWAHxRNIYZrP3wURFYmVJXo8DcXYQ6s0XqOAutXQtGFT6OBnP4oe4o5xtLlna399Q5UkfJGYCaUfk_Vre-GRj_tZtgK4LrpkwdelGTGf2VhYzpfJnjU544QFwokNMEEaF4Uc54NBHg115gtA4sWhf6uM4MmpDVwKeLPU7KzAddI4NAB3xUE',
  journeyGoogleSg:
    'https://lh3.googleusercontent.com/aida/ALJJyrA9N5oYsVGJum3vTSPm5WvMhoDehqyBTG5lo3AiIxLsCPYhKp_vT2IIA7eFgTo8B0u9RLIMRlZVwFEoSSqaPhkt48vrmxvDbxHAPd1nWxsacdSEMA4t55mck92zQpL3UN-OQn-HkvjkH5NMO3lRMOTP8rkXoQAyLKOxa9PMErMvVGqCKUbEy3Ali_5JR1LFZZ7UN_88AAlDt_hGER3n8BqIHWaAGxExU91ZWnSGifMVtMfyJcBwscJIxJG_',
  journeyIoWelcome:
    'https://lh3.googleusercontent.com/aida/ALJJyrA5W4VwTAhEQPUZFO4-SgNva-1ZitdKD-NDh3IUBplgTWtAzVLCMj-ZfR_RDFicwG4Nn_TdxpyIrB8qUBmp_gOk3WBlUJMBo0fl1MSjzLl1srgN9XQODwxlb0idJSNcBDnEGI5wGfcqbI_FYYK-DWZ_rqvtriXKiVmx74PE2BOjmzAKk-hgjnDu-nr2MvkpWQY5z0ZpjnuR5A0exxeS1rBP1GmQLG21Ev-pof3rzDZ-nVAvBMx8RyoZQojpqQ',
  journeyIoMic:
    'https://lh3.googleusercontent.com/aida/ALJJyrDKzFOeW22rBch_jKblhEalcl-p81kFAiIgjbkvvq_mOteKEn04Yzll7h53i0SSewQ15NVyQ_G2AuJpeWcka40JkbGG7EVtZjjCU-vfy5IoouNJmsyFXsF5BUwI4Ow5nwAcAGaRmZ1Z_LX8XJnCBA6OSpVqPvscAf8CNhi9peYiCNykr89GXf2lBCYxYH5-TqFRw5vU-_Z-nQcEwHy9ENLFBKR34HWdgtU0nuOy1zlwnzXEjp-fY3k',
  journeyCuantastic:
    'https://lh3.googleusercontent.com/aida/ALJJyrAR5QxeV02rw_mdQ_u1n-hjwy8-K30NFvtibm0YFbbiuU6yDhe3ATzC7iLLkYg2tRcN1oaLPpGz8xYUiylFKH9eLgs7D_FxHMUP9uKEpjhaAIdXEPvG6k1t-6t9K7uQK_dy27jTjeSLXsS-4nlRbGixlIuEe8xAbMQG3bPabAje8xHAfq9a9JNuRZu6J4Oz0O6eVWVmQnsN5sg_7lJuvcikCEiTNZI3keZ2J7-DOES8besc62CTE_gQlqYO68Knk4Q',
} as const;

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Background', href: '#background' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
] as const;

export const ABOUT_TAGS = [
  'Frontend Development',
  'UI Motion',
  'Interactive Web Experiences',
  'Women in Tech',
  'AI',
] as const;

export const PMO_TOOLS = [
  { name: 'Trello', tileClass: 'tool-trello' },
  { name: 'Notion', tileClass: 'tool-notion' },
  { name: 'Excel', tileClass: 'tool-excel' },
  { name: 'Word', tileClass: 'tool-word' },
  { name: 'PowerPoint', tileClass: 'tool-ppt' },
] as const;

export const HARD_SKILLS = [
  'Agile & Scrum',
  'Planning & scheduling',
  'Budget management',
  'Risk management',
  'Documentation & reporting',
] as const;

export const SOFT_SKILLS = [
  'Communication',
  'Leadership',
  'Problem solving',
  'Time & priorities',
  'Stakeholder management',
] as const;

export const JOURNEY_BOOKS: JourneyBook[] = [
  {
    year: '2026',
    title: '2026 — Google I/O & Singapore',
    subtitle: 'Google I/O & Singapore',
    photoCountLabel: '3 photos',
    coverSrc: IMAGES.journeyGoogleSg,
    coverAlt: 'Fabiane at Google Singapore in 2026',
    variantClass: 'bg-book-red text-on-primary',
    yearTextClass: 'text-on-primary',
    photos: [
      {
        src: IMAGES.journeyIoWelcome,
        caption: 'Welcome to #GoogleIO',
        fullWidth: true,
      },
      {
        src: IMAGES.journeyIoMic,
        caption: 'asking a question at Google I/O',
        fullWidth: false,
      },
      {
        src: IMAGES.journeyGoogleSg,
        caption: 'at Google',
        fullWidth: false,
      },
    ],
  },
  {
    year: '2025',
    title: '2025 — Cuantastic & Building',
    subtitle: 'Cuantastic & Building',
    photoCountLabel: '1 photo',
    coverSrc: IMAGES.journeyCuantastic,
    coverAlt: 'Cuantastic 2025 hackathon & builder journey',
    variantClass: 'bg-tertiary text-on-tertiary',
    yearTextClass: 'text-on-tertiary',
    photos: [
      {
        src: IMAGES.journeyCuantastic,
        caption: 'Cuantastic 2025 builder team',
        fullWidth: true,
      },
    ],
  },
];
