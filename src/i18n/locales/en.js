export default {
  header: {
    logoText: 'EcoEnergy',
    cta: 'Get a Quote',
    nav: [
      { label: 'Overview', href: '#hero' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Timeline', href: '#timeline' },
      { label: 'Results', href: '#results' },
      { label: 'Contact', href: '#cta' },
    ],
  },

  hero: {
    badge: 'Case Study — Kyiv Region, 2024',
    titleLine1: 'Sunridge Commercial',
    titleLine2: 'Solar Park',
    subtitle:
      'How a 2.4 MW solar installation transformed energy costs for an entire commercial district — delivering €1.2M in annual savings and eliminating 847 tons of CO₂ per year.',
    btnPrimary: 'View Results',
    btnSecondary: 'Get a Quote',
  },

  problem: {
    eyebrow: 'The Challenge',
    title: 'Why the Sunridge district needed to act',
    subtitle: 'Three hard numbers that made solar the only rational choice.',
    stats: [
      {
        label: 'of commercial energy costs were avoidable',
        description:
          'Before solar, the Sunridge complex spent €1.74M annually on grid electricity — most of it during peak pricing hours.',
      },
      {
        label: 'CO₂ emitted per year',
        description:
          "The district's carbon footprint from energy consumption exceeded 1,200 tons annually — well above the national average.",
      },
      {
        label: 'energy price increase over 3 years',
        description:
          'Rising utility costs made the economic case for solar undeniable. The decision to act in 2023 locked in savings for decades.',
      },
    ],
  },

  howItWorks: {
    eyebrow: 'The Technology',
    title: 'How Solar Power Works',
    subtitle:
      'From photon to kilowatt — four stages that turn sunlight into clean, affordable electricity for the entire district.',
    steps: [
      {
        title: 'Solar Capture',
        description:
          '2,400 monocrystalline panels convert sunlight into DC electricity with 22.8% efficiency.',
      },
      {
        title: 'DC to AC Conversion',
        description:
          'String inverters convert DC power to grid-compatible 400V AC electricity at 98.6% efficiency.',
      },
      {
        title: 'Storage & Grid Balance',
        description:
          '480 kWh battery storage absorbs excess generation and provides backup during outages.',
      },
      {
        title: 'Distribution',
        description:
          'Clean energy flows directly to 312 buildings, with surplus sold back to the national grid.',
      },
    ],
  },

  benefits: {
    eyebrow: 'Why Solar',
    title: 'The Benefits That Matter',
    subtitle:
      "Beyond the numbers — how commercial solar transforms a business's relationship with energy, cost, and responsibility.",
    items: [
      {
        title: '30-Year ROI',
        description:
          'With zero fuel costs and a 25-year performance warranty, the system pays back its investment in under 6 years, then generates pure profit.',
      },
      {
        title: 'Energy Independence',
        description:
          'Shielded from utility price volatility. The district now generates 94% of its own electricity, eliminating exposure to market swings.',
      },
      {
        title: 'Carbon Neutral Operations',
        description:
          'Offsetting 847 tons of CO₂ per year is equivalent to planting 38,500 trees annually — a tangible commitment to the Paris Agreement.',
      },
      {
        title: 'Property Value Uplift',
        description:
          'Commercial properties with on-site solar generation command 8–12% higher valuations and attract premium tenants focused on ESG goals.',
      },
    ],
  },

  specs: {
    eyebrow: 'Technical Data',
    title: 'System Specifications',
    subtitle:
      'Performance metrics and hardware specifications for the 2.4 MW Sunridge installation.',
    colPerformance: 'Performance Metrics',
    colComponents: 'System Components',
    certBadge: 'IEC 61215 · IEC 61730 · MCS Certified · ISO 9001',
    specLabels: [
      'Panel Efficiency',
      'Inverter Efficiency',
      'System Availability',
      'Annual Yield',
      'CO₂ Offset vs. Grid',
      'Self-Consumption Rate',
    ],
    panelLabels: [
      'Total panels installed',
      'Panel model',
      'Inverter model',
      'Battery storage',
      'Monitoring system',
      'Warranty',
    ],
  },

  timeline: {
    eyebrow: 'Project Delivery',
    title: 'From Contract to Clean Power',
    subtitle:
      'The Sunridge installation completed in 14 weeks — from first site visit to live grid export.',
    phases: [
      {
        phase: 'Phase 1',
        title: 'Site Survey & Design',
        duration: '3 weeks',
        description:
          'Structural analysis, shading studies, energy consumption audit, and custom system design using PVsyst simulation software.',
      },
      {
        phase: 'Phase 2',
        title: 'Permitting & Procurement',
        duration: '6 weeks',
        description:
          'Grid connection agreement, building permits, equipment ordering. SunPower panels and SMA inverters shipped from EU warehouses.',
      },
      {
        phase: 'Phase 3',
        title: 'Structural & Electrical Install',
        duration: '4 weeks',
        description:
          '24 installation engineers mounted 2,400 panels across three rooftops. DC cabling, combiner boxes, and inverter rooms fitted.',
      },
      {
        phase: 'Phase 4',
        title: 'Grid Connection & Testing',
        duration: '1 week',
        description:
          'DNO inspection, protection relay settings, battery commissioning, and full-load system test at 100% output.',
      },
      {
        phase: 'Phase 5',
        title: 'Handover & Monitoring',
        duration: 'Ongoing',
        description:
          'Client training, live monitoring dashboard, 25-year O&M contract activated. System operating at 102% of projected yield in Year 1.',
      },
    ],
  },

  roi: {
    eyebrow: 'Financial Returns',
    title: 'ROI & Long-Term Savings',
    subtitle:
      'Annual savings grow as utility prices rise, while solar generation costs stay flat for 30 years.',
    chartCaption:
      'Annual savings (€k) growing with utility inflation (3% per year assumption)',
    summary: [
      { label: 'Total 30-yr savings', value: '€52M' },
      { label: 'Simple payback period', value: '5.8 yrs' },
      { label: 'IRR', value: '18.4%' },
      { label: 'NPV (10% discount)', value: '€24.3M' },
    ],
  },

  results: {
    eyebrow: 'Measured Outcomes',
    title: 'Year 1 Results',
    subtitle:
      'Independently verified performance data from the first 12 months of operation.',
    cards: [
      {
        label: 'Installed Capacity',
        detail: 'The largest commercial solar installation in the Kyiv region as of 2024.',
      },
      {
        label: 'Annual Savings',
        detail: 'Net savings in Year 1, after accounting for O&M, insurance, and financing costs.',
      },
      {
        label: 'CO₂ Avoided / Year',
        detail: 'Equivalent to removing 184 diesel cars from the road permanently.',
      },
      {
        label: 'Buildings Powered',
        detail:
          'Offices, retail, and logistics units across the entire Sunridge commercial district.',
      },
    ],
  },

  testimonials: {
    eyebrow: 'Client Voices',
    title: 'What the Client Said',
    items: [
      {
        name: 'Olena Kovalenko',
        role: 'Facility Manager, Sunridge Complex',
        text: 'The installation team were exceptional — zero disruption to tenants during a 4-week install. We were live and exporting to the grid 2 days ahead of schedule.',
      },
      {
        name: 'Dmytro Petrenko',
        role: 'CFO, Sunridge Holdings',
        text: 'The financial model was exactly as projected. In Month 1 we saved €98,000 compared to the same period last year. The payback calculation we agreed on at signature is tracking perfectly.',
      },
      {
        name: 'Iryna Savchenko',
        role: 'Head of Sustainability, Sunridge Group',
        text: "We've gone from being a major carbon emitter to a net-positive energy producer. Our ESG report this year will show an 847-tonne CO₂ reduction — a milestone I didn't think we'd reach until 2027.",
      },
    ],
  },

  cta: {
    eyebrow: 'Ready to Start?',
    title: 'Turn your rooftop into a revenue stream',
    subtitle:
      'Get a free feasibility study and financial model for your site. Our engineers will assess your energy profile within 48 hours.',
    btnPrimary: 'Request Free Assessment',
    btnSecondary: 'Schedule a Call',
    note: 'No commitment. Results in 48 hours. Available across Ukraine & EU.',
  },

  footer: {
    logoText: 'EcoEnergy',
    tagline: 'Engineering the clean energy transition — one project at a time.',
    contact: {
      phone: '+38 (044) 123-45-67',
      email: 'info@ecoenergy.ua',
      address: 'Kyiv, Ukraine',
    },
    linkGroups: [
      {
        title: 'Solutions',
        items: ['Solar PV Systems', 'Battery Storage', 'Wind Energy', 'Hybrid Systems'],
      },
      {
        title: 'Company',
        items: ['About EcoEnergy', 'Case Studies', 'Partners', 'Careers'],
      },
    ],
    caseStudyCol: {
      title: 'Case Study',
      desc: "Sunridge Solar Park demonstrates what's achievable when commercial real estate commits to clean energy. Let us show you yours.",
    },
    copyright: (year) => `© ${year} EcoEnergy. All rights reserved.`,
  },
}
